(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-350f4260"],{6151:function(t,e,a){},"9a4f":function(t,e,a){"use strict";var n=a("6151"),r=a.n(n);r.a},a018:function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"page activity-list-page"},[a("div",{staticClass:"page-content"},[a("div",{staticClass:"page-tools"},[a("h3",[t._v("投票活动列表")]),a("el-input",{attrs:{placeholder:"请输入要查询的关键字",maxlength:"50"},nativeOn:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.doSearch(e)}},model:{value:t.keywords,callback:function(e){t.keywords=e},expression:"keywords"}}),a("el-button",{attrs:{type:"success",plain:"",icon:"el-icon-search"},on:{click:function(e){return t.doSearch()}}},[t._v("搜索")]),a("el-button",{attrs:{type:"warning",plain:"",icon:"el-icon-plus"},on:{click:function(e){return t.doAdd()}}},[t._v("新增")]),a("el-button",{attrs:{type:"primary",plain:"",icon:"el-icon-refresh"},on:{click:function(e){return t.queryData()}}},[t._v("刷新")])],1),a("el-tabs",{attrs:{type:"card"},on:{"tab-click":t.doSwitchTab},model:{value:t.activeTab,callback:function(e){t.activeTab=e},expression:"activeTab"}},[a("el-tab-pane",{attrs:{label:"所有活动",name:"all"}}),a("el-tab-pane",{attrs:{label:"今日开始",name:"startThisDay"}}),a("el-tab-pane",{attrs:{label:"今日结束",name:"endThisDay"}}),a("el-tab-pane",{attrs:{label:"未开始",name:"notYetBegun"}}),a("el-tab-pane",{attrs:{label:"进行中",name:"onGoing"}}),a("el-tab-pane",{attrs:{label:"已结束",name:"finished"}}),a("el-tab-pane",{attrs:{label:"已关闭",name:"closed"}})],1),a("div",{staticClass:"page-wrapper",style:{width:t.tableWidth+"px"}},[a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}],attrs:{data:t.dataList,border:"",stripe:"","element-loading-text":"数据加载中...","element-loading-spinner":"el-icon-loading","element-loading-background":"rgba(0, 0, 0, 0.5)","row-class-name":t.tableRowClassName},on:{"sort-change":t.doSortChange}},[a("el-table-column",{attrs:{label:"序号",fixed:"left",width:"50",type:"index",align:"center",index:t.getIndex}}),a("el-table-column",{attrs:{prop:"title",fixed:"left","min-width":"180",label:"标题",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("a",{staticClass:"title-link",on:{click:function(a){return t.doDetail(e.row)}}},[t._v(t._s(e.row.title))])]}}])}),a("el-table-column",{attrs:{prop:"remark","min-width":"60",label:"备注",align:"center"}}),a("el-table-column",{attrs:{sortable:"custom",prop:"voteCount","min-width":"73","max-width":"80",label:"票数",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("span",{staticClass:"red-text"},[t._v(t._s(e.row.voteCount))])]}}])}),a("el-table-column",{attrs:{sortable:"custom",prop:"popularity",width:"80",label:"人气",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("div",{staticClass:"table-inline-add-wrap",class:{focus:e.row.popularityFocus}},[a("span",[t._v(t._s(e.row.popularity))]),t.miniPower?t._e():a("input",{directives:[{name:"model",rawName:"v-model",value:e.row.popularityInput,expression:"scope.row.popularityInput"}],attrs:{type:"text",maxlength:"8"},domProps:{value:e.row.popularityInput},on:{keyup:function(a){return!a.type.indexOf("key")&&t._k(a.keyCode,"enter",13,a.key,"Enter")?null:t.doAddPopularity(e.row)},focus:function(a){return t.doFocusPopularity(e.row)},blur:function(a){return t.doBlurPopularity(e.row)},input:function(a){a.target.composing||t.$set(e.row,"popularityInput",a.target.value)}}}),a("i",{staticClass:"ali-icon-jia",on:{click:function(a){return t.doAddPopularity(e.row)}}})])]}}])}),a("el-table-column",{attrs:{sortable:"custom",prop:"playerCount",width:"105",label:"报名人数",align:"center"}}),a("el-table-column",{attrs:{sortable:"custom",prop:"moneyCount",width:"90",label:"金额(元)",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("span",{staticClass:"yellow-text"},[t._v(t._s(e.row.moneyCount))])]}}])}),a("el-table-column",{attrs:{prop:"createdAt",width:"95",label:"创建时间",align:"center"}}),a("el-table-column",{attrs:{prop:"createRealName",width:"95",label:"创建人",align:"center"}}),a("el-table-column",{attrs:{sortable:"custom",prop:"voteTime",width:"155",label:"投票时间",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("div",[t._v(t._s(e.row.voteStartTime))]),a("div",[t._v(t._s(e.row.voteEndTime))])]}}])}),a("el-table-column",{attrs:{"class-name":"switch-col",prop:"autoAdjust",width:"55",label:"调票",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("span",{class:{"green-text":e.row.autoAdjust}},[t._v(t._s(e.row.autoAdjust?"自动":"手动"))]),t.miniPower||"2"!=e.row.status&&"3"!=e.row.status?t._e():a("el-switch",{attrs:{"active-color":"#67c23a"},on:{change:function(a){return t.doSwitchAutoAdjust(e.row)}},model:{value:e.row.autoAdjust,callback:function(a){t.$set(e.row,"autoAdjust",a)},expression:"scope.row.autoAdjust"}})]}}])}),a("el-table-column",{attrs:{prop:"statusText","min-width":"56","max-width":"65",fixed:"right",label:"状态",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("span",{class:{"green-text":"2"==e.row.status||"3"==e.row.status,"red-text":"4"==e.row.status||"5"==e.row.status}},[t._v(t._s(e.row.statusText))])]}}])}),a("el-table-column",{attrs:{label:"操作",align:"center","min-width":"190",fixed:"right","class-name":"ope-table-col"},scopedSlots:t._u([{key:"default",fn:function(e){return["0"!=e.row.status?a("el-button",{attrs:{plain:"",type:"primary",size:"mini"},on:{click:function(a){return t.doEdit(e.row)}}},[t._v("编辑")]):t._e(),t.miniPower||"2"!=e.row.status&&"3"!=e.row.status&&"4"!=e.row.status?t._e():a("el-button",{attrs:{plain:"",type:"warning",size:"mini"},on:{click:function(a){return t.doAdjust(e.row)}}},[t._v("调票")]),a("el-button",{attrs:{plain:"",type:"primary",size:"mini"},on:{click:function(a){return t.doViewPlayer(e.row)}}},[t._v("选手列表")]),"0"!=e.row.status?a("el-button",{attrs:{plain:"",type:"warning",size:"mini"},on:{click:function(a){return t.doShowLink(e.row)}}},[t._v("活动链接")]):t._e(),t.miniPower?t._e():a("el-button",{attrs:{plain:"",type:"primary",size:"mini"},on:{click:function(a){return t.doViewVote(e.row)}}},[t._v("投票记录")]),!t.miniPower&&/(2|3|4)/.test(e.row.status)?a("el-button",{attrs:{plain:"",type:"warning",size:"mini"},on:{click:function(a){return t.doViewVoteStat(e.row)}}},[t._v("投票统计")]):t._e(),t.miniPower?t._e():a("el-button",{attrs:{plain:"",type:"success",size:"mini"},on:{click:function(a){return t.doViewOrder(e.row)}}},[t._v("打赏情况")]),t.miniPower||"0"==e.row.status||"5"!=e.row.status?t._e():a("el-button",{attrs:{type:"success",plain:"",size:"mini"},on:{click:function(a){return t.doOpen(e.row)}}},[t._v("开启活动")]),t.miniPower||"0"==e.row.status||"5"==e.row.status?t._e():a("el-button",{attrs:{type:"danger",plain:"",size:"mini"},on:{click:function(a){return t.doClose(e.row)}}},[t._v("关闭活动")]),t.miniPower||"0"==e.row.status||"5"!=e.row.status?t._e():a("el-button",{attrs:{type:"danger",plain:"",size:"mini"},on:{click:function(a){return t.doDel(e.row)}}},[t._v("删除活动")]),"0"!=e.row.status?a("el-button",{attrs:{plain:"",type:"primary",size:"mini"},on:{click:function(a){return t.doCopy(e.row)}}},[t._v("复制")]):t._e()]}}])})],1)],1),a("el-pagination",{directives:[{name:"show",rawName:"v-show",value:t.total,expression:"total"}],attrs:{"current-page":t.currentPage,"page-sizes":[10,15,25,45,100],"page-size":t.currentPageSize,background:"",layout:"total, sizes, prev, pager, next",total:t.total},on:{"size-change":t.handleSizeChange,"current-change":t.handleCurrentPageChange,"update:currentPage":function(e){t.currentPage=e},"update:current-page":function(e){t.currentPage=e}}})],1),a("el-dialog",{staticClass:"link-qrcode-dialog",attrs:{title:"活动链接",visible:t.linkDialogVisible},on:{"update:visible":function(e){t.linkDialogVisible=e}}},[a("div",{attrs:{id:"link-qrcode"}}),a("div",{staticClass:"code-link"},[t._v(t._s(t.actLink))])])],1)},r=[],o=(a("34a3"),a("7364"),a("e836"),a("11ac"),a("46f1")),i=a("f1ed"),s=a("1f57"),u=a.n(s),c={0:"已删除",1:"未开始",2:"正在报名",3:"正在投票",4:"已结束",5:"已关闭"},l={name:"ActivityList",computed:{tableWidth:function(){var t=this.$store.state;return t.winWidth-(t.navState?280:104)},tableHeight:function(){return this.$store.state.winHeight-215},miniPower:function(){return this.$store.state.miniPower}},data:function(){return{dataList:[],loading:!0,currentPage:1,currentPageSize:10,total:0,keywords:"",currOrder:"",currOrderDir:"",activeTab:"all",linkDialogVisible:!1,actLink:"",qrCode:null}},created:function(){var t=this;t.$store.commit("setRoutePath",[{label:"投票管理",name:"acts"}]),t.$store.commit("switchLoading",!1);var e=t.$route,a=e.query;t.activeTab=a.s||"all",t.currentPage=parseInt(a.p||1),t.currentPageSize=parseInt(a.g||10),t.keywords=a.k?decodeURIComponent(a.k):"",t.currOrder=a.o||"",t.currOrderDir=a.d||"",t.queryData(),t.$store.commit("switchActiveMenu","acts")},methods:{tableRowClassName:function(t){var e=t.row;t.rowIndex;return e.isEndThisDay?"highlight":""},queryData:function(){var t=this;t.loading=!0,t.$ajax({url:o["a"].getActivities,params:{pageSize:t.currentPageSize,page:t.currentPage,key:t.keywords?encodeURIComponent(t.keywords):"",order:t.currOrder,orderDir:t.currOrderDir,status:t.activeTab}}).then(function(e){if(200==e.code){if(e.data){t.total=e.data.total;var a=Object(i["d"])(new Date,"yyyy-MM-dd");t.dataList=e.data.dataList.map(function(t){return t.createdAt=Object(i["d"])(new Date(t.createdAt)),t.voteStartTime=Object(i["d"])(new Date(t.voteStartTime)),t.voteEndTime=Object(i["d"])(new Date(t.voteEndTime)),t.voteTime=t.voteStartTime+" "+t.voteEndTime,t.statusText=c[t.status],t.autoAdjust="1"==t.autoAdjust,t.popularity=parseInt(t.popularity||0),t.popularityFocus=!1,t.isEndThisDay=a==t.voteEndTime.slice(0,10),console.log(a,t.voteEndTime.slice(0,10),t.isEndThisDay),t.popularityInput="",t.moneyCount&&(t.moneyCount=(t.moneyCount/100).toFixed(2)),t})}else t.total=0,t.dataList=[];t.refreshUrl(),setTimeout(function(){t.loading=!1},200)}})},doAddPopularity:function(t){var e=this,a=/^-?\d+$/,n=t.popularityInput.trim();if(!a.test(n))return e.$notify({type:"error",title:"提醒",message:"请输入正确的数字!"});e.$ajax({url:o["a"].addPopularity,method:"post",data:{id:t.id,num:parseInt(n)}}).then(function(t){200==t.code?(e.$message({type:"success",message:"修改成功!"}),e.queryData()):e.$message({type:"error",message:t.message}),e.$store.commit("switchLoading",!1)})},doFocusPopularity:function(t){t.popularityFocus=!0},doBlurPopularity:function(t){setTimeout(function(){t.popularityFocus=!1},300)},doEdit:function(t){var e=this;e.$router.push({name:"editAct",query:{id:t.id}})},doViewVoteStat:function(t){var e=this;e.$router.push({name:"voteStat",query:{id:t.id}})},doCopy:function(t){var e=this;e.$store.commit("switchLoading",!0),e.$ajax({url:o["a"].copyAct+t.id,method:"post"}).then(function(t){200==t.code?(e.$message({type:"success",message:"操作成功!"}),e.queryData()):e.$message({type:"error",message:t.message}),e.$store.commit("switchLoading",!1)})},doAdjust:function(t){var e=this;e.$store.commit("switchLoading",!0),e.$ajax({url:o["a"].adjustVote,method:"post",data:{id:t.id}}).then(function(t){200==t.code?(e.$message({type:"success",message:"调票成功!"}),e.queryData()):e.$message({type:"error",message:t.message}),e.$store.commit("switchLoading",!1)})},doSwitchAutoAdjust:function(t){var e=this;e.$store.commit("switchLoading",!0);var a="1";t.autoAdjust||(a="0"),e.$ajax({url:o["a"].switchAutoAdjust,method:"post",data:{id:t.id,autoAdjust:a}}).then(function(a){200==a.code?e.$message({type:"success",message:"调票类型修改成功!"}):(e.$message({type:"error",message:"修改失败!"}),setTimeout(function(){t.autoAdjust=!t.autoAdjust},500)),e.$store.commit("switchLoading",!1)})},doDetail:function(t){var e=this;e.$router.push({name:"players",query:{id:t.id}})},doViewVote:function(t){var e=this;e.$router.push({name:"votes",query:{aId:t.id}})},doViewOrder:function(t){var e=this;e.$router.push({name:"orders",query:{actId:t.id}})},doViewPlayer:function(t){var e=this;e.$router.push({name:"players",query:{id:t.id}})},doShowLink:function(t){var e=this;e.linkDialogVisible=!0,e.actLink=location.origin+"/client/home?actId="+t.id,setTimeout(function(){e.qrCode?(e.qrCode.clear(),e.qrCode.makeCode(e.actLink)):e.qrCode=new u.a("link-qrcode",{width:150,height:150,text:e.actLink},500)})},doOpen:function(t){var e=this,a="1",n=+new Date,r=new Date(t.voteEndTime);if(n>=r.getTime())return e.$notify({type:"error",title:"提醒",message:"请先修改标题为'".concat(t.title,"'活动的投票时间!")});n<new Date(t.signUpStartTime).getTime()?a="1":(a="2",n>=new Date(t.voteStartTime).getTime()&&(a="3")),e.$confirm("将开启标题为'".concat(t.title,"'的活动，是否继续?"),"提醒",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning",closeOnClickModal:!1,confirmButtonClass:"el-button--danger el-button--medium is-plain",cancelButtonClass:"el-button--primary el-button--medium is-plain"}).then(function(){e.$ajax({url:o["a"].changeActStatus,method:"POST",data:{id:t.id,status:a}}).then(function(a){200==a.code?(e.$message({type:"success",message:"标题为'".concat(t.title,"'的活动状态修改成功!")}),e.queryData()):e.$message({type:"error",message:"标题为'".concat(t.title,"'的活动状态修改失败!")})})})},doDel:function(t){var e=this;e.$confirm("将删除标题为'".concat(t.title,"'的活动，是否继续?"),"提醒",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning",closeOnClickModal:!1,confirmButtonClass:"el-button--danger el-button--medium is-plain",cancelButtonClass:"el-button--primary el-button--medium is-plain"}).then(function(){e.$ajax({url:o["a"].changeActStatus,method:"POST",data:{id:t.id,status:"0"}}).then(function(a){200==a.code?(e.$message({type:"success",message:"标题为'".concat(t.title,"'的活动删除成功!")}),e.queryData()):e.$message({type:"error",message:"标题为'".concat(t.title,"'的活动删除失败!")})})})},doClose:function(t){var e=this;e.$confirm("将关闭标题为'".concat(t.title,"'的活动，是否继续?"),"提醒",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning",closeOnClickModal:!1,confirmButtonClass:"el-button--danger el-button--medium is-plain",cancelButtonClass:"el-button--primary el-button--medium is-plain"}).then(function(){e.$ajax({url:o["a"].changeActStatus,method:"POST",data:{id:t.id,status:"5"}}).then(function(a){200==a.code?(e.$message({type:"success",message:"标题为'".concat(t.title,"'的活动状态修改成功!")}),e.queryData()):e.$message({type:"error",message:"标题为'".concat(t.title,"'的活动状态修改失败!")})})})},doSwitchTab:function(){var t=this;t.currentPage=1,t.queryData()},doSortChange:function(t){var e=this;"voteTime"==t.prop?e.currOrder="voteStartTime":t.prop?e.currOrder=t.prop:e.currOrder="","ascending"==t.order?e.currOrderDir="ASC":"descending"==t.order?e.currOrderDir="DESC":e.currOrderDir="",e.currentPage=1,e.queryData()},doSearch:function(){var t=this;t.keywords=t.keywords.trim(),t.currentPage=1,t.queryData()},handleSizeChange:function(t){this.currentPageSize=t,this.currentPage=1,this.queryData()},handleCurrentPageChange:function(t){this.currentPage=t,this.queryData()},getIndex:function(t){return(this.currentPage-1)*this.currentPageSize+t+1},doAdd:function(){this.$router.push({name:"addAct"})},refreshUrl:function(){var t=this;"acts"==t.$route.name&&t.$router.replace({name:"acts",query:{s:t.activeTab,p:t.currentPage,g:t.currentPageSize,k:t.keywords?encodeURIComponent(t.keywords):"",o:t.currOrder,d:t.currOrderDir}})}}},d=l,p=(a("9a4f"),a("6691")),m=Object(p["a"])(d,n,r,!1,null,null,null);e["default"]=m.exports}}]);