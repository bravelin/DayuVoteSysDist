'use strict';
const Service = require('egg').Service;
const path = require('path');
const sendToWormhole = require('stream-wormhole');
const uuidv1 = require("uuid/v1");
function generateUUID() {
    return uuidv1().replace(/-/g, "");
}
class DictService extends Service { // 查询所有
    async getAll() {
        const ctx = this.ctx;
        const data = await ctx.model.Dict.findAll();
        const dict = {}
        data.forEach(item => {
            dict[item.dictKey] = item.dictValue;
        })
        ctx.app.dict = dict;
        return data;
    }
    async doUpdate(params) { // 更新
        const ctx = this.ctx;
        const data = await ctx.model.Dict.findAll();
        let dictKey = null;
        let dict = null;
        if (data) {
            for (let i = 0; i < data.length; i++) {
                dict = data[i]
                dictKey = dict.dictKey
                if (params[dictKey] != dict.dictValue) {
                    await dict.update({ dictValue: params[dictKey] })
                }
            }
        }
        // 更新app
        const appDict = ctx.app.dict;
        Object.keys(appDict).forEach(key => {
            appDict[key] = params[key];
        });
        return true;
    }
    async upload (userId) {
        const { ctx } = this;
        const stream = await ctx.getFileStream();
        const originalName = path.basename(stream.filename);
        const fileType = stream.mimeType;
        const fileSize = stream.fields.size;
        const generateName = generateUUID() + originalName.substr(originalName.lastIndexOf('.'));
        const fileName = `music/${userId}/${generateName}`;
        let result = null;
        try {
            result = await ctx.oss.put(fileName, stream);
            return {
                originalName,
                name: generateName,
                type: fileType.substr(1),
                url: result.url,
                size: fileSize,
                state: 'SUCCESS'
            }
        } catch (err) {
            await sendToWormhole(stream); // 必须将上传的文件流消费掉，要不然浏览器响应会卡死
            throw err;
        }
    }
}
module.exports = DictService;
