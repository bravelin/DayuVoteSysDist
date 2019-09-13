'use strict';

module.exports = appInfo => {
    const config = exports = {};

    // use for cookie sign key, should change to your own and keep security
    config.keys = appInfo.name + '159684358438_105_520';

    config.sequelize = {
        dialect: 'mysql',
        host: 'localhost',
        port: '3306',
        username: 'root',
        password: 'root123XYZ@',
        database: 'votesys'
    };

    config.jwt = {
        secret: 'jiK20l1809sYz',
        secret2: 'cbkYNall86BiAjk'
    };

    config.ssl = {
        path: '.well-known/pki-validation/fileauth.txt',
        file: 'fileauth.txt'
    };

    config.wx = {
        // 游越网络服务号
        mp_verify: 'MP_verify_Caa2LHlQK4HwbUld.txt',
        appId: 'wx1851bf79045cdf84',
        appSecret: '02a85a7a136ba03c8cd2c3ab176b6607',
        encodingAESKey: '5oozvLjwKTnfDFUKD2aKWY3qN8FY3DAXWx5ztm2rNoZ',
        token: 'VoteSystem2019',
        mchId: '1529148531', // 商户号
        mchSecret: '20180207ypj20170308ypj1234567890', // 微信支付密钥
        notifyUrl: 'https://guangyuan1688.com/api/wx/index'
    };

    // bacem.cn部署环境
    config.uploadDir = '/root/upload/';
    config.uploadFastDfsDir = '/root/imgUpload/'; // fastDFS上传临时文件夹
    config.picsDir = '/root/vote/vote-sys-dist/app/public/';
    config.picHost = 'https://guangyuan1688.com/';

    // barvelin.top部署环境
    // config.uploadDir = '/root/upload/';
    // config.uploadFastDfsDir = '/root/imgUpload/'; // fastDFS上传临时文件夹
    // config.picsDir = '/root/vote-sys-dist/app/public/';
    // config.picHost = 'https://bravelin.top/';

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

    config.oss = {
        client: {
            accessKeyId: 'LTAIzHx1M8IbhfP9',
            accessKeySecret: 'C8YzBP9hjqJ5ORB82EeaY7wcmA8xvr',
            bucket: 'votesys',
            endpoint: 'oss-cn-shenzhen.aliyuncs.com',
            timeout: '60s'
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
