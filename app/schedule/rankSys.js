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
        let actId = '';
        let players = null;
        console.log('需要推送的players...')
        for (let i = 0; i < acts.length; i++) {
            actId = acts[i].id;
            console.log('actId...', actId);
            // 查询该活动排名前两位的选手
            players = await ctx.service.player.queryTopPlayers(actId, 3);
            console.log('players...', players);
        }
    }
}
module.exports = rankSys;
