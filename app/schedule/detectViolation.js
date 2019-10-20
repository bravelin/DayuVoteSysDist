/**
 * 检测刷票, 调用存储过程 DetectViolation
 */
const Subscription = require('egg').Subscription;
class DetectViolation extends Subscription {
    static get schedule() {
        return {
            interval: '20m', // 10分钟调一次
            type: 'all',
            immediate: true
        }
    }
    async subscribe () {
        await this.ctx.model.query('call DetectViolation();');
    }
}
module.exports = DetectViolation;
