/** 系统字典表 Dict Model */
const db = require('../db')
module.exports = app => {
    const { STRING } = app.Sequelize;
    const Dict = db.defineModel(app, 'dict', {
        dictKey: {
            type: STRING,
            allowNull: false
        },
        dictValue: {
            type: STRING
        }
    })
    return Dict
}
