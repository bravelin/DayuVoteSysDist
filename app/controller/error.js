'use strict';

const Controller = require('egg').Controller;
const fs = require('fs');
const path = require('path');
const file = path.resolve(__dirname, '../public/404.html');
let pageData = '';
fs.readFile(file, (err, data) => {
    pageData = data;
});

class ErrorController extends Controller {
    async missing() {
        this.ctx.set('Content-Type', 'text/html');
        this.ctx.body = pageData;
    }
}

module.exports = ErrorController;
