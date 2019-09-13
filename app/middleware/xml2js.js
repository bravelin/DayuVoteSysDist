const wxCrypto = require('../util/wxCrypto');
module.exports = () => {
    return async (ctx, next) => {
        if (ctx.method === 'POST' && ctx.is('text/xml')) {
            const promise = new Promise((resolve, reject) => {
                let data = '';
                ctx.req.on('data', chunk => {
                    data += chunk;
                });
                ctx.req.on('end', () => {
                    console.log('从微信接收到的xml: ', data);
                    // console.log('query:', ctx.query);
                    wxCrypto.parseXml(ctx, data).then(result => {
                        console.log('xml 解析结果:', result);
                        // 支付回调不需要解密
                        if (result.trade_type != 'JSAPI' && ctx.app.config.wx.encodingAESKey) { // 需要解密
                            // 执行解密操作
                            console.log('执行解密操作........');
                            const query = ctx.query;
                            const message = wxCrypto.decryptMsg(ctx, query.msg_signature, query.timestamp, query.nonce, result);
                            console.log('解析出的message:', message);
                            wxCrypto.parseXml(ctx, message).then(res => {
                                console.log('最终解密得到的:', res);
                                resolve(res);
                            })
                        } else { // 明文方式
                            resolve(result);
                        }
                    }).catch(err => {
                        console.log('xml 解析error:', err);
                        reject(err);
                    });
                });
            });

            await promise.then(result => {
                ctx.req.body = result;
            }).catch(() => {
                ctx.req.body = '';
            });
        }
        await next();
    }
}
