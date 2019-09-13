'use strict';
const Controller = require('egg').Controller;
class VisitController extends Controller {
    async create() {
        const { ctx, service } = this;
        const helper = ctx.helper;
        const params = ctx.request.body;
        const res = await service.visit.create(params);
        if (res) {
            helper.success(ctx, '');
        } else {
            helper.success(ctx, '', '记录失败!', 501);
        }
    }
    // 访问统计
    async statVisitByDate () {
        const { ctx, service } = this;
        const helper = ctx.helper;
        const isVerify = await helper.verifyToken(ctx);
        if (isVerify) {
            const params = ctx.request.body;
            const res = await service.visit.statVisitByDate(params.actId, params.playerId, ctx.request.header.uid);
            if (res) {
                helper.success(ctx, res);
            } else {
                helper.success(ctx, '', '查询访问统计数据失败!', 501);
            }
        }
    }
}
module.exports = VisitController;
