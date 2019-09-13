const crypto = require('crypto');

// 加密的key
const aesKey = '20191201081721kZ'
const aesIv = [...aesKey].reverse().join('')

// AES解密
exports.aesDecrypt = (encrypted) => {
    const decipher = crypto.createDecipheriv('aes-128-cbc', aesKey, aesIv);
    let decrypted = decipher.update(encrypted, 'hex', 'utf8');
    decrypted += decipher.final('utf8');
    return decrypted;
}
// 获取token
exports.getAccessToken = ctx => {
    const bearerToken = ctx.request.header.authorization || ctx.query.Authorization;
    return bearerToken ? bearerToken.replace('Bearer ', '') : ''
}
// 校验token
exports.verifyToken = async (ctx) => {
    const token = this.getAccessToken(ctx);
    let verifyResult;
    if (ctx.query.verifyType == 'client') {
        verifyResult = await ctx.service.user.verifyToken(token);
    } else {
        verifyResult = await ctx.service.managers.verifyToken(token);
    }
    if (!verifyResult.verify) {
        ctx.helper.success(ctx, null, verifyResult.message, 401);
        return false;
    }
    const userId = ctx.request.header.uid || ctx.query.uid;
    if (userId != verifyResult.message.id) {
        ctx.helper.success(ctx, null, "用户ID与Token不一致!", 401);
        return false;
    }
    return true;
};
// 处理成功响应
exports.success = (ctx, result = null, message = "success", code = 200, status = 200) => {
    ctx.body = {
        code: code,
        message: message,
        data: result
    };
    ctx.status = status;
};
// 处理失败响应
exports.error = (ctx, code, message) => {
    ctx.body = {
        code: code,
        message: message
    };
    ctx.status = code;
};

exports.formatTime = (date, format = 'yyyy-MM-dd hh:mm:ss') => {
    const o = {
        'M+': date.getMonth() + 1,
        'd+': date.getDate(),
        'h+': date.getHours(),
        'm+': date.getMinutes(),
        's+': date.getSeconds(),
        'q+': Math.floor((date.getMonth() + 3) / 3),
        'S': date.getMilliseconds()
    }

    if (/(y+)/.test(format)) {
        format = format.replace(RegExp.$1, (date.getFullYear() + '').substr(4 - RegExp.$1.length))
    }

    for (let k in o) {
        if (new RegExp('(' + k + ')').test(format)) {
            format = format.replace(RegExp.$1, RegExp.$1.length == 1 ? o[k] : ('00' + o[k]).substr(('' + o[k]).length))
        }
    }
    return format
};
