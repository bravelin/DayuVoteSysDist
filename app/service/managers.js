'use strict';
const crypto = require('crypto');
const Service = require('egg').Service;

class ManagersService extends Service {
    // 查询该账号下的子账号
    async query(userId) {
        const ctx = this.ctx;
        const Op = ctx.app.Sequelize.Op;
        const resData = await ctx.model.Manager.findAll({
            attributes: { exclude: ['loginPassword'] },
            where: {
                [Op.or]: [{ p0: userId }, { p1: userId }]
            },
            order: [['role', 'ASC'], ['createdAt', 'DESC']]
        });
        return resData;
    }
    // 查找用户
    async findUser (loginName, loginPassword) {
        const ctx = this.ctx;
        const resData = await ctx.model.Manager.findOne({
            attributes: { exclude: ['loginPassword'] },
            where: { loginName, loginPassword }
        });
        return resData;
    }
    // 查找用户
    async findUserById (id) {
        const ctx = this.ctx;
        const resData = await ctx.model.Manager.findByPk(id, {
            attributes: { exclude: ['loginPassword'] }
        });
        return resData;
    }
    async findSuperAdministrator () {
        const ctx = this.ctx;
        const Op = ctx.app.Sequelize.Op;
        const resData = await ctx.model.Manager.findOne({
            where: {
                [Op.and]: [{ p0: { [Op.eq]: null } }, { p1: { [Op.eq]: null } }]
            }
        });
        return resData;
    }
    // 创建账号
    async create (loginName, realName, password, role, miniPower) {
        const ctx = this.ctx;
        const resData = await ctx.model.Manager.findOne({
            where: { loginName }
        });
        if (resData) { // 已存在相同登录账号的用户
            return false;
        } else {
            role = role - 0
            let p0 = null
            let p1 = null
            const creatorId = ctx.request.header.uid;
            if (role == 1) {
                p0 = creatorId;
            } else {
                const superManager = await this.findSuperAdministrator();
                p0 = superManager.id;
                p1 = creatorId;
            }
            const plainPassword = ctx.helper.aesDecrypt(password);
            const hash = crypto.createHash('sha1');
            hash.update(plainPassword);
            hash.update(plainPassword);
            const loginPassword = hash.digest('hex');
            await ctx.model.Manager.create({ loginName, realName, loginPassword, role, p0, p1, miniPower });
            ctx.service.logs.add(`创建${role == 1 ? '一' : '二'}级管理员账号:${loginName}[${realName}]`);
            return true;
        }
    }
    // 删除用户
    async del (id) {
        const ctx = this.ctx;
        const manager = await this.findUserById(id);
        if (!manager) {
            return false;
        }
        await manager.destroy();
        ctx.service.logs.add(`删除账号${manager.loginName}[id为${id}]`)
        return true;
    }
    // 修改密码
    async editPassword (id, oldPw, newPw) {
        const ctx = this.ctx;
        const manager = await ctx.model.Manager.findByPk(id);
        if (!manager) {
            return 0;
        }
        const plainPassword = ctx.helper.aesDecrypt(oldPw);
        const hash = crypto.createHash('sha1');
        hash.update(plainPassword);
        hash.update(plainPassword);
        const password = hash.digest('hex');
        if (password != manager.loginPassword) {
            return 1;
        } else {
            const plainNewPassword = ctx.helper.aesDecrypt(newPw);
            const newHash = crypto.createHash('sha1');
            newHash.update(plainNewPassword);
            newHash.update(plainNewPassword);
            const newPassword = newHash.digest('hex');
            await manager.update({ loginPassword: newPassword });
            ctx.service.logs.add(`修改用户${manager.loginName}[id为${id}]的密码`);
            return 2
        }
    }
    // 重置密码
    async resetPassword (id, pw) {
        const manager = await this.findUserById(id);
        if (!manager) {
            return false;
        }
        const ctx = this.ctx;
        const plainPassword = ctx.helper.aesDecrypt(pw);
        const hash = crypto.createHash('sha1');
        hash.update(plainPassword);
        hash.update(plainPassword);
        const password = hash.digest('hex');
        await manager.update({ loginPassword: password });
        ctx.service.logs.add(`重置用户${manager.loginName}[id为${id}]的密码`)
        return true;
    }
    async switchMiniPower (id, miniPower) {
        const manager = await this.findUserById(id);
        if (!manager) {
            return false;
        }
        const ctx = this.ctx;
        await manager.update({ miniPower });
        return true;
    }
    // 记录登录时间
    async login (manager) {
        await manager.update({ lastLoginTime: new Date() });
    }
    // 校验token
    async verifyToken (data) {
        const { app } = this
        return new Promise((resolve, reject) => {
            app.jwt.verify(data, app.config.jwt.secret, (err, decoded) => {
                const res = {}
                if (err) {
                    res.verify = false;
                    res.message = err.message;
                } else {
                    res.verify = true;
                    res.message = decoded;
                }
                resolve(res)
            })
        })
    }
}
module.exports = ManagersService;
