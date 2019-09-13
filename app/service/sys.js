'use strict';
const Service = require('egg').Service;

class SysService extends Service {
    async getBaiduAccessToken() { // 获取百度AI的accss_token
        const { ctx } = this;
        const grant_type = 'client_credentials';
        const client_id = 'TGfEV1qYvvOZjWvweN8YiXzV';
        const client_secret = 'XTGKuaZDQGdxcZydZRQgev9L8HAytqD1';
        const res = await ctx.curl(`https://openapi.baidu.com/oauth/2.0/token?grant_type=${grant_type}&client_id=${client_id}&client_secret=${client_secret}`, {
            dataType: 'json'
        })
        ctx.app.baidu_access_token = res.data.access_token;
        console.log('ctx.app.baidu_access_token:', ctx.app.baidu_access_token);
    }
    async tts (text) { // 文本转语音
        let res = await this.text2audio(text);
        if (res.headers['content-type'] == 'audio/json') {
            await this.getBaiduAccessToken();
            res = await this.text2audio(str);
        }
        return res;
    }
    async text2audio (str) {
        const { ctx } = this;
        return await ctx.curl(`https://tsn.baidu.com/text2audio`, {
            method: 'POST',
            data: {
                tex: str,
                lan: 'zh',
                cuid: 'vote-sys',
                ctp: '1',
                aue: '3',
                per: '0',
                tok: ctx.app.baidu_access_token
            }
        });
    }
    async getIpPlaceOwnership (ip) { // 获取IP地址的归属地
        const ctx = this.ctx;
        const app = ctx.app;
        const config = app.config.ipPlaceOwnership;
        if (!ip) {
            return
        }
        try{
            const res = await ctx.curl(`${config.queryUrl}?ip=${ip}`, {
                dataType: 'json',
                headers: {
                    'Authorization': `APPCODE ${config.appCode}`
                }
            });
            console.log('查询IP地址的归属地...', ip);
            console.log(res.data);
            const resData = res.data;
            if (resData.ret == 200) { // 正常返回
                const { country, prov, city, area } = resData.data;
                return {
                    country, province: prov, city, area
                };
            }
            return null;
        } catch (err) {
            console.log('IP归属地查询ERROR...', err);
            return null;
        }
    }
}
module.exports = SysService;
