(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-4757fef8"],{"02e9":function(t,a,e){},"21bb":function(t,a,e){"use strict";var n=e("02e9"),s=e.n(n);s.a},bb51:function(t,a,e){"use strict";e.r(a);var n=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"page home-page"},[e("div",{ref:"content",staticClass:"page-content"},[e("div",{staticClass:"page-tools"},[e("h3",[t._v("系统概况")]),e("el-button",{attrs:{type:"primary",plain:"",icon:"el-icon-refresh"},on:{click:function(a){return t.refresh()}}},[t._v("刷新")])],1),e("div",{staticClass:"data-stat-wrap act"},[e("div",{staticClass:"c1 link act",on:{click:function(a){return t.toList("all")}}},[e("strong",[t._v(t._s(t.actData.all))]),e("label",[t._v("活动总数")])]),e("div",{staticClass:"c2 link",on:{click:function(a){return t.toList("notYetBegun")}}},[e("strong",[t._v(t._s(t.actData.notYetBegun))]),e("label",[t._v("未开始")])]),e("div",{staticClass:"c3 link",on:{click:function(a){return t.toList("onGoing")}}},[e("strong",[t._v(t._s(t.actData.onGoing))]),e("label",[t._v("进行中")])]),e("div",{staticClass:"c4 link",on:{click:function(a){return t.toList("finished")}}},[e("strong",[t._v(t._s(t.actData.finished))]),e("label",[t._v("已结束")])]),e("div",{staticClass:"c5 link",on:{click:function(a){return t.toList("startThisDay")}}},[e("strong",[t._v(t._s(t.actData.startThisDay))]),e("label",[t._v("今天开始")])]),e("div",{staticClass:"c6 link",on:{click:function(a){return t.toList("endThisDay")}}},[e("strong",[t._v(t._s(t.actData.endThisDay))]),e("label",[t._v("今天结束")])]),e("div",{staticClass:"c7 link",on:{click:function(a){return t.toList("closed")}}},[e("strong",[t._v(t._s(t.actData.closed))]),e("label",[t._v("已关闭")])])]),e("div",{staticClass:"data-stat-wrap player"},[e("div",{staticClass:"c1"},[e("strong",[t._v(t._s(t.playerData.total))]),e("label",[t._v("选手总数")])]),e("div",{staticClass:"c2"},[e("strong",[t._v(t._s(t.playerData.normal))]),e("label",[t._v("正常状态")])]),e("div",{staticClass:"c3"},[e("strong",[t._v(t._s(t.playerData.banned))]),e("label",[t._v("已禁止投票")])]),e("div",{staticClass:"c4"},[e("strong",[t._v(t._s(t.playerData.unaudited))]),e("label",[t._v("未审核")])]),e("div",{staticClass:"c5"},[e("strong",[t._v(t._s(t.playerData.notPass))]),e("label",[t._v("未通过审核")])])]),e("el-tabs",{attrs:{type:"card"},on:{"tab-click":t.doSwitchTab},model:{value:t.activeTab,callback:function(a){t.activeTab=a},expression:"activeTab"}},[e("el-tab-pane",{attrs:{label:"今天",name:"thisDay"}}),e("el-tab-pane",{attrs:{label:"累计",name:"all"}}),e("el-tab-pane",{attrs:{label:"昨天",name:"yesterday"}}),e("el-tab-pane",{attrs:{label:"最近7天",name:"sevenDay"}}),e("el-tab-pane",{attrs:{label:"最近30天",name:"month"}}),e("el-tab-pane",{attrs:{label:"最近6个月",name:"halfYear"}}),e("el-tab-pane",{attrs:{label:"最近一年",name:"year"}})],1),e("div",{staticClass:"data-stat-wrap"},[e("div",{staticClass:"c1",on:{click:function(a){return t.doViewVisitStatChart()}}},[e("strong",[t._v(t._s(t.voteData.visitCount))]),e("label",[t._v("浏览量")])]),e("div",{staticClass:"c2",on:{click:function(a){return t.doViewVoteStatChart("3")}}},[e("strong",[t._v(t._s(t.voteData.totalVotes))]),e("label",[t._v("总票数")])]),e("div",{staticClass:"c3",on:{click:function(a){return t.doViewVoteStatChart("0")}}},[e("strong",[t._v(t._s(t.voteData.normalVotes))]),e("label",[t._v("普通票")])]),e("div",{staticClass:"c4",on:{click:function(a){return t.doViewVoteStatChart("1")}}},[e("strong",[t._v(t._s(t.voteData.adjustVotes))]),e("label",[t._v("系统送票")])]),e("div",{staticClass:"c5",on:{click:function(a){return t.doViewVoteStatChart("2")}}},[e("strong",[t._v(t._s(t.voteData.diamondVotes))]),e("label",[t._v("钻石票")])])]),e("el-tabs",{attrs:{type:"card"},on:{"tab-click":t.doSwitchOrderTab},model:{value:t.activeOrderTab,callback:function(a){t.activeOrderTab=a},expression:"activeOrderTab"}},[e("el-tab-pane",{attrs:{label:"最近15天收入",name:"fifteenDay"}}),e("el-tab-pane",{attrs:{label:"最近30天收入",name:"month"}}),e("el-tab-pane",{attrs:{label:"最近6个月收入",name:"halfYear"}}),e("el-tab-pane",{attrs:{label:"最近一年收入",name:"year"}})],1),e("div",{ref:"chart",staticClass:"chart-container"})],1)])},s=[],i=(e("34a3"),e("7364"),e("11ac"),e("fb37"),e("b745"),e("f763"),e("7a59"),e("46f1")),o=e("f1ed"),r=e("3604"),l=864e5,c={name:"home",data:function(){return{actData:{all:0,notYetBegun:0,onGoing:0,finished:0,startThisDay:0,endThisDay:0,closed:0},voteData:{visitCount:0,totalVotes:0,normalVotes:0,adjustVotes:0,diamondVotes:0},playerData:{total:0,normal:0,banned:0,unaudited:0,notPass:0},activeTab:"thisDay",activeOrderTab:"fifteenDay",loading:null,chart:null}},created:function(){var t=this,a=t.$store;a.commit("switchLoading",!1),a.commit("switchActiveMenu","home"),t.$store.commit("setRoutePath",[{label:"系统概况",name:"home"}]),t.showLoading(),t.getActData(),t.getVoteData(),t.getOrderStat()},methods:{getActData:function(){var t=this;t.$ajax({url:i["a"].actDataStat,method:"POST"}).then(function(a){if(200==a.code){var e=t.actData,n=t.playerData;e.all=0,e.notYetBegun=0,e.onGoing=0,e.finished=0,e.startThisDay=0,e.endThisDay=0,e.closed=0,n.banned=0,n.normal=0,n.notPass=0,n.total=0,n.unaudited=0;var s=a.data;s&&(e.all=s.act_all,e.notYetBegun=s.act_notYetBegun,e.onGoing=s.act_onGoing,e.finished=s.act_finished,e.startThisDay=s.act_startThisDay,e.endThisDay=s.act_endThisDay,e.closed=s.act_closed,n.banned=s.player_banned,n.normal=s.player_normal,n.notPass=s.player_notPass,n.total=s.player_total,n.unaudited=s.player_unaudited)}}),setTimeout(function(){t.loading.close()},200)},getVoteData:function(){var t=this,a="",e="";if("all"!=t.activeTab){var n=new Date,s=new Date;n.setHours(0,0,0,0),s.setHours(23,59,59,0),"yesterday"==t.activeTab?(n.setTime(n.getTime()-l),s.setTime(s.getTime()-l)):"sevenDay"==t.activeTab?n.setTime(n.getTime()-7*l):"month"==t.activeTab?n.setTime(n.getTime()-30*l):"halfYear"==t.activeTab?n.setTime(n.getTime()-180*l):"year"==t.activeTab&&n.setTime(n.getTime()-365*l),a=Object(o["d"])(n,"yyyy/MM/dd hh:mm:ss"),e=Object(o["d"])(s,"yyyy/MM/dd hh:mm:ss")}t.$ajax({url:i["a"].voteDataStat,method:"POST",data:{startTime:a,endTime:e}}).then(function(a){if(200==a.code){var e=t.voteData;e.totalVotes=0,e.normalVotes=0,e.adjustVotes=0,e.diamondVotes=0,e.visitCount=0;var n=a.data;n&&(e.totalVotes=n.totalVotes,e.normalVotes=n.normalVotes,e.adjustVotes=n.adjustVotes,e.diamondVotes=n.diamondVotes,e.visitCount=n.visitCount)}})},getOrderStat:function(){var t=this,a=t.activeOrderTab,e="";e="fifteenDay"==a||"month"==a?"d":"m";var n=+new Date,s="",r=new Date;r.setHours(23,59,59,0),r=Object(o["d"])(r,"yyyyMMddhhmmss");var c=0;c="fifteenDay"==a?15:"month"==a?30:"halfYear"==a?180:365;var d=new Date(n-c*l);d.setHours(0,0,0,0),s=Object(o["d"])(d,"yyyyMMddhhmmss");var v={};if("fifteenDay"==a||"month"==a)for(var u=null,h=c;h>=0;h--)u=Object(o["d"])(new Date(n-h*l),"yyyyMMdd"),v[u]=0;else{var b=new Date;b.setDate(1),b.setHours(0,0,0,0);for(var m="halfYear"==a?6:12,f="",y=0;y<m;y++)f=Object(o["d"])(b,"yyyyMM"),v[f]="",b.setTime(b.getTime()-36e5),b.setDate(1),b.setHours(0,0,0,0)}t.$ajax({url:i["a"].statOrders,method:"post",data:{type:e,startTime:s,endTime:r}}).then(function(a){if(200==a.code){var e=a.data||[];e.forEach(function(t){v[t.days]=parseFloat((t.totalFee/100).toFixed(2))});var n=Object.keys(v).sort(),s=n.map(function(t){return v[t]||0}),i=n.map(function(t){return Object(o["c"])(t,".")});t.chart?t.refreshChart(i,s):t.initChart(i,s)}})},initChart:function(t,a){var e=this,n={grid:{top:40,left:30,right:40,bottom:20,containLabel:!0},tooltip:{trigger:"axis",axisPointer:{lineStyle:{color:"#2796c0"}},formatter:function(t){return"时间：".concat(t[0].name,"<br/>金额：").concat(t[0].data,"元")}},xAxis:[{type:"category",boundaryGap:!1,axisLine:{lineStyle:{color:"#e0e0e0"}},axisLabel:{margin:15,textStyle:{fontSize:12,color:"#9933FF"}},splitLine:{lineStyle:{color:"#e0e0e0"}},data:t}],yAxis:[{type:"value",axisTick:{show:!1},axisLine:{lineStyle:{color:"#e0e0e0"}},axisLabel:{margin:10,textStyle:{fontSize:12,color:"#9933FF"}},splitLine:{lineStyle:{color:"#e0e0e0"}}}],series:[{type:"line",smooth:!0,symbol:"circle",symbolSize:5,showSymbol:!1,lineStyle:{normal:{width:1,color:"rgb(35, 201, 185)"}},areaStyle:{normal:{color:new r["a"].graphic.LinearGradient(0,0,0,1,[{offset:0,color:"rgba(8, 116, 210, 0.5)"},{offset:.85,color:"rgba(8, 116, 210, 0)"}],!1),shadowColor:"rgba(0, 0, 0, 0.1)",shadowBlur:10}},itemStyle:{normal:{color:"rgb(35, 201, 185)",borderColor:"rgba(35, 201, 185, 0.27)",borderWidth:10}},data:a}]};e.chart=r["a"].init(e.$refs.chart),e.chart.setOption(n)},refreshChart:function(t,a){var e=this,n=e.chart,s=n.getOption(),i=s.series,o=s.xAxis;i[0].data=a,o[0].data=t,n.setOption({series:i,xAxis:o})},showLoading:function(){var t=this;t.loading=this.$loading({lock:!0,text:"数据请求中...",spinner:"el-icon-loading",background:"rgba(0, 0, 0, 0.7)"})},doSwitchTab:function(){var t=this;t.getVoteData()},doSwitchOrderTab:function(){var t=this;t.getOrderStat()},refresh:function(){var t=this;t.showLoading(),t.getActData(),t.getVoteData(),t.getOrderStat()},refreshUrl:function(){var t=this;t.$router.replace({name:"home",query:{s:t.activeTab}})},toList:function(t){var a=this;a.$router.push({name:"acts",query:{s:t}})},doViewVoteStatChart:function(){var t=this;t.$router.push({name:"voteStat"})},doViewVisitStatChart:function(){var t=this;t.$router.push({name:"visitStat"})}}},d=c,v=(e("21bb"),e("6691")),u=Object(v["a"])(d,n,s,!1,null,null,null);a["default"]=u.exports}}]);