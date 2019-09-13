/**
 * 微信消息加解密处理
 */
const xml2js = require('xml2js');
const crypto = require('crypto');

const buildXML = new xml2js.Builder({
    rootName: 'xml',
    cdata: true,
    headless: true,
    renderOpts: {
        indent: '  ', pretty: 'true'
    }
});

let token = '';
let appId = '';
let aesKey = null;
let iv = '';

function init (ctx) {
    const config = ctx.app.config.wx;
    token = config.token;
    appId = config.appId;
    aesKey = new Buffer(config.encodingAESKey + '=', 'base64');
    iv = aesKey.slice(0, 16);
}

function encrypt (xmlMsg) {
    const random16 = crypto.pseudoRandomBytes(16);
    const msg = new Buffer(xmlMsg);
    const msgLength = new Buffer(4);
    msgLength.writeUInt32BE(msg.length, 0);
    const corpId = new Buffer(appId);
    const raw_msg = Buffer.concat([random16, msgLength, msg, corpId]); // randomString + msgLength + xmlMsg + this.corpID;
    //var encoded = PKCS7Encoder(raw_msg);
    const cipher = crypto.createCipheriv('aes-256-cbc', aesKey, iv);
    //cipher.setAutoPadding(false);
    const cipheredMsg = Buffer.concat([cipher.update(raw_msg), cipher.final()]);
    return cipheredMsg.toString('base64');
}

function decrypt (str) {
    const aesCipher = crypto.createDecipheriv('aes-256-cbc', aesKey, iv);
    aesCipher.setAutoPadding(false);
    let decipheredBuff = Buffer.concat([aesCipher.update(str, 'base64'), aesCipher.final()]);
    decipheredBuff = PKCS7Decoder(decipheredBuff);
    const len_netOrder_corpid = decipheredBuff.slice(16);
    const msg_len = len_netOrder_corpid.slice(0, 4).readUInt32BE(0);
    //recoverNetworkBytesOrder(len_netOrder_corpid.slice(0, 4));
    const result = len_netOrder_corpid.slice(4, msg_len + 4).toString();
    const thisAppId = len_netOrder_corpid.slice(msg_len + 4).toString();
    if (thisAppId != appId) throw new Error('appId is invalid');
    return result;
}

function getSignature (timestamp, nonce, encrypt) {
    const raw_signature = [token, timestamp, nonce, encrypt].sort().join('');
    const sha1 = crypto.createHash('sha1');
    sha1.update(raw_signature);
    return sha1.digest('hex');
}

function PKCS7Decoder (buff) {
    const pad = buff[buff.length - 1];
    if (pad < 1 || pad > 32) {
        pad = 0;
    }
    return buff.slice(0, buff.length - pad);
}

function PKCS7Encoder(buff) {
    var blockSize = 32;
    var strSize = buff.length;
    var amountToPad = blockSize - (strSize % blockSize);
    var pad = new Buffer(amountToPad-1);
    pad.fill(String.fromCharCode(amountToPad));
    return Buffer.concat([buff, pad]);
}

// 解析xml
exports.parseXml = (ctx, str) => {
    if (!token) {
        init(ctx);
    }
    const p = new Promise((resolve, reject) => {
        const parseString = xml2js.parseString;
        parseString(str, { explicitArray: false }, (err, json) => {
            if (json) {
                resolve(json.xml);
            } else {
                reject(err);
            }
        });
    })
    return p;
};

// 解密
exports.decryptMsg = (ctx, msgSignature, timestamp, nonce, data) => {
    if (!token) {
        init(ctx)
    }
    const msg_encrypt = data.Encrypt;
    if (getSignature(timestamp, nonce, msg_encrypt) != msgSignature) {
        throw new Error('msgSignature is not invalid');
    }
    const decryptedMessage = decrypt(msg_encrypt);
    console.log('解密出的decryptedMessage:', decryptedMessage);
    return decryptedMessage;
}

exports.encryptMsg = function (ctx, replyMsg, opts) {
    if (!token) {
        init(ctx)
    }
    const result = {};
    const options = opts || {};
    const msg = generateWxMessage(replyMsg);
    console.log('generateWxMessage:', msg);
    if (ctx.app.config.wx.encodingAESKey) { // 需要加密
        result.Encrypt = encrypt(msg);
        result.Nonce = options.nonce || parseInt((Math.random() * 100000000000), 10);
        result.TimeStamp = parseInt((options.timestamp || (+ new Date())) / 1000);
        result.MsgSignature = getSignature(result.TimeStamp, result.Nonce, result.Encrypt);
        return buildXML.buildObject(result);
    } else {
        return msg;
    }
};

function generateWxMessage (options) {
    const { toUserName, fromUserName, msgType, content, msgId } = options;
    return `<xml>
                <ToUserName><![CDATA[${toUserName}]]></ToUserName>
                <FromUserName><![CDATA[${fromUserName}]]></FromUserName>
                <CreateTime>${parseInt(new Date().getTime() / 1000)}</CreateTime>
                <MsgType><![CDATA[${msgType}]]></MsgType>
                <Content><![CDATA[${content}]]></Content>
                <MsgId>${msgId}</MsgId>
            </xml>`;
};
