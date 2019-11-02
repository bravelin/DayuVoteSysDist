/**
 * 更新活动的状态
 */
const Subscription = require('egg').Subscription;
class endAct extends Subscription {
    static get schedule() {
        return {
            type: 'all',
            cron: '0 3 21 * * *'
        }
    }
    async subscribe () {
        console.log('================活动状态定时更新。。。。。。')
        const res = await this.ctx.model.query('call UpdateActStatus();');
        console.log('call UpdateActStatus().....', res[0])
    }
}
module.exports = endAct;
