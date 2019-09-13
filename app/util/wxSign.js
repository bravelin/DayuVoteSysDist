/**
 * 微信签名
 */
const Sha1 = require('sha1');
const createNonceStr = () => {
    return Math.random().toString(36).substr(2, 15);
};
const createTimestamp = () => {
    return parseInt(new Date().getTime() / 1000) + '';
};
exports.sign = (ticket, url) => {
    const ret = {
        noncestr: createNonceStr(),
        timestamp: createTimestamp(),
        url
    };
    // console.log('ticket...', ticket);
    // console.log('url...', url);
    const str = `jsapi_ticket=${ticket}&noncestr=${ret.noncestr}&timestamp=${ret.timestamp}&url=${url}`;
    ret.signature = Sha1(str);
    // console.log(ret);
    return ret;
}
