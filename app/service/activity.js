'use strict';
const Service = require('egg').Service;
const TenDayTime = 10 * 24 * 60 * 60 * 1000;
class ActivityService extends Service {
    async query(userId, options) {
        const ctx = this.ctx;
        const Op = ctx.app.Sequelize.Op;
        const resData = {
            page: options.page, totalPage: 0, dataList: [], total: 0
        };
        const query = { // 查询条件
            limit: options.pageSize,
            offset: (options.page - 1) * options.pageSize,
            order: [[options.order, options.orderDir]]
        }

        if (options.key) { // 带关键字模糊查询
            query.where = {
                [Op.and]: [
                    {
                        [Op.or]: [{ title: { [Op.like]: `%${options.key}%` }},{ remark: { [Op.like]: `%${options.key}%` }}]
                    },
                    {
                        [Op.or]: [{ createUserId: userId }, { p0: userId }, { p1: userId }]
                    }
                ]
            }
        } else {
            query.where = {
                [Op.or]: [{ createUserId: userId }, { p0: userId }, { p1: userId }]
            }
        }

        if (options.status == 'all') { // 所有活动
            query.where.status = { [Op.ne]: '0' }
        } else if (options.status == 'startThisDay') { // 今日开始
            // 以报名开始时间为开始
            query.where.status = { [Op.or]: ['1', '2', '3'] }
            const thisStartDay = new Date();
            thisStartDay.setHours(0, 0, 0, 0);
            const thisEndDay = new Date();
            thisEndDay.setHours(23, 59, 59, 0);
            const startTime = ctx.helper.formatTime(thisStartDay);
            const endTime = ctx.helper.formatTime(thisEndDay);
            query.where.signUpStartTime = {
                [Op.and]: [
                    { [Op.gte]: startTime },
                    { [Op.lte]: endTime }
                ]
            }
        } else if (options.status == 'endThisDay') { // 今日结束
            query.where.status = { [Op.or]: ['4', '2', '3'] }
            // 以投票结束时间为结束
            const thisStartDay = new Date();
            thisStartDay.setHours(0, 0, 0, 0);
            const thisEndDay = new Date();
            thisEndDay.setHours(23, 59, 59, 0);
            const startTime = ctx.helper.formatTime(thisStartDay);
            const endTime = ctx.helper.formatTime(thisEndDay);
            query.where.voteEndTime = {
                [Op.and]: [
                    { [Op.gte]: startTime },
                    { [Op.lte]: endTime }
                ]
            }
        } else if (options.status == 'notYetBegun') { // 未开始
            query.where.status = '1'
        } else if (options.status == 'onGoing') { // 进行中
            query.where.status = { [Op.or]: ['2', '3'] }
        } else if (options.status == 'finished') { // 已结束
            query.where.status = '4'
        } else if (options.status == 'closed') { // 已关闭
            query.where.status = '5'
        }

        const res = await ctx.model.Activity.findAndCountAll(query);
        resData.dataList = res.rows;
        resData.total = res.count;
        resData.totalPage = Math.ceil(res.count / options.pageSize);
        return resData;
    }
    async stat (uid) {
        const ctx = this.ctx;
        const hourGap = 8 * 60 * 60 * 1000;
        const thisStartDay = new Date();
        thisStartDay.setHours(0, 0, 0, 0);
        thisStartDay.setTime(thisStartDay.getTime() - hourGap);

        const thisEndDay = new Date();
        thisEndDay.setHours(23, 59, 59, 0);
        thisEndDay.setTime(thisEndDay.getTime() - hourGap);

        const startTime = ctx.helper.formatTime(thisStartDay);
        const endTime = ctx.helper.formatTime(thisEndDay);
        // 调用存储过程
        const procedure = await ctx.model.query('call ActStat(:uid, :startTime, :endTime);', {
            replacements: { uid, startTime, endTime }
        })
        return procedure[0];
    }
    // async stat (uid) {
    //     const ctx = this.ctx;
    //     const Sequelize = ctx.app.Sequelize;
    //     const res = await ctx.model.query('SELECT status, count(*) as num from `activity` where createUserId = :uid or p0 = :uid or p1 = :uid group by status', {
    //         type: Sequelize.QueryTypes.SELECT,
    //         replacements: { uid }
    //     });

    //     const hourGap = 8 * 60 * 60 * 1000;
    //     const thisStartDay = new Date();
    //     thisStartDay.setHours(0, 0, 0, 0);
    //     thisStartDay.setTime(thisStartDay.getTime() - hourGap);

    //     const thisEndDay = new Date();
    //     thisEndDay.setHours(23, 59, 59, 0);
    //     thisEndDay.setTime(thisEndDay.getTime() - hourGap);

    //     const startTime = ctx.helper.formatTime(thisStartDay);
    //     const endTime = ctx.helper.formatTime(thisEndDay);

    //     // 查询今日开始
    //     const thisStartRes = await ctx.model.query("SELECT count(*) as num from `activity` where (status = '1' or status = '2' or status = '3' ) and (createUserId = :uid or p0 = :uid or p1 = :uid) and (signUpStartTime >= :startTime and signUpStartTime <= :endTime) ", {
    //         type: Sequelize.QueryTypes.SELECT,
    //         replacements: { uid, startTime, endTime }
    //     });
    //     // console.log('thisStartRes:', thisStartRes);
    //     if (thisStartRes && thisStartRes[0]) {
    //         res.push({
    //             status: '-1',
    //             num: thisStartRes[0].num
    //         })
    //     }

    //     // 查询今日结束
    //     const thisEndRes = await ctx.model.query("SELECT count(*) as num from `activity` where (status = '4' or status = '2' or status = '3' ) and (createUserId = :uid or p0 = :uid or p1 = :uid) and (voteEndTime >= :startTime and voteEndTime <= :endTime) ", {
    //         type: Sequelize.QueryTypes.SELECT,
    //         replacements: { uid, startTime, endTime }
    //     });
    //     // console.log('thisEndRes:', thisEndRes);
    //     if (thisEndRes && thisEndRes[0]) {
    //         res.push({
    //             status: '-2',
    //             num: thisEndRes[0].num
    //         })
    //     }
    //     return res;
    // }
    // 查询需要推送至ranksys的活动
    async queryNeedRankSysAct () {
        const ctx = this.ctx;
        const Sequelize = ctx.app.Sequelize;
        const nowDate = new Date()
        const oneDay = 24 * 60 * 60 * 1000;
        const thisTime = new Date();
        thisTime.setHours(0, 0, 0, 0);
        thisTime.setTime(nowDate.getTime() - oneDay * 5);
        const timeStr = ctx.helper.formatTime(thisTime);
        return await ctx.model.query(`SELECT id,title from activity where status='4' and toRankSys='0' and voteEndTime>='${timeStr}'`, {
            type: Sequelize.QueryTypes.SELECT
        });
    }
    async findActById (id, tag = false) {
        const ctx = this.ctx;
        if (!tag) {
            return await ctx.model.Activity.findByPk(id);
        }
        const attributes = ['backgroundMusic', 'starPlayer', 'signUpStartTime','signUpEndTime','voteStartTime', 'voteEndTime', 'status','maxTotalVoteNumber','maxDayVoteNumber', 'maxTotalVotePlayer', 'content', 'pictures', 'description', 'title', 'prizes', 'voteCount', 'popularity', 'visitCount', 'playerCount']
        const res = await ctx.model.Activity.findByPk(id, { attributes });
        if (!res) {
            return res
        }
        const data = {};
        attributes.forEach(item => { data[item] = res[item] });
        if (data.description) {
            data.description = data.description.replace(/src="(.*?)"/g, (srcUrl, url) => {
                let pos = url.indexOf('?')
                if (pos > 0) {
                    url = url.substring(0, pos)
                }
                return `src="${url}"`
            })
        }
        if (data.starPlayer) { // 查找今日之星
            const starPlayer = await ctx.model.Player.findByPk(data.starPlayer);
            if (starPlayer) {
                data.starPlayerName = starPlayer.name;
                if (starPlayer.pictures) {
                    const playerPics = JSON.parse(starPlayer.pictures);
                    const actPics = JSON.parse(data.pictures);
                    actPics.unshift(playerPics[0]);
                    data.pictures = JSON.stringify(actPics);
                }
            }
        }
        if (!data.backgroundMusic) {
            data.backgroundMusic = ctx.app.dict.backgroundMusic
        }
        return data;
    }
    // 更改活动调票类型
    async switchAutoAdjust (id, autoAdjust) {
        const ctx = this.ctx;
        const act = await ctx.model.Activity.findByPk(id);
        if (act) {
            await act.update({ autoAdjust });
            return true;
        } else {
            return false;
        }
    }
    // 一键改票
    async addAllVote (list) {
        const { service } = this;
        let item = null;
        for (let i = 0; i < list.length; i++) {
            item = list[i];
            if (item.id && item.num) {
                await service.player.addSysVote({
                    playerId: item.id, count: item.num
                })
            }
        }
        return true;
    }
    // 增加人气
    async addPopularity (id, num) {
        const ctx = this.ctx;
        const act = await ctx.model.Activity.findByPk(id);
        if (act) {
            await act.update({ popularity: act.popularity + num });
            return true;
        } else {
            return false;
        }
    }
    // 复制
    async copy (id) {
        const ctx = this.ctx;
        const act = await ctx.model.Activity.findByPk(id);
        if (act) {
            await ctx.model.Activity.create({
                title: act.title,
                signUpStartTime: act.signUpStartTime,
                signUpEndTime: act.signUpEndTime,
                voteStartTime: act.voteStartTime,
                voteEndTime: act.voteEndTime,
                maxTotalVoteNumber: act.maxTotalVoteNumber,
                maxDayVoteNumber: act.maxDayVoteNumber,
                maxTotalVotePlayer: act.maxTotalVotePlayer,
                needDiamond: act.needDiamond,
                needAudit: act.needAudit,
                description: act.description,
                prizes: act.prizes,
                pictures: act.pictures,
                content: act.content,
                remark: act.remark,
                backgroundMusic: act.backgroundMusic,
                status: '1', // 未开始
                p0: act.p0,
                p1: act.p1,
                createUserId: act.createUserId,
                createRealName: act.createRealName
            })
            return true;
        } else {
            return false;
        }
    }
    // 调票
    async adjustVote (id) {
        const ctx = this.ctx;
        // 调用存储过程
        const res = await ctx.model.query('call SingleActAdjust(:id);', {
            replacements: { id }
        })
        // console.log('res:', res);
        return true;
    }
    // 更改活动状态
    async changeStatus (id, status) {
        const ctx = this.ctx;
        const act = await ctx.model.Activity.findByPk(id);
        if (act) {
            await act.update({ status });
            return true;
        } else {
            return false;
        }
    }
    async queryAllNeedUpdateStatusAct () {
        const ctx = this.ctx;
        const Op = ctx.app.Sequelize.Op;
        return await ctx.model.Activity.findAll({
            where: {
                status: {
                    [Op.or]: ['1', '2', '3', '4']
                }
            }
        });
    }
    // 查询所有需要自动调票的活动
    async queryAllNeedAdjustAct () {
        const ctx = this.ctx;
        const Op = ctx.app.Sequelize.Op;
        return await ctx.model.Activity.findAll({
            where: {
                status: {
                    [Op.or]: ['2', '3']
                },
                autoAdjust: '1'
            }
        });
    }
    async update (id, params) {
        const ctx = this.ctx;
        const act = await ctx.model.Activity.findByPk(id);
        if (act) {
            // 更新状态
            let oldStatus = act.status;
            let newStatus = '';
            if (oldStatus == '0' || oldStatus == '5') {
                newStatus = oldStatus;
            } else {
                let now = (new Date()).getTime();
                let signUpStartTime = (new Date(params.signUpStartTime)).getTime();
                let voteStartTime = (new Date(params.voteStartTime)).getTime();
                let voteEndTime = (new Date(params.voteEndTime)).getTime();
                if (now < signUpStartTime) {
                    newStatus = '1';
                } else {
                    newStatus = '2';
                    if (now >= voteStartTime) {
                        newStatus = '3';
                        if (now >= voteEndTime) {
                            newStatus = '4';
                            if (now >= voteEndTime + TenDayTime) { // 投票结束10天之后,改成关闭状态
                                newStatus = '5'
                            }
                        }
                    }
                }
            }
            await act.update({
                title: params.title,
                signUpStartTime: new Date(params.signUpStartTime),
                signUpEndTime: new Date(params.signUpEndTime),
                voteStartTime: new Date(params.voteStartTime),
                voteEndTime: new Date(params.voteEndTime),
                maxTotalVoteNumber: params.maxTotalVoteNumber,
                maxDayVoteNumber: params.maxDayVoteNumber,
                maxTotalVotePlayer: params.maxTotalVotePlayer,
                needDiamond: params.needDiamond,
                needAudit: params.needAudit,
                description: params.description,
                prizes: params.prizes,
                pictures: params.pictures,
                content: params.content,
                remark: params.remark,
                backgroundMusic: params.backgroundMusic,
                status: newStatus
            });
            return true
        } else {
            return false
        }
    }
    // 创建活动
    async create (params) {
        const ctx = this.ctx;
        const createUserId = ctx.request.header.uid;
        const manager = await this.service.managers.findUserById(createUserId); // 查询创建者
        if (manager) {
            await ctx.model.Activity.create({
                title: params.title,
                signUpStartTime: new Date(params.signUpStartTime),
                signUpEndTime: new Date(params.signUpEndTime),
                voteStartTime: new Date(params.voteStartTime),
                voteEndTime: new Date(params.voteEndTime),
                maxTotalVoteNumber: params.maxTotalVoteNumber,
                maxDayVoteNumber: params.maxDayVoteNumber,
                maxTotalVotePlayer: params.maxTotalVotePlayer,
                needDiamond: params.needDiamond,
                needAudit: params.needAudit,
                description: params.description,
                prizes: params.prizes,
                pictures: params.pictures,
                content: params.content,
                remark: params.remark,
                backgroundMusic: params.backgroundMusic,
                status: '1', // 未开始
                p0: manager.p0,
                p1: manager.p1,
                createUserId,
                createRealName: manager.realName
            })
            ctx.service.logs.add(`创建活动:${params.title}`);
            return true;
        } else {
            return false
        }
    }
}
module.exports = ActivityService;
