'use strict';
const Service = require('egg').Service;

const fimilyNames = ['赵', '钱', '孙', '李', '周', '吴', '郑', '王', '冯', '陈','褚', '卫', '蒋', '沈', '韩',
'杨', '朱', '秦', '尤', '许', '何', '吕', '施', '张', '孔', '曹', '严', '华', '金', '魏', '陶', '姜', '戚', '谢',
'邹', '喻', '柏', '水', '窦', '章', '云', '苏', '潘', '葛', '奚', '范', '彭', '郎', '鲁', '韦', '昌', '马', '苗',
'凤', '花', '方', '俞', '任', '袁', '柳', '酆', '鲍', '史', '唐', '费', '廉', '岑', '薛', '雷', '贺', '倪', '汤',
'滕', '殷', '罗', '毕', '郝', '邬', '安', '常', '乐', '于', '时', '傅', '皮', '卞', '齐', '康', '伍', '余', '元',
'卜', '顾', '孟', '平', '黄', '和', '穆', '萧', '尹'];

const givenNames = ['子璇', '淼', '国栋', '夫子', '瑞堂', '甜', '敏', '尚', '国贤', '贺祥', '晨涛', '昊轩', '易轩',
'益辰', '益帆', '益冉', '瑾春', '瑾昆', '春齐', '杨', '文昊', '东东', '雄霖', '浩晨', '熙涵', '溶溶', '冰枫', '欣欣',
'宜豪', '欣慧', '建政', '美欣', '淑慧', '文轩', '文杰', '欣源', '忠林', '榕润', '欣汝', '慧嘉', '新建', '建林', '亦菲',
'林', '冰洁', '佳欣', '涵涵', '禹辰', '淳美', '泽惠', '伟洋', '涵越', '润丽', '翔', '淑华', '晶莹', '凌晶', '苒溪', '雨涵',
'嘉怡', '佳毅', '子辰', '佳琪', '紫轩', '瑞辰', '昕蕊', '萌', '明远', '欣宜', '泽远', '欣怡', '佳怡', '佳惠', '晨茜', '晨璐',
'运昊', '汝鑫', '淑君', '晶滢', '润莎', '榕汕', '佳钰', '佳玉', '晓庆', '一鸣', '语晨', '添池', '添昊', '雨泽', '雅晗', '雅涵',
'清妍', '诗悦', '嘉乐', '晨涵', '天赫', '玥傲', '佳昊', '天昊', '萌萌', '若萌'];

class UserService extends Service {
    async findByOpenId (openId) {
        const ctx = this.ctx;
        return await ctx.model.User.findOne({
            where: { openId }
        });
    }
    async getById (id) {
        const ctx = this.ctx;
        return await ctx.model.User.findByPk(id)
    }
    // 创建新用户
    async create (options) {
        const { ctx, service } = this;
        const ip = ctx.req.headers['x-forwarded-for'] || ctx.req.connection.remoteAddress;
        const placeObj = await service.sys.getIpPlaceOwnership(ip)
        const userObj = {
            openId: options.openid,
            accessToken: options.access_token,
            refreshToken: options.refresh_token,
            expireTime: parseInt((new Date().getTime() + 7200)/1000),
            nickName: fimilyNames[parseInt(Math.random() * (fimilyNames.length - 1))] + givenNames[parseInt(Math.random() * (givenNames.length - 1))],
            sex: ' ',
            ip
        };
        if (placeObj) {
            userObj.country = placeObj.country || '';
            userObj.province = placeObj.province || '';
            userObj.city = placeObj.city || '';
            userObj.area = placeObj.area || '';
        }
        const user = await ctx.model.User.create(userObj);
        return user;
    }
    // 更新用户的Ip地址信息
    async updateUserInfo (user) {
        console.log('更新用户的Ip地址信息....')
        const { ctx, service } = this;
        const ip = user.ip || ctx.req.headers['x-forwarded-for'] || ctx.req.connection.remoteAddress;
        const placeObj = await service.sys.getIpPlaceOwnership(ip);
        const updateObj = { ip };
        if (placeObj) {
            updateObj.country = placeObj.country || '';
            updateObj.province = placeObj.province || '';
            updateObj.city = placeObj.city || '';
            updateObj.area = placeObj.area || '';
        }
        await user.update(updateObj);
    }
    // 校验token
    async verifyToken (data) {
        const { app } = this;
        // console.log('verfily service', data);
        return new Promise((resolve, reject) => {
            app.jwt.verify(data, app.config.jwt.secret2, (err, decoded) => {
                const res = {}
                if (err) {
                    res.verify = false;
                    res.message = err.message;
                } else {
                    res.verify = true;
                    res.message = decoded;
                }
                resolve(res)
            })
        })
    }
}
module.exports = UserService;
