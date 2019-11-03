/**
 * 每隔1.5小时获取微信的Access Token
 */
const Subscription = require('egg').Subscription;
class UpdateWxAccessToken extends Subscription {
    static get schedule() {
        return {
            interval: '90m',
            type: 'all',
            immediate: true
        }
    }
    async subscribe () {
        const ctx = this.ctx;
        await ctx.service.dict.getAll();
        await ctx.service.wx.getAccessToken();
    }
}
module.exports = UpdateWxAccessToken;
