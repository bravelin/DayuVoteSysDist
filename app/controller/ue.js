'use strict';
const Controller = require('egg').Controller;
class UeController extends Controller {
    async index() {
        const { ctx } = this;
        const query = ctx.query;
        const action = query.action;
        // const uid = ctx.request.header.uid || ctx.query.uid;
        const helper = ctx.helper;
        if (action == 'config') {
            const res = await ctx.service.ue.getConfig();
            ctx.body = res;
            ctx.status = 200;
        } else if (action == 'uploadimage') { // 图片上传
            console.log('upload image...')
            const isVerify = await helper.verifyToken(ctx);
            if (isVerify) {
                const res = await ctx.service.ue.uploadImage();
                console.log('upload img res...', res)
                ctx.body = res;
                ctx.status = 200;
            }
        } else if (action == 'uploadvideo') { // 视频上传
            const isVerify = await helper.verifyToken(ctx);
            if (isVerify) {
                const res = await ctx.service.ue.uploadImage();
                ctx.body = res;
                ctx.status = 200;
            }
        }
    }
}
module.exports = UeController;
