'use strict';
const Service = require('egg').Service;
const wxSign = require('../util/wxSign');
const uuidv1 = require("uuid/v1");
const crypto = require('crypto');
const xml2js = require('xml2js');

function generateUUID() {
    return uuidv1().replace(/-/g, "");
}

class WxService extends Service {
    // 从数据库中取出AccessToken
    async getAccessTokenFromDB () {
        const ctx = this.ctx;
        const dict = await ctx.model.Dict.findByPk('00006');
        // const dictValue = ctx.app.dict.wxAccessToken;
        if (dict && dict.dictValue) {
            const obj = JSON.parse(dict.dictValue);
            console.log('from db:', obj);
            return obj;
        }
        return null;
    }
    // 获取微信的AccessToken
    async getAccessToken () {
        const ctx = this.ctx;
        const app = ctx.app;
        // 从数据库中取出来看下是否过期
        const lastAccessToken = await this.getAccessTokenFromDB();
        // 未过期
        if (lastAccessToken && lastAccessToken.token && lastAccessToken.expire && (+ new Date()) < lastAccessToken.expire) {
            app.wxAccessToken = lastAccessToken.token;
            app.wxJsApiTicket = lastAccessToken.ticket;
            return;
        }
        // 已过期,重新获取
        this.doGetAccessToken();
    }
    // do getAccessToken
    async doGetAccessToken () {
        const ctx = this.ctx;
        const app = ctx.app;
        const config = app.config.wx;
        if (app.isInGetWxAccessToken) { // 防止并发获取微信的AccessToken
            return;
        }
        app.isInGetWxAccessToken = true;
        // 重新获取
        const appId = config.appId;
        const appSecret = config.appSecret;
        const url = `https://api.weixin.qq.com/cgi-bin/token?grant_type=client_credential&appid=${appId}&secret=${appSecret}`;
        const res = await ctx.curl(url, {
            dataType: 'json'
        });
        // console.log('getAccessToken:', res);
        const resData = res.data;
        if (resData.errcode && resData.errmsg) {
            // console.log('get wx access token error....')
            return;
        }
        // console.log(resData);
        app.wxAccessToken = resData.access_token || '';
        // ====== 依据wxAccessToken获取JsApiTicket
        app.wxJsApiTicket = await this.getJsApiTicket();
        // 保存到数据库dict中
        const dictWxAccessToken = {
            token: app.wxAccessToken, ticket: app.wxJsApiTicket, expire: (new Date()).getTime() + 5400000 // 1.5h
        };
        const dict = await ctx.model.Dict.findByPk('00006');
        if (dict) {
            await dict.update({ dictValue: JSON.stringify(dictWxAccessToken) });
        }
        app.isInGetWxAccessToken = false;
    }
    // 获取JsApiTicket
    async getJsApiTicket () {
        const ctx = this.ctx;
        const app = ctx.app;
        // console.log('获取JsApiTicket......');
        const url = `https://api.weixin.qq.com/cgi-bin/ticket/getticket?access_token=${app.wxAccessToken}&type=jsapi`;
        const res = await ctx.curl(url, {
            dataType: 'json'
        });
        const resData = res.data;
        // console.log('ticket res...', resData);
        if (resData.ticket && resData.errmsg == 'ok') {
            return resData.ticket;
        } else {
            return '';
        }
    }
    async getSignnature (url) {
        const ctx = this.ctx;
        const app = ctx.app;
        let signatureStr = null
        try {
            signatureStr = wxSign.sign(app.wxJsApiTicket, url);
            signatureStr.appId = app.config.wx.appId;
        } catch (e) {
            console.log('error...', e)
        }
        return signatureStr;
    }
    // 通过授权码code获取用户的access_token和openid
    async getUserInfo (code) {
        // console.log('通过授权码code获取用户的access_token和openid========', code);
        const { ctx, service } = this;
        const app = ctx.app;
        const config = app.config.wx;
        const appId = config.appId;
        const appSecret = config.appSecret;
        const url = `https://api.weixin.qq.com/sns/oauth2/access_token?appid=${appId}&secret=${appSecret}&code=${code}&grant_type=authorization_code`;
        // console.log('wx get openid url:=====', url);
        const res = await ctx.curl(url, {
            dataType: 'json'
        });
        // console.log('res:', res.data);
        const resData = res.data;
        if (resData.errcode) {
            return resData;
        }
        const openId = resData.openid;
        // 查找数据库中是否已经有此用户
        const user = await service.user.findByOpenId(openId);
        if (!user) { // 创建新用户
            // console.log('创建新用户....')
            return await service.user.create(resData);
        } else {
            // console.log('查找到老用户....', user);
            return user;
        }
    }
    // 预支付处理
    async getPrePayId (playerId, totalFee, userId, openId) {
        const ctx = this.ctx;
        const app = ctx.app;
        const config = app.config.wx;
        // 通过playerId查寻出player
        const player = await ctx.model.Player.findByPk(playerId)
        if (!player) {
            return {
                code: 501, message: '系统未能查找到此选手!'
            }
        }
        const tradeId = generateUUID(); // 商户订单号
        const nowTime = new Date();
        const timeStart = ctx.helper.formatTime(new Date(), 'yyyyMMddhhmmss');
        const timeExpire = ctx.helper.formatTime(new Date(nowTime.getTime() + 2 * 60 * 60 * 1000), 'yyyyMMddhhmmss');
        const clientIp = ctx.req.headers['x-forwarded-for'] || ctx.req.connection.remoteAddress;
        // 微信接口请求参数
        const params = {
            'appid': config.appId,
            'mch_id': config.mchId,
            'device_info': 'WEB',
            'nonce_str': Math.random().toString(36).substr(2, 15),
            'body': `投票系统-钻石票购买`,
            'out_trade_no': tradeId,
            'total_fee': totalFee,
            'spbill_create_ip': clientIp,
            'time_start': timeStart,
            'time_expire': timeExpire,
            'notify_url': config.notifyUrl,
            'trade_type': 'JSAPI',
            'openid': openId
        };
        console.log('微信预支付接口请求参数...');
        console.log(params);
        // 签名sign
        const keys = Object.keys(params).sort();
        const strArr = keys.map(key => key + '=' + params[key]);
        strArr.push(`key=${config.mchSecret}`)
        const str = strArr.join('&');
        console.log('str...', str);
        params.sign = crypto.createHash('md5').update(str, 'utf-8').digest('hex').toUpperCase();
        console.log('微信预支付接口请求参数sign...', params.sign);
        const xmlArr = Object.keys(params).map(key => {
            if (key == 'body') {
                return `<${key}><![CDATA[${params[key]}]]></${key}>`
            } else {
                return `<${key}>${params[key]}</${key}>`
            }
        });
        const xml = `<xml>${xmlArr.join('')}</xml>`;
        console.log('xml...', xml);
        const res = await ctx.curl('https://api.mch.weixin.qq.com/pay/unifiedorder', {
            method: 'POST',
            headers: {
                'content-type': 'text/html'
            },
            content: xml
        });
        console.log('预支付调用res....')
        if (res.status == 200) {
            console.log('to parse xml...', res.data.toString('utf-8'))
            const parsePromise = new Promise((resolve, reject) => {
                xml2js.parseString(res.data.toString('utf-8'), { explicitArray: false }, (err, json) => {
                    if (json) {
                        resolve(json)
                    } else {
                        reject(err)
                    }
                })
            });
            const json = await parsePromise;
            if (json && json.xml) {
                const parseResult = json.xml;
                if (parseResult.return_code == 'FAIL') {
                    return { code: 501, message: parseResult.return_msg }
                } else if (parseResult.result_code == 'FAIL') {
                    return { code: 501, message: parseResult.err_code_des }
                } else { // 返回成功
                    const { prepay_id, trade_type, sign, nonce_str, mch_id, appid } = parseResult;
                    // 生成一条订单至数据库
                    const voteCount = parseInt((totalFee/100) * ctx.app.dict.rewardRatio);
                    // const ipPlaceObj = await ctx.service.sys.getIpPlaceOwnership(clientIp);
                    // console.log('交易记录对应的 ip归属地...', clientIp, ipPlaceObj);
                    let ipPlace = '';
                    // if (ipPlaceObj) {
                    //     ipPlace = (ipPlaceObj.province == ipPlaceObj.city ? ipPlaceObj.city : ipPlaceObj.province + ipPlaceObj.city) + ipPlaceObj.area
                    // }
                    console.log('ipPlace...', ipPlace);
                    const thisOrder = await ctx.model.Trade.create({
                        id: tradeId,
                        userId,
                        prePayId: prepay_id,
                        totalFee,
                        voteCount,
                        ip: clientIp,
                        place: ipPlace,
                        timeStart,
                        timeExpire,
                        actId: player.actId,
                        playerId,
                        status: '0', // 未支付
                        p0: player.p0,
                        p1: player.p1,
                        createUserId: player.createUserId
                    });
                    await ctx.service.io.send(thisOrder, 'RealtimeOrdersChange');
                    const timeStamp = parseInt(new Date().getTime() / 1000) + '';
                    const payPackage = `prepay_id=${prepay_id}`;
                    // 返回参数重新进行签名
                    const retObj = {
                        appId: appid,
                        timeStamp,
                        nonceStr: nonce_str,
                        package: payPackage,
                        signType: 'MD5'
                    };
                    console.log('retObj...')
                    console.log(retObj)
                    const retObjKeys = Object.keys(retObj).sort();
                    const retStrArr = retObjKeys.map(key => key + '=' + retObj[key]);
                    retStrArr.push(`key=${config.mchSecret}`)
                    const retStr = retStrArr.join('&');
                    console.log('retStr...')
                    console.log(retStr)
                    retObj.paySign = crypto.createHash('md5').update(retStr, 'utf-8').digest('hex').toUpperCase();
                    retObj.orderId = tradeId;
                    console.log('paySign...', retObj.paySign)
                    return {
                        code: 200,
                        message: '预支付请求成功!',
                        data: retObj
                    }
                }
            } else {
                return {
                    code: 501, message: '解析微信预支付结果失败!'
                }
            }
        } else {
            return {
                code: 501, message: '微信预支付请求失败!'
            }
        }
    }
    // 处理支付成功回调
    async doAfterPay (options) {
        const ctx = this.ctx;
        const app = ctx.app;
        console.log('doAfterPay.....', options)
        if (options.result_code == 'SUCCESS' && options.return_code == 'SUCCESS') {
            const timeEnd = options.time_end;
            const transactionId = options.transaction_id;
            const orderId = options.out_trade_no;
            const order = await ctx.model.Trade.findByPk(orderId);
            if (order) {
                console.log('update order....', order.id, orderId)
                await order.update({ timeEnd, transactionId, status: '1' });
                // 增加一条投票记录
                await ctx.model.Vote.create({
                    actId: order.actId,
                    playerId: order.playerId,
                    voter: order.userId,
                    type: '2',
                    voteNum: order.voteCount,
                    diamondAmount: order.totalFee,
                    createUserId: order.createUserId,
                    p0: order.p0,
                    p1: order.p1
                });
                // 该选手总票数+voteCount, 钻石票+voteCount 礼金加totalFee
                const player = await ctx.model.Player.findByPk(order.playerId);
                if (player) {
                    await player.update({ totalVotes: player.totalVotes + order.voteCount, cashGift: player.cashGift + order.totalFee, diamondVotes: player.diamondVotes + order.voteCount });
                    console.log('player + ', order.voteCount);
                }
                // 该活动的票数+1, 金额+totalFee
                const act = await ctx.model.Activity.findByPk(order.actId);
                if (act) {
                    await act.update({ voteCount: act.voteCount + order.voteCount , popularity: act.popularity + 1.5 * order.voteCount, moneyCount: act.moneyCount + order.totalFee });
                    console.log('act + ', order.voteCount);
                }
                await ctx.service.io.send(order, 'RealtimeOrdersChange');
            }
            ctx.body = `<xml>
                            <return_code><![CDATA[SUCCESS]]></return_code>
                            <return_msg><![CDATA[OK]]></return_msg>
                        </xml>`;
            console.log('success reply wx...........')
        }
    }
    // 关闭订单
    async closeOrder (orderId) {
        console.log('关闭订单....', orderId)
        const ctx = this.ctx;
        const app = ctx.app;
        const config = app.config.wx;
        const options = {
            appid: config.appId,
            mch_id: config.mchId,
            out_trade_no: orderId,
            nonce_str: Math.random().toString(36).substr(2, 15)
        };
        const objKeys = Object.keys(options).sort();
        const strArr = objKeys.map(key => key + '=' + options[key]);
        strArr.push(`key=${config.mchSecret}`)
        const str = strArr.join('&');
        console.log('str...')
        console.log(str)
        options.sign = crypto.createHash('md5').update(str, 'utf-8').digest('hex').toUpperCase();
        const xmlArr = Object.keys(options).map(key => {
            return `<${key}>${params[key]}</${key}>`
        });
        const xml = `<xml>${xmlArr.join('')}</xml>`;
        console.log('xml...', xml);
        const res = await ctx.curl('https://api.mch.weixin.qq.com/pay/closeorder', {
            method: 'POST',
            headers: {
                'content-type': 'text/html'
            },
            content: xml
        });
        if (res.status == 200) {
            console.log('to parse xml...', res.data.toString('utf-8'))
            const parsePromise = new Promise((resolve, reject) => {
                xml2js.parseString(res.data.toString('utf-8'), { explicitArray: false }, (err, json) => {
                    if (json) {
                        resolve(json)
                    } else {
                        reject(err)
                    }
                })
            });
            const json = await parsePromise;
            if (json && json.xml) {
                const parseResult = json.xml;
                console.log('返回结果...', parseResult)
                if (parseResult.return_code == 'SUCCESS' && parseResult.result_code == 'SUCCESS') {
                    console.log('可以关单了....')
                    if (order) {
                        await order.update({ status: '3' });
                    }
                }
            }
            return 'ok'
        } else {
            return 'error'
        }
    }
    // 取消订单
    async cancelOrder (orderId) {
        const ctx = this.ctx;
        console.log('取消订单....', orderId);
        const order = await ctx.model.Trade.findByPk(orderId);
        if (order) {
            console.log('cancel order....', orderId)
            await order.update({ status: '5', timeEnd: ctx.helper.formatTime(new Date(), 'yyyyMMddhhmmss') });
            await ctx.service.io.send(order, 'RealtimeOrdersChange');
            if ((new Date()).getTime() - order.createdAt.getTime() > 5 * 60 * 1000) {
                // 调用微信关单接口
                console.log('调用微信关单接口....')
                await this.closeOrder(orderId);
            } else {
                // 将状态改为'可取消--5'
                return 'ok'
            }
        } else {
            return 'cannot find order...'
        }
    }
}
module.exports = WxService;
