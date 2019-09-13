/** 用户访问记录表 Model */
const db = require('../db')
module.exports = app => {
    const { STRING } = app.Sequelize;
    const Visit = db.defineModel(app, 'visit', {
        actId: {
            type: STRING,
            allowNull: false
        },
        userId: {
            type: STRING
        },
        playerId: {
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
    return Visit;
}
