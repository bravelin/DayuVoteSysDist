'use strict';
// app/service/logs.js
const Service = require('egg').Service;
class LogsService extends Service { // 日志查询
    async getAll(options) { // options: { pageSize: 10, page: 1, key: '' } // pageSize每页多少条
        const ctx = this.ctx;
        const { Op } = this.app.Sequelize;
        const resData = {
            page: options.page, totalPage: 0, dataList: [], total: 0
        };
        const query = { // 查询条件
            limit: options.pageSize,
            offset: (options.page - 1) * options.pageSize,
            order: [['createdAt', 'DESC']]
        }
        if (options.key) { // 带关键字模糊查询
            query.where = {
                content: {
                    [Op.like]: `%${options.key}%`
                }
            }
        }
        const res = await ctx.model.Log.findAndCountAll(query);
        resData.dataList = res.rows;
        resData.total = res.count;
        resData.totalPage = Math.ceil(res.count / options.pageSize);
        return resData;
    }
    async add(content) { // 添加日志
        const { ctx } = this;
        const userId = ctx.request.header.uid;
        if (userId && content) {
            const user = await ctx.service.managers.findUserById(userId);
            if (user) {
                const userName = user.loginName;
                ctx.model.Log.create({ userId, userName, content });
            }
        }
    }
}
module.exports = LogsService;
