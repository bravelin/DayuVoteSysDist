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
        mp_verify: 'MP_verify_jZtjDFBY8W7fM3Qs',
        appId: 'wx79735b40b5c806aa',
        appSecret: '1b6bdc73479d0d69a79bd9e9d2ec80b0',
        encodingAESKey: 'xeGcYay15A53tGbIZnqQlVZ53bp2fTyiT57MZee4xOh',
        token: 'DayuVoteSys2019',
        mchId: '1555772081', // 商户号
        mchSecret: 'dengwenchang36072319920121311300', // 微信支付密钥
        notifyUrl: 'https://1688.guangyou.top/api/wx/index'
    };

    config.uploadDir = '/root/votesys-upload/excel/';
    config.uploadFastDfsDir = '/root/votesys-upload/img/';
    config.picHost = 'https://1688.guangyou.top/';
    config.ranksys = 'https://rank.guangyitong.top/api/player/add'

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
