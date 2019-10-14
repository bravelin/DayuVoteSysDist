/*** 创建数据库 ***/
drop database if exists votesys;
create database votesys default character set utf8 collate utf8_general_ci;

use votesys;

/*** 管理人员表 ***/
drop table if exists manager;
create table manager (
    id char(32),
    loginName varchar(50) not null,
    loginPassword varchar(200) not null,
    realName varchar(50) not null,
    lastLoginTime datetime,
    role int not null, /* 0-超级管理员 1-一级管理员 2-二级管理员 */
    p0 char(32),
    p1 char(32),
    createdAt datetime,
    updatedAt datetime,
    miniPower char(1) default '0',
    primary key(id)
);

/*** 增加super admin ***/
insert into manager (id, loginName, loginPassword, realName, role, createdAt, updatedAt)
values ('6c84fb9012c411e1840d7b25c5ee775a', 'SuperAdministrator', '05471d5926bb87ec3431d9797e5140d1fc1e0d2b', '超级管理员', 0, '2018-12-08 09:16:19', '2018-12-08 09:16:19'); /* SuperAdministrator seq119811xxj */

/*** 系统操作日志表 ***/
drop table if exists log;
create table log (
    id char(32),
    userId char(32),
    userName varchar(50),
    content varchar(1000),
    createdAt datetime,
    updatedAt datetime,
    primary key(id)
);

/*** 投票活动表 ***/
drop table if exists activity;
create table activity (
    id char(32),
    title varchar(500), -- 标题
    signUpStartTime datetime, -- 报名开始时间
    signUpEndTime datetime, -- 报名结束时间
    voteStartTime datetime, -- 投票开始时间
    voteEndTime datetime, -- 投票结束时间
    maxTotalVoteNumber int, -- 每人最多投票数量
    maxDayVoteNumber int, -- 每人每天最多投票数量
    maxTotalVotePlayer int, -- 每人对一选手最多投票数量
    needDiamond char(1), -- 打赏功能
    needAudit char(1), -- 是否需要审核
    autoAdjust char(1), -- 是否自动调票 1-是 0-否
    pictures varchar(5000), -- 图片链接
    content varchar(5000), -- 公告内容
    description mediumtext, -- 投票内容介绍
    prizes mediumtext, -- 奖品设置
    remark varchar(1000), -- 备注
    status char(1), -- 活动状态 0-已删除 1-未开始 2-正在报名 3-正在投票 4-活动已结束 5-活动已关闭
    createUserId char(32), -- 创建活动的管理者ID
    p0 char(32),
    p1 char(32),
    voteCount int default 0, -- 票数
    visitCount int default 0, -- 访问量
    popularity float(8,1) default 0, -- 人气
    playerCount int default 0, -- 选手报名人数 状态为2和3的选手数目, 状态正常的\通过审核被禁止投票的
    moneyCount int default 0, -- 金额
    starPlayer char(32), -- 今日之星
    backgroundMusic varchar(500), -- 背景音乐地址
    createdAt datetime,
    updatedAt datetime,
    primary key(id)
);

/**** 选手表 ****/
drop table if exists player;
create table player (
    id char(32),
    name varchar(100), -- 选手名称
    tel varchar(100), -- 联系电话
    no int, -- 选手编号
    introduce mediumtext, -- 介绍
    pictures varchar(5000), -- 选手图片链接
    remark varchar(1000), -- 备注
    address varchar(1000), -- 地址
    type char(1), -- 主动报名-1  后台添加-2 
    status char(1), -- 状态 0-已删 1-未审核 2-已审核正常 3-已审核禁止投票 4-未通过审核 
    totalVotes int default 0, -- 总票数
    diamondVotes int default 0, -- 钻石票
    adjustVotes int default 0, -- 系统调票
    cashGift int default 0, -- 礼金数 -- money数目
    actId char(32), -- 活动ID
    userId char(32), -- 报名参加的微信用户
    shareCount int default 0, -- 分享数
    createdAt datetime,
    updatedAt datetime,
    createUserId char(32), -- 创建活动的管理者ID
    p0 char(32),
    p1 char(32),
    primary key(id)
);

/**** 投票记录表 ****/
drop table if exists vote;
create table vote (
    id char(32),
    actId char(32), -- 活动ID
    playerId char(32), -- 选手ID
    type char(1), -- 投票类型 0-普通投票  1-后台投票 2-钻石投票
    voteNum int, -- 票数
    diamondAmount int, -- 钻石金额 当为钻石票时
    voter char(32), -- 普通投票类型中的投票者, user表中的ID
    createUserId char(32), -- 创建活动的管理者ID
    p0 char(32),
    p1 char(32),
    createdAt datetime, -- 投票时间
    updatedAt datetime,
    primary key(id)
);

select sum(v.diamondAmount) as score, createUserId as createUserId from vote as v where (v.p0=uid or v.p1=uid) group by createUserId

/**** 微信用户表,字段信息从微信接口获取 ****/
drop table if exists user;
create table user (
    id char(32),
    openId varchar(130), -- 微信用户OpenId
    nickName varchar(100), -- 微信用户昵称
    sex char(1), -- 性别 1-男性 2-女性 0-未知
    province varchar(50), -- 用户省份
    city varchar(50), -- 用户城市
    country varchar(50), -- 用户国家
    area varchar(50), -- 用户地区
    headImgUrl varchar(500), -- 微信头像
    ip varchar(50), -- IP地址
    accessToken varchar(1000), -- 用户的accesstoken
    refreshToken varchar(1000),
    expireTime int default 0, -- 超时时间 
    createdAt datetime,
    updatedAt datetime,
    primary key(id)
);
/*** 增加super admin ***/
insert into user (id, nickName, createdAt, updatedAt) values ('00000', 'VoteSystem', '2018-12-08 09:16:19', '2018-12-08 09:16:19');

/**** 页面浏览记录 visit ****/
drop table if exists visit;
create table visit (
    id char(32),
    actId char(32), -- 活动ID
    playerId char(32), -- 选手ID
    userId char(32), -- 访问的用户,如果能获取到用户信息
    createUserId char(32), -- 创建活动的管理者ID
    p0 char(32),
    p1 char(32),
    createdAt datetime,
    updatedAt datetime,
    primary key(id)
);

/*** 系统环境设置表 ***/
drop table if exists dict;
create table dict (
    id char(32),
    dictKey varchar(50),
    dictValue varchar(1000),
    createdAt datetime,
    updatedAt datetime,
    primary key(id)
);
insert into dict (id, dictKey, dictValue, createdAt, updatedAt) values ('00000', 'backgroundMusic', '', '2018-12-08 09:16:19', '2018-12-08 09:16:19');
insert into dict (id, dictKey, dictValue, createdAt, updatedAt) values ('00001', 'rewardSwitch', '1', '2018-12-08 09:16:19', '2018-12-08 09:16:19');
insert into dict (id, dictKey, dictValue, createdAt, updatedAt) values ('00002', 'voteLimit', '4', '2018-12-08 09:16:19', '2018-12-08 09:16:19');
insert into dict (id, dictKey, dictValue, createdAt, updatedAt) values ('00003', 'rewardRatio', '3', '2018-12-08 09:16:19', '2018-12-08 09:16:19');
insert into dict (id, dictKey, dictValue, createdAt, updatedAt) values ('00004', 'rewardList', '5,10,30,50,100,300,1000,2000,3000,0', '2018-12-08 09:16:19', '2018-12-08 09:16:19');
insert into dict (id, dictKey, dictValue, createdAt, updatedAt) values ('00005', 'addVoteNum', '10', '2018-12-08 09:16:19', '2018-12-08 09:16:19');
insert into dict (id, dictKey, dictValue, createdAt, updatedAt) values ('00006', 'wxAccessToken', '', '2018-12-08 09:16:19', '2018-12-08 09:16:19');

/*** 投诉建议表 ***/
drop table if exists complaint;
create table complaint (
    id char(32),
    userId char(32),
    name varchar(100), -- 称呼
    tel char(11), -- 联系电话
    content varchar(5000), -- 投诉内容
    createdAt datetime,
    updatedAt datetime,
    actId char(32), -- 哪个活动的投诉
    createUserId char(32), -- 创建活动的管理者ID
    p0 char(32),
    p1 char(32),
    status char(1), -- 状态 0-未处理 1-已处理
    primary key(id)
);

/*** 订单表 ***/
drop table if exists trade;
create table trade (
    id char(32), -- 订单号
    userId char(32),
    prePayId varchar(50), -- 预支付ID
    totalFee int, -- 订单金额,单位为分
    voteCount int, -- 金额获取的对应的票数
    ip varchar(64), -- 终端IP地址
    place varchar(100), -- IP地址对应的归属地
    timeStart char(14), -- 交易时间 20091225091010
    timeExpire char(14), -- 订单失效时间
    timeEnd char(14), -- 交易结束时间
    transactionId char(32), -- 微信支付订单号
    createdAt datetime,
    updatedAt datetime,
    actId char(32), -- 活动ID
    playerId char(32), -- 选手ID
    createUserId char(32), -- 创建活动的管理者ID
    p0 char(32),
    p1 char(32),
    status char(1), -- 状态 0-NOTPAY(未支付) 1-SUCCESS(支付成功) 5-可取消，但是还未关单 2-REFUND(已退款) 3-CLOSED(已关单) 4-(PAYERROR)
    primary key(id)
);
