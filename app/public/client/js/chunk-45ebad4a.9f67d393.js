(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-45ebad4a"],{"539d":function(t,e,a){var i=a("b2f5"),s=a("f01a"),n=a("b6f1"),r=a("c9ea"),o="["+r+"]",c="​",l=RegExp("^"+o+o+"*"),u=RegExp(o+o+"*$"),h=function(t,e,a){var s={},o=n(function(){return!!r[t]()||c[t]()!=c}),l=s[t]=o?e(d):r[t];a&&(s[a]=l),i(i.P+i.F*o,"String",s)},d=h.trim=function(t,e){return t=String(s(t)),1&e&&(t=t.replace(l,"")),2&e&&(t=t.replace(u,"")),t};t.exports=h},"7a59":function(t,e,a){"use strict";var i=a("b2f5"),s=a("2d43")(0),n=a("119c")([].forEach,!0);i(i.P+i.F*!n,"Array",{forEach:function(t){return s(this,t,arguments[1])}})},bb51:function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"page home-page"},[a("div",{staticClass:"wrap"},[a("wv-grid",[a("wv-grid-item",{staticClass:"g1"},[a("span",{attrs:{slot:"label"},slot:"label"},[t._v("参与选手")]),a("span",{attrs:{slot:"label"},slot:"label"},[t._v(t._s(t.playerCount))])]),a("wv-grid-item",{staticClass:"g2"},[a("span",{attrs:{slot:"label"},slot:"label"},[t._v("累计票数")]),a("span",{attrs:{slot:"label"},slot:"label"},[t._v(t._s(t.voteCount))])]),a("wv-grid-item",{staticClass:"g3"},[a("span",{attrs:{slot:"label"},slot:"label"},[t._v("累计人气")]),a("span",{attrs:{slot:"label"},slot:"label"},[t._v(t._s(t.popularity))])])],1),0==t.actTime.type?a("div",{staticClass:"act-time"},[t._v("活动时间: "+t._s(t.actTime.time))]):t._e(),1==t.actTime.type?a("div",{staticClass:"act-time"},[t._v("报名时间: "+t._s(t.actTime.time1))]):t._e(),1==t.actTime.type?a("div",{staticClass:"act-time"},[t._v("投票时间: "+t._s(t.actTime.time2))]):t._e(),a("wv-button",{directives:[{name:"show",rawName:"v-show",value:0!=t.actStatus&&5!=t.actStatus,expression:"actStatus!=0 && actStatus!=5"}],staticClass:"ali-icon-kechengbaoming",attrs:{type:"primary",disabled:!t.actTime.canSign},on:{click:function(e){return t.toSign()}}},[t._v("我要报名")]),a("div",{directives:[{name:"show",rawName:"v-show",value:4==t.actStatus&&5==t.actStatus,expression:"actStatus==4 && actStatus==5"}],staticClass:"act-status"},[t._v("抱歉,"+t._s("4"==t.actStatus?"活动已结束!":"5"==t.actStatus?"活动已关闭!":"活动未进行!"))])],1),a("div",{staticClass:"wrap search-wrap"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.searchKey,expression:"searchKey"}],attrs:{autofocus:!1,maxlength:"30",placeholder:"请输入选手名称或者编号"},domProps:{value:t.searchKey},on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.doSearch()},input:function(e){e.target.composing||(t.searchKey=e.target.value)}}}),a("button",{staticClass:"ali-icon-custom-search",on:{click:function(e){return t.doSearch()}}})]),a("ul",{staticClass:"player-list",style:{height:t.listHeight+"px"}},t._l(t.players,function(e,i){return a("li",{directives:[{name:"show",rawName:"v-show",value:e.height,expression:"p.height"}],key:e.id,style:{width:t.sectionWidth+"px",top:e.top+"px",left:e.left+"px"},on:{click:function(a){return t.doViewDetail(e)}}},[a("div",{staticClass:"rank"},[t._v(t._s(i+1))]),a("img",{attrs:{src:e.img}}),a("div",{staticClass:"player-name"},[t._v(t._s(e.no)+"号: "+t._s(e.name))]),a("div",{staticClass:"player-info",style:{top:e.imgHeight-32+"px"}},[a("strong",[t._v(t._s(e.totalVotes))]),t._v("票")])])}),0),a("div",{staticClass:"info-title load-more-btn",class:{disabled:t.isFinishedLoadData},on:{click:function(e){return t.doLoadMore()}}},[t._v(t._s(t.loadMoreBtnTxt))]),a("div",{staticClass:"info-title"},[t._v("活动介绍")]),a("div",{staticClass:"info-content",domProps:{innerHTML:t._s(t.actDescription)}})])},s=[],n=(a("f763"),a("7a59"),a("e836"),a("cb63")),r=a("f1ed"),o=a("46f1"),c=10,l={name:"Home",computed:{playerCount:function(){return this.$store.state.act.playerCount},voteCount:function(){return this.$store.state.act.voteCount},popularity:function(){return parseInt(this.$store.state.act.popularity)},visitCount:function(){return this.$store.state.act.visitCount},actStatus:function(){return this.$store.state.act.status},actDescription:function(){return Object(n["a"])(this.$store.state.act.description)},actTime:function(){var t=this.$store.state.act,e="yyyy-MM-dd hh:mm",a=Object(r["b"])(t.signUpStartTime,e),i=Object(r["b"])(t.signUpEndTime,e),s=Object(r["b"])(t.voteStartTime,e),n=Object(r["b"])(t.voteEndTime,e),o=new Date,c=o.getTime()>t.signUpStartTime.getTime()&&o.getTime()<t.signUpEndTime.getTime();return s==a&&n==i?{type:0,time:s+" ~ "+n,canSign:c}:{type:1,time1:a+" ~ "+i,time2:s+" ~ "+n,canSign:c}},loadMoreBtnTxt:function(){var t=this;return t.isFinishedLoadData?"已加载全部":t.isInLoadData?"数据加载中...":"加载更多..."}},data:function(){return{searchKey:"",players:[],listHeight:100,sectionWidth:0,inComputeListHeight:!1,page:0,isInLoadData:!1,isFinishedLoadData:!1}},created:function(){var t=this,e=t.$store.state.homeState;t.players=e.players,t.listHeight=e.listHeight,t.sectionWidth=e.sectionWidth,t.inComputeListHeight=e.inComputeListHeight,t.page=e.page,t.isInLoadData=e.isInLoadData,t.isFinishedLoadData=e.isFinishedLoadData},mounted:function(){var t=this;t.$nextTick(function(){var e=document.querySelector(".player-list"),a=parseInt(getComputedStyle(e,null)["width"]);t.sectionWidth=(a-22)/2,0==t.page?t.getPlayers():t.updatePlayers(),t.$store.commit("switchLoading",!1),setTimeout(function(){t.$emit("share",{name:"global"})},1e3)})},methods:{doSearch:function(){var t=this;t.isFinishedLoadData=!1,t.getPlayers(1)},updatePlayers:function(){var t=this,e=t.$store;t.searchKey=t.searchKey.trim(),t.$ajax({url:o["a"].getActPlayers+e.state.act.id,params:{key:encodeURIComponent(t.searchKey),pageSize:t.players.length,page:1,order:"totalVotes",orderDir:"DESC"}}).then(function(e){if(200==e.code){var a=e.data,i=0,s=[];a.dataList.forEach(function(e){for(var a=null,i=0;i<t.players.length;i++)t.players[i].id==e.id&&(a=t.players[i]);a?(e.pictures=a.pictures,e.img=a.img,e.height=a.height,e.imgHeight=a.imgHeight):(e.pictures=JSON.parse(e.pictures),e.img=Object(n["b"])(e.pictures[0]),e.height=0,e.imgHeight=0),e.top=0,e.left=0,e.adjust=!1,s.push(e)}),t.players=s,s.length>0?(t.inComputeListHeight=!0,t.computePlayerList(i)):t.isInLoadData=!1}})},getPlayers:function(t){var e=this;if(!e.isFinishedLoadData&&!e.isInLoadData){var a=e.$store;e.isInLoadData=!0,t=t||e.page+1,e.searchKey=e.searchKey.trim(),e.$ajax({url:o["a"].getActPlayers+a.state.act.id,params:{key:encodeURIComponent(e.searchKey),pageSize:c,page:t,order:"totalVotes",orderDir:"DESC"}}).then(function(a){if(200==a.code){1==t&&(e.players=[],e.listHeight=0);var i=a.data,s=e.players.length;i.dataList.forEach(function(t){t.pictures=JSON.parse(t.pictures),t.pictures.length&&(t.img=Object(n["b"])(t.pictures[0]),t.top=0,t.left=0,t.height=0,t.imgHeight=0,t.adjust=!1,e.players.push(t))}),s<e.players.length?(e.inComputeListHeight=!0,e.computePlayerList(s)):e.isInLoadData=!1,i.dataList.length<c&&(e.isFinishedLoadData=!0),e.page=t}})}},computePlayerNext:function(t,e){var a=this,i=a.players,s=i[t];if(s.imgHeight=e,s.left=t%2==0?6:a.sectionWidth+14,0==t||1==t)s.top=10;else{var n=i[t-2];s.top=n.top+n.height+8}t<i.length-1?a.computePlayerList(t+1):setTimeout(function(){a.adjustPlayerList(),a.inComputeListHeight=!1,a.isInLoadData=!1},300);var r=s.top+s.height;a.listHeight<r&&(a.listHeight=r),0==s.height&&(s.height=e+80)},computePlayerList:function(t){var e=this,a=e.players,i=a[t];if(i.imgHeight)e.computePlayerNext(t,i.imgHeight);else{var s=new Image,n=e.sectionWidth;s.onload=function(){var a=this.width,i=this.height,s=n/a*i;e.computePlayerNext(t,s)},s.src=i.img}},adjustPlayerList:function(){for(var t=this,e=t.players,a=document.querySelectorAll(".player-list>li"),i=null,s=null,n=0;n<e.length;n++)i=e[n],!i.adjust&&a[n]&&(i.height=parseInt(getComputedStyle(a[n],null)["height"]),0!=n&&1!=n&&(s=e[n-2],i.top=s.top+s.height+8),i.adjust=!0);var r=i.top+i.height,o=1!=e.length?e[e.length-2]:null,c=0;o&&(c=o.top+o.height),t.listHeight=Math.max(r,c)},doLoadMore:function(){var t=this;t.isFinishedLoadData||t.isInLoadData||t.getPlayers()},doHandlerScroll:function(){var t=this,e=document;t.currScrollTop=e.body.scrollTop||e.documentElement.scrollTop;var a=t.$store.state.winHeight;!t.isFinishedLoadData&&!t.isInLoadData&&t.currScrollTop+1.4*a>e.body.scrollHeight&&t.getPlayers()},toSign:function(){var t=this;t.actTime.canSign&&t.$router.push({name:"sign",query:{actId:t.$store.state.act.id}})},doViewDetail:function(t){var e=this,a=e.$store.state;e.$router.push({name:"detail",query:{actId:a.act.id,pId:t.id}})}},beforeDestroy:function(){var t=this;window.removeEventListener("scroll",t.doHandlerScroll),t.$store.commit("saveHomeState",{players:t.players,listHeight:t.listHeight,sectionWidth:t.sectionWidth,inComputeListHeight:t.inComputeListHeight,page:t.page,isInLoadData:t.isInLoadData,isFinishedLoadData:t.isFinishedLoadData,searchKey:t.searchKey})}},u=l,h=a("6691"),d=Object(h["a"])(u,i,s,!1,null,null,null);e["default"]=d.exports},c9ea:function(t,e){t.exports="\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff"},e836:function(t,e,a){"use strict";a("539d")("trim",function(t){return function(){return t(this,3)}})},f763:function(t,e,a){for(var i=a("dac5"),s=a("cfc7"),n=a("e5ef"),r=a("3754"),o=a("743d"),c=a("14fc"),l=a("8b37"),u=l("iterator"),h=l("toStringTag"),d=c.Array,p={CSSRuleList:!0,CSSStyleDeclaration:!1,CSSValueList:!1,ClientRectList:!1,DOMRectList:!1,DOMStringList:!1,DOMTokenList:!0,DataTransferItemList:!1,FileList:!1,HTMLAllCollection:!1,HTMLCollection:!1,HTMLFormElement:!1,HTMLSelectElement:!1,MediaList:!0,MimeTypeArray:!1,NamedNodeMap:!1,NodeList:!0,PaintRequestList:!1,Plugin:!1,PluginArray:!1,SVGLengthList:!1,SVGNumberList:!1,SVGPathSegList:!1,SVGPointList:!1,SVGStringList:!1,SVGTransformList:!1,SourceBufferList:!1,StyleSheetList:!0,TextTrackCueList:!1,TextTrackList:!1,TouchList:!1},g=s(p),m=0;m<g.length;m++){var y,f=g[m],v=p[f],L=r[f],S=L&&L.prototype;if(S&&(S[u]||o(S,u,d),S[h]||o(S,h,f),c[f]=d,v))for(y in i)S[y]||n(S,y,i[y],!0)}}}]);