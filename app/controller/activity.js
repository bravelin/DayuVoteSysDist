'use strict';
const Controller = require('egg').Controller;
class ActivityController extends Controller {
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
            if (query.key) {
                options.key = decodeURIComponent(query.key);
            }
            options.status = query.status || 'all'
            options.order = query.order || 'createdAt'
            options.orderDir = query.orderDir || 'DESC'
            const data = await service.activity.query(ctx.request.header.uid, options);
            helper.success(ctx, data)
        }
    }
    async update() {
        const { ctx, service } = this;
        const helper = ctx.helper;
        const isVerify = await helper.verifyToken(ctx);
        if (isVerify) {
            const querys = ctx.params;
            const params = ctx.request.body;
            const res = await service.activity.update(querys.id, params);
            if (res) {
                helper.success(ctx, '');
            } else {
                helper.success(ctx, '', '未能查询到账号!', 404);
            }
        }
    }
    async copy() {
        const { ctx, service } = this;
        const helper = ctx.helper;
        const isVerify = await helper.verifyToken(ctx);
        if (isVerify) {
            const querys = ctx.params;
            if (querys.id) {
                const res = await service.activity.copy(querys.id);
                if (res) {
                    helper.success(ctx, '');
                } else {
                    helper.success(ctx, '', '操作失败!', 404);
                }
            } else {
                helper.success(ctx, '', '操作失败!', 404);
            }
        }
    }
    async changeStatus() {
        const { ctx, service } = this;
        const helper = ctx.helper;
        const isVerify = await helper.verifyToken(ctx);
        if (isVerify) {
            const params = ctx.request.body;
            if (params.id && params.status) {
                const res = await service.activity.changeStatus(params.id, params.status);
                if (res) {
                    helper.success(ctx, res);
                } else {
                    helper.success(ctx, '', '更改活动状态失败!', 501);
                }
            } else {
                helper.success(ctx, '', 'param missing', 501);
            }
        }
    }
    async switchAutoAdjust () {
        const { ctx, service } = this;
        const helper = ctx.helper;
        const isVerify = await helper.verifyToken(ctx);
        if (isVerify) {
            const params = ctx.request.body;
            if (params.id && params.autoAdjust) {
                const res = await service.activity.switchAutoAdjust(params.id, params.autoAdjust);
                if (res) {
                    helper.success(ctx, res);
                } else {
                    helper.success(ctx, '', '更改活动调票类型失败!', 501);
                }
            } else {
                helper.success(ctx, '', 'param missing', 501);
            }
        }
    }
    async adjustVote () {
        const { ctx, service } = this;
        const helper = ctx.helper;
        const isVerify = await helper.verifyToken(ctx);
        if (isVerify) {
            const params = ctx.request.body;
            if (params.id) {
                const res = await service.activity.adjustVote(params.id);
                if (res) {
                    helper.success(ctx, res);
                } else {
                    helper.success(ctx, '', '调票失败!', 501);
                }
            } else {
                helper.success(ctx, '', 'param missing', 501);
            }
        }
    }
    // 一键改票
    async addAllVote () {
        const { ctx, service } = this;
        const helper = ctx.helper;
        const isVerify = await helper.verifyToken(ctx);
        if (isVerify) {
            const params = ctx.request.body;
            if (params.data) {
                try{
                    const list = JSON.parse(params.data);
                    if (list.length) {
                        const res = await service.activity.addAllVote(list);
                        if (res) {
                            helper.success(ctx, res);
                        } else {
                            helper.success(ctx, '', '操作失败!', 501);
                        }
                    } else {
                        helper.success(ctx, '', 'param error', 501);
                    }
                } catch(e) {
                    helper.success(ctx, '', 'param missing', 501);
                }
            } else {
                helper.success(ctx, '', 'param missing', 501);
            }
        }
    }
    async addPopularity () {
        const { ctx, service } = this;
        const helper = ctx.helper;
        const isVerify = await helper.verifyToken(ctx);
        if (isVerify) {
            const params = ctx.request.body;
            if (params.id && params.num && /^-?\d+$/.test(params.num)) {
                const res = await service.activity.addPopularity(params.id, params.num - 0);
                if (res) {
                    helper.success(ctx, res);
                } else {
                    helper.success(ctx, '', '操作失败!', 501);
                }
            } else {
                helper.success(ctx, '', 'param missing', 501);
            }
        }
    }
    async show() {
        const { ctx, service } = this;
        const helper = ctx.helper;
        const isVerify = await helper.verifyToken(ctx);
        if (isVerify) {
            const querys = ctx.params;
            const res = await service.activity.findActById(querys.id);
            if (res) {
                helper.success(ctx, res);
            } else {
                helper.success(ctx, '', '未能查询到活动!', 404);
            }
        }
    }
    async create() {
        const { ctx, service } = this;
        const helper = ctx.helper;
        const isVerify = await helper.verifyToken(ctx);
        if (isVerify) {
            const params = ctx.request.body;
            const res = await service.activity.create(params);
            if (res) {
                helper.success(ctx, '');
            } else {
                helper.success(ctx, '', '活动创建失败!', 501);
            }
        }
    }
    async stat() {
        const { ctx, service } = this;
        const helper = ctx.helper;
        const isVerify = await helper.verifyToken(ctx);
        if (isVerify) {
            const res = await service.activity.stat(ctx.request.header.uid);
            if (res) {
                helper.success(ctx, res);
            } else {
                helper.success(ctx, '', '查询失败!', 501);
            }
        }
    }
    async destroy() {
        const { ctx, service } = this;
        const helper = ctx.helper;
        const isVerify = await helper.verifyToken(ctx);
        if (isVerify) {
            const params = ctx.params;
        }
    }
}
module.exports = ActivityController;
