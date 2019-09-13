/** 管理员 Manager Model */
const db = require('../db')
module.exports = app => {
    const { STRING, DATE, INTEGER } = app.Sequelize;
    const Manager = db.defineModel(app, 'manager', {
        loginName: {
            type: STRING,
            allowNull: false
        },
        loginPassword: {
            type: STRING,
            allowNull: false
        },
        realName: {
            type: STRING,
            allowNull: false
        },
        lastLoginTime: {
            type: DATE,
            allowNull: false
        },
        p0: {
            type: STRING,
            allowNull: true
        },
        p1: {
            type: STRING,
            allowNull: true
        },
        role: {
            type: INTEGER,
            allowNull: false
        },
        miniPower: {
            type: STRING,
            allowNull: false
        }
    })
    return Manager
}
