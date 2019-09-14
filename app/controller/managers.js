'use strict';
const Controller = require('egg').Controller;
class ManagersController extends Controller {
    async index() {
        const { ctx, service } = this;
        const helper = ctx.helper;
        const isVerify = await helper.verifyToken(ctx);
        if (isVerify) {
            const data = await service.managers.query(ctx.request.header.uid);
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
            const res = await service.managers.resetPassword(querys.id, params.password);
            if (res) {
                helper.success(ctx, '');
            } else {
                helper.success(ctx, '', '未能查询到账号!', 404);
            }
        }
    }
    async editPassword () {
        const { ctx, service } = this;
        const helper = ctx.helper;
        const isVerify = await helper.verifyToken(ctx);
        if (isVerify) {
            const querys = ctx.params;
            const params = ctx.request.body;
            const res = await service.managers.editPassword(querys.id, params.oldPassword, params.loginPassword);
            if (res == 2) {
                helper.success(ctx, '');
            } else if (res == 0) {
                helper.success(ctx, '', '账号不存在!', 404);
            } else if (res == 1) {
                helper.success(ctx, '', '您输入的旧密码错误!', 501);
            }
        }
    }
    async switchMiniPower () {
        const { ctx, service } = this;
        const helper = ctx.helper;
        const isVerify = await helper.verifyToken(ctx);
        if (isVerify) {
            const querys = ctx.params;
            const params = ctx.request.body;
            if (querys.id && params.miniPower) {
                const res = await service.managers.switchMiniPower(querys.id, params.miniPower);
                helper.success(ctx, res);
            } else {
                helper.success(ctx, false);
            }
        }
    }
    async show() {
        const { ctx, service } = this;
        const helper = ctx.helper;
        const isVerify = await helper.verifyToken(ctx);
        if (isVerify) {
            const querys = ctx.params;
            const res = await service.managers.findUserById(querys.id);
            if (res) {
                helper.success(ctx, res);
            } else {
                helper.success(ctx, '', '未能查询到账号!', 404);
            }
        }
    }
    // 创建账号
    async create() {
        const { ctx, service } = this;
        const helper = ctx.helper;
        const isVerify = await helper.verifyToken(ctx);
        if (isVerify) {
            const params = ctx.request.body;
            // 校验参数
            if (!params.loginName || !(params.loginName + '').trim()) {
                ctx.helper.success(ctx, '', '账号登录名称不能为空!', 501)
                return
            }
            if (!params.realName || !(params.realName + '').trim()) {
                ctx.helper.success(ctx, '', '账号真实名称不能为空!', 501)
                return
            }
            if (!params.loginPassword || !(params.loginPassword + '').trim()) {
                ctx.helper.success(ctx, '', '账号密码不能为空!', 501)
                return
            }
            const res = await service.managers.create(params.loginName, params.realName, params.loginPassword, params.role, params.miniPower || '0', params.pId);
            if (res) {
                helper.success(ctx, '');
            } else {
                helper.success(ctx, '', '已经有相同账号的用户!', 201);
            }
        }
    }
    async destroy() {
        const { ctx, service } = this;
        const helper = ctx.helper;
        const isVerify = await helper.verifyToken(ctx);
        if (isVerify) {
            const params = ctx.params;
            const res = await service.managers.del(params.id);
            if (res) {
                helper.success(ctx, '');
            } else {
                helper.success(ctx, '', '未能查询到账号!', 404);
            }
        }
    }
}
module.exports = ManagersController;
