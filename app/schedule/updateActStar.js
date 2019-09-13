/**
 * 每晚10点更新活动的今日之星
 */
const Subscription = require('egg').Subscription;
class UpdateActStar extends Subscription {
    static get schedule() {
        return {
            type: 'all',
            cron: '0 0 22 * * *'
        }
    }
    async subscribe () {
        await this.ctx.model.query('call UpdateActStar();');
    }
}
module.exports = UpdateActStar;
