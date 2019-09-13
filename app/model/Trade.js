/** 交易表 Model */
const db = require('../db')
module.exports = app => {
    const { STRING, INTEGER } = app.Sequelize;
    const Trade = db.defineModel(app, 'trade', {
        userId: {
            type: STRING
        },
        prePayId: {
            type: STRING
        },
        totalFee: {
            type: INTEGER,
            defaultValue: 0
        },
        voteCount: {
            type: INTEGER,
            defaultValue: 0
        },
        ip: {
            type: STRING
        },
        place: {
            type: STRING
        },
        timeStart: {
            type: STRING
        },
        timeExpire: {
            type: STRING
        },
        timeEnd: {
            type: STRING
        },
        transactionId: {
            type: STRING
        },
        actId: {
            type: STRING
        },
        playerId: {
            type: STRING
        },
        createUserId: {
            type: STRING
        },
        p0: {
            type: STRING
        },
        p1: {
            type: STRING
        },
        status: {
            type: STRING
        }
    })
    return Trade;
}
