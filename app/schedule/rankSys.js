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
        let actTitle = '';
        let players = null;
        let player = null;
        const config = ctx.app.config;
        let res = null;
        for (let i = 0; i < acts.length; i++) {
            actId = acts[i].id;
            actTitle = acts[i].title;
            // 查询该活动排名前3位的选手
            players = await ctx.service.player.queryTopPlayers(actId, 3);
            for (let j = 0; j < players.length; j++) {
                player = players[j];
                res = await ctx.curl(config.ranksys, {
                    method: 'POST',
                    data: {
                        name: player.name,
                        tel: player.tel,
                        no: player.no,
                        introduce: player.introduce,
                        pictures: player.pictures,
                        picturePrefix: config.picHost,
                        remark: player.remark,
                        address: player.address,
                        totalVotes: player.totalVotes,
                        actId,
                        actTitle,
                        actRank: (j + 1) + '',
                        sysOrigin: config.rankorigin
                    },
                    dataType: 'json'
                });
                console.log('=====================res==================', res);
            }
            await ctx.service.activity.updateToRankSysStatus(actId);
        }
    }
}
module.exports = rankSys;
