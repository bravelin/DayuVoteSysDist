/**
 * 每隔15天重新获取百度语音合成接口的Access Token
 */
const Subscription = require('egg').Subscription;
class UpdateBaiduAiToken extends Subscription {
    static get schedule() {
        return {
            interval: '15d',
            type: 'all',
            immediate: true
        }
    }
    async subscribe () {
        const ctx = this.ctx;
        await ctx.service.dict.getAll();
        await ctx.service.sys.getBaiduAccessToken();
    }
}
module.exports = UpdateBaiduAiToken;
