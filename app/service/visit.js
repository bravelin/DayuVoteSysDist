'use strict';
const Service = require('egg').Service;

class VisitService extends Service {
    // 创建用户浏览记录
    async create (params) {
        const ctx = this.ctx;
        if (params.actId) { // 活动ID
            const act = await ctx.model.Activity.findByPk(params.actId);
            if (act) {
                await ctx.model.Visit.create({
                    actId: params.actId,
                    playerId: params.playerId,
                    userId: params.userId,
                    createUserId: act.createUserId,
                    p0: act.p0,
                    p1: act.p1
                });
                // 更新活动的人气 visitCount
                await act.update({ visitCount: act.visitCount + 1, popularity: act.popularity + 1 });
                return true;
            } else {
                return false;
            }
        } else {
            return false;
        }
    }
    // 访问按日期统计
    async statVisitByDate (actId, playerId, uid) {
        const ctx = this.ctx;
        const Sequelize = ctx.app.Sequelize;
        let conditionSql = '';
        if (actId) {
            conditionSql = `and actId='${actId}' `;
        }  else { // 如果未传活动ID,则只查询最近30天的
            let nowTime = new Date();
            nowTime.setHours(23, 59, 59);
            let startTime = new Date();
            startTime.setTime(nowTime.getTime() - 30 * 24 * 60 * 60 * 1000);
            conditionSql = `and createdAt <= '${ctx.helper.formatTime(nowTime)}' and createdAt > '${ctx.helper.formatTime(startTime)}' `;
        }
        if (playerId) {
            conditionSql += `and playerId='${playerId}' `;
        }
        const sql = `select date_format(date_add(createdAt, interval 8 hour), '%Y%m%d') as days, count(*) as visitNum from visit where (createUserId = :uid OR p0 = :uid OR p1 = :uid) ${conditionSql} group by days`;
        const queryRes = await ctx.model.query(sql, {
            type: Sequelize.QueryTypes.SELECT,
            replacements: { uid }
        });
        // console.log('visit stat...', queryRes);
        return queryRes;
    }
}
module.exports = VisitService;
