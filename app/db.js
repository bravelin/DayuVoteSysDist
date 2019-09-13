const uuidv1 = require("uuid/v1");
function generateUUID() {
    return uuidv1().replace(/-/g, "");
}
function defineModel(app, name, attributes) {
    const { UUID } = app.Sequelize;
    let attrs = {};
    for (let key in attributes) {
        let value = attributes[key];
        if (typeof value === "object" && value["type"]) {
            value.allowNull = value.allowNull || true;
            attrs[key] = value;
        } else {
            attrs[key] = {
                type: value,
                allowNull: true
            };
        }
    }

    if (!attrs.id) { // 交易表中的订单ID在创建订单之前会生成
        attrs.id = {
            type: UUID,
            primaryKey: true,
            defaultValue: () => {
                return generateUUID();
            }
        };
    }

    return app.model.define(name, attrs, {
        createdAt: "createdAt",
        updatedAt: "updatedAt",
        freezeTableName: true
    });
}
module.exports = { defineModel };
