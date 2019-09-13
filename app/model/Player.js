/** 选手 Model */
const db = require('../db')
module.exports = app => {
    const { STRING, INTEGER } = app.Sequelize;
    const Player = db.defineModel(app, 'player', {
        name: {
            type: STRING,
            allowNull: false
        },
        tel: {
            type: STRING
        },
        no: {
            type: INTEGER
        },
        introduce: {
            type: STRING
        },
        pictures: {
            type: STRING
        },
        remark: {
            type: STRING
        },
        type: {
            type: STRING
        },
        status: {
            type: STRING
        },
        totalVotes: {
            type: INTEGER,
            defaultValue: 0
        },
        diamondVotes: {
            type: INTEGER,
            defaultValue: 0
        },
        adjustVotes: {
            type: INTEGER,
            defaultValue: 0
        },
        cashGift: {
            type: INTEGER,
            defaultValue: 0
        },
        actId: {
            type: STRING
        },
        address: {
            type: STRING
        },
        createUserId: {
            type: STRING,
            allowNull: false
        },
        userId: {
            type: STRING
        },
        p0: {
            type: STRING
        },
        p1: {
            type: STRING
        }
    })
    return Player;
}
