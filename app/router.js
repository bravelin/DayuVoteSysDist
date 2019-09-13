'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
// app/router.js
module.exports = app => {
    const { router, controller, io } = app;
    router.get('/a', controller.admin.index); // 管理端
    router.get('/u', controller.user.index); // 用户端


    router.get('/a/*', controller.admin.index); // 管理端 -- history模式
    router.get(`/u/${app.config.wx.mp_verify}`, controller.user.mpVerify); // 微信接口安全域名设置
    router.get('/u/*', controller.user.index); // 用户端

    // ssl证书验证
    router.get(`/${app.config.ssl.path}`, controller.user.sslVerify);

    io.of('/').route('server', io.controller.home.server);

    // 微信调用的接口
    router.get('/api/wx/index', controller.wx.validate);
    router.post('/api/wx/index', controller.wx.index);

    // login/admin
    router.post('/api/login/admin', controller.admin.login); // 管理端登录
    router.post('/api/verify/token', controller.admin.verifyToken); // 校验token是否有效

    // 对管理员的管理
    router.resources('managers', '/api/managers', controller.managers);
    router.post('/api/manager/editPassword/:id', controller.managers.editPassword); // 修改密码
    router.post('/api/manager/switchMiniPower/:id', controller.managers.switchMiniPower); // 切换权限

    // 操作日志查询
    router.get('/api/logs', controller.logs.index);

    // 投票管理
    router.resources('activity', '/api/activity', controller.activity);
    router.post('/api/activity/changeStatus', controller.activity.changeStatus);
    router.post('/api/activity/stat', controller.activity.stat);
    router.post('/api/activity/switchAutoAdjust', controller.activity.switchAutoAdjust);
    router.post('/api/activity/adjustVote', controller.activity.adjustVote);
    router.post('/api/activity/addPopularity', controller.activity.addPopularity);
    router.post('/api/activity/addAllVote', controller.activity.addAllVote); // 一键改票
    router.post('/api/activity/copy/:id', controller.activity.copy); // 复制

    // 选手
    router.resources('player', '/api/player', controller.player);
    router.post('/api/player/unaudit', controller.player.unaudits);
    router.post('/api/player/changeStatus', controller.player.changeStatus);
    router.post('/api/player/changeAllStatus', controller.player.changeAllStatus);
    router.post('/api/player/setStar', controller.player.star);
    router.post('/api/player/count', controller.player.count);
    router.post('/api/player/addSysVote', controller.player.addSysVote);
    router.post('/api/player/updateRemark', controller.player.updateRemark);
    // router.get('/api/player/export', controller.player.export);
    router.get('/api/sys/player/export', controller.player.export);
    router.post('/api/sys/player/import', controller.player.import);
    router.post('/api/player/unAuditCount', controller.player.unAuditCount);

    // 投票记录
    router.resources('vote', '/api/vote', controller.vote);
    router.post('/api/vote/stat', controller.vote.stat);
    router.post('/api/vote/date/stat', controller.vote.statVoteByDate)

    // 订单
    router.post('/api/orders', controller.vote.orders);
    router.post('/api/orders/stat', controller.vote.statOrders);
    router.post('/api/realtime/orders', controller.vote.realtimeOrders);

    // 用户访问记录
    router.resources('visit', '/api/visit', controller.visit);
    router.post('/api/visit/date/stat', controller.visit.statVisitByDate)

    // 投诉建议
    router.resources('complaint', '/api/complaint', controller.complaint);
    router.post('/api/complaint/unTreatedCount', controller.complaint.unTreatedCount);

    // 环境设置
    router.get('/api/dicts', controller.dict.index);
    router.post('/api/dicts', controller.dict.doUpdate);
    router.post('/api/music', controller.dict.upload);

    // UEditor 图片文件上传
    router.get('/api/ue', controller.ue.index);
    router.post('/api/ue', controller.ue.index);

    // client端的接口
    router.get('/api/client/index', controller.client.index);
    router.get('/api/client/act/:id', controller.client.getAct);
    router.get('/api/client/players/:id', controller.client.getPlayers); // 查询该活动下的选手
    router.get('/api/client/player/:id', controller.client.getPlayer); // 查询选手详情
    router.post('/api/client/sign', controller.client.sign); // 用户报名参加
    router.post('/api/client/isSigned', controller.client.isSigned); // 用户是否已经报名参加
    router.post('/api/client/canVote', controller.client.canVote); // 判定用户是否可以投票
    router.post('/api/client/vote', controller.client.vote); // 用户投票
    router.get('/api/client/tts', controller.client.tts); // tts
    router.post('/api/client/complaint', controller.client.complaint); // 投诉
    router.post('/api/client/complaint/submit', controller.client.submitComplaint); // 今天是否已经提交过投诉
    router.get('/api/client/getRewardList', controller.client.getRewardList); // 返回系统配置的打赏金额列表
    router.get('/api/client/canReward/:actId/:playerId', controller.client.canReward); // 判定是否可以打赏的接口
    router.post('/api/client/wx/sign', controller.client.wxSign); // 获取分享接口的配置
    router.post('/api/client/wx/prepay', controller.client.prepay); // 生成支付订单
    router.post('/api/client/wx/cancelOrder', controller.client.cancelOrder); // 取消订单

    // 404
    router.get('*', controller.error.missing);
};
