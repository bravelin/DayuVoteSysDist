(function(e){function t(t){for(var a,r,s=t[0],c=t[1],u=t[2],l=0,d=[];l<s.length;l++)r=s[l],Object.prototype.hasOwnProperty.call(i,r)&&i[r]&&d.push(i[r][0]),i[r]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(e[a]=c[a]);p&&p(t);while(d.length)d.shift()();return o.push.apply(o,u||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],a=!0,r=1;r<n.length;r++){var s=n[r];0!==i[s]&&(a=!1)}a&&(o.splice(t--,1),e=c(c.s=n[0]))}return e}var a={},r={app:0},i={app:0},o=[];function s(e){return c.p+"js/"+({}[e]||e)+"."+{"chunk-044a69b7":"77add35f","chunk-28be341e":"13e39cfa","chunk-33547ba8":"65d50ace","chunk-45ebad4a":"1243c7bc","chunk-6ef5bd30":"9178bcda","chunk-19bb0347":"9f8cada8","chunk-2d21b85d":"c443c2c7","chunk-5c4172fa":"62e156ee","chunk-77c12074":"1f3bde7c","chunk-a93bd6d4":"1a763eea","chunk-f74bcc0c":"8aaa9219"}[e]+".js"}function c(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.e=function(e){var t=[],n={"chunk-044a69b7":1,"chunk-28be341e":1,"chunk-33547ba8":1,"chunk-6ef5bd30":1,"chunk-19bb0347":1,"chunk-5c4172fa":1,"chunk-77c12074":1,"chunk-a93bd6d4":1,"chunk-f74bcc0c":1};r[e]?t.push(r[e]):0!==r[e]&&n[e]&&t.push(r[e]=new Promise(function(t,n){for(var a="css/"+({}[e]||e)+"."+{"chunk-044a69b7":"04359040","chunk-28be341e":"39dc3f9a","chunk-33547ba8":"6f51f819","chunk-45ebad4a":"31d6cfe0","chunk-6ef5bd30":"5bf34eb4","chunk-19bb0347":"01ad86ba","chunk-2d21b85d":"31d6cfe0","chunk-5c4172fa":"3c752bab","chunk-77c12074":"a3eea5bf","chunk-a93bd6d4":"1ef72086","chunk-f74bcc0c":"d8449284"}[e]+".css",i=c.p+a,o=document.getElementsByTagName("link"),s=0;s<o.length;s++){var u=o[s],l=u.getAttribute("data-href")||u.getAttribute("href");if("stylesheet"===u.rel&&(l===a||l===i))return t()}var d=document.getElementsByTagName("style");for(s=0;s<d.length;s++){u=d[s],l=u.getAttribute("data-href");if(l===a||l===i)return t()}var p=document.createElement("link");p.rel="stylesheet",p.type="text/css",p.onload=t,p.onerror=function(t){var a=t&&t.target&&t.target.src||i,o=new Error("Loading CSS chunk "+e+" failed.\n("+a+")");o.code="CSS_CHUNK_LOAD_FAILED",o.request=a,delete r[e],p.parentNode.removeChild(p),n(o)},p.href=i;var f=document.getElementsByTagName("head")[0];f.appendChild(p)}).then(function(){r[e]=0}));var a=i[e];if(0!==a)if(a)t.push(a[2]);else{var o=new Promise(function(t,n){a=i[e]=[t,n]});t.push(a[2]=o);var u,l=document.createElement("script");l.charset="utf-8",l.timeout=120,c.nc&&l.setAttribute("nonce",c.nc),l.src=s(e);var d=new Error;u=function(t){l.onerror=l.onload=null,clearTimeout(p);var n=i[e];if(0!==n){if(n){var a=t&&("load"===t.type?"missing":t.type),r=t&&t.target&&t.target.src;d.message="Loading chunk "+e+" failed.\n("+a+": "+r+")",d.name="ChunkLoadError",d.type=a,d.request=r,n[1](d)}i[e]=void 0}};var p=setTimeout(function(){u({type:"timeout",target:l})},12e4);l.onerror=l.onload=u,document.head.appendChild(l)}return Promise.all(t)},c.m=e,c.c=a,c.d=function(e,t,n){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)c.d(n,a,function(t){return e[t]}.bind(null,a));return n},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="/public/client/",c.oe=function(e){throw console.error(e),e};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],l=u.push.bind(u);u.push=t,u=u.slice();for(var d=0;d<u.length;d++)t(u[d]);var p=l;o.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},3673:function(e,t,n){},"46f1":function(e,t,n){"use strict";t["a"]={getActDetail:"/api/client/act/",getActPlayers:"/api/client/players/",getActPlayer:"/api/client/player/",sign:"/api/client/sign",index:"/api/client/index",isSigned:"/api/client/isSigned",visit:"/api/visit",canVote:"/api/client/canVote",vote:"/api/client/vote",tts:"/api/client/tts",isComplainted:"/api/client/complaint/submit",commitComplaint:"/api/client/complaint",canReward:"/api/client/canReward/",getRewardList:"/api/client/getRewardList",getWxSign:"/api/client/wx/sign",doPrePay:"/api/client/wx/prepay",cancelOrder:"/api/client/wx/cancelOrder"}},"56d7":function(e,t,n){"use strict";n.r(t);n("83bd"),n("19dd");var a=n("f199"),r=n.n(a),i=(n("dac5"),n("6e26"),n("9604"),n("df67"),n("6e6d")),o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{class:{"page-404":e.is404},attrs:{id:"app"}},[n("Banner",{directives:[{name:"show",rawName:"v-show",value:"success"!=e.currRouter.to&&"sign"!=e.currRouter.to,expression:"currRouter.to != 'success' && currRouter.to != 'sign'"}]}),n("router-view",{on:{update:function(t){return e.getActDetail()},share:e.doPageShare,checkstatus:function(t){return e.doCheckStatus()}}}),n("NavMenu",{directives:[{name:"show",rawName:"v-show",value:!e.is404&&"reward"!=e.currRouter.to&&"success"!=e.currRouter.to,expression:"!is404 && currRouter.to != 'reward' && currRouter.to != 'success' "}]}),n("Spinner",{directives:[{name:"show",rawName:"v-show",value:e.isLoading,expression:"isLoading"}]})],1)},s=[],c=(n("55a0"),n("7364"),n("cb63")),u=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},l=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"spinner-wrap"},[n("div",{staticClass:"spinner"},[n("div",{staticClass:"spinner-container container1"},[n("div",{staticClass:"circle1"}),n("div",{staticClass:"circle2"}),n("div",{staticClass:"circle3"}),n("div",{staticClass:"circle4"})]),n("div",{staticClass:"spinner-container container2"},[n("div",{staticClass:"circle1"}),n("div",{staticClass:"circle2"}),n("div",{staticClass:"circle3"}),n("div",{staticClass:"circle4"})]),n("div",{staticClass:"spinner-container container3"},[n("div",{staticClass:"circle1"}),n("div",{staticClass:"circle2"}),n("div",{staticClass:"circle3"}),n("div",{staticClass:"circle4"})])])])}],d=n("6691"),p={},f=Object(d["a"])(p,u,l,!1,null,null,null),h=f.exports,m=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("wv-tabbar",{attrs:{fixed:!0}},[n("wv-tabbar-item",{attrs:{to:{name:"home",query:{actId:e.actId}},"is-on":"home"==e.pageName}},[n("i",{staticClass:"ali-icon-shouyex weui-tabbar__icon",attrs:{slot:"icon"},slot:"icon"}),e._v("首页\n    ")]),n("wv-tabbar-item",{attrs:{to:{name:"rank",query:{actId:e.actId}},"is-on":"rank"==e.pageName}},[n("i",{staticClass:"ali-icon-hangyepaiming weui-tabbar__icon",attrs:{slot:"icon"},slot:"icon"}),e._v(" 排名\n    ")]),n("wv-tabbar-item",{attrs:{to:{name:"prize",query:{actId:e.actId}},"is-on":"prize"==e.pageName}},[n("i",{staticClass:"ali-icon-jiangpin weui-tabbar__icon",attrs:{slot:"icon"},slot:"icon"}),e._v(" 奖品\n    ")]),n("wv-tabbar-item",{attrs:{to:{name:"sign",query:{actId:e.actId}},"is-on":"sign"==e.pageName}},[n("i",{staticClass:"ali-icon-baoming weui-tabbar__icon",attrs:{slot:"icon"},slot:"icon"}),e._v(" 报名\n    ")]),n("wv-tabbar-item",{attrs:{"is-on":"advise"==e.pageName},on:{click:function(t){return e.toLink("https://vote.guangyitong.top/public/complaint/index.html")}}},[n("i",{staticClass:"ali-icon-shu weui-tabbar__icon",attrs:{slot:"icon"},slot:"icon"}),e._v(" 反馈\n    ")])],1)},v=[],g={name:"NavMenu",computed:{pageName:function(){return this.$store.state.currRouter.to},actId:function(){return this.$store.state.act.id}},methods:{toLink:function(e){location.href=e}}},b=g,w=Object(d["a"])(b,m,v,!1,null,null,null),y=w.exports,k=n("46f1"),I=n("9dfe"),S=n("f1ed"),x=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"banner-wrap"},[n("audio",{ref:"star",staticClass:"star-audio",attrs:{src:e.starAudioSrc,controls:""}}),e.bgAudioPlayStatus?n("div",{staticClass:"music-icon ali-icon-yinlemusic214",class:{paused:2==e.bgAudioPlayStatus},on:{click:function(t){return e.resumeOrPausedMusic()}}}):e._e(),n("div",{staticClass:"swiper-container",style:{height:e.bannerHeight+"px"}},[n("div",{staticClass:"swiper-wrapper"},e._l(e.pics,function(t,a){return n("div",{key:a,staticClass:"swiper-slide"},[0==a&&e.hasStarPlayer?n("div",{staticClass:"star-tag"},[e._v("今日之星")]):e._e(),n("img",{attrs:{src:t}})])}),0),n("div",{staticClass:"swiper-pagination"})]),n("div",{staticClass:"act-title",staticStyle:{display:"none"}},[e._v(e._s(e.actTitle))]),n("div",{directives:[{name:"show",rawName:"v-show",value:e.showAdvise,expression:"showAdvise"}],staticClass:"act-content",style:{width:e.bannerWidth+"px"}},[n("div",{ref:"pub",style:{transform:"translateX(-"+e.currOffsetX+"px)"}},[e._v(e._s(2!=e.pubTag?"":e.actContent))])]),n("div",{directives:[{name:"show",rawName:"v-show",value:e.showAdvise,expression:"showAdvise"}],staticClass:"advise-close-btn",on:{click:function(t){return e.doCloseAdvise()}}},[e._v("×")])])},C=[],T=(n("11ac"),{name:"Banner",computed:{hasStarPlayer:function(){return!!this.$store.state.act.starPlayer},actContent:function(){return this.$store.state.act.content},actTitle:function(){return this.$store.state.act.title},bannerHeight:function(){var e=this.$store.state.winWidth;return.64*(e>680?680:e)},bannerWidth:function(){var e=this.$store.state.winWidth;return e>680?680:e},pics:function(){return this.$store.state.act.pictures.map(function(e){return Object(c["b"])(e)})}},data:function(){return{swiperInstance:null,currOffsetX:0,pubTag:2,starAudioSrc:"",starAudioLoad:!1,bgAudioLoad:!1,bgAudioPlayStatus:0,thisDayStarAudioPlayStatus:0,playInterval:10,showAdvise:!0}},mounted:function(){var e=this,t=e.$store.state.act;e.$nextTick(function(){if(t.loaded)e.doInit();else var n=setInterval(function(){t.loaded&&(e.doInit(),clearInterval(n))},200)})},methods:{doCloseAdvise:function(){var e=this;e.showAdvise=!1},doInit:function(){var e=this;e.initSwiper(),e.initPubContent(),Object(S["f"])()?Object(S["h"])(function(){e.initAudio()}):e.initAudio()},initAudio:function(){},resumeOrPausedMusic:function(){},getStarAudio:function(){},listenStarTouchPage:function(){},listenTouchPage:function(){},playStarAudio:function(){},playBgAudio:function(){},initSwiper:function(){var e=this;e.swiperInstance=new Swiper(".swiper-container",{direction:"horizontal",hashNavigation:!1,mousewheel:!1,loop:!0,autoplay:{delay:2500},pagination:{el:".swiper-pagination"}})},initPubContent:function(){var e=this,t=e.$refs.pub,n=this.$store.state.winWidth,a=parseInt(getComputedStyle(t,null)["width"])+(n>680?680:n);setInterval(function(){e.currOffsetX+=10,e.currOffsetX>a?(e.currOffsetX=0,e.pubTag=0):2!=e.pubTag&&e.pubTag++},300)}}}),P=T,O=Object(d["a"])(P,x,C,!1,null,null,null),A=O.exports,_={routerBase:/(localhost|192\.168)/.test(location.origin)?"./":"/client",wxAppId:"wx79735b40b5c806aa"},$={name:"app",components:{Spinner:h,NavMenu:y,Banner:A},computed:{isLoading:function(){return this.$store.state.loading},is404:function(){return this.$store.state.is404},currRouter:function(){return this.$store.state.currRouter}},created:function(){var e=this,t=e.$store,n=window;if(n.addEventListener("resize",function(){t.commit("getWindowSize")}),t.commit("getWindowSize"),Object(S["f"])()&&!/clean/.test(location.href)){var a=localStorage;if(/code=/.test(location.href)||t.state.userId&&a.getItem("votesys-client-openid-new"))e.init(!0);else{var r=e.getOauthUrl();location.href=r}}else e.init(!1)},methods:{init:function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=this,n=t.$store,a=Object(S["d"])("actId"),r=Object(S["d"])("code");a?(n.commit("setActId",a),e?t.getUserDetail(r):t.addVisit(),t.getActDetail()):(n.commit("setPage404",!0),t.$router.push({name:"404"}))},getUserDetail:function(e){var t=this,n=t.$store.state;t.$ajax({url:k["a"].index,params:{openId:n.userOpenId,userId:n.userId,code:e||""}}).then(function(e){if(200==e.code){var n=e.data;n.token?t.$store.commit("setUserInfo",{userToken:n.token,userId:n.user.id,userName:n.user.nickName,userOpenId:n.user.openId}):40029==n.errcode&&(location.href=t.getOauthUrl())}t.addVisit()})},getOauthUrl:function(){var e=Object(S["e"])();return"https://open.weixin.qq.com/connect/oauth2/authorize?appid=".concat(_.wxAppId,"&redirect_uri=").concat(encodeURIComponent(e),"&response_type=code&scope=snsapi_base#wechat_redirect")},addVisit:function(){var e=this,t=e.$store.state;e.$ajax({url:k["a"].visit,method:"POST",data:{actId:t.act.id,playerId:Object(S["d"])("pId"),userId:t.userId}})},getActDetail:function(){var e=this;e.$ajax({url:k["a"].getActDetail+e.$store.state.act.id}).then(function(t){200==t.code?e.$store.commit("setActInfo",t.data):(e.$store.commit("setPage404",!0),e.$router.push({name:"404"}))})},doCheckStatus:function(){var e=this,t=e.$store.state.act.status;if(2!=t&&3!=t){var n="4"==t?"活动已结束!":"5"==t?"活动已关闭!":"活动未进行!";Object(I["Toast"])({message:"抱歉！"+n,type:"text",duration:3e3})}},doPageShare:function(e){var t=this,n=t.$store.state,a=n.act,r=location;if(n.currPageShareName!=e.name){var i=null,o=e.name;i="global"==e.name?{title:a.title,desc:"我正在参加".concat(a.title,"，请为我加油！"),link:r.origin+"/client/".concat(n.currRouter.to,"?actId=")+a.id,imgUrl:Object(c["b"])(a.pictures[1])}:e.shareConfig,t.getWxSign(i,o)}},getWxSign:function(e,t){var n=this;if(Object(S["f"])()){var a=location;n.$ajax({url:k["a"].getWxSign,method:"post",params:{verifyType:"client"},data:{url:a.origin+a.pathname+a.search}}).then(function(a){if(200==a.code){var r=a.data;n.wxConfig(r,e,t)}})}},wxConfig:function(e,t,n){var a=this,r=(a.$store.state.act,{debug:!1,appId:e.appId,timestamp:e.timestamp,nonceStr:e.noncestr,signature:e.signature,jsApiList:["onMenuShareAppMessage","onMenuShareTimeline","onMenuShareQQ","onMenuShareWeibo","onMenuShareQZone"]});wx.config(r),wx.error(function(e){console.log("wx config error"+JSON.stringify(e))}),wx.ready(function(){var e={title:t.title,desc:t.desc,link:t.url,imgUrl:t.imgUrl};wx.onMenuShareAppMessage(e),wx.onMenuShareTimeline(e),wx.onMenuShareQQ(e),wx.onMenuShareWeibo(e),wx.onMenuShareQZone(e),a.$store.commit("setCurrPageShareName",n)})}}},N=$,j=(n("5c0b"),Object(d["a"])(N,o,s,!1,null,null,null)),E=j.exports,R=n("591a");i["default"].use(R["a"]);var M=localStorage,D=window,L=document,U={userToken:"votesys-client-token-new",userId:"votesys-client-userid-new",userName:"votesys-client-username-new",userOpenId:"votesys-client-openid-new",cacheTag:"votesys-client-cachetag-new"},W=new R["a"].Store({state:{winHeight:0,winWidth:0,currRouter:{from:"",to:"",query:null,instance:null},loading:!1,is404:!1,act:{id:"",loaded:!1,title:"",pictures:[],content:"",description:"",maxDayVoteNumber:0,maxTotalVoteNumber:0,maxTotalVotePlayer:1,playerCount:0,prizes:"",starPlayer:"",starPlayerName:"",popularity:0,signUpEndTime:new Date,signUpStartTime:new Date,status:"",visitCount:0,voteCount:0,voteEndTime:new Date,voteStartTime:new Date,backgroundMusic:""},homeState:{players:[],tab:0,sectionWidth:0,page:0,isInLoadData:!1,isFinishedLoadData:!1,searchKey:""},userId:M.getItem(U.userId)||"",userToken:M.getItem(U.userToken)||"",userName:M.getItem(U.userName)||"",userOpenId:M.getItem(U.userOpenId)||"",currPageShareName:""},mutations:{switchLoading:function(e,t){e.loading=t},getWindowSize:function(e){e.winHeight=L.documentElement.clientHeight||D.innerHeight,e.winWidth=L.documentElement.clientWidth||D.innerWidth},setCurrRouter:function(e,t){var n=e.currRouter;n.from=t.from,n.to=t.to,n.query=t.query,n.instance=t.instance},setPage404:function(e,t){e.is404=t},setActId:function(e,t){e.act.id=t},setUserInfo:function(e,t){e.userToken=t.userToken,e.userId=t.userId,e.userName=t.userName,e.userOpenId=t.userOpenId,M.setItem(U.userToken,e.userToken),M.setItem(U.userId,e.userId),M.setItem(U.userName,e.userName),M.setItem(U.userOpenId,e.userOpenId),M.setItem(U.cacheTag,"1")},setActInfo:function(e,t){var n=e.act;n.content=t.content,n.description=t.description,n.maxDayVoteNumber=t.maxDayVoteNumber,n.maxTotalVoteNumber=t.maxTotalVoteNumber,n.maxTotalVotePlayer=t.maxTotalVotePlayer,n.pictures=JSON.parse(t.pictures),n.playerCount=t.playerCount,n.prizes=t.prizes,n.starPlayer=t.starPlayer,n.starPlayerName=t.starPlayerName,n.signUpEndTime=new Date(t.signUpEndTime),n.signUpStartTime=new Date(t.signUpStartTime),n.status=t.status,n.title=t.title,n.visitCount=t.visitCount,n.voteCount=t.voteCount,n.backgroundMusic=t.backgroundMusic,n.popularity=t.popularity||0,n.voteEndTime=new Date(t.voteEndTime),n.voteStartTime=new Date(t.voteStartTime),n.loaded=!0,document.title=n.title},saveHomeState:function(e,t){var n=e.homeState;n.players=t.players,n.tab=t.tab,n.sectionWidth=t.sectionWidth,n.page=t.page,n.isInLoadData=t.isInLoadData,n.isFinishedLoadData=t.isFinishedLoadData,n.searchKey=t.searchKey},setCurrPageShareName:function(e,t){e.currPageShareName=t}}}),q=n("c478");i["default"].use(q["a"]);var z=new q["a"]({mode:"history",base:_.routerBase,routes:[{path:"/home",name:"home",component:function(){return n.e("chunk-45ebad4a").then(n.bind(null,"bb51"))},meta:{isKeepAlive:!0}},{path:"/prize",name:"prize",component:function(){return Promise.all([n.e("chunk-6ef5bd30"),n.e("chunk-2d21b85d")]).then(n.bind(null,"bfad"))}},{path:"/sign",name:"sign",component:function(){return Promise.all([n.e("chunk-6ef5bd30"),n.e("chunk-5c4172fa")]).then(n.bind(null,"1c4f"))}},{path:"/rank",name:"rank",component:function(){return n.e("chunk-28be341e").then(n.bind(null,"789b"))}},{path:"/detail",name:"detail",component:function(){return Promise.all([n.e("chunk-6ef5bd30"),n.e("chunk-19bb0347")]).then(n.bind(null,"c84b"))}},{path:"/advise",name:"advise",component:function(){return n.e("chunk-044a69b7").then(n.bind(null,"7c66"))}},{path:"/reward",name:"reward",component:function(){return n.e("chunk-33547ba8").then(n.bind(null,"2442"))}},{path:"/success",name:"success",component:function(){return n.e("chunk-a93bd6d4").then(n.bind(null,"bb0d"))}},{path:"/clean",name:"clean",component:function(){return n.e("chunk-77c12074").then(n.bind(null,"9a38"))}},{path:"/404",name:"404",component:function(){return n.e("chunk-f74bcc0c").then(n.bind(null,"8cdb"))}}],scrollBehavior:function(e,t,n){return n||(t.meta.isKeepAlive&&(t.meta.savedPosition=document.body.scrollTop||document.documentElement.scrollTop),{x:0,y:e.meta.savedPosition||0})}});z.beforeEach(function(e,t,n){W.commit({type:"setCurrRouter",from:t.name,to:e.name,query:e.query,instance:z}),e.name!==t.name&&W.commit("switchLoading",!0),n(!0)});var B=z,V=n("f753"),H=n.n(V),F="";H.a.defaults.baseURL=F;var J=Object(S["a"])("csrfToken");function K(e){return/^(GET|HEAD|OPTIONS|TRACE)$/i.test(e)}H.a.interceptors.request.use(function(e){return J||(J=Object(S["a"])("csrfToken")),K(e.method)||(e.headers["x-csrf-token"]=J),e.headers["Authorization"]="Bearer ".concat(W.state.userToken),e.headers["uid"]=W.state.userId,e},function(e){return Promise.reject(e)}),H.a.interceptors.response.use(function(e){e.data;return Promise.resolve(e)},function(e){return Promise.reject(e)});var Q=function(e){return new Promise(function(t,n){H.a.request(e).then(function(e){t(e.data)},function(e){n(e)})})};i["default"].config.productionTip=!1,i["default"].prototype.$ajax=Q,i["default"].use(I["Tabbar"]),i["default"].use(I["TabbarItem"]),i["default"].use(I["Button"]),i["default"].use(I["Grid"]),i["default"].use(I["GridItem"]),i["default"].use(I["Loadmore"]),i["default"].use(I["Group"]),i["default"].use(I["Input"]),i["default"].use(I["Icon"]),i["default"].use(I["Textarea"]),i["default"].use(r.a),new i["default"]({router:B,store:W,render:function(e){return e(E)}}).$mount("#app")},"5c0b":function(e,t,n){"use strict";var a=n("3673"),r=n.n(a);r.a},cb63:function(e,t,n){"use strict";n.d(t,"b",function(){return a}),n.d(t,"a",function(){return r});n("34a3");function a(e){return e}function r(e){return e?e.replace(/src="(.*?)"/g,function(e,t){return'src="'.concat(a(t),'"')}):""}window.signatureUrl=a},f1ed:function(e,t,n){"use strict";n.d(t,"d",function(){return a}),n.d(t,"e",function(){return r}),n.d(t,"a",function(){return i}),n.d(t,"g",function(){return o}),n.d(t,"f",function(){return s}),n.d(t,"c",function(){return c}),n.d(t,"h",function(){return u}),n.d(t,"b",function(){return p});n("34a3"),n("7bc1"),n("55a0"),n("3c6b"),n("7c56");function a(e){var t=new RegExp("(^|&)"+e+"=([^&]*)(&|$)","i"),n=location.search.substr(1).match(t);return null!=n?decodeURIComponent(n[2]):null}function r(){var e=location,t=e.origin+e.pathname;if(e.search){var n=e.search.substr(1),a=n.split("&"),r=null,i=0;if(a)for(var o=0;o<a.length;o++)r=a[o].split("="),2==r.length&&"code"!=r[0]&&(t+=(0==i?"?":"&")+r[0]+"="+r[1],i++)}return t}function i(e,t,n){if(e){var a,r=new RegExp("(^| )"+e+"=([^;]*)(;|$)");if(null==t)return a=document.cookie.match(r),a?decodeURIComponent(a[2]):null;n||(n=10);var i=new Date;i.setTime(i.getTime()+24*n*60*60*1e3),document.cookie=e+"="+encodeURIComponent(t)+";expires="+i.toGMTString()}}function o(e,t){var n=e.split("");t+="";for(var a=n.length-1,r=t.length-1;r>=0;r--,a--)n[a]=t.charAt(r);return n.join("")}function s(){return/micromessenger/i.test(navigator.userAgent)}function c(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"yyyy-MM-dd hh:mm:ss",n={"M+":e.getMonth()+1,"d+":e.getDate(),"h+":e.getHours(),"m+":e.getMinutes(),"s+":e.getSeconds(),"q+":Math.floor((e.getMonth()+3)/3),S:e.getMilliseconds()};for(var a in/(y+)/.test(t)&&(t=t.replace(RegExp.$1,(e.getFullYear()+"").substr(4-RegExp.$1.length))),n)new RegExp("("+a+")").test(t)&&(t=t.replace(RegExp.$1,1==RegExp.$1.length?n[a]:("00"+n[a]).substr((""+n[a]).length)));return t}function u(e){window.WeixinJSBridge?e&&e():document.addEventListener("WeixinJSBridgeReady",e,!1)}var l=864e5,d=36e5;function p(e){var t=parseInt(e/l);e%=l;var n=parseInt(e/d);e%=d;var a=parseInt(e/6e4);e%=6e4;var r=(e/1e3).toFixed(1);return{day:t,hour:n,min:a,sec:r}}}});