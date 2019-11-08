'use strict';

const Controller = require('egg').Controller;
const fs = require('fs');
const path = require('path');
const crypto = require('crypto');
const file = path.resolve(__dirname, '../public/admin/index.html');
let pageData = '';
fs.readFile(file, (err, data) => {
    pageData = data;
});

class AdminController extends Controller {
    async index() {
        this.ctx.set('Content-Type', 'text/html');
        this.ctx.body = pageData;
    }
    async login () { // 后台管理用户登录接口
        const { ctx, service, app } = this;
        const params = ctx.request.body;
        // 校验参数
        if (!params.userName || !(params.userName + '').trim()) {
            ctx.helper.success(ctx, '', '登录用户名不能为空!', 501)
            return
        }
        if (!params.password || !(params.password + '').trim()) {
            ctx.helper.success(ctx, '', '登录密码不能为空!', 501)
            return
        }
        const plainPassword = ctx.helper.aesDecrypt(params.password);
        // sha1两次加密
        const hash = crypto.createHash('sha1');
        hash.update(plainPassword);
        hash.update(plainPassword);
        const password = hash.digest('hex');
        console.log('password...', password);
        // 查找
        const findRes = await service.managers.findUser(params.userName, password);
        if (findRes) {
            ctx.helper.success(ctx, {
                user: findRes,
                token: app.jwt.sign({ id: findRes.id }, app.config.jwt.secret, {
                    expiresIn: '12h'
                })
            })
            service.managers.login(findRes);
            service.logs.add(`账号${params.userName}登录系统!`)
        } else {
            ctx.helper.success(ctx, '', '用户名或者密码不存在!', 403);
        }
    }
    // 校验token是否有效
    async verifyToken () {
        const { ctx } = this;
        const helper = ctx.helper;
        const isVerify = await helper.verifyToken(ctx);
        if (isVerify) {
            helper.success(ctx, true);
        }
    }
}

module.exports = AdminController;
