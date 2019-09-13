/**
 * 每5天清理一次excel的上传目录
 */
const fs = require('fs');
const Subscription = require('egg').Subscription;
class DelUploadExcel extends Subscription {
    static get schedule() {
        return {
            interval: '5d',
            type: 'all',
            immediate: true
        }
    }
    async subscribe () {
        const ctx = this.ctx;
        const dir = ctx.app.config.uploadDir;
        const exists = fs.existsSync(dir);
        if (exists) {
            const filelist = fs.readdirSync(dir);
            let stats = null;
            filelist.forEach(fileName => {
                stats = fs.statSync(dir + fileName);
                if (!stats.isDirectory()) {
                    fs.unlinkSync(dir + fileName);
                }
            });
        }
    }
}
module.exports = DelUploadExcel;
