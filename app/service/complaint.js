'use strict';
const Service = require('egg').Service;
class ComplaintService extends Service {
    async query(userId, options) { // options: { pageSize: 10, page: 1, key: '' } // pageSize每页多少条
        const ctx = this.ctx;
        const Sequelize = this.app.Sequelize;
        const resData = {
            page: options.page, totalPage: 0, dataList: [], total: 0
        };
        let dataSql = "select complaint.userId, complaint.name, complaint.content, complaint.tel, complaint.actId, complaint.status, complaint.id, complaint.createdAt, activity.title ";
        let countSql = "select count(*) as num ";
        let sql = 'from complaint, activity ';
        sql += `where (complaint.createUserId = '${userId}' or complaint.p0 = '${userId}' or complaint.p1 = '${userId}' ) and complaint.actId = activity.id `;
        if (options.status != 'all') {
            if (options.status == 'untreated') {
                sql += "and complaint.status = '0' ";
            } else {
                sql += "and complaint.status = '1' ";
            }
        }
        if (options.actId) {
            sql += `and complaint.actId = ${options.actId} `;
        }
        if (options.key) {
            sql += `and (complaint.content like '%${options.key}%' or complaint.name like '%${options.key}%' or complaint.tel like '%${options.key}%') `;
        }
        countSql += sql + ';';
        sql += `order by complaint.createdAt desc limit ${(options.page - 1) * options.pageSize}, ${options.pageSize}`;
        dataSql += sql + ';';
        // console.log(countSql);
        // console.log(dataSql);
        const queryRes = await ctx.model.query(dataSql, {
            type: Sequelize.QueryTypes.SELECT
        });
        const countRes = await ctx.model.query(countSql, {
            type: Sequelize.QueryTypes.SELECT
        });
        resData.dataList = queryRes;
        resData.total = countRes[0].num;
        resData.totalPage = Math.ceil(resData.total / options.pageSize);
        return resData;
    }
    // 是否已经提交过投诉
    async isSubmit (params) {
        const { ctx } = this;
        // 判定活动的状态
        const act = await ctx.model.Activity.findByPk(params.actId);
        if (act.status == '0') {
            return { res: false, message: '活动已删除!' };
        } else if (act.status == '1') {
            return { res: false, message: '活动还未开始!' };
        } else if (act.status == '5') {
            return { res: false, message: '活动已关闭!' };
        }
        const Sequelize = this.app.Sequelize;
        const thisStartDay = new Date();
        const thisEndDay = new Date();
        thisStartDay.setHours(0, 0, 0, 0);
        thisEndDay.setHours(23, 59, 59, 0);
        const startTime = ctx.helper.formatTime(thisStartDay);
        const endTime = ctx.helper.formatTime(thisEndDay);
        const res = await ctx.model.query("SELECT * from `complaint` where userId = :userId and actId = :actId and createdAt >= :startTime and createdAt <= :endTime ", {
            type: Sequelize.QueryTypes.SELECT,
            replacements: {
                userId: params.userId,
                actId: params.actId,
                startTime, endTime
            }
        });
        let message = '';
        const result = !(res.length && res.length > 0);
        if (!result) {
            message = '您今天已经提交过投诉了!';
        }
        return { res: result, message };
    }
    // 创建投诉记录
    async create (params) {
        const { ctx } = this;
        const act = await ctx.model.Activity.findByPk(params.actId);
        const canCreate = await this.isSubmit(params);
        if (act && canCreate.res) {
            await ctx.model.Complaint.create({
                userId: params.userId,
                name: params.name,
                tel: params.tel,
                content: params.content,
                actId: params.actId,
                status: '0',
                createUserId: act.createUserId,
                p0: act.p0,
                p1: act.p1
            })
            await ctx.service.io.send(act, 'UnTreatedComplaintNumChange');
            return true;
        } else {
            return false;
        }
    }
    // 更改状态
    async changeStatus (id, status) {
        const { ctx } = this;
        const record = await ctx.model.Complaint.findByPk(id);
        if (record) {
            await record.update({ status });
            await ctx.service.io.send(record, 'UnTreatedComplaintNumChange');
            return true;
        } else {
            return false;
        }
    }
    // 统计未处理的用户投诉数目
    async unTreatedCount (userId) {
        const ctx = this.ctx;
        const Sequelize = this.app.Sequelize;
        const sql = `select count(*) as num from complaint where status = '0' and (createUserId = '${userId}' or p0 = '${userId}' or p1 = '${userId}');`;
        const countRes = await ctx.model.query(sql, {
            type: Sequelize.QueryTypes.SELECT
        });
        return countRes[0].num;
    }
}
module.exports = ComplaintService;
