'use strict';
const Controller = require('egg').Controller;
class ClientController extends Controller {
    async index() { // 如果没有传ID,则新生成一个User并返回,如果传了ID,则从数据库查出这个User并返回
        const { ctx, service, app } = this;
        const helper = ctx.helper;
        const querys = ctx.query;
        let user = null;
        if (querys.code) {
            user = await service.wx.getUserInfo(querys.code);
            if (!user.id) { // 未能获取用户信息
                // console.log('未能获取用户信息....')
                helper.success(ctx, user, '未能获取用户信息!');
                return
            }
        } else {
            user = await service.user.getById(querys.userId);
            if (!user.ip) {
                await service.user.updateUserInfo(user);
            }
        }
        // 增加token
        if (user.id) { // 过滤掉不需要的字段
            const obj = {
                id: user.id, openId: user.openId, nickName: user.nickName
            }
            user = obj;
        }
        helper.success(ctx, {
            user,
            token: app.jwt.sign({ id: user.id }, app.config.jwt.secret2, {
                expiresIn: '12h'
            })
        });
    }
    async getAct() {
        const { ctx, service } = this;
        const helper = ctx.helper;
        const querys = ctx.params;
        const actId = querys.id;
        if (actId) {
            const res = await service.activity.findActById(actId, true);
            if (res) {
                helper.success(ctx, res);
            } else {
                helper.success(ctx, '', '缺少查询参数!', 404);
            }
        } else {
            helper.success(ctx, '', '缺少查询参数!', 404);
        }
    }
    // 查询选手详情
    async getPlayer () {
        const { ctx, service } = this;
        const helper = ctx.helper;
        const params = ctx.params;
        const playerId = params.id;
        if (playerId) {
            const res = await service.player.findPlayerById(playerId);
            if (res) {
                helper.success(ctx, res);
            } else {
                helper.success(ctx, '', '缺少查询参数!', 404);
            }
        } else {
            helper.success(ctx, '', '缺少查询参数!', 404);
        }
    }
    // 查询活动下的选手列表
    async getPlayers() {
        const { ctx, service } = this;
        const helper = ctx.helper;
        const params = ctx.params;
        const querys = ctx.query;
        const actId = params.id;
        if (actId) {
            querys.actId = actId;
            querys.pageSize = parseInt(querys.pageSize || 15);
            querys.page = parseInt(querys.page || 0);
            querys.key = querys.key ? decodeURIComponent(querys.key) : '';
            const res = await service.player.clientQuery(querys);
            if (res) {
                helper.success(ctx, res);
            } else {
                helper.success(ctx, '', '缺少查询参数!', 404);
            }
        } else {
            helper.success(ctx, '', '缺少查询参数!', 404);
        }
    }
    // 用户报名参加
    async sign () {
        const { ctx, service } = this;
        const helper = ctx.helper;
        const isVerify = await helper.verifyToken(ctx);
        if (isVerify) {
            const params = ctx.request.body;
            const res = await service.player.sign(params);
            if (res) {
                helper.success(ctx, res);
            } else {
                helper.success(ctx, '', '报名失败失败!', 501);
            }
        }
    }
    // 语音合成
    async tts () {
        const { ctx, service } = this;
        const params = ctx.query;
        if (!params.text) {
            return helper.success(ctx, null, '缺少查询参数!', 501);
        }
        const result = await service.sys.tts(params.text);
        ctx.status = result.status;
        ctx.set(result.headers);
        ctx.body = result.data;
    }
    // 投票
    async vote () {
        const { ctx, service } = this;
        const helper = ctx.helper;
        const isVerify = await helper.verifyToken(ctx);
        if (isVerify) {
            const params = ctx.request.body;
            if (!params.actId || !params.userId || !params.playerId) {
                return helper.success(ctx, {
                    result: false,
                    again: false,
                    againMessage: ''
                }, '缺少查询参数!');
            }
            const res = await service.vote.doVote(params);
            // console.log('==================can vote result:', res);
            helper.success(ctx, res.data, res.message);
        }
    }
    // 判定用户是否可以投票
    async canVote () {
        const { ctx, service } = this;
        const helper = ctx.helper;
        const isVerify = await helper.verifyToken(ctx);
        if (isVerify) {
            const params = ctx.request.body;
            if (!params.actId || !params.userId || !params.playerId) {
                return helper.success(ctx, {
                    result: false,
                    message: '缺少查询参数!'
                });
            }
            const res = await service.vote.canVote(params);
            // console.log('==================can vote result:', res);
            if (res) {
                helper.success(ctx, res);
            } else {
                helper.success(ctx, {
                    result: false,
                    message: '服务端判定出错!'
                });
            }
        }
    }
    // 查询用户是否已经报名了
    async isSigned () {
        const { ctx, service } = this;
        const helper = ctx.helper;
        const isVerify = await helper.verifyToken(ctx);
        if (isVerify) {
            const params = ctx.request.body;
            const uid = ctx.request.header.uid || ctx.query.uid;
            if (params.actId && uid) {
                const res = await service.player.isSigned(uid, params.actId);
                helper.success(ctx, res);
            } else {
                helper.success(ctx, false);
            }
        }
    }
    // 获取分享接口的配置
    async wxSign () {
        const { ctx, service } = this;
        const helper = ctx.helper;
        const isVerify = await helper.verifyToken(ctx);
        if (isVerify) {
            const params = ctx.request.body;
            if (!params.url) {
                helper.success(ctx, '', '缺少参数!', 501);
            } else {
                const data = await service.wx.getSignnature(params.url);
                helper.success(ctx, data);
            }
        }
    }
    // 是否已经提交过投诉
    async submitComplaint () {
        const { ctx, service } = this;
        const helper = ctx.helper;
        const isVerify = await helper.verifyToken(ctx);
        if (isVerify) {
            const params = ctx.request.body;
            if (!params.userId || !params.actId) {
                helper.success(ctx, '', '缺少参数!', 501);
            } else {
                const data = await service.complaint.isSubmit(params);
                helper.success(ctx, !!data.res, data.message);
            }
        }
    }
    // 投诉
    async complaint () {
        const { ctx, service } = this;
        const helper = ctx.helper;
        const isVerify = await helper.verifyToken(ctx);
        if (isVerify) {
            const params = ctx.request.body;
            if (!params.name || !params.content || !params.userId || !params.actId) {
                helper.success(ctx, '', '缺少参数!', 501);
            } else {
                const data = await service.complaint.create(params);
                helper.success(ctx, data);
            }
        }
    }
    // 返回系统配置的打赏金额以及比率
    async getRewardList () {
        const { ctx } = this;
        const appDict = ctx.app.dict;
        ctx.helper.success(ctx, {
            rewardRatio: appDict.rewardRatio, rewardList: appDict.rewardList
        });
    }
    // 判定是否可以选手是否可以打赏
    async canReward () {
        const { ctx, service } = this;
        const helper = ctx.helper;
        const params = ctx.params;
        const playerId = params.playerId;
        const actId = params.actId;
        if (playerId && actId) {
            const res = await service.player.canReward(actId, playerId);
            helper.success(ctx, res.result, res.message);
        } else {
            helper.success(ctx, '', '缺少查询参数!', 404);
        }
    }
    // 获取用户预支付参数
    async prepay () {
        const { ctx, service } = this;
        const helper = ctx.helper;
        const isVerify = await helper.verifyToken(ctx);
        if (isVerify) {
            const params = ctx.request.body;
            if (!params.openId || !params.userId || !params.playerId || !params.totalFee) {
                helper.success(ctx, '', '缺少参数!', 501);
            } else {
                const res = await service.wx.getPrePayId(params.playerId, params.totalFee, params.userId, params.openId);
                helper.success(ctx, res.data || '', res.message, res.code);
            }
        }
    }
    // 取消订单
    async cancelOrder () {
        const { ctx, service } = this;
        const helper = ctx.helper;
        const isVerify = await helper.verifyToken(ctx);
        if (isVerify) {
            const params = ctx.request.body;
            if (!params.id) {
                helper.success(ctx, '', '缺少参数!', 501);
            } else {
                const res = await service.wx.cancelOrder(params.id);
                helper.success(ctx, res);
            }
        }
    }
}
module.exports = ClientController;
