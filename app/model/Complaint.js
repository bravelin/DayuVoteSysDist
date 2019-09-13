/** 投诉建议 Complaint Model */
const db = require('../db')
module.exports = app => {
    const { STRING } = app.Sequelize;
    const Complaint = db.defineModel(app, 'complaint', {
        userId: {
            type: STRING,
            allowNull: false
        },
        name: {
            type: STRING,
            allowNull: false
        },
        content: {
            type: STRING,
            allowNull: false
        },
        tel: {
            type: STRING
        },
        actId: {
            type: STRING
        },
        status: {
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
    return Complaint
}
