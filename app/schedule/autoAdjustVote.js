/**
 * 自动调票, 调用存储过程 actadjust
 */
const Subscription = require('egg').Subscription;
let timer = null
class AutoAdjustVote extends Subscription {
    static get schedule() {
        return {
            interval: '30m', // xx分钟调一次
            type: 'all',
            immediate: false
        }
    }
    async subscribe () {
        // await this.ctx.model.query('call ActAdjust();');
        const ctx = this.ctx;
        const Sequelize = ctx.app.Sequelize;
        const acts = await ctx.model.query("select * from activity where status = '3' and autoAdjust = '1'", {
            type: Sequelize.QueryTypes.SELECT
        });
        const model = ctx.model
        console.log('自动调票....', acts.length)
        if (acts.length > 0) {
            this.doAdjust(0, acts, model)
        }
        // for (let i = 0; i < acts.length; i++) {
        //     await model.query(`call SingleActAdjust('${acts[i].id}');`);
        // }
    }
    async doAdjust (i, acts, model) {
        console.log('i...', i)
        await model.query(`call SingleActAdjust('${acts[i].id}');`);
        console.log(acts[i].title + '...')
        i = i + 1
        if (i < acts.length) {
            timer = setTimeout(() => {
                this.doAdjust(i, acts, model);
            }, 5000)
        } else {
            clearTimeout(timer);
        }
    }
}
module.exports = AutoAdjustVote;
