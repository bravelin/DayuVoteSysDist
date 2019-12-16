'use strict';

module.exports = appInfo => {
    const config = exports = {};

    // use for cookie sign key, should change to your own and keep security
    config.keys = appInfo.name + '_1304934400905_520';

    config.sequelize = {
        dialect: 'mysql',
        host: 'localhost',
        port: '3306',
        username: 'root',
        password: 'root123XYZ@',
        database: 'votesys',
        pool: {
            max: 100,
            min: 0,
            idle: 200000,
            acquire: 1000000
        }
    };

    config.jwt = {
        secret: 'jii20l1809sYc',
        secret2: 'cbiYlall86Bi0jk'
    };

    config.ssl = {
        path: '.well-known/pki-validation/fileauth.txt',
        file: 'fileauth.txt'
    };

    config.wx = {
        mp_verify: 'MP_verify_jZtjDFBY8W7fM3Qs.txt',
        appId: 'wx80add522ed965f93',
        appSecret: 'fcad7bc17d31f4abb7afb3cffdefac43',
        encodingAESKey: 'VXyZ0B4b51QL53hs8nn9t0LFDtIQwwoffqkAFS7sHNb',
        token: 'DayuVoteSys2119',
        mchId: '1562108971', // 商户号
        mchSecret: '360723199608140059daimingjun0001', // 微信支付密钥
        notifyUrl: 'https://1688.morethanthink.com/api/wx/index'
    };

    config.uploadDir = '/root/votesys-upload/excel/';
    config.uploadFastDfsDir = '/root/votesys-upload/img/';
    config.picHost = 'https://1688.morethanthink.com/';
    config.ranksys = 'https://rank.bhpanduola04.com/api/player/add'

    config.security = {
        csrf: {
            ignore: '/api/wx/index'
        }
    };

    config.multipart = {
        fileSize: '50mb',
        fileExtensions: [
            '.xlsx', '.xls'
        ]
    };

    config.io = {
        namespace: {
            '/': {
                connectionMiddleware: ['connection'],
                packetMiddleware: []
            }
        }
    };

    config.ipPlaceOwnership = { // IP地址归属地查询
        queryUrl: 'http://ipquery.market.alicloudapi.com/query',
        appCode: '725037af2bf64f1f9170a298aeeef10e'
    };

    // add your config here
    config.middleware = ['xml2js'];

    return config;
};
