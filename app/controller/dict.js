'use strict';
const Controller = require('egg').Controller;
class DictController extends Controller {
    async index() {
        const { ctx, service } = this;
        const helper = ctx.helper;
        const isVerify = await helper.verifyToken(ctx);
        if (isVerify) {
            const data = await service.dict.getAll();
            helper.success(ctx, data);
        }
    }
    async doUpdate() {
        const { ctx, service } = this;
        const helper = ctx.helper;
        const isVerify = await helper.verifyToken(ctx);
        if (isVerify) {
            const params = ctx.request.body;
            const data = await service.dict.doUpdate(params);
            helper.success(ctx, data);
        }
    }
    async upload() {
        const { ctx } = this;
        const query = ctx.query;
        const uid = ctx.request.header.uid || query.uid;
        const helper = ctx.helper;
        const isVerify = await helper.verifyToken(ctx);
        if (isVerify) {
            const res = await ctx.service.dict.upload(uid);
            ctx.body = res;
            ctx.status = 200;
        }
    }
}
module.exports = DictController;
