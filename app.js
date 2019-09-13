module.exports = app => {
    app.beforeStart(async () => {
        // console.log('before app....================================', await this.service.dict.queryAll())
    })
    app.ready(async () => {
        // console.log('app ready......', this);
        // console.log('ready app....================================', await app.service.dict.queryAll())
    })
}
