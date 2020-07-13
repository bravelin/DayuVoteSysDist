var ossClient = null
var ossConfig = {
    accessKeyId: 'LTAIDK1rgSGO3b4b',
    accessKeySecret: 'jBWtxfl6XOBKxneQs1G7F3eUMIK7FG',
    expiration: 60 * 60,
    region: 'oss-cn-shenzhen',
    bucket: 'votesys'
}
window.signatureUrl = function (url) {
    // if (!ossClient) {
    //     ossClient = new OSS(ossConfig)
    // }
    // let turl = ossClient.signatureUrl(url, { expires: ossConfig.expiration })
    // if (!/https/.test(turl)) {
    //     return turl.replace('http', 'https')
    // } else {
    //     return turl
    // }
    return url
}
