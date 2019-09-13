'use strict';
const Controller = require('egg').Controller;
class LogsController extends Controller {
    async index() {
        const { ctx, service } = this;
        const helper = ctx.helper;
        const isVerify = await helper.verifyToken(ctx);
        if (isVerify) {
            const query = ctx.query;
            const options = {};
            if (query.page) {
                options.page = query.page - 0;
            }
            if (!options.page || options.page <= 0) {
                options.page = 1;
            }
            if (query.pageSize) {
                options.pageSize = query.pageSize - 0;
            }
            if (!options.pageSize || options.pageSize <= 0) {
                options.pageSize = 10;
            }
            if (query.key) {
                options.key = query.key;
            }
            const data = await service.logs.getAll(options);
            helper.success(ctx, data);
        }
    }
}
module.exports = LogsController;
