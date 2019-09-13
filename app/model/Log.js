/** 系统操作日志 Log Model */
const db = require('../db')
module.exports = app => {
    const { STRING } = app.Sequelize;
    const Log = db.defineModel(app, 'log', {
        userId: {
            type: STRING,
            allowNull: false
        },
        content: {
            type: STRING,
            allowNull: false
        },
        userName: {
            type: STRING,
            allowNull: true
        }
    })
    return Log
}
