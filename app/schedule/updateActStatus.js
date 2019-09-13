/**
 * 更新活动的状态
 */
const Subscription = require('egg').Subscription;
// const TenDayTime = 10 * 24 * 60 * 60 * 1000;
class UpdateActStatus extends Subscription {
    static get schedule() {
        return {
            interval: '5m',
            type: 'all',
            immediate: true
        }
    }
    async subscribe () {
        console.log('================活动状态定时更新。。。。。。')
        const res = await this.ctx.model.query('call UpdateActStatus();');
        console.log('call UpdateActStatus().....', res[0])
        // const ctx = this.ctx;
        // // 更新活动状态 状态码为 1 2 3 4的活动
        // const acts = await ctx.service.activity.queryAllNeedUpdateStatusAct();
        // // console.log('===============schedule status start================');
        // let act = null;
        // let now = (new Date()).getTime();
        // let newStatus = ''
        // let currStatus = ''
        // let signUpStartTime = 0
        // let voteStartTime = 0
        // let voteEndTime = 0
        // for (let i = 0; i < acts.length; i++) {
        //     act = acts[i];
        //     signUpStartTime = act.signUpStartTime.getTime();
        //     voteStartTime = act.voteStartTime.getTime();
        //     voteEndTime = act.voteEndTime.getTime();
        //     currStatus = act.status;
        //     if (now < signUpStartTime) {
        //         newStatus = '1';
        //     } else {
        //         newStatus = '2';
        //         if (now >= voteStartTime) {
        //             newStatus = '3';
        //             if (now >= voteEndTime) {
        //                 newStatus = '4';
        //                 if (now >= voteEndTime + TenDayTime) { // 投票结束10天之后,改成关闭状态
        //                     newStatus = '5'
        //                 }
        //             }
        //         }
        //     }
        //     if (newStatus != currStatus) { // 需要更新状态
        //         // console.log('***update status start', act.id, newStatus)
        //         await act.update({ status: newStatus });
        //         // console.log('***update status end', act.id, newStatus)
        //     }
        // }
        // console.log('===============schedule status over================');
    }
}
module.exports = UpdateActStatus;
