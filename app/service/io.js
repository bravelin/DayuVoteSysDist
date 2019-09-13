'use strict';
const Service = require('egg').Service;
class IOService extends Service { // socket.io
    async send(model, event, data) {
        const ctx = this.ctx;
        const sockets = ctx.app.sockets;
        if (!sockets) {
            return
        }
        let socket = null;
        for(let i = 0; i < sockets.length; i++) {
            socket = sockets[i];
            if (socket.uid == model.createUserId || socket.uid == model.p0 || socket.uid == model.p1) {
                console.log('=====================send event', event)
                socket.emit(event, data || 'this is votesys socket server');
            }
        }
    }
}
module.exports = IOService;
