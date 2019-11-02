/**
 * 推送冠亚军至ranksys
 */
const Subscription = require('egg').Subscription;
class rankSys extends Subscription {
    static get schedule() {
        return {
            type: 'all',
            cron: '0 10 21 * * *',
            immediate: true
        }
    }
    async subscribe () {
        const ctx = this.ctx;
        const acts = await ctx.service.activity.queryNeedRankSysAct();
        let actId = ''
        let players = null
        for (let i = 0; i < acts.length; i++) {
            actId = acts[i].id
            // 查询该活动排名前两位的选手
            players = await ctx.service.player.queryTopPlayers(actId, 2);
        }
    }
}
module.exports = rankSys;
