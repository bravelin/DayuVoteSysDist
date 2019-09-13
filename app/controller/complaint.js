'use strict';
const Controller = require('egg').Controller;
class ComplaintController extends Controller {
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
            if (query.actId) {
                options.actId = query.actId;
            }
            options.status = query.status || 'all';
            const data = await service.complaint.query(ctx.request.header.uid, options);
            helper.success(ctx, data);
        }
    }
    async update() {
        const { ctx, service } = this;
        const helper = ctx.helper;
        const isVerify = await helper.verifyToken(ctx);
        if (isVerify) {
            const querys = ctx.params;
            const res = await service.complaint.changeStatus(querys.id, '1');
            if (res) {
                helper.success(ctx, '');
            } else {
                helper.success(ctx, '', '操作失败!', 404);
            }
        }
    }
    async unTreatedCount () {
        const { ctx, service } = this;
        const helper = ctx.helper;
        const isVerify = await helper.verifyToken(ctx);
        if (isVerify) {
            const res = await service.complaint.unTreatedCount(ctx.request.header.uid);
            if (res != null) {
                helper.success(ctx, res);
            } else {
                helper.success(ctx, '', '查询失败!', 404);
            }
        }
    }
}
module.exports = ComplaintController;
