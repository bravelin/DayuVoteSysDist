/** 微信用户 Model */
const db = require('../db')
module.exports = app => {
    const { STRING, INTEGER } = app.Sequelize;
    const User = db.defineModel(app, 'user', {
        openId: {
            type: STRING,
            allowNull: false
        },
        nickName: {
            type: STRING
        },
        sex: {
            type: STRING
        },
        province: {
            type: STRING
        },
        city: {
            type: STRING
        },
        area: {
            type: STRING
        },
        country: {
            type: STRING
        },
        headImgUrl: {
            type: STRING
        },
        ip: {
            type: STRING
        },
        accessToken: {
            type: STRING
        },
        refreshToken: {
            type: STRING
        },
        expireTime: {
            type: INTEGER,
            defaultValue: 0
        }
    })
    return User;
}
