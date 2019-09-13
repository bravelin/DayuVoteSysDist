'use strict';
const Service = require('egg').Service;
const ueditorConfig = require('../ue.config');
const path = require('path');
const sendToWormhole = require('stream-wormhole');
const uuidv1 = require("uuid/v1");
const fs = require('fs');
const awaitWriteStream = require('await-stream-ready').write;

function generateUUID() {
    return uuidv1().replace(/-/g, "");
}

// fastDFS客户端实例
const fdfs = require('fdfs')
const fdfsClient = new fdfs({
    trackers: [
        {
            host: '0.0.0.0',
            port: 22122
        }
    ],
    timeout: 10000,
    charset: 'utf8'
})

function generateUUID() {
    return uuidv1().replace(/-/g, "");
}

class UeService extends Service {
    async getConfig() {
        return ueditorConfig;
    }
    async uploadImage() { // 处理图片上传
        const { ctx, app } = this;
        const stream = await ctx.getFileStream();
        const originalName = path.basename(stream.filename); // 原文件名
        const fileType = stream.mimeType;
        const fileExt = (fileType && fileType.indexOf('/') > 0) ? fileType.split('/')[1] : (fileType || '') // 文件后缀
        const tempFileName = generateUUID() + '.' + fileExt;
        const tempFilePath = path.join(app.config.uploadFastDfsDir, tempFileName);
        const writeStream = fs.createWriteStream(tempFilePath);
        try {
            // 先存到临时文件夹下
            // console.log('fileExt...', fileExt);
            // console.log('originalName...', originalName);
            // console.log('tempFileName...', tempFileName, tempFilePath);
            await awaitWriteStream(stream.pipe(writeStream));
            const fileId = await fdfsClient.upload(tempFilePath);
            // console.log('fileId....', fileId);
            const generateName = fileId.substr(fileId.lastIndexOf('/') + 1);
            const fileStat = fs.statSync(tempFilePath);
            const res = {
                originalName,
                name: generateName,
                type: fileType,
                url: app.config.picHost + fileId,
                size: fileStat.size,
                state: 'SUCCESS'
            }
            // console.log('res...', res);
            fs.unlinkSync(tempFilePath); // 删除临时文件
            return res;
        } catch (err) {
            await sendToWormhole(stream); // 必须将上传的文件流消费掉，要不然浏览器响应会卡死
            throw err;
        }
    }
}
module.exports = UeService;
