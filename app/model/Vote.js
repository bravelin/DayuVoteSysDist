/** 投票记录 Model */
const db = require('../db')
module.exports = app => {
    const { STRING, INTEGER } = app.Sequelize;
    const Vote = db.defineModel(app, 'vote', {
        actId: {
            type: STRING,
            allowNull: false
        },
        playerId: {
            type: STRING,
            allowNull: false
        },
        type: {
            type: STRING
        },
        voteNum: {
            type: INTEGER,
            defaultValue: 0
        },
        diamondAmount: {
            type: INTEGER,
            defaultValue: 0
        },
        voter: {
            type: STRING
        },
        createUserId: {
            type: STRING,
            allowNull: false
        },
        p0: {
            type: STRING
        },
        p1: {
            type: STRING
        }
    })
    return Vote;
}
