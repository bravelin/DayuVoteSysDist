(function(e){function t(t){for(var a,i,s=t[0],c=t[1],u=t[2],d=0,l=[];d<s.length;d++)i=s[d],Object.prototype.hasOwnProperty.call(r,i)&&r[i]&&l.push(r[i][0]),r[i]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(e[a]=c[a]);p&&p(t);while(l.length)l.shift()();return o.push.apply(o,u||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],a=!0,i=1;i<n.length;i++){var s=n[i];0!==r[s]&&(a=!1)}a&&(o.splice(t--,1),e=c(c.s=n[0]))}return e}var a={},i={app:0},r={app:0},o=[];function s(e){return c.p+"js/"+({}[e]||e)+"."+{"chunk-28be341e":"75b17dec","chunk-33547ba8":"a47de8b9","chunk-45ebad4a":"9f67d393","chunk-597c3c26":"199f66d4","chunk-6ef5bd30":"f890fedb","chunk-2d21b85d":"2de0f075","chunk-5c4172fa":"9188514e","chunk-5ed2b8ea":"1343c6da","chunk-70c074cd":"b60edc8f","chunk-77c12074":"3af6671e","chunk-f74bcc0c":"469cb119"}[e]+".js"}function c(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.e=function(e){var t=[],n={"chunk-28be341e":1,"chunk-33547ba8":1,"chunk-597c3c26":1,"chunk-6ef5bd30":1,"chunk-5c4172fa":1,"chunk-5ed2b8ea":1,"chunk-70c074cd":1,"chunk-77c12074":1,"chunk-f74bcc0c":1};i[e]?t.push(i[e]):0!==i[e]&&n[e]&&t.push(i[e]=new Promise(function(t,n){for(var a="css/"+({}[e]||e)+"."+{"chunk-28be341e":"e6cf5d94","chunk-33547ba8":"9110d444","chunk-45ebad4a":"31d6cfe0","chunk-597c3c26":"08de81b5","chunk-6ef5bd30":"5bf34eb4","chunk-2d21b85d":"31d6cfe0","chunk-5c4172fa":"d1e72df3","chunk-5ed2b8ea":"3aa3b868","chunk-70c074cd":"04359040","chunk-77c12074":"a3eea5bf","chunk-f74bcc0c":"d8449284"}[e]+".css",r=c.p+a,o=document.getElementsByTagName("link"),s=0;s<o.length;s++){var u=o[s],d=u.getAttribute("data-href")||u.getAttribute("href");if("stylesheet"===u.rel&&(d===a||d===r))return t()}var l=document.getElementsByTagName("style");for(s=0;s<l.length;s++){u=l[s],d=u.getAttribute("data-href");if(d===a||d===r)return t()}var p=document.createElement("link");p.rel="stylesheet",p.type="text/css",p.onload=t,p.onerror=function(t){var a=t&&t.target&&t.target.src||r,o=new Error("Loading CSS chunk "+e+" failed.\n("+a+")");o.code="CSS_CHUNK_LOAD_FAILED",o.request=a,delete i[e],p.parentNode.removeChild(p),n(o)},p.href=r;var f=document.getElementsByTagName("head")[0];f.appendChild(p)}).then(function(){i[e]=0}));var a=r[e];if(0!==a)if(a)t.push(a[2]);else{var o=new Promise(function(t,n){a=r[e]=[t,n]});t.push(a[2]=o);var u,d=document.createElement("script");d.charset="utf-8",d.timeout=120,c.nc&&d.setAttribute("nonce",c.nc),d.src=s(e);var l=new Error;u=function(t){d.onerror=d.onload=null,clearTimeout(p);var n=r[e];if(0!==n){if(n){var a=t&&("load"===t.type?"missing":t.type),i=t&&t.target&&t.target.src;l.message="Loading chunk "+e+" failed.\n("+a+": "+i+")",l.name="ChunkLoadError",l.type=a,l.request=i,n[1](l)}r[e]=void 0}};var p=setTimeout(function(){u({type:"timeout",target:d})},12e4);d.onerror=d.onload=u,document.head.appendChild(d)}return Promise.all(t)},c.m=e,c.c=a,c.d=function(e,t,n){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)c.d(n,a,function(t){return e[t]}.bind(null,a));return n},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="/public/client/",c.oe=function(e){throw console.error(e),e};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],d=u.push.bind(u);u.push=t,u=u.slice();for(var l=0;l<u.length;l++)t(u[l]);var p=d;o.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},3673:function(e,t,n){},"46f1":function(e,t,n){"use strict";t["a"]={getActDetail:"/api/client/act/",getActPlayers:"/api/client/players/",getActPlayer:"/api/client/player/",sign:"/api/client/sign",index:"/api/client/index",isSigned:"/api/client/isSigned",visit:"/api/visit",canVote:"/api/client/canVote",vote:"/api/client/vote",tts:"/api/client/tts",isComplainted:"/api/client/complaint/submit",commitComplaint:"/api/client/complaint",canReward:"/api/client/canReward/",getRewardList:"/api/client/getRewardList",getWxSign:"/api/client/wx/sign",doPrePay:"/api/client/wx/prepay",cancelOrder:"/api/client/wx/cancelOrder"}},"56d7":function(e,t,n){"use strict";n.r(t);n("83bd"),n("19dd");var a=n("f199"),i=n.n(a),r=(n("dac5"),n("6e26"),n("9604"),n("df67"),n("6e6d")),o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{class:{"page-404":e.is404},attrs:{id:"app"}},[n("Banner",{directives:[{name:"show",rawName:"v-show",value:"success"!=e.currRouter.to,expression:"currRouter.to != 'success'"}]}),n("router-view",{on:{update:function(t){return e.getActDetail()},share:e.doPageShare}}),n("NavMenu",{directives:[{name:"show",rawName:"v-show",value:!e.is404&&"reward"!=e.currRouter.to&&"success"!=e.currRouter.to,expression:"!is404 && currRouter.to != 'reward' && currRouter.to != 'success' "}]}),n("Spinner",{directives:[{name:"show",rawName:"v-show",value:e.isLoading,expression:"isLoading"}]})],1)},s=[],c=(n("55a0"),n("7364"),n("cb63")),u=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},d=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"spinner-wrap"},[n("div",{staticClass:"spinner"},[n("div",{staticClass:"spinner-container container1"},[n("div",{staticClass:"circle1"}),n("div",{staticClass:"circle2"}),n("div",{staticClass:"circle3"}),n("div",{staticClass:"circle4"})]),n("div",{staticClass:"spinner-container container2"},[n("div",{staticClass:"circle1"}),n("div",{staticClass:"circle2"}),n("div",{staticClass:"circle3"}),n("div",{staticClass:"circle4"})]),n("div",{staticClass:"spinner-container container3"},[n("div",{staticClass:"circle1"}),n("div",{staticClass:"circle2"}),n("div",{staticClass:"circle3"}),n("div",{staticClass:"circle4"})])])])}],l=n("6691"),p={},f=Object(l["a"])(p,u,d,!1,null,null,null),h=f.exports,m=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("wv-tabbar",{attrs:{fixed:!0}},[n("wv-tabbar-item",{attrs:{to:{name:"home",query:{actId:e.actId}},"is-on":"home"==e.pageName}},[n("i",{staticClass:"ali-icon-home weui-tabbar__icon",attrs:{slot:"icon"},slot:"icon"}),e._v("首页\n    ")]),n("wv-tabbar-item",{attrs:{to:{name:"prize",query:{actId:e.actId}},"is-on":"prize"==e.pageName}},[n("i",{staticClass:"ali-icon-jiangpinpeizhi weui-tabbar__icon",attrs:{slot:"icon"},slot:"icon"}),e._v(" 奖品\n    ")]),n("wv-tabbar-item",{attrs:{to:{name:"rank",query:{actId:e.actId}},"is-on":"rank"==e.pageName}},[n("i",{staticClass:"ali-icon-mn_paiming_fill weui-tabbar__icon",attrs:{slot:"icon"},slot:"icon"}),e._v(" 排名\n    ")]),n("wv-tabbar-item",{attrs:{to:{name:"sign",query:{actId:e.actId}},"is-on":"sign"==e.pageName}},[n("i",{staticClass:"ali-icon-kechengbaoming weui-tabbar__icon",attrs:{slot:"icon"},slot:"icon"}),e._v(" 报名\n    ")]),n("wv-tabbar-item",{attrs:{to:{name:"advise",query:{actId:e.actId}},"is-on":"advise"==e.pageName}},[n("i",{staticClass:"ali-icon-jinggao weui-tabbar__icon",attrs:{slot:"icon"},slot:"icon"}),e._v(" 投诉\n    ")])],1)},g=[],v={name:"NavMenu",computed:{pageName:function(){return this.$store.state.currRouter.to},actId:function(){return this.$store.state.act.id}}},b=v,y=Object(l["a"])(b,m,g,!1,null,null,null),w=y.exports,S=n("46f1"),k=n("f1ed"),I=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"banner-wrap"},[n("audio",{ref:"star",staticClass:"star-audio",attrs:{src:e.starAudioSrc,controls:""}}),n("audio",{ref:"bg",staticClass:"star-audio",attrs:{src:e.bgAudioSrc,controls:"",loop:""}}),e.bgAudioPlayStatus?n("div",{staticClass:"music-icon ali-icon-yinlemusic214",class:{paused:2==e.bgAudioPlayStatus},on:{click:function(t){return e.resumeOrPausedMusic()}}}):e._e(),n("div",{staticClass:"swiper-container",style:{height:e.bannerHeight+"px"}},[n("div",{staticClass:"swiper-wrapper"},e._l(e.pics,function(e,t){return n("div",{key:t,staticClass:"swiper-slide"},[n("img",{attrs:{src:e}})])}),0),n("div",{staticClass:"swiper-pagination"})]),n("div",{staticClass:"act-title"},[e._v(e._s(e.actTitle))]),n("div",{staticClass:"act-content",style:{width:e.bannerWidth+"px"}},[n("div",{ref:"pub",style:{transform:"translateX(-"+e.currOffsetX+"px)"}},[e._v(e._s(2!=e.pubTag?"":e.actContent))])])])},A=[],x=(n("11ac"),{name:"Banner",computed:{actContent:function(){return this.$store.state.act.content},actTitle:function(){return this.$store.state.act.title},bannerHeight:function(){var e=this.$store.state.winWidth;return.55*(e>680?680:e)},bannerWidth:function(){var e=this.$store.state.winWidth;return e>680?680:e},pics:function(){return this.$store.state.act.pictures.map(function(e){return Object(c["b"])(e)})}},data:function(){return{swiperInstance:null,currOffsetX:0,pubTag:2,starAudioSrc:"",bgAudioSrc:"",starAudioLoad:!1,bgAudioLoad:!1,bgAudioPlayStatus:0,thisDayStarAudioPlayStatus:0,playInterval:10}},mounted:function(){var e=this,t=e.$store.state.act;e.$nextTick(function(){if(t.loaded)e.doInit();else var n=setInterval(function(){t.loaded&&(e.doInit(),clearInterval(n))},200)})},methods:{doInit:function(){var e=this;e.initSwiper(),e.initPubContent(),Object(k["e"])()?Object(k["g"])(function(){e.initAudio()}):e.initAudio()},initAudio:function(){var e=this,t=e.$store.state.act;t.starPlayer&&(e.getStarAudio(),e.listenStarTouchPage()),t.backgroundMusic&&(e.startBgAudio(),e.listenTouchPage())},resumeOrPausedMusic:function(){var e=this;0!=e.bgAudioPlayStatus&&(1==e.bgAudioPlayStatus?(e.bgAudioPlayStatus=2,e.$refs.bg.pause()):(e.bgAudioPlayStatus=1,e.$refs.bg.play()))},startBgAudio:function(){var e=this,t=e.$refs.bg;t.addEventListener("canplay",function(){e.bgAudioLoad||(e.bgAudioLoad=!0),0==e.bgAudioPlayStatus&&t.play().then(function(){e.bgAudioPlayStatus=1})}),e.bgAudioSrc=Object(c["b"])(e.$store.state.act.backgroundMusic)},getStarAudio:function(){var e=this,t="恭喜".concat(e.$store.state.act.starPlayerName,"获得今日之星!"),n=encodeURIComponent(encodeURIComponent(t)),a=e.$refs.star;a.addEventListener("canplay",function(){e.starAudioLoad||(e.starAudioLoad=!0),0==e.thisDayStarAudioPlayStatus&&a.play().then(function(){e.thisDayStarAudioPlayStatus=1,setInterval(function(){a.play()},1e3*(a.duration+5))})}),e.starAudioSrc="".concat(S["a"].tts,"?text=").concat(n)},listenStarTouchPage:function(){var e=this;document.addEventListener("click",e.playStarAudio),document.addEventListener("touchstart",e.playStarAudio)},listenTouchPage:function(){var e=this;document.addEventListener("click",e.playBgAudio),document.addEventListener("touchstart",e.playBgAudio)},playStarAudio:function(){var e=this;if(e.starAudioLoad&&0==e.thisDayStarAudioPlayStatus){var t=e.$refs.star;t.load(),t.play(),document.removeEventListener("click",e.playStarAudio),document.removeEventListener("touchstart",e.playStarAudio),setInterval(function(){t.play()},1e3*(t.duration+5))}},playBgAudio:function(){var e=this;if(e.bgAudioLoad&&0==e.bgAudioPlayStatus){var t=e.$refs.bg;t.load(),t.play(),e.bgAudioPlayStatus=1,document.removeEventListener("click",e.playBgAudio),document.removeEventListener("touchstart",e.playBgAudio)}},initSwiper:function(){var e=this;e.swiperInstance=new Swiper(".swiper-container",{direction:"horizontal",hashNavigation:!1,mousewheel:!1,loop:!0,autoplay:!0,pagination:{el:".swiper-pagination"}})},initPubContent:function(){var e=this,t=e.$refs.pub,n=this.$store.state.winWidth,a=parseInt(getComputedStyle(t,null)["width"])+(n>680?680:n);setInterval(function(){e.currOffsetX+=10,e.currOffsetX>a?(e.currOffsetX=0,e.pubTag=0):2!=e.pubTag&&e.pubTag++},300)}}}),C=x,P=Object(l["a"])(C,I,A,!1,null,null,null),T=P.exports,O={routerBase:"/client",wxAppId:"wx1851bf79045cdf84"},$={name:"app",components:{Spinner:h,NavMenu:w,Banner:T},computed:{isLoading:function(){return this.$store.state.loading},is404:function(){return this.$store.state.is404},currRouter:function(){return this.$store.state.currRouter}},created:function(){var e=this,t=e.$store,n=window;if(n.addEventListener("resize",function(){t.commit("getWindowSize")}),t.commit("getWindowSize"),Object(k["e"])()&&!/clean/.test(location.href)){var a=localStorage;if(/code=/.test(location.href)||a.getItem("votesys-client-openid-new"))e.init(!0);else{var i=e.getOauthUrl();location.href=i}}else e.init(!1)},methods:{init:function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=this,n=t.$store,a=Object(k["c"])("actId"),i=Object(k["c"])("code");a?(n.commit("setActId",a),e?t.getUserDetail(i):t.addVisit(),t.getActDetail()):(n.commit("setPage404",!0),t.$router.push({name:"404"}))},getUserDetail:function(e){var t=this,n=t.$store.state;t.$ajax({url:S["a"].index,params:{openId:n.userOpenId,userId:n.userId,code:e||""}}).then(function(e){if(200==e.code){var n=e.data;n.token?t.$store.commit("setUserInfo",{userToken:n.token,userId:n.user.id,userName:n.user.nickName,userOpenId:n.user.openId}):40029==n.errcode&&(location.href=t.getOauthUrl())}t.addVisit()})},getOauthUrl:function(){var e=Object(k["d"])();return"https://open.weixin.qq.com/connect/oauth2/authorize?appid=".concat(O.wxAppId,"&redirect_uri=").concat(encodeURIComponent(e),"&response_type=code&scope=snsapi_base#wechat_redirect")},addVisit:function(){var e=this,t=e.$store.state;e.$ajax({url:S["a"].visit,method:"POST",data:{actId:t.act.id,playerId:Object(k["c"])("pId"),userId:t.userId}})},getActDetail:function(){var e=this;e.$ajax({url:S["a"].getActDetail+e.$store.state.act.id}).then(function(t){200==t.code?e.$store.commit("setActInfo",t.data):(e.$store.commit("setPage404",!0),e.$router.push({name:"404"}))})},doPageShare:function(e){var t=this,n=t.$store.state,a=n.act,i=location;if(n.currPageShareName!=e.name){var r=null,o=e.name;r="global"==e.name?{title:"赶紧来投票吧!",desc:a.title,link:i.origin+"/u/".concat(n.currRouter.to,"?actId=")+a.id,imgUrl:Object(c["b"])(a.pictures[1])}:e.shareConfig,t.getWxSign(r,o)}},getWxSign:function(e,t){var n=this;if(Object(k["e"])()){var a=location;n.$ajax({url:S["a"].getWxSign,method:"post",params:{verifyType:"client"},data:{url:a.origin+a.pathname+a.search}}).then(function(a){if(200==a.code){var i=a.data;n.wxConfig(i,e,t)}})}},wxConfig:function(e,t,n){var a=this,i=(a.$store.state.act,{debug:!1,appId:e.appId,timestamp:e.timestamp,nonceStr:e.noncestr,signature:e.signature,jsApiList:["onMenuShareAppMessage","onMenuShareTimeline","onMenuShareQQ","onMenuShareWeibo","onMenuShareQZone"]});wx.config(i),wx.error(function(e){console.log("wx config error"+JSON.stringify(e))}),wx.ready(function(){var e={title:t.title,desc:t.desc,link:t.url,imgUrl:t.imgUrl};wx.onMenuShareAppMessage(e),wx.onMenuShareTimeline(e),wx.onMenuShareQQ(e),wx.onMenuShareWeibo(e),wx.onMenuShareQZone(e),a.$store.commit("setCurrPageShareName",n)})}}},_=$,E=(n("5c0b"),Object(l["a"])(_,o,s,!1,null,null,null)),N=E.exports,L=n("591a");r["default"].use(L["a"]);var j=localStorage,M=window,R=document,D={userToken:"votesys-client-token-new",userId:"votesys-client-userid-new",userName:"votesys-client-username-new",userOpenId:"votesys-client-openid-new",cacheTag:"votesys-client-cachetag-new"},U=new L["a"].Store({state:{winHeight:0,winWidth:0,currRouter:{from:"",to:"",query:null,instance:null},loading:!1,is404:!1,act:{id:"",loaded:!1,title:"",pictures:[],content:"",description:"",maxDayVoteNumber:0,maxTotalVoteNumber:0,maxTotalVotePlayer:1,playerCount:0,prizes:"",starPlayer:"",starPlayerName:"",popularity:0,signUpEndTime:new Date,signUpStartTime:new Date,status:"",visitCount:0,voteCount:0,voteEndTime:new Date,voteStartTime:new Date,backgroundMusic:""},homeState:{players:[],listHeight:100,sectionWidth:0,inComputeListHeight:!1,page:0,isInLoadData:!1,isFinishedLoadData:!1,searchKey:""},userId:j.getItem(D.userId)||"",userToken:j.getItem(D.userToken)||"",userName:j.getItem(D.userName)||"",userOpenId:j.getItem(D.userOpenId)||"",currPageShareName:""},mutations:{switchLoading:function(e,t){e.loading=t},getWindowSize:function(e){e.winHeight=R.documentElement.clientHeight||M.innerHeight,e.winWidth=R.documentElement.clientWidth||M.innerWidth},setCurrRouter:function(e,t){var n=e.currRouter;n.from=t.from,n.to=t.to,n.query=t.query,n.instance=t.instance},setPage404:function(e,t){e.is404=t},setActId:function(e,t){e.act.id=t},setUserInfo:function(e,t){e.userToken=t.userToken,e.userId=t.userId,e.userName=t.userName,e.userOpenId=t.userOpenId,j.setItem(D.userToken,e.userToken),j.setItem(D.userId,e.userId),j.setItem(D.userName,e.userName),j.setItem(D.userOpenId,e.userOpenId),j.setItem(D.cacheTag,"1")},setActInfo:function(e,t){var n=e.act;n.content=t.content,n.description=t.description,n.maxDayVoteNumber=t.maxDayVoteNumber,n.maxTotalVoteNumber=t.maxTotalVoteNumber,n.maxTotalVotePlayer=t.maxTotalVotePlayer,n.pictures=JSON.parse(t.pictures),n.playerCount=t.playerCount,n.prizes=t.prizes,n.starPlayer=t.starPlayer,n.starPlayerName=t.starPlayerName,n.signUpEndTime=new Date(t.signUpEndTime),n.signUpStartTime=new Date(t.signUpStartTime),n.status=t.status,n.title=t.title,n.visitCount=t.visitCount,n.voteCount=t.voteCount,n.backgroundMusic=t.backgroundMusic,n.popularity=t.popularity||0,n.voteEndTime=new Date(t.voteEndTime),n.voteStartTime=new Date(t.voteStartTime),n.loaded=!0,document.title=n.title},saveHomeState:function(e,t){var n=e.homeState;n.players=t.players,n.listHeight=t.listHeight,n.sectionWidth=t.sectionWidth,n.inComputeListHeight=t.inComputeListHeight,n.page=t.page,n.isInLoadData=t.isInLoadData,n.isFinishedLoadData=t.isFinishedLoadData,n.searchKey=t.searchKey},setCurrPageShareName:function(e,t){e.currPageShareName=t}}}),W=n("c478");r["default"].use(W["a"]);var B=new W["a"]({mode:"history",base:O.routerBase,routes:[{path:"/home",name:"home",component:function(){return n.e("chunk-45ebad4a").then(n.bind(null,"bb51"))},meta:{isKeepAlive:!0}},{path:"/prize",name:"prize",component:function(){return Promise.all([n.e("chunk-6ef5bd30"),n.e("chunk-2d21b85d")]).then(n.bind(null,"bfad"))}},{path:"/sign",name:"sign",component:function(){return Promise.all([n.e("chunk-6ef5bd30"),n.e("chunk-5c4172fa")]).then(n.bind(null,"1c4f"))}},{path:"/rank",name:"rank",component:function(){return n.e("chunk-28be341e").then(n.bind(null,"789b"))}},{path:"/detail",name:"detail",component:function(){return Promise.all([n.e("chunk-6ef5bd30"),n.e("chunk-5ed2b8ea")]).then(n.bind(null,"c84b"))}},{path:"/advise",name:"advise",component:function(){return n.e("chunk-70c074cd").then(n.bind(null,"7c66"))}},{path:"/reward",name:"reward",component:function(){return n.e("chunk-33547ba8").then(n.bind(null,"2442"))}},{path:"/success",name:"success",component:function(){return n.e("chunk-597c3c26").then(n.bind(null,"bb0d"))}},{path:"/clean",name:"clean",component:function(){return n.e("chunk-77c12074").then(n.bind(null,"9a38"))}},{path:"/404",name:"404",component:function(){return n.e("chunk-f74bcc0c").then(n.bind(null,"8cdb"))}}],scrollBehavior:function(e,t,n){return n||(t.meta.isKeepAlive&&(t.meta.savedPosition=document.body.scrollTop||document.documentElement.scrollTop),{x:0,y:e.meta.savedPosition||0})}});B.beforeEach(function(e,t,n){U.commit({type:"setCurrRouter",from:t.name,to:e.name,query:e.query,instance:B}),e.name!==t.name&&U.commit("switchLoading",!0),n(!0)});var q=B,H=n("f753"),z=n.n(H),V="";z.a.defaults.baseURL=V;var J=Object(k["a"])("csrfToken");function K(e){return/^(GET|HEAD|OPTIONS|TRACE)$/i.test(e)}z.a.interceptors.request.use(function(e){return K(e.method)||(e.headers["x-csrf-token"]=J),e.headers["Authorization"]="Bearer ".concat(U.state.userToken),e.headers["uid"]=U.state.userId,e},function(e){return Promise.reject(e)}),z.a.interceptors.response.use(function(e){e.data;return Promise.resolve(e)},function(e){return Promise.reject(e)});var Q=function(e){return new Promise(function(t,n){z.a.request(e).then(function(e){t(e.data)},function(e){n(e)})})},X=n("9dfe");r["default"].config.productionTip=!1,r["default"].prototype.$ajax=Q,r["default"].use(X["Tabbar"]),r["default"].use(X["TabbarItem"]),r["default"].use(X["Button"]),r["default"].use(X["Grid"]),r["default"].use(X["GridItem"]),r["default"].use(X["Loadmore"]),r["default"].use(X["Group"]),r["default"].use(X["Input"]),r["default"].use(X["Icon"]),r["default"].use(X["Textarea"]),r["default"].use(i.a),new r["default"]({router:q,store:U,render:function(e){return e(N)}}).$mount("#app")},"5c0b":function(e,t,n){"use strict";var a=n("3673"),i=n.n(a);i.a},cb63:function(e,t,n){"use strict";n.d(t,"b",function(){return a}),n.d(t,"a",function(){return i});n("34a3");function a(e){return e}function i(e){return e?e.replace(/src="(.*?)"/g,function(e,t){return'src="'.concat(a(t),'"')}):""}window.signatureUrl=a},f1ed:function(e,t,n){"use strict";n.d(t,"c",function(){return a}),n.d(t,"d",function(){return i}),n.d(t,"a",function(){return r}),n.d(t,"f",function(){return o}),n.d(t,"e",function(){return s}),n.d(t,"b",function(){return c}),n.d(t,"g",function(){return u});n("34a3"),n("7bc1"),n("55a0"),n("3c6b"),n("7c56");function a(e){var t=new RegExp("(^|&)"+e+"=([^&]*)(&|$)","i"),n=location.search.substr(1).match(t);return null!=n?decodeURIComponent(n[2]):null}function i(){var e=location,t=e.origin+e.pathname;if(e.search){var n=e.search.substr(1),a=n.split("&"),i=null,r=0;if(a)for(var o=0;o<a.length;o++)i=a[o].split("="),2==i.length&&"code"!=i[0]&&(t+=(0==r?"?":"&")+i[0]+"="+i[1],r++)}return t}function r(e,t,n){if(e){var a,i=new RegExp("(^| )"+e+"=([^;]*)(;|$)");if(null==t)return a=document.cookie.match(i),a?decodeURIComponent(a[2]):null;n||(n=10);var r=new Date;r.setTime(r.getTime()+24*n*60*60*1e3),document.cookie=e+"="+encodeURIComponent(t)+";expires="+r.toGMTString()}}function o(e,t){var n=e.split("");t+="";for(var a=n.length-1,i=t.length-1;i>=0;i--,a--)n[a]=t.charAt(i);return n.join("")}function s(){return/micromessenger/i.test(navigator.userAgent)}function c(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"yyyy-MM-dd hh:mm:ss",n={"M+":e.getMonth()+1,"d+":e.getDate(),"h+":e.getHours(),"m+":e.getMinutes(),"s+":e.getSeconds(),"q+":Math.floor((e.getMonth()+3)/3),S:e.getMilliseconds()};for(var a in/(y+)/.test(t)&&(t=t.replace(RegExp.$1,(e.getFullYear()+"").substr(4-RegExp.$1.length))),n)new RegExp("("+a+")").test(t)&&(t=t.replace(RegExp.$1,1==RegExp.$1.length?n[a]:("00"+n[a]).substr((""+n[a]).length)));return t}function u(e){window.WeixinJSBridge?e&&e():document.addEventListener("WeixinJSBridgeReady",e,!1)}}});