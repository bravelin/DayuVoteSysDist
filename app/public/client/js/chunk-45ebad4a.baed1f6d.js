(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-45ebad4a"],{"539d":function(t,a,e){var i=e("b2f5"),s=e("f01a"),n=e("b6f1"),r=e("c9ea"),o="["+r+"]",c="​",l=RegExp("^"+o+o+"*"),u=RegExp(o+o+"*$"),d=function(t,a,e){var s={},o=n((function(){return!!r[t]()||c[t]()!=c})),l=s[t]=o?a(p):r[t];e&&(s[e]=l),i(i.P+i.F*o,"String",s)},p=d.trim=function(t,a){return t=String(s(t)),1&a&&(t=t.replace(l,"")),2&a&&(t=t.replace(u,"")),t};t.exports=d},"7a59":function(t,a,e){"use strict";var i=e("b2f5"),s=e("2d43")(0),n=e("119c")([].forEach,!0);i(i.P+i.F*!n,"Array",{forEach:function(t){return s(this,t,arguments[1])}})},bb51:function(t,a,e){"use strict";e.r(a);var i=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"page home-page"},[e("div",{staticClass:"wrap"},[e("wv-grid",{staticStyle:{"border-bottom":"1px solid #ddd","padding-bottom":"5px"}},[e("wv-grid-item",{staticClass:"g1"},[e("span",{attrs:{slot:"label"},slot:"label"},[e("i",{staticClass:"ali-icon-link"}),t._v("参与选手")]),e("span",{attrs:{slot:"label"},slot:"label"},[t._v(t._s(t.playerCount))])]),e("wv-grid-item",{staticClass:"g2"},[e("span",{attrs:{slot:"label"},slot:"label"},[e("i",{staticClass:"ali-icon-dianzan1"}),t._v("累计票数")]),e("span",{attrs:{slot:"label"},slot:"label"},[t._v(t._s(t.voteCount))])]),e("wv-grid-item",{staticClass:"g3"},[e("span",{attrs:{slot:"label"},slot:"label"},[e("i",{staticClass:"ali-icon-huo"}),t._v("访问量")]),e("span",{attrs:{slot:"label"},slot:"label"},[t._v(t._s(t.popularity))])])],1),0==t.actTime.type?e("div",{staticClass:"act-time",staticStyle:{"border-bottom":"1px solid #ddd"}},[e("i",{staticClass:"ali-icon-shijian"}),t._v("活动时间: "+t._s(t.actTime.time))]):t._e(),1==t.actTime.type?e("div",{staticClass:"act-time",staticStyle:{"border-bottom":"1px solid #ddd"}},[e("i",{staticClass:"ali-icon-shijian"}),t._v("报名时间: "+t._s(t.actTime.time1))]):t._e(),1==t.actTime.type?e("div",{staticClass:"act-time",staticStyle:{"border-bottom":"1px solid #ddd"}},[e("i",{staticClass:"ali-icon-shijian"}),t._v("投票时间: "+t._s(t.actTime.time2))]):t._e(),4!=t.actStatus&&5!=t.actStatus?e("div",{staticClass:"act-time",staticStyle:{"border-bottom":"1px solid #ddd"}},[e("i",{staticClass:"ali-icon-shijian"}),t._v("活动剩余："+t._s(t.surplus.day)+"天 "+t._s(t.surplus.hour)+"时 "+t._s(t.surplus.min)+"分 "+t._s(t.surplus.sec)+"秒")]):t._e(),e("div",{directives:[{name:"show",rawName:"v-show",value:2!=t.actStatus&&3!=t.actStatus,expression:"actStatus!=2 && actStatus!=3"}],staticClass:"act-status"},[t._v("抱歉,"+t._s("4"==t.actStatus?"活动已结束!":"5"==t.actStatus?"活动已关闭!":"活动未进行!"))])],1),e("div",{staticClass:"wrap search-wrap"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.searchKey,expression:"searchKey"}],attrs:{autofocus:!1,maxlength:"30",placeholder:"请输入选手名称或者编号"},domProps:{value:t.searchKey},on:{keyup:function(a){return!a.type.indexOf("key")&&t._k(a.keyCode,"enter",13,a.key,"Enter")?null:t.doSearch()},input:function(a){a.target.composing||(t.searchKey=a.target.value)}}}),e("button",{staticClass:"ali-icon-custom-search",on:{click:function(a){return t.doSearch()}}},[t._v("搜索")])]),e("ul",{staticClass:"link-btns"},[e("li",{on:{click:function(a){return t.toLink("prize")}}},[t._v("规则/奖品")]),e("li",{on:{click:function(a){return t.toLink("rank")}}},[t._v("比赛排名")]),e("li",{on:{click:function(a){return t.toSign()}}},[t._v("我要报名")])]),e("ul",{staticClass:"player-list-tabs"},[e("li",{class:{active:0==t.tab},on:{click:function(a){return t.doSwitchPlayerListTab(0)}}},[t._v("人气选手")]),e("li",{class:{active:1==t.tab},on:{click:function(a){return t.doSwitchPlayerListTab(1)}}},[t._v("最新参与")])]),e("ul",{staticClass:"player-list"},t._l(t.players,(function(a){return e("li",{key:a.id,on:{click:function(e){return t.doViewDetail(a)}}},[e("div",{staticClass:"rank"},[t._v(t._s(a.no)+"号")]),e("img",{attrs:{src:a.img}}),e("div",{staticClass:"player-info-wrap"},[e("div",{staticClass:"player-name"},[t._v(t._s(a.name))]),e("div",{staticClass:"player-info"},[e("div",[t._v("投票")]),e("strong",[t._v(t._s(a.totalVotes)+"票")])])])])})),0),e("div",{staticClass:"load-more-btn",class:{disabled:t.isFinishedLoadData},on:{click:function(a){return t.doLoadMore()}}},[t._v(t._s(t.loadMoreBtnTxt))]),e("div",{staticClass:"info-title"},[t._v("活动规则")]),e("div",{staticClass:"info-content",domProps:{innerHTML:t._s(t.actDescription)}})])},s=[],n=(e("f763"),e("7a59"),e("e836"),e("cb63")),r=e("f1ed"),o=e("46f1"),c=10,l=null,u={name:"Home",computed:{playerCount:function(){return this.$store.state.act.playerCount},voteCount:function(){return this.$store.state.act.voteCount},popularity:function(){return parseInt(this.$store.state.act.popularity)},visitCount:function(){return this.$store.state.act.visitCount},actStatus:function(){return this.$store.state.act.status},actDescription:function(){return Object(n["a"])(this.$store.state.act.description)},actTime:function(){var t=this,a=t.$store.state.act,e="yyyy-MM-dd hh:mm",i=Object(r["c"])(a.signUpStartTime,e),s=Object(r["c"])(a.signUpEndTime,e),n=Object(r["c"])(a.voteStartTime,e),o=Object(r["c"])(a.voteEndTime,e),c=new Date,l=c.getTime()>a.signUpStartTime.getTime()&&c.getTime()<a.signUpEndTime.getTime(),u=a.voteEndTime.getTime();return c.getTime()<u&&(2==t.actStatus||3==t.actStatus)&&t.doStartTimer(u),n==i&&o==s?{type:0,time:n+" ~ "+o,canSign:l}:{type:1,time1:i+" ~ "+s,time2:n+" ~ "+o,canSign:l}},loadMoreBtnTxt:function(){var t=this;return t.isFinishedLoadData?"已加载全部":t.isInLoadData?"数据加载中...":"加载更多..."}},data:function(){return{tab:0,searchKey:"",players:[],sectionWidth:0,page:0,isInLoadData:!1,isFinishedLoadData:!1,surplus:{day:"-",hour:"-",min:"-",sec:"-"}}},created:function(){var t=this,a=t.$store.state.homeState;t.players=a.players,t.sectionWidth=a.sectionWidth,t.page=a.page,t.tab=a.tab,t.isInLoadData=a.isInLoadData,t.isFinishedLoadData=a.isFinishedLoadData},mounted:function(){var t=this;t.$nextTick((function(){var a=document.querySelector(".player-list"),e=parseInt(getComputedStyle(a,null)["width"]);t.sectionWidth=(e-22)/2,0==t.page?t.getPlayers():t.updatePlayers(),t.$store.commit("switchLoading",!1),setTimeout((function(){t.$emit("share",{name:"global"})}),1e3),setTimeout((function(){t.$emit("checkstatus")}),2e3)}))},methods:{doStartTimer:function(t){var a=this,e=a.surplus;l=setInterval((function(){var a=Object(r["b"])(t-(new Date).getTime());e.day=a.day,e.hour=a.hour,e.min=a.min,e.sec=a.sec}),100)},doSwitchPlayerListTab:function(t){var a=this;a.tab!=t&&(a.tab=t,a.isFinishedLoadData=!1,a.isInLoadData=!1,a.getPlayers(1))},toLink:function(t){var a=this;a.$router.push({name:t,query:{actId:a.$store.state.act.id}})},doSearch:function(){var t=this;t.isFinishedLoadData=!1,t.getPlayers(1)},updatePlayers:function(){var t=this,a=t.$store;t.searchKey=t.searchKey.trim(),t.$ajax({url:o["a"].getActPlayers+a.state.act.id,params:{key:encodeURIComponent(t.searchKey),pageSize:t.players.length,page:1,order:1==t.tab?"createdAt":"totalVotes",orderDir:"DESC"}}).then((function(a){if(200==a.code){var e=a.data,i=[];e.dataList.forEach((function(a){for(var e=null,s=0;s<t.players.length;s++)t.players[s].id==a.id&&(e=t.players[s]);e?(a.pictures=e.pictures,a.img=e.img):(a.pictures=JSON.parse(a.pictures),a.img=Object(n["b"])(a.pictures[0])),i.push(a)})),t.players=i,t.isInLoadData=!1}}))},getPlayers:function(t){var a=this;if(!a.isFinishedLoadData&&!a.isInLoadData){var e=a.$store;a.isInLoadData=!0,t=t||a.page+1,a.searchKey=a.searchKey.trim(),a.$ajax({url:o["a"].getActPlayers+e.state.act.id,params:{key:encodeURIComponent(a.searchKey),pageSize:c,page:t,order:1==a.tab?"createdAt":"totalVotes",orderDir:"DESC"}}).then((function(e){if(200==e.code){1==t&&(a.players=[]);var i=e.data;i.dataList.forEach((function(t){t.pictures=JSON.parse(t.pictures),t.pictures.length&&(t.img=Object(n["b"])(t.pictures[0])),a.players.push(t)})),a.isInLoadData=!1,i.dataList.length<c&&(a.isFinishedLoadData=!0),a.page=t}}))}},doLoadMore:function(){var t=this;t.isFinishedLoadData||t.isInLoadData||t.getPlayers()},toSign:function(){var t=this;t.actTime.canSign&&0!=t.actStatus&&5!=t.actStatus&&t.$router.push({name:"sign",query:{actId:t.$store.state.act.id}})},doViewDetail:function(t){var a=this,e=a.$store.state;a.$router.push({name:"detail",query:{actId:e.act.id,pId:t.id}})}},beforeDestroy:function(){var t=this;t.$store.commit("saveHomeState",{players:t.players,sectionWidth:t.sectionWidth,page:t.page,tab:t.tab,isInLoadData:t.isInLoadData,isFinishedLoadData:t.isFinishedLoadData,searchKey:t.searchKey}),l&&clearInterval(l)}},d=u,p=e("6691"),m=Object(p["a"])(d,i,s,!1,null,null,null);a["default"]=m.exports},c9ea:function(t,a){t.exports="\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff"},e836:function(t,a,e){"use strict";e("539d")("trim",(function(t){return function(){return t(this,3)}}))},f763:function(t,a,e){for(var i=e("dac5"),s=e("cfc7"),n=e("e5ef"),r=e("3754"),o=e("743d"),c=e("14fc"),l=e("8b37"),u=l("iterator"),d=l("toStringTag"),p=c.Array,m={CSSRuleList:!0,CSSStyleDeclaration:!1,CSSValueList:!1,ClientRectList:!1,DOMRectList:!1,DOMStringList:!1,DOMTokenList:!0,DataTransferItemList:!1,FileList:!1,HTMLAllCollection:!1,HTMLCollection:!1,HTMLFormElement:!1,HTMLSelectElement:!1,MediaList:!0,MimeTypeArray:!1,NamedNodeMap:!1,NodeList:!0,PaintRequestList:!1,Plugin:!1,PluginArray:!1,SVGLengthList:!1,SVGNumberList:!1,SVGPathSegList:!1,SVGPointList:!1,SVGStringList:!1,SVGTransformList:!1,SourceBufferList:!1,StyleSheetList:!0,TextTrackCueList:!1,TextTrackList:!1,TouchList:!1},h=s(m),f=0;f<h.length;f++){var v,y=h[f],g=m[y],b=r[y],S=b&&b.prototype;if(S&&(S[u]||o(S,u,p),S[d]||o(S,d,y),c[y]=p,g))for(v in i)S[v]||n(S,v,i[v],!0)}}}]);