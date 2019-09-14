'use strict';
const Service = require('egg').Service;
const Excel = require('exceljs');
const Xlsx = require('node-xlsx');
const fs = require('fs');
const path = require('path');
const sendToWormhole = require('stream-wormhole');
const awaitWriteStream = require('await-stream-ready').write;
const uuidv1 = require("uuid/v1");

function generateUUID() {
    return uuidv1().replace(/-/g, "");
}

class PlayerService extends Service {
    async query(options) {
        const ctx = this.ctx;
        const Op = ctx.app.Sequelize.Op;
        const resData = {
            page: options.page, totalPage: 0, dataList: [], total: 0
        };
        const query = { // 查询条件
            limit: options.pageSize,
            offset: (options.page - 1) * options.pageSize,
            order: [[options.order, options.orderDir]],
            attributes: ['address', 'imgWidth', 'imgHeight', 'type', 'cashGift', 'diamondVotes', 'id', 'introduce', 'name', 'no', 'pictures', 'status', 'tel', 'remark', 'totalVotes']
        }
        query.where = {}
        if (options.key0) {
            query.where.name = { [Op.like]: `%${options.key0}%` }
        }
        if (options.key1) {
            query.where.no = options.key1
        }
        if (options.key2) {
            query.where.tel = { [Op.like]: `%${options.key2}%` }
        }
        if (options.status == 'all') { // 所有状态的选手--不包括删除
            query.where.status = { [Op.ne]: '0' }
        } else {
            query.where.status = options.status
        }
        if (options.actId) {
            query.where.actId = options.actId;
        }
        console.log('search players .....', query);
        const res = await ctx.model.Player.findAndCountAll(query);
        resData.dataList = res.rows;
        resData.total = res.count;
        resData.totalPage = Math.ceil(res.count / options.pageSize);
        return resData;
    }
    // 查询未审核的选手总数
    async unAuditCount (userId) {
        const ctx = this.ctx;
        const Sequelize = this.app.Sequelize;
        const sql = `select count(*) as num from player where (player.createUserId = '${userId}' or player.p0 = '${userId}' or player.p1 = '${userId}') and player.status = '1';`;
        // console.log(sql);
        const countRes = await ctx.model.query(sql, {
            type: Sequelize.QueryTypes.SELECT
        });
        return countRes[0].num;
    }
    // 查询未审核的或者未通过审核的选手
    async queryUnaudits (userId, options) {
        const ctx = this.ctx;
        const Sequelize = this.app.Sequelize;
        const resData = {
            page: options.page, totalPage: 0, dataList: [], total: 0
        };
        let dataSql = "select player.address, player.type, player.actId, player.id, player.name, player.status, player.no, player.pictures, player.tel, player.remark, player.createdAt, activity.title ";
        let countSql = "select count(*) as num ";
        let sql = 'from player, activity ';
        sql += `where (player.createUserId = '${userId}' or player.p0 = '${userId}' or player.p1 = '${userId}' ) and player.actId = activity.id `;
        if (options.status != 'all') {
            sql += `and player.status = '${options.status}' `;
        }
        if (options.actId) {
            sql += `and player.actId = ${options.actId} `;
        }
        if (options.key) {
            sql += `and (player.name like '%${options.key}%' or player.tel like '%${options.key}%' or player.remark like '%${options.key}%') `;
        }
        countSql += sql + ';';
        sql += `order by player.createdAt desc limit ${(options.page - 1) * options.pageSize}, ${options.pageSize}`;
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
    // client 端首页的查询
    async clientQuery(options) {
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
                [Op.or]: [{ name: { [Op.like]: `%${options.key}%` }},{ no: { [Op.like]: `${options.key}` }}]
            }
        } else {
            query.where = {}
        }
        query.where.actId = options.actId;
        query.where.status = { [Op.or]: ['2', '3'] }
        const res = await ctx.model.Player.findAndCountAll(query);
        resData.dataList = res.rows;
        resData.total = res.count;
        resData.totalPage = Math.ceil(res.count / options.pageSize);
        return resData;
    }
    // 导入excel
    async import (userId, actId) {
        const { ctx, app, service } = this;
        const act = await service.activity.findActById(actId); // 查询活动
        if (!act) {
            return false;
        }
        const stream = await ctx.getFileStream();
        const originalName = path.basename(stream.filename);
        const fileName = generateUUID() + originalName.substr(originalName.lastIndexOf('.'));
        const target = path.join(app.config.uploadDir, fileName);
        const writeStream = fs.createWriteStream(target);
        try {
            await awaitWriteStream(stream.pipe(writeStream));
            // console.log('target:', target);
            const xlsxContent = Xlsx.parse(target);
            // console.log('excel parse====');
            // console.log(JSON.stringify(xlsxContent));
            const xlsxData = xlsxContent[0].data; // 二维数组
            let row = null;
            if (xlsxData && xlsxData.length > 2) {
                let addCount = 0;
                for (let i = 1; i < xlsxData.length; i++) {
                    row = xlsxData[i];
                    if (row.length && row.length >= 3) {
                        addCount = addCount + 1;
                        await ctx.model.Player.create({
                            name: row[0],
                            tel: row[1],
                            remark: '',
                            pictures: '[]',
                            introduce: '',
                            address: row[2] || row[3] || '',
                            status: '2',
                            type: '2',
                            actId: actId,
                            userId: '',
                            totalVotes: 0,
                            diamondVotes: 0,
                            adjustVotes: 0,
                            cashGift: 0,
                            no: addCount,
                            p0: act.p0,
                            p1: act.p1,
                            createUserId: act.createUserId
                        });
                    }
                }
                await act.update({ playerCount: act.playerCount + addCount }); // 活动的报名数+1
            }
            return true;
        } catch (err) {
            await sendToWormhole(stream); // 必须将上传的文件流消费掉，要不然浏览器响应会卡死
            throw err;
        }
    }
    // 设置为今日之星
    async star (id) {
        const ctx = this.ctx;
        const player = await ctx.model.Player.findByPk(id);
        if (player && player.status == '2') { // 正常状态才可设置为今日之星
            // 查找对应的活动
            const act = await ctx.model.Activity.findByPk(player.actId);
            if (act) {
                await act.update({ starPlayer: id });
                return true;
            } else {
                return false;
            }
        } else {
            return false;
        }
    }
    // 管理员调票
    async addSysVote (params) {
        const ctx = this.ctx;
        const playerId = params.playerId;
        const player = await ctx.model.Player.findByPk(playerId);
        if (player) {
            // 该选手的总票数和系统调票数+count
            const count = parseInt(params.count);
            await player.update({
                adjustVotes: player.adjustVotes + count,
                totalVotes: player.totalVotes + count
            })
            // 活动的票数+count
            const actId = player.actId;
            const act = await ctx.model.Activity.findByPk(actId);
            if (act) {
                await act.update({ voteCount: act.voteCount + count, popularity: act.popularity + count * 1.5 });
            }
            // 生成一条投票记录
            await ctx.model.Vote.create({
                actId: actId,
                playerId: params.playerId,
                voter: '00000',
                type: '1',
                voteNum: count,
                diamondAmount: 0,
                createUserId: act.createUserId,
                p0: act.p0,
                p1: act.p1
            });
            return true;
        } else {
            return false
        }
    }
    // 删除选手
    async del (id) {
        const ctx = this.ctx;
        const player = await ctx.model.Player.findByPk(id);
        if (!player || player.status == '0') {
            return false;
        }
        const prevStatus = player.status; // 之前的状态
        await player.update({ status: '0' }); // 状态更改为0
        if (prevStatus == '2' || prevStatus == '3') {
            // 在活动中对应的 playerCount -1
            const act = await ctx.model.Activity.findByPk(player.actId);
            if (act) {
                await act.update({ playerCount: act.playerCount - 1 })
            }
        }
        ctx.service.logs.add(`删除选手${player.name}`)
        return true;
    }
    // 导出
    async export (actId, actName) {
        const ctx = this.ctx;
        const data = await ctx.model.Player.findAll({
            where: { actId },
            order: [['no', 'ASC']]
        });
        const workBook = new Excel.Workbook();
        workBook.creator = 'votesys';
        workBook.lastModifiedBy = 'votesys';
        workBook.created = new Date();
        workBook.modified = new Date();
        const sheet = workBook.addWorksheet('选手名单');
        sheet.properties.defaultRowHeight = 25;
        sheet.getCell('A1').value = actName;
        sheet.mergeCells('A1:C1');
        sheet.getCell('A2').value = '商家编号';
        sheet.getCell('B2').value = '商家名称';
        sheet.getCell('C2').value = '联系方式';
        let pos = 3;
        data.forEach(item => {
            sheet.getCell(`A${pos}`).value = item.no;
            sheet.getCell(`B${pos}`).value = item.name;
            sheet.getCell(`C${pos}`).value = item.tel;
            pos = pos + 1;
        })
        sheet.getRow(1).height = 50;
        // sheet.getRow(1).font = {
        //     size: 15, bold: true, color: { argb: 'FFFF6666'}, family: 'Microsoft Yahei'
        // }
        // sheet.getRow(2).font = {
        //     bold: true, family: 'Microsoft Yahei', size: 12
        // }
        sheet.getRow(2).height = 28;
        const style1 = { vertical: 'middle', horizontal: 'center', wrapText: true }
        sheet.getColumn('A').alignment = style1;
        sheet.getColumn('B').alignment = style1;
        sheet.getColumn('C').alignment = style1;
        sheet.getColumn('A').width = 12;
        sheet.getColumn('B').width = 60;
        sheet.getColumn('C').width = 30;

        // const style2 = { bgColor:{ argb:'FF409EFF' }, type: 'pattern', pattern:'lightGrid' };
        // sheet.getCell('A2').fill = style2;
        // sheet.getCell('B2').fill = style2;
        // sheet.getCell('C2').fill = style2;

        /*for (let i = 3; i < pos; i++) {
            sheet.getCell(`A${i}`).border = { left: { style: 'thin' }};
            sheet.getCell(`C${i}`).border = { right: { style: 'thin' }};
        }
        sheet.getCell(`A${pos-1}`).border.bottom = { style: 'thin' };
        sheet.getCell(`B${pos-1}`).border = { bottom: { style: 'thin' }};
        sheet.getCell(`C${pos-1}`).border.bottom = { style: 'thin' };
        sheet.getCell('A2').border = { left: { style: 'thin' }, top: { style: 'thin' } };
        sheet.getCell('B2').border = { top: { style: 'thin' } };
        sheet.getCell('C2').border = { right: { style: 'thin' }, top: { style: 'thin' } };
        */
        const fileName = actName + '.xlsx';
        ctx.set('Content-Type', 'application/vnd.openxmlformats');
        ctx.set('Content-Disposition', "attachment;filename*=UTF-8' '" + encodeURIComponent(fileName));
        ctx.body = await workBook.xlsx.writeBuffer();
    }
    // 更新选手的备注
    async updateRemark (id, remark) {
        const ctx = this.ctx;
        const player = await ctx.model.Player.findByPk(id);
        if (!player) {
            return false;
        }
        await player.update({ remark });
        return true;
    }
    // 更改选手的状态
    async changeStatus (id, status) {
        const ctx = this.ctx;
        const player = await ctx.model.Player.findByPk(id);
        if (!player) {
            return false;
        }
        const prevStatus = player.status; // 之前的状态
        await player.update({ status });
        let needCountChange = 0; // 是否需要 在act中减少-1
        const tag1 = (prevStatus == '2' || prevStatus == '3')
        const tag2 = (status == '2' || status == '3')
        if (tag1 && !tag2) {
            needCountChange = -1;
        } else if (!tag1 && tag2) {
            needCountChange = 1;
        }
        if (needCountChange != 0) { // 需要更新playerCount
            const act = await ctx.model.Activity.findByPk(id);
            if (act) {
                await act.update({ playerCount: act.playerCount + needCountChange })
            }
        }
        ctx.service.logs.add(`更改选手：${player.name}状态为${status}`);
        await ctx.service.io.send(player, 'UnAduitPlayerNumChange');
        return true;
    }
    // 查询选手
    async findPlayerById (id) {
        const ctx = this.ctx;
        return await ctx.model.Player.findByPk(id);
    }
    // 查询微信用户是否已经报名参加
    async isSigned (userId, actId) {
        const ctx = this.ctx;
        const res = await ctx.model.Player.findOne({
            where: {
                userId, actId
            }
        })
        return res;
    }
    // 微信报名
    async sign (params) {
        const ctx = this.ctx;
        const act = await this.service.activity.findActById(params.actId); // 查询活动
        const nowTime = (+new Date());
        // 当前是否在报名时间范围之内
        if (nowTime > act.signUpStartTime.getTime() && nowTime < act.signUpEndTime.getTime()) {
            if (act.needAudit == '1') { // 需要审核
                params.status = '1';
            } else {
                params.status = '2';
            }
            const uid = ctx.request.header.uid || ctx.query.uid;
            params.userId = uid;
            const res = await this.create(params, act);
            if (params.status == '1') {
                await ctx.service.io.send(act, 'UnAduitPlayerNumChange');
            }
            return res;
        } else {
            return false
        }
    }
    // 创建选手
    async create (params, act) {
        const ctx = this.ctx;
        if (!act) {
            act = await this.service.activity.findActById(params.actId); // 查询活动
        }
        if (act) {
            const Sequelize = ctx.app.Sequelize;
            // 选手的编号,依次生成,查询当前活动下的选手数目
            const numCount = await ctx.model.query("SELECT count(*) as num from player where actId = :actId and status != '0'", {
                type: Sequelize.QueryTypes.SELECT,
                replacements: { actId: params.actId }
            });
            const no = numCount[0].num + 1 // 选手编号

            const res = await ctx.model.Player.create({
                name: params.name,
                tel: params.tel,
                remark: params.remark || '',
                pictures: params.pictures,
                introduce: params.introduce,
                address: params.address,
                status: params.status,
                type: params.type,
                actId: params.actId,
                userId: params.userId,
                imgWidth: params.imgWidth || 0,
                imgHeight: params.imgHeight || 0,
                totalVotes: 0,
                diamondVotes: 0,
                adjustVotes: 0,
                cashGift: 0,
                no,
                p0: act.p0,
                p1: act.p1,
                createUserId: act.createUserId
            })
            if (params.status == '2') {
                await act.update({ playerCount: act.playerCount + 1 }); // 活动的报名数+1
            }
            ctx.service.logs.add(`创建选手:${params.name}`);
            return res;
        } else {
            return false
        }
    }
    // 修改选手
    async update (id, params) {
        const ctx = this.ctx;
        const player = await ctx.model.Player.findByPk(id);
        if (player) {
            await player.update({
                address: params.address,
                tel: params.tel,
                remark: params.remark,
                name: params.name,
                pictures: params.pictures,
                introduce: params.introduce,
                imgWidth: params.imgWidth || 0,
                imgHeight: params.imgHeight || 0
            });
            return true
        } else {
            return false
        }
    }
    // 统计选手数目
    async count (uid) {
        const ctx = this.ctx;
        const Sequelize = ctx.app.Sequelize;
        const res = await ctx.model.query('SELECT status, count(*) as num from `player` where createUserId = :uid or p0 = :uid or p1 = :uid group by status', {
            type: Sequelize.QueryTypes.SELECT,
            replacements: { uid }
        });
        return res;
    }
    // 判定是否可以打赏
    async canReward (actId, playerId) {
        const ctx = this.ctx;
        const appDict = ctx.app.dict;
        // 1.打赏总开关是否开启
        if (appDict.rewardSwitch != '1') {
            return {
                result: false, message: '系统关闭了打赏!'
            }
        }
        // 2.活动的打赏开关
        const act = await ctx.model.Activity.findByPk(actId);
        if (act.needDiamond != '1') {
            return {
                result: false, message: '活动关闭了打赏!'
            }
        }
        // 3.判定活动是否已到投票时间
        const nowTime = (+ new Date());
        if (nowTime < act.voteStartTime.getTime()) {
            return {
                result: false, message: '未到投票时间!'
            }
        } else if (nowTime > act.voteEndTime.getTime() + 0 * 60 * 1000) {
            return {
                result: false, message: '已过投票时间!'
            }
        }
        // 4.判定活动是否关闭
        if (act.status == '5') {
            return {
                result: false, message: '活动已关闭!'
            }
        }
        // 5.判定该选手的状态是否正常
        const player = await ctx.model.Player.findByPk(playerId);
        const playerStatus = player.status;
        // 5.1 是否已删除
        if (playerStatus == '0') {
            return {
                result: false, message: '该选手已删除!'
            }
        }
        // 5.2 是否未审核
        if (playerStatus == '1') {
            return {
                result: false, message: '该选手还未审核!'
            }
        }
        // 5.3 是否未通过审核
        if (playerStatus == '4') {
            return {
                result: false, message: '该选手未通过审核!'
            }
        }
        // 5.4 是否已禁止投票
        if (playerStatus == '3') {
            return {
                result: false, message: '该选手已被禁止投票!'
            }
        }
        if (playerStatus == '2') {
            return {
                result: true, message: ''
            }
        } else {
            return { result: false, message: '' }
        }
    }
}
module.exports = PlayerService;
