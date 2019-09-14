'use strict';
const Controller = require('egg').Controller;
const sha1 = require('sha1');
const wxCrypto = require('../util/wxCrypto');
class WxController extends Controller {
    // 接入验证
    async validate() {
        const { ctx } = this;
        const query = ctx.query;
        const signature = query.signature || '';
        const nonce = query.nonce || '';
        const timestamp = query.timestamp || '';
        const echostr = query.echostr || '';

        const config = ctx.app.config.wx;
        const token = config.token;
        const str = [token, timestamp, nonce].sort().join('');
        const sha = sha1(str);
        const res = (sha === signature ? echostr + '' : 'failed');
        ctx.body = res;
    }
    // 推送事件处理
    async index () {
        const { ctx } = this;
        const query = ctx.query;
        const message = ctx.req.body;
        console.log('收到微信的post请求=====');
        console.log('query:', query);
        console.log('message:', message);
        if (message) {
            if (message.trade_type == 'JSAPI') { // 微信支付的回调
                console.log('微信支付的回调=====================')
                return await ctx.service.wx.doAfterPay(message);
            } else {
                const messageType = message.MsgType;
                if (messageType == 'event') {
                    if (message.Event == 'subscribe') { // 订阅事件
                        const msg = {
                            toUserName: message.FromUserName,
                            fromUserName: message.ToUserName,
                            msgType: 'text',
                            msgId: message.MsgId,
                            content: '你好'
                        };
                        const backMessage = wxCrypto.encryptMsg(ctx, msg);
                        ctx.body = backMessage;
                        return;
                    }
                } else if (messageType == 'text') { // 文本消息
                    const msg = {
                        toUserName: message.FromUserName,
                        fromUserName: message.ToUserName,
                        msgType: message.MsgType,
                        msgId: message.MsgId,
                        content: '其实我不懂你说什么'
                    };
                    const backMessage = wxCrypto.encryptMsg(ctx, msg);
                    ctx.body = backMessage;
                    return;
                } else if (messageType == 'image') {
                    const msg = {
                        toUserName: message.FromUserName,
                        fromUserName: message.ToUserName,
                        msgType: 'text',
                        msgId: message.MsgId,
                        content: '你发的图片俺看不懂'
                    };
                    const backMessage = wxCrypto.encryptMsg(ctx, msg);
                    ctx.body = backMessage;
                    return;
                }
            }
        }
        ctx.body = 'success';
    }
}
module.exports = WxController;
