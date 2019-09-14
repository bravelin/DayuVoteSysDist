/** 投票活动 Model */
const db = require('../db')
module.exports = app => {
    const { STRING, DATE, INTEGER, FLOAT } = app.Sequelize;
    const Activity = db.defineModel(app, 'activity', {
        title: {
            type: STRING,
            allowNull: false
        },
        signUpStartTime: {
            type: DATE,
            allowNull: false
        },
        signUpEndTime: {
            type: DATE,
            allowNull: false
        },
        voteStartTime: {
            type: DATE,
            allowNull: false
        },
        voteEndTime: {
            type: DATE,
            allowNull: false
        },
        maxTotalVoteNumber: {
            type: INTEGER,
            defaultValue: 0
        },
        maxDayVoteNumber: {
            type: INTEGER,
            defaultValue: 0
        },
        maxTotalVotePlayer: {
            type: INTEGER,
            defaultValue: 0
        },
        needDiamond: {
            type: STRING,
            allowNull: false,
            defaultValue: '0'
        },
        needAudit: {
            type: STRING,
            allowNull: false,
            defaultValue: '0'
        },
        pictures: {
            type: STRING
        },
        content: {
            type: STRING
        },
        description: {
            type: STRING
        },
        popularity: {
            type: FLOAT
        },
        backgroundMusic: {
            type: STRING
        },
        prizes: {
            type: STRING
        },
        remark: {
            type: STRING
        },
        status: {
            type: STRING // 0-删除  1-未开始  2-正在报名  3-正在投票  4-活动已结束  5-活动已关闭
        },
        createUserId: {
            type: STRING,
            allowNull: false
        },
        createRealName: {
            type: STRING,
            allowNull: false
        },
        p0: {
            type: STRING
        },
        p1: {
            type: STRING
        },
        autoAdjust: {
            type: STRING,
            defaultValue: '0'
        },
        starPlayer: {
            type: STRING
        },
        visitCount: {
            type: INTEGER,
            defaultValue: 0
        },
        playerCount: {
            type: INTEGER,
            defaultValue: 0
        },
        moneyCount: {
            type: INTEGER,
            defaultValue: 0
        },
        voteCount: {
            type: INTEGER,
            defaultValue: 0
        }
    })
    return Activity
}
