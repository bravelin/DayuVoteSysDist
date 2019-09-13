'use strict';
const Controller = require('egg').Controller;
class PlayerController extends Controller {
    async index() {
        const { ctx, service } = this;
        const helper = ctx.helper;
        const isVerify = await helper.verifyToken(ctx);
        if (isVerify) {
            const query = ctx.query;
            const options = {};
            if (!query.actId) {
                helper.success(ctx, '', '缺少参数!', 501);
                return
            }
            options.actId = query.actId;
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
            // name tel no
            if (query.key0) {
                options.key0 = decodeURIComponent(query.key0);
            }
            if (query.key1) {
                options.key1 = decodeURIComponent(query.key1);
            }
            if (query.key2) {
                options.key2 = decodeURIComponent(query.key2);
            }
            options.status = query.status || 'all'
            // 默认按总票数倒序
            options.order = query.order || 'totalVotes'
            options.orderDir = query.orderDir || 'DESC'
            const data = await service.player.query(options);
            helper.success(ctx, data)
        }
    }
    // 查询待审核的选手总数
    async unAuditCount () {
        const { ctx, service } = this;
        const helper = ctx.helper;
        const isVerify = await helper.verifyToken(ctx);
        if (isVerify) {
            const data = await service.player.unAuditCount(ctx.request.header.uid);
            helper.success(ctx, data);
        }
    }
    // 查询待审核的选手列表
    async unaudits () {
        const { ctx, service } = this;
        const helper = ctx.helper;
        const isVerify = await helper.verifyToken(ctx);
        if (isVerify) {
            const query = ctx.request.body;
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
            // name tel no
            if (query.key) {
                options.key = decodeURIComponent(query.key);
            }
            options.status = query.status || 'all';
            // 默认按总票数倒序
            options.order = query.order || 'totalVotes';
            options.orderDir = query.orderDir || 'DESC';
            const data = await service.player.queryUnaudits(ctx.request.header.uid, options);
            helper.success(ctx, data);
        }
    }
    // 修改选手
    async update() {
        const { ctx, service } = this;
        const helper = ctx.helper;
        const isVerify = await helper.verifyToken(ctx);
        if (isVerify) {
            const querys = ctx.params;
            const params = ctx.request.body;
            const res = await service.player.update(querys.id, params);
            if (res) {
                helper.success(ctx, '');
            } else {
                helper.success(ctx, '', '未能查询到选手!', 404);
            }
        }
    }
    // 查询选手详情
    async show() {
        const { ctx, service } = this;
        const helper = ctx.helper;
        const isVerify = await helper.verifyToken(ctx);
        if (isVerify) {
            const querys = ctx.params;
            const res = await service.player.findPlayerById(querys.id);
            if (res) {
                helper.success(ctx, res);
            } else {
                helper.success(ctx, '', '未能查询到选手!', 404);
            }
        }
    }
    // 管理员调票
    async addSysVote() {
        const { ctx, service } = this;
        const helper = ctx.helper;
        const isVerify = await helper.verifyToken(ctx);
        if (isVerify) {
            const params = ctx.request.body;
            if (params.playerId && params.count) {
                const res = await service.player.addSysVote(params);
                if (res) {
                    helper.success(ctx, true);
                } else {
                    helper.success(ctx, false, '调票失败!', 501);
                }
            } else {
                helper.success(ctx, '', '缺少参数!', 501);
            }
        }
    }
    // 添加选手
    async create() {
        const { ctx, service } = this;
        const helper = ctx.helper;
        const isVerify = await helper.verifyToken(ctx);
        if (isVerify) {
            const params = ctx.request.body;
            const res = await service.player.create(params);
            if (res) {
                helper.success(ctx, '');
            } else {
                helper.success(ctx, '', '选手添加失败!', 501);
            }
        }
    }
    // 删除选手
    async destroy() {
        const { ctx, service } = this;
        const helper = ctx.helper;
        const isVerify = await helper.verifyToken(ctx);
        if (isVerify) {
            const params = ctx.params;
            const res = await service.player.del(params.id);
            if (res) {
                helper.success(ctx, '');
            } else {
                helper.success(ctx, '', '选手删除失败!', 501);
            }
        }
    }
    // 设为今日之星
    async star() {
        const { ctx, service } = this;
        const helper = ctx.helper;
        const isVerify = await helper.verifyToken(ctx);
        if (isVerify) {
            const params = ctx.request.body;
            const res = await service.player.star(params.id);
            if (res) {
                helper.success(ctx, '');
            } else {
                helper.success(ctx, '', '操作失败!', 501);
            }
        }
    }
    async changeAllStatus() {
        const { ctx, service } = this;
        const helper = ctx.helper;
        const isVerify = await helper.verifyToken(ctx);
        if (isVerify) {
            const params = ctx.request.body;
            if (params.ids && params.status) {
                const ids = JSON.parse(params.ids);
                for (let i = 0; i < ids.length; i++) {
                    await service.player.changeStatus(ids[i], params.status);
                }
                helper.success(ctx, true);
            } else {
                helper.success(ctx, '', '修改选手状态失败!', 501);
            }
        }
    }
    // 导入
    async import () {
        const { ctx } = this;
        const query = ctx.query;
        const uid = ctx.request.header.uid || query.uid;
        const actId = query.actId;
        const helper = ctx.helper;
        const isVerify = await helper.verifyToken(ctx);
        if (isVerify) {
            if (!actId) {
                helper.success(ctx, '', '导入选手失败!', 501);
            } else {
                const res = await ctx.service.player.import(uid, actId);
                helper.success(ctx, res);
            }
        }
    }
    // 导出
    async export () {
        const { ctx, service } = this;
        const helper = ctx.helper;
        const isVerify = await helper.verifyToken(ctx);
        if (isVerify) {
            const params = ctx.query;
            if (params.actId && params.actName) {
                await service.player.export(params.actId, decodeURIComponent(params.actName));
            } else {
                helper.success(ctx, '', '导出选手失败!', 501);
            }
        }
    }
    // 更改选手状态
    async changeStatus() {
        const { ctx, service } = this;
        const helper = ctx.helper;
        const isVerify = await helper.verifyToken(ctx);
        if (isVerify) {
            const params = ctx.request.body;
            const res = await service.player.changeStatus(params.id, params.status);
            if (res) {
                helper.success(ctx, '');
            } else {
                helper.success(ctx, '', '修改选手状态失败!', 501);
            }
        }
    }
    // 更新选手的备注
    async updateRemark () {
        const { ctx, service } = this;
        const helper = ctx.helper;
        const isVerify = await helper.verifyToken(ctx);
        if (isVerify) {
            const params = ctx.request.body;
            if (params.id && params.remark != undefined) {
                const res = await service.player.updateRemark(params.id, params.remark);
                if (res) {
                    helper.success(ctx, '');
                } else {
                    helper.success(ctx, '', '修改选手状态失败!', 501);
                }
            } else {
                helper.success(ctx, '', 'param missing!', 501);
            }
        }
    }
    // 选手统计
    async count() {
        const { ctx, service } = this;
        const helper = ctx.helper;
        const isVerify = await helper.verifyToken(ctx);
        if (isVerify) {
            const res = await service.player.count(ctx.request.header.uid);
            if (res) {
                helper.success(ctx, res);
            } else {
                helper.success(ctx, '', '查询选手统计数据失败!', 501);
            }
        }
    }
}
module.exports = PlayerController;
