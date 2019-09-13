'use strict';
const Controller = require('egg').Controller;
class VoteController extends Controller {
    async index() {
        const { ctx, service } = this;
        const helper = ctx.helper;
        const isVerify = await helper.verifyToken(ctx);
        if (isVerify) {
            const query = ctx.query;
            const options = {};
            if (query.page) {
                options.page = query.page - 0;
            }
            if (!options.page || options.page <= 0) {
                options.page = 1;
            }
            if (query.pageSize) {
                options.pageSize = query.pageSize - 0;
            }
            if (!options.pageSize || options.pageSize <= 0) {
                options.pageSize = 10;
            }
            options.type = query.type || 'all'
            if (query.actId) {
                options.actId = query.actId
            }
            if (query.playerId) {
                options.playerId = query.playerId
            }
            options.order = query.order || 'createdAt'
            options.orderDir = query.orderDir || 'DESC'
            const data = await service.vote.query(ctx.request.header.uid, options);
            helper.success(ctx, data)
        }
    }
    // 票数统计
    async stat() {
        const { ctx, service } = this;
        const helper = ctx.helper;
        const isVerify = await helper.verifyToken(ctx);
        if (isVerify) {
            const params = ctx.request.body;
            const startTime = params.startTime || '';
            const endTime = params.endTime || '';
            const res = await service.vote.stat(ctx.request.header.uid, startTime, endTime);
            if (res) {
                helper.success(ctx, res);
            } else {
                helper.success(ctx, '', '查询选手统计数据失败!', 501);
            }
        }
    }
    // 订单查询
    async orders() {
        const { ctx, service } = this;
        const helper = ctx.helper;
        const isVerify = await helper.verifyToken(ctx);
        if (isVerify) {
            const params = ctx.request.body;
            const res = await service.vote.orders(ctx.request.header.uid, params);
            if (res) {
                helper.success(ctx, res);
            } else {
                helper.success(ctx, '', '查询订单数据失败!', 501);
            }
        }
    }
    // 今日交易数据 最多100条
    async realtimeOrders () {
        const { ctx, service } = this;
        const helper = ctx.helper;
        const isVerify = await helper.verifyToken(ctx);
        if (isVerify) {
            const res = await service.vote.realtimeOrders(ctx.request.header.uid);
            if (res) {
                helper.success(ctx, res);
            } else {
                helper.success(ctx, '', '查询今日交易数据失败!', 501);
            }
        }
    }
    // 订单/打赏统计
    async statOrders () {
        const { ctx, service } = this;
        const helper = ctx.helper;
        const isVerify = await helper.verifyToken(ctx);
        if (isVerify) {
            const params = ctx.request.body;
            const res = await service.vote.statOrders(ctx.request.header.uid, params);
            if (res) {
                helper.success(ctx, res);
            } else {
                helper.success(ctx, '', '查询打赏数据失败!', 501);
            }
        }
    }
    // 投票统计
    async statVoteByDate () {
        const { ctx, service } = this;
        const helper = ctx.helper;
        const isVerify = await helper.verifyToken(ctx);
        if (isVerify) {
            const params = ctx.request.body;
            const res = await service.vote.statVoteByDate(params.actId, params.playerId, ctx.request.header.uid);
            if (res) {
                helper.success(ctx, res);
            } else {
                helper.success(ctx, '', '查询投票统计数据失败!', 501);
            }
        }
    }
    async create() {
        const { ctx, service } = this;
        const helper = ctx.helper;
        const isVerify = await helper.verifyToken(ctx);
        if (isVerify) {
            const params = ctx.request.body;
            const res = await service.vote.create(params);
            if (res) {
                helper.success(ctx, '');
            } else {
                helper.success(ctx, '', '投票失败!', 501);
            }
        }
    }
}
module.exports = VoteController;
