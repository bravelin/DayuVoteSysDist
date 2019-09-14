'use strict';
const Service = require('egg').Service;
const hourGap = 8 * 60 * 60 * 1000;
class VoteService extends Service {
    async query(userId, options) {
        const ctx = this.ctx;
        const Sequelize = ctx.app.Sequelize;
        const resData = {
            page: options.page, totalPage: 0, dataList: [], total: 0
        };
        let dataSql = "SELECT `vote`.`actId`, `vote`.`playerId`, `vote`.`type`, `vote`.`voteNum`, `vote`.`diamondAmount`, `vote`.`voter`, `vote`.`id`, `vote`.`createdAt`, `activity`.`title` AS `actTitle`, `player`.`name` AS `playerName`, `user`.`nickName` AS `voterNickName`, `user`.`headImgUrl` AS `voterHeadImgUrl` "
        let countSql = "SELECT COUNT(*) AS NUM "
        let conditionSql = "FROM `vote`, `activity`, `user`, `player` WHERE (`vote`.`createUserId` = :uid OR `vote`.`p0` = :uid OR `vote`.`p1` = :uid) "
        if (options.actId) { // 增加活动查询条件
            conditionSql += "AND `vote`.`actId` = :actId "
        }
        if (options.playerId) { // 增加选手查询条件
            conditionSql += "AND `vote`.`playerId` = :playerId "
        }
        if (options.type != 'all') {
            conditionSql += "AND `vote`.`type` = :type "
        }
        conditionSql += "AND `vote`.`actId` = `activity`.`id` AND `vote`.`playerId` = `player`.`id` AND `user`.`id` = `vote`.`voter` ORDER BY `vote`.`createdAt` DESC "
        let sql = dataSql + conditionSql + "LIMIT :offset, :limit;"
        // console.log('***1 ', sql);
        const query = { // 查询条件
            limit: options.pageSize,
            offset: (options.page - 1) * options.pageSize,
            uid: userId,
            type: options.type,
            playerId: options.playerId,
            actId: options.actId
        }
        const queryRes = await ctx.model.query(sql, {
            type: Sequelize.QueryTypes.SELECT,
            replacements: query
        });
        // console.log('queryRes:', queryRes);
        sql = countSql + conditionSql + ';'
        const countRes = await ctx.model.query(sql, {
            type: Sequelize.QueryTypes.SELECT,
            replacements: query
        });
        // console.log('countRes:', countRes);
        resData.dataList = queryRes;
        resData.total = countRes[0].NUM;
        resData.totalPage = Math.ceil(resData.total / options.pageSize);
        return resData;
    }
    // 查询订单
    async orders (userId, options) {
        // console.log('orders....', options)
        const ctx = this.ctx;
        const Sequelize = ctx.app.Sequelize;
        const resData = {
            page: options.page, totalPage: 0, dataList: [], total: 0
        };
        let dataSql = "SELECT trade.id, trade.status, trade.ip, trade.place, trade.playerId, trade.createdAt, trade.actId, user.nickName, player.no, trade.userId, trade.totalFee, trade.voteCount, trade.timeStart, trade.timeEnd, trade.transactionId, activity.title, player.name "
        let countSql = "SELECT COUNT(*) AS num "
        let conditionSql = "FROM trade, activity, player, user WHERE (trade.createUserId = :uid OR trade.p0 = :uid OR trade.p1 = :uid) "
        if (options.actId) { // 增加活动查询条件
            conditionSql += "AND trade.actId = :actId "
        }
        if (options.playerId) { // 增加选手查询条件
            conditionSql += "AND trade.playerId = :playerId "
        }
        if (options.key) {
            conditionSql += "AND (activity.title like '%" + options.key + "%' OR player.name like '%" + options.key + "%') "
        }
        if (options.status != 'all') { // 增加状态过滤
            if (options.status == 'already') {
                conditionSql += "AND trade.status = '1' ";
            } else if (options.status == 'wait') {
                conditionSql += "AND trade.status = '0' ";
            } else if (options.status == 'cancelled') {
                conditionSql += "AND (trade.status = '3' OR trade.status = '5') ";
            }
        }
        if (!options.order) {
            options.order = 'createdAt';
        }
        if (!options.orderDir) {
            options.orderDir = 'DESC';
        }
        conditionSql += "AND trade.actId = activity.id AND trade.playerId = player.id AND user.id = trade.userId ORDER BY trade." + options.order + " " + options.orderDir + " ";
        let sql = dataSql + conditionSql + "LIMIT :offset, :limit;"
        console.log('***1 ', sql);
        const query = { // 查询条件
            limit: options.pageSize,
            offset: (options.page - 1) * options.pageSize,
            uid: userId,
            key: options.key,
            playerId: options.playerId || '',
            actId: options.actId || ''
        }
        const queryRes = await ctx.model.query(sql, {
            type: Sequelize.QueryTypes.SELECT,
            replacements: query
        });
        console.log('queryRes:', queryRes);
        sql = countSql + conditionSql + ';'
        const countRes = await ctx.model.query(sql, {
            type: Sequelize.QueryTypes.SELECT,
            replacements: query
        });
        // console.log('countRes:', countRes);
        resData.dataList = queryRes;
        resData.total = countRes[0].num;
        resData.totalPage = Math.ceil(resData.total / options.pageSize);
        return resData;
    }
    // 绩效统计
    async statAccounts (uid) {
        const ctx = this.ctx;
        const Sequelize = ctx.app.Sequelize;
        const deltTime = 8 * 60 * 60 * 1000;
        // 查询下级账号
        const sql0 = `select id, realName, realName, role, loginName, from manager where (manager.p0='${uid}' or n.p1='${uid}')`;
        const res0 = await ctx.model.query(sql0, { type: Sequelize.QueryTypes.SELECT });
        
        // 查询今天的
        let startTime = new Date();
        let endTime = new Date();
        let startTimeStr = '';
        let endTimeStr = '';
        startTime.setHours(0, 0, 0, 0);
        startTime.setTime(startTime.getTime() - deltTime);
        endTime.setTime(endTime.getTime() - deltTime);
        startTimeStr = ctx.helper.formatTime(startTime, 'yyyy-MM-dd hh:mm:ss');
        endTimeStr = ctx.helper.formatTime(endTime, 'yyyy-MM-dd hh:mm:ss');
        const sql1 = `select sum(v.diamondAmount) as score, m.id as uid from vote as v, (select m.id as id, m.realName as realName from manager as m where (m.p0='${uid}' or m.p1='${uid}')) as m where (v.p0=m.id or v.p1=m.id or v.createUserId=m.id) and v.createdAt>='${startTimeStr}' and v.createdAt<='${endTimeStr}' group by m.id`;
        const res1 = await ctx.model.query(sql1, { type: Sequelize.QueryTypes.SELECT });

        // 查询本周的
        startTime = new Date();
        endTime = new Date();
        let currDay = startTime.getDay(); 
        if (currDay == 0) { currDay = 7 }
        startTime.setTime(startTime.getTime() - currDay * 24 * 60 * 60 * 1000);
        startTime.setHours(0, 0, 0, 0);
        startTime.setTime(startTime.getTime() - deltTime);
        endTime.setTime(endTime.getTime() - deltTime);
        startTimeStr = ctx.helper.formatTime(startTime, 'yyyy-MM-dd hh:mm:ss');
        endTimeStr = ctx.helper.formatTime(endTime, 'yyyy-MM-dd hh:mm:ss');
        const sql2 = `select sum(v.diamondAmount) as score, m.id as uid from vote as v, (select m.id as id, m.realName as realName from manager as m where (m.p0='${uid}' or m.p1='${uid}')) as m where (v.p0=m.id or v.p1=m.id or v.createUserId=m.id) and v.createdAt>='${startTimeStr}' and v.createdAt<='${endTimeStr}' group by m.id`;
        const res2 = await ctx.model.query(sql2, { type: Sequelize.QueryTypes.SELECT });

        // 查询本月的
        startTime = new Date();
        endTime = new Date();
        let currDate = startTime.getDate();
        startTime.setTime(startTime.getTime() - currDate * 24 * 60 * 60 * 1000);
        startTime.setHours(0, 0, 0, 0);
        startTime.setTime(startTime.getTime() - deltTime);
        endTime.setTime(endTime.getTime() - deltTime);
        startTimeStr = ctx.helper.formatTime(startTime, 'yyyy-MM-dd hh:mm:ss');
        endTimeStr = ctx.helper.formatTime(endTime, 'yyyy-MM-dd hh:mm:ss');
        const sql3 = `select sum(v.diamondAmount) as score, m.id as uid from vote as v, (select m.id as id, m.realName as realName from manager as m where (m.p0='${uid}' or m.p1='${uid}')) as m where (v.p0=m.id or v.p1=m.id or v.createUserId=m.id) and v.createdAt>='${startTimeStr}' and v.createdAt<='${endTimeStr}' group by m.id`;
        const res3 = await ctx.model.query(sql3, { type: Sequelize.QueryTypes.SELECT });

        return { res0, res1, res2, res3 };
    }
    async realtimeOrders (userId) {
        const ctx = this.ctx;
        const Sequelize = ctx.app.Sequelize;
        const startTime = new Date();
        // startTime.setTime(startTime.getTime() - 10 * 24 * 60 * 60 * 1000)
        startTime.setHours(0, 0, 0, 0);
        const endTime = new Date();
        endTime.setHours(23, 59, 59, 0);
        const startTimeStr = ctx.helper.formatTime(startTime, 'yyyyMMddhhmmss');
        const endTimeStr = ctx.helper.formatTime(endTime, 'yyyyMMddhhmmss');
        let sql = `select trade.id, trade.actId, activity.title, player.name, trade.timeStart, user.nickName, trade.ip, trade.place, trade.totalFee, trade.voteCount, trade.status
                    from trade, user,activity, player where trade.userId = user.id and trade.actId = activity.id and trade.playerId = player.id
                    and (trade.createUserId = :uid OR trade.p0 = :uid OR trade.p1 = :uid) and trade.timeStart >= :startTime and (trade.timeEnd is null or trade.timeEnd <= :endTime)
                    order by trade.timeStart desc limit 100
                `;
        console.log('real time sql .... ', sql)
        const query = { // 查询条件
            uid: userId,
            startTime: startTimeStr,
            endTime: endTimeStr
        }
        const queryRes = await ctx.model.query(sql, {
            type: Sequelize.QueryTypes.SELECT,
            replacements: query
        });
        console.log('realtime queryRes....', queryRes);
        return queryRes
    }
    // 订单统计
    async statOrders (userId, options) {
        const ctx = this.ctx;
        const Sequelize = ctx.app.Sequelize;
        let sql = ''
        if (options.type == 'd') { // 按天统计查询
            sql = `select date_format(date_add(updatedAt, interval 8 hour), '%Y%m%d') as days, sum(totalFee) as totalFee from trade
                         where (trade.createUserId = :uid OR trade.p0 = :uid OR trade.p1 = :uid) and trade.timeStart >= :startTime and trade.timeEnd <= :endTime and trade.status = '1'
                         group by days`;
        } else { // 按月统计
            sql = `select date_format(date_add(updatedAt, interval 8 hour), '%Y%m') as days, sum(totalFee) as totalFee from trade
                         where (trade.createUserId = :uid OR trade.p0 = :uid OR trade.p1 = :uid) and trade.timeStart >= :startTime and trade.timeEnd <= :endTime and trade.status = '1'
                         group by days`;
        }
        console.log('sql...', sql);
        const query = {
            uid: userId, startTime: options.startTime, endTime: options.endTime
        }
        const queryRes = await ctx.model.query(sql, {
            type: Sequelize.QueryTypes.SELECT,
            replacements: query
        });
        console.log('order stat...', queryRes);
        return queryRes;
    }
    // 投票按日期统计
    async statVoteByDate (actId, playerId, uid) {
        const ctx = this.ctx;
        const Sequelize = ctx.app.Sequelize;
        let conditionSql = '';
        if (actId) {
            conditionSql = `and actId='${actId}' `;
        } else { // 如果未传活动ID,则只查询最近30天的
            let nowTime = new Date();
            nowTime.setHours(23, 59, 59);
            let startTime = new Date();
            startTime.setTime(nowTime.getTime() - 30 * 24 * 60 * 60 * 1000);
            conditionSql = `and createdAt <= '${ctx.helper.formatTime(nowTime)}' and createdAt > '${ctx.helper.formatTime(startTime)}' `;
        }
        if (playerId) {
            conditionSql += `and playerId='${playerId}'`;
        }
        const sql = `(select date_format(date_add(createdAt, interval 8 hour), '%Y%m%d') as days, sum(voteNum) as voteNum, type
                from vote where (createUserId = :uid OR p0 = :uid OR p1 = :uid) ${conditionSql} and type='0' group by days) union
            (select date_format(date_add(createdAt, interval 8 hour), '%Y%m%d') as days, sum(voteNum) as voteNum, type
                from vote where (createUserId = :uid OR p0 = :uid OR p1 = :uid) ${conditionSql} and type='1' group by days) union
            (select date_format(date_add(createdAt, interval 8 hour), '%Y%m%d') as days, sum(voteNum) as voteNum, type
                from vote where (createUserId = :uid OR p0 = :uid OR p1 = :uid) ${conditionSql} and type='2' group by days)`;
        const queryRes = await ctx.model.query(sql, {
            type: Sequelize.QueryTypes.SELECT,
            replacements: { uid }
        });
        // console.log('vote stat...', queryRes);
        return queryRes;
    }
    // 创建投票记录 ---client端投票
    async doVote (params) {
        const ctx = this.ctx;
        const act = await ctx.model.Activity.findByPk(params.actId);
        const player = await ctx.model.Player.findByPk(params.playerId);
        const canVoteRes = await this.canVote(params, act, player);
        if (!canVoteRes.result) { // 不能投票
            return {
                data: {
                    result: false,
                    again: false,
                    againMessage: canVoteRes.message
                },
                message: canVoteRes.message
            }
        }
        const res = await ctx.model.Vote.create({
            actId: params.actId,
            playerId: params.playerId,
            voter: params.userId,
            type: '0',
            voteNum: 1,
            diamondAmount: 0,
            createUserId: act.createUserId,
            p0: act.p0,
            p1: act.p1
        });
        // 该选手总票数+1
        await player.update({ totalVotes: player.totalVotes + 1 });
        // 该活动的票数+1
        await act.update({ voteCount: act.voteCount + 1 , popularity: act.popularity + 1.5 });
        // 判定是否可以再次投票
        const againVoteRes = await this.canVote(params, act, player);
        // 返回结果
        return {
            data: {
                result: true,
                again: againVoteRes.result,
                againMessage: againVoteRes.message,
            },
            message: '投票成功!'
        }
    }
    // 判定用户是否可以对该选手投票
    async canVote (params, act, player) {
        const ctx = this.ctx;
        const Sequelize = ctx.app.Sequelize;
        act = act || await ctx.model.Activity.findByPk(params.actId);
        if (!act) {
            return {
                result: false,
                message: '未能查询到投票活动!'
            }
        }
        // 0.判定活动是否已关闭或者已删除
        if (act.status == '5') {
            return {
                result: false,
                message: '活动已关闭!'
            }
        } else if (act.status == '0') {
            return {
                result: false,
                message: '活动已删除!'
            }
        }
        // 1.是否到了投票时间
        const thisTime = (+ new Date())
        if (thisTime <= act.voteStartTime.getTime()) {
            return {
                result: false,
                message: '未到投票时间!'
            }
        }
        if (thisTime >= act.voteEndTime.getTime()) {
            return {
                result: false,
                message: '已过投票时间!'
            }
        }
        // 2.判定是否超出每人最多投票数量
        if (act.maxTotalVoteNumber != 0) {
            const sql = `SELECT COUNT(*) AS num FROM vote WHERE actId='${params.actId}' AND type='0' AND voter='${params.userId}'`;
            // console.log('1.sql:', sql);
            const countRes = await ctx.model.query(sql, {
                type: Sequelize.QueryTypes.SELECT
            });
            const num = countRes[0].num;
            // console.log('1.num:', num, act.maxTotalVoteNumber);
            if (num >= act.maxTotalVoteNumber) {
                return {
                    result: false,
                    message: '已超出活动每人总共最多可以投票的数量!'
                }
            }
        }
        // 3.判定是否超出每人在一天内投票最多数量
        if (act.maxDayVoteNumber != 0) {
            const startTime = new Date();
            const endTime = new Date();
            startTime.setHours(0,0,0,0);
            endTime.setHours(23,59,59,0);
            startTime.setTime(startTime.getTime() - hourGap);
            endTime.setTime(endTime.getTime() - hourGap);
            const st = ctx.helper.formatTime(startTime);
            const et = ctx.helper.formatTime(endTime);
            const sql = `SELECT COUNT(*) AS num FROM vote WHERE actId='${params.actId}' AND type='0' AND voter='${params.userId}' AND createdAt >= '${st}' AND createdAt <= '${et}'`;
            // console.log('2.sql:', sql);
            const countRes = await ctx.model.query(sql, {
                type: Sequelize.QueryTypes.SELECT
            });
            const num = countRes[0].num;
            // console.log('2.num:', num, act.maxDayVoteNumber);
            if (num >= act.maxDayVoteNumber) {
                return {
                    result: false,
                    message: '已超出活动每人每天总共最多可以投票的数量!'
                }
            }
        }
        // 4.判定是否超出每人在每天每4小时对同一选手投票的最多数量
        if (act.maxTotalVotePlayer != 0) {
            const startTime = new Date();
            const endTime = new Date();
            if (endTime.getHours() < 4) {
                startTime.setHours(0,0,0,0);
            } else {
                startTime.setTime(endTime.getTime() - hourGap / 2)
            }
            startTime.setTime(startTime.getTime() - hourGap);
            endTime.setTime(endTime.getTime() - hourGap);
            const st = ctx.helper.formatTime(startTime);
            const et = ctx.helper.formatTime(endTime);
            const sql = `SELECT COUNT(*) AS num FROM vote WHERE actId='${params.actId}' AND type='0' AND voter='${params.userId}' AND playerId='${params.playerId}' AND createdAt >= '${st}' AND createdAt <= '${et}'`;
            // console.log('3.sql:', sql);
            const countRes = await ctx.model.query(sql, {
                type: Sequelize.QueryTypes.SELECT
            });
            const num = countRes[0].num;
            // console.log('3.num:', num, act.maxTotalVotePlayer);
            if (num >= act.maxTotalVotePlayer) {
                return {
                    result: false,
                    message: '您最近已经投过票了!'
                }
            }
        }
        // 5.对选手状态的校验
        player = player || await ctx.model.Player.findByPk(params.playerId);
        if (player.status == '0') {
            return {
                result: false,
                message: '该选手已删除!'
            }
        } else if (player.status == '1') {
            return {
                result: false,
                message: '该选手还需等待管理员的审核!'
            }
        } else if (player.status == '3') {
            return {
                result: false,
                message: '该选手已被管理员禁止投票!'
            }
        } else if (player.status == '4') {
            return {
                result: false,
                message: '该选手未通过管理员的审核!'
            }
        }
        // 全部校验通过
        return {
            result: true,
            message: '可以投票!'
        }
    }
    // 统计投票情况
    async stat (uid, startTime, endTime) {
        const ctx = this.ctx;
        startTime = startTime || "2000/01/01 00:00:00";
        endTime = endTime || "2100/01/01 00:00:00";
        const startDate = new Date(startTime);
        startDate.setTime(startDate.getTime() - hourGap);
        const endDate = new Date(endTime);
        endDate.setTime(endDate.getTime() - hourGap);
        const st = ctx.helper.formatTime(startDate);
        const et = ctx.helper.formatTime(endDate);
        // 调用存储过程
        const procedure = await ctx.model.query('call VoteStat(:uid, :startTime, :endTime);', {
            replacements: { uid, startTime: st, endTime: et }
        })
        return procedure[0];
    }
    // async stat (uid, startTime, endTime) {
    //     const ctx = this.ctx;
    //     const Sequelize = ctx.app.Sequelize;
    //     let res = null
    //     if (startTime && endTime) {
    //         const hourGap = 8 * 60 * 60 * 1000;
    //         const startDate = new Date(startTime);
    //         startDate.setTime(startDate.getTime() - hourGap);
    //         const endDate = new Date(endTime);
    //         endDate.setTime(endDate.getTime() - hourGap);
    //         const st = ctx.helper.formatTime(startDate);
    //         const et = ctx.helper.formatTime(endDate);

    //         res = await ctx.model.query('SELECT type, count(*) as num from `vote` where (createUserId = :uid or p0 = :uid or p1 = :uid) and (createdAt >= :startTime and createdAt <= :endTime) group by type', {
    //             type: Sequelize.QueryTypes.SELECT,
    //             replacements: { uid, startTime: st, endTime: et }
    //         });
    //     } else { // 不限时间
    //         res = await ctx.model.query('SELECT type, count(*) as num from `vote` where createUserId = :uid or p0 = :uid or p1 = :uid group by type', {
    //             type: Sequelize.QueryTypes.SELECT,
    //             replacements: { uid }
    //         });
    //     }
    //     return res;
    // }
}
module.exports = VoteService;
