'use strict';

const Controller = require('egg').Controller;
const fs = require('fs');
const path = require('path');
const file = path.resolve(__dirname, '../public/client/index.html');
let pageData = '';
fs.readFile(file, (err, data) => {
    pageData = data;
});

class UserController extends Controller {
    async index() {
        this.ctx.set('Content-Type', 'text/html');
        this.ctx.body = pageData;
    }
    async mpVerify() {
        const ctx = this.ctx;
        const verifyFile = path.resolve(__dirname, `../public/${ctx.app.config.wx.mp_verify}`);
        const readFile = require('util').promisify(fs.readFile);
        const txt = await readFile(verifyFile, 'utf-8');
        ctx.set('Content-Type', 'text/plain');
        ctx.body = txt;
    }
    async sslVerify() {
        const ctx = this.ctx;
        const verifyFile = path.resolve(__dirname, `../public/${ctx.app.config.ssl.file}`);
        const readFile = require('util').promisify(fs.readFile);
        const txt = await readFile(verifyFile, 'utf-8');
        ctx.set('Content-Type', 'text/plain');
        ctx.body = txt;
    }
}

module.exports = UserController;
