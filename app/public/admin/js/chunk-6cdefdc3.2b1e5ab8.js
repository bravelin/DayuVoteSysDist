(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6cdefdc3"],{"7b2e":function(e,t,n){"use strict";n.r(t);var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"page player-list-page"},[n("div",{staticClass:"page-content"},[n("div",{staticClass:"page-tools"},[n("h3",[e._v("选手列表")]),n("el-input",{attrs:{placeholder:"选手名称",maxlength:"50"},nativeOn:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.doSearch()}},model:{value:e.keywords0,callback:function(t){e.keywords0=t},expression:"keywords0"}}),n("el-input",{attrs:{placeholder:"选手编号",maxlength:"50"},nativeOn:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.doSearch()}},model:{value:e.keywords1,callback:function(t){e.keywords1=t},expression:"keywords1"}}),n("el-input",{attrs:{placeholder:"选手电话",maxlength:"50"},nativeOn:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.doSearch()}},model:{value:e.keywords2,callback:function(t){e.keywords2=t},expression:"keywords2"}}),n("el-button",{attrs:{type:"success",plain:"",icon:"el-icon-search"},on:{click:function(t){return e.doSearch()}}},[e._v("搜索")]),n("el-button",{attrs:{type:"primary",plain:"",icon:"el-icon-refresh"},on:{click:function(t){return e.queryData()}}},[e._v("刷新")]),e.act.id?n("el-button",{attrs:{type:"primary",plain:"",icon:"el-icon-plus"},on:{click:function(t){return e.doAdd()}}},[e._v("新增")]):e._e(),n("el-upload",{ref:"excelUpload",attrs:{"before-upload":e.handleExcelBeforeUpload,multiple:!1,action:e.uploadExcelAction,"on-success":e.handleExcelUploadSuccess}},[n("el-button",{attrs:{type:"primary",plain:"",icon:"el-icon-upload"}},[e._v("导入")])],1),n("el-button",{staticStyle:{display:"none"},attrs:{type:"primary",plain:"",icon:"el-icon-download"},on:{click:function(t){return e.doExport()}}},[e._v("导出")]),n("el-button",{attrs:{type:"warning",plain:"",icon:"el-icon-back"},on:{click:function(t){return e.doBack()}}},[e._v("返回")])],1),n("el-tabs",{attrs:{type:"card"},on:{"tab-click":e.doSwitchTab},model:{value:e.activeTab,callback:function(t){e.activeTab=t},expression:"activeTab"}},[n("el-tab-pane",{attrs:{label:"所有状态",name:"all"}}),n("el-tab-pane",{attrs:{label:"正常状态",name:"normal"}}),n("el-tab-pane",{attrs:{label:"已禁止投票",name:"banned"}}),n("el-tab-pane",{attrs:{label:"未审核",name:"unaudited"}}),n("el-tab-pane",{attrs:{label:"未通过审核",name:"notPass"}})],1),e.miniPower?e._e():n("div",{staticClass:"page-tools second-tools"},[n("el-button",{attrs:{type:"primary",plain:"",icon:"el-icon-edit"},on:{click:function(t){return e.doAddAllTotalVotes()}}},[e._v("一键改票")]),n("el-button",{attrs:{type:"danger",plain:"",icon:"el-icon-remove-outline"},on:{click:function(t){return e.doBandAll("3")}}},[e._v("禁止投票")]),n("el-button",{attrs:{type:"success",plain:"",icon:"el-icon-circle-check-outline"},on:{click:function(t){return e.doBandAll("2")}}},[e._v("恢复投票")]),n("el-button",{attrs:{type:"primary",plain:"",icon:"el-icon-view"},on:{click:function(t){return e.toViewOrder()}}},[e._v("查看打赏")])],1),n("div",{staticClass:"page-wrapper",style:{width:e.tableWidth+"px"}},[e.act.id?n("h3",[e._v(e._s(e.act.title)),n("span",[e._v("（投票时间："+e._s(e.act.voteStartTime)+" ~ "+e._s(e.act.voteEndTime)+"）")])]):e._e(),n("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],ref:"table",attrs:{data:e.dataList,border:"",stripe:"","element-loading-text":"数据加载中...","element-loading-spinner":"el-icon-loading","element-loading-background":"rgba(0, 0, 0, 0.5)"},on:{"sort-change":e.doSortChange,"selection-change":e.handleSelectionChange}},[e.miniPower?e._e():n("el-table-column",{attrs:{type:"selection",fixed:"left",width:"40",label:"序号"}}),n("el-table-column",{attrs:{label:"序号",fixed:"left",width:"50",type:"index",align:"center",index:e.getIndex}}),n("el-table-column",{attrs:{prop:"name",fixed:"left","min-width":"135",label:"选手名称",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[n("a",{staticClass:"title-link",on:{click:function(n){return e.doDetail(t.row)}}},[e._v(e._s(t.row.name))]),n("i",{staticClass:"star-tag",class:{"ali-icon-xingxingman":e.act.starPlayer==t.row.id,"ali-icon-xingxingkong":e.act.starPlayer!=t.row.id},on:{click:function(n){return e.doSetStar(t.row)}}})]}}])}),n("el-table-column",{attrs:{sortable:"custom",fixed:"left",prop:"no",width:"65",label:"编号",align:"center"}}),n("el-table-column",{attrs:{prop:"tel","min-width":"90",label:"电话",align:"center"}}),n("el-table-column",{attrs:{prop:"remark","min-width":"85",label:"备注",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[e.miniPower?e._e():n("div",{attrs:{contenteditable:"true"},on:{blur:function(n){return e.doUpdateRemark(t.row,n)}}},[e._v(e._s(t.row.remark))]),e.miniPower?n("span",[e._v(e._s(t.row.remark))]):e._e()]}}])}),n("el-table-column",{attrs:{sortable:"custom",prop:"totalVotes",width:"95",label:"总票数",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[n("div",{staticClass:"table-inline-add-wrap",class:{focus:t.row.totalVotesFocus}},[n("span",[e._v(e._s(t.row.totalVotes))]),e.miniPower?e._e():n("input",{directives:[{name:"model",rawName:"v-model",value:t.row.totalVotesInput,expression:"scope.row.totalVotesInput"}],attrs:{type:"text",maxlength:"8"},domProps:{value:t.row.totalVotesInput},on:{keyup:function(n){return!n.type.indexOf("key")&&e._k(n.keyCode,"enter",13,n.key,"Enter")?null:e.doAddTotalVotes(t.row)},focus:function(n){return e.doFocusTotalVotes(t.row)},blur:function(n){return e.doBlurTotalVotes(t.row)},input:function(n){n.target.composing||e.$set(t.row,"totalVotesInput",n.target.value)}}}),n("i",{staticClass:"ali-icon-jia",on:{click:function(n){return e.doAddTotalVotes(t.row)}}})])]}}])}),n("el-table-column",{attrs:{sortable:"custom",prop:"diamondVotes",width:"95",label:"钻石票",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[n("span",{staticClass:"yellow-text bold"},[e._v(e._s(t.row.diamondVotes))])]}}])}),n("el-table-column",{attrs:{sortable:"custom",prop:"cashGift",width:"75",label:"礼金",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[n("span",{staticClass:"red-text bold"},[e._v(e._s(t.row.cashGift))])]}}])}),n("el-table-column",{attrs:{prop:"typeText","min-width":"60",label:"类型",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[n("span",{class:{"green-text":"1"==t.row.type,"yellow-text":"1"!=t.row.type}},[e._v(e._s(t.row.typeText))])]}}])}),n("el-table-column",{attrs:{prop:"statusText","min-width":"60",fixed:"right",label:"状态",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[n("span",{class:{"green-text":"2"==t.row.status,"red-text":"2"!=t.row.status}},[e._v(e._s(t.row.statusText))])]}}])}),n("el-table-column",{attrs:{prop:"shareCount","min-width":"60",label:"分享数",align:"center"}}),n("el-table-column",{attrs:{label:"操作",align:"center","min-width":"210",fixed:"right","class-name":"ope-table-col"},scopedSlots:e._u([{key:"default",fn:function(t){return["1"!=t.row.status&&"4"!=t.row.status?[n("el-button",{attrs:{plain:"",type:"primary",size:"mini"},on:{click:function(n){return e.doEdit(t.row)}}},[e._v("编辑")]),n("el-button",{attrs:{plain:"",type:"danger",size:"mini"},on:{click:function(n){return e.doDel(t.row)}}},[e._v("删除")]),e.miniPower?e._e():n("el-button",{attrs:{plain:"",type:"warning",size:"mini"},on:{click:function(n){return e.doViewVote(t.row)}}},[e._v("选票")]),e.miniPower?e._e():n("el-button",{attrs:{plain:"",type:"danger",size:"mini"},on:{click:function(n){return e.doViewVoteStat(t.row)}}},[e._v("选票统计")]),n("el-button",{attrs:{plain:"",type:"primary",size:"mini"},on:{click:function(n){return e.doShowLink(t.row)}}},[e._v("链接")]),e.miniPower||"2"!=t.row.status?e._e():n("el-button",{attrs:{plain:"",type:"danger",size:"mini"},on:{click:function(n){return e.doBand(t.row,"3")}}},[e._v("禁止投票")]),e.miniPower||"3"!=t.row.status?e._e():n("el-button",{attrs:{plain:"",type:"success",size:"mini"},on:{click:function(n){return e.doBand(t.row,"2")}}},[e._v("恢复投票")])]:e._e(),"1"==t.row.status?[e.miniPower||"1"!=t.row.status?e._e():n("el-button",{attrs:{plain:"",type:"success",size:"mini"},on:{click:function(n){return e.doAudit(t.row,"2")}}},[e._v("审核通过")]),e.miniPower||"1"!=t.row.status?e._e():n("el-button",{attrs:{plain:"",type:"danger",size:"mini"},on:{click:function(n){return e.doAudit(t.row,"4")}}},[e._v("审核不通过")])]:e._e(),"4"==t.row.status?[e.miniPower?e._e():n("el-button",{attrs:{plain:"",type:"success",size:"mini"},on:{click:function(n){return e.doAudit(t.row,"2")}}},[e._v("审核通过")]),e.miniPower?e._e():n("el-button",{attrs:{plain:"",type:"danger",size:"mini"},on:{click:function(n){return e.doDel(t.row)}}},[e._v("删除")])]:e._e()]}}])})],1)],1),n("el-pagination",{directives:[{name:"show",rawName:"v-show",value:e.total,expression:"total"}],attrs:{"current-page":e.currentPage,"page-sizes":[10,15,25,45,100],"page-size":e.currentPageSize,background:"",layout:"total, sizes, prev, pager, next",total:e.total},on:{"size-change":e.handleSizeChange,"current-change":e.handleCurrentPageChange,"update:currentPage":function(t){e.currentPage=t},"update:current-page":function(t){e.currentPage=t}}})],1),n("el-dialog",{staticClass:"link-qrcode-dialog",attrs:{title:"选手链接",visible:e.linkDialogVisible},on:{"update:visible":function(t){e.linkDialogVisible=t}}},[n("div",{attrs:{id:"link-qrcode"}}),n("div",{staticClass:"code-link"},[e._v(e._s(e.actLink))])])],1)},o=[],r=(n("f548"),n("8cb7"),n("6d57"),n("ff21"),n("276a"),n("cc57"),n("46f1")),i=(n("cb63"),n("f1ed")),s=n("1f57"),l=n.n(s),c={0:"已删除",1:"未审核",2:"正常",3:"已禁止投票",4:"未通过审核"},u={1:"微信报名",2:"后台添加"},d={all:"all",normal:"2",banned:"3",unaudited:"1",notPass:"4"},p={name:"PlayerList",computed:{tableWidth:function(){var e=this.$store.state;return e.winWidth-(e.navState?280:104)},tableHeight:function(){return this.$store.state.winHeight-215},miniPower:function(){return this.$store.state.miniPower}},data:function(){return{act:{id:"",title:"",starPlayer:"",voteStartTime:"",voteEndTime:""},dataList:[],loading:!0,currentPage:1,currentPageSize:10,total:0,keywords0:"",keywords1:"",keywords2:"",currOrder:"",currOrderDir:"",activeTab:"all",linkDialogVisible:!1,actLink:"",qrCode:null,fullLoading:null,multipleSelection:[],uploadExcelAction:""}},watch:{$route:function(e,t){"players"==e.name&&e.query.id!=this.act.id&&this.init()}},created:function(){var e=this,t=e.$store;t.commit("switchActiveMenu","acts"),t.commit("setRoutePath",[{label:"投票管理",name:"acts"},{label:"选手列表",name:"players"}]),t.commit("switchLoading",!1),e.init()},methods:{init:function(){var e=this,t=e.$store,n=t.state,a=e.$route,o=a.query;e.act.id=o.id||"",e.activeTab=o.s||"all",e.currentPage=parseInt(o.p||1),e.currentPageSize=parseInt(o.g||10),e.keywords0=o.k0?decodeURIComponent(o.k0):"",e.keywords1=o.k1?decodeURIComponent(o.k1):"",e.keywords2=o.k2?decodeURIComponent(o.k2):"",e.currOrder=o.o||"",e.currOrderDir=o.d||"",e.queryData(),e.uploadExcelAction=r["a"].importPlayer+"?actId=".concat(e.act.id,"&_csrf=").concat(Object(i["b"])("csrfToken"),"&uid=").concat(n.userId,"&Authorization=Bearer ").concat(n.userToken),e.act.id&&e.queryAct()},handleExcelBeforeUpload:function(){this.showLoading()},handleExcelUploadSuccess:function(e){var t=this;200==e.code&&e.data?(t.$message({type:"success",message:"导入成功!"}),t.queryData()):t.$message({type:"error",message:"导入失败!"}),setTimeout((function(){t.fullLoading.close()}),300)},doExport:function(){var e=this,t=e.$store.state,n=r["a"].exportPlayer+"?actId=".concat(e.act.id,"&actName=").concat(encodeURIComponent(e.act.title),"&_csrf=").concat(Object(i["b"])("csrfToken"),"&uid=").concat(t.userId,"&Authorization=Bearer ").concat(t.userToken);window.open(n)},doUpdateRemark:function(e,t){var n=this,a=t.target,o=a.innerHTML;o.trim()!=e.remark&&n.$ajax({url:r["a"].updateRemark,method:"post",data:{id:e.id,remark:o}}).then((function(e){200==e.code?n.$message({type:"success",message:"备注修改成功!"}):n.$message({type:"error",message:e.message})}))},doBandAll:function(e){var t=this;if(0==t.multipleSelection.length)return t.$message({type:"error",message:"未勾选选手!"});var n=[];if(t.multipleSelection.forEach((function(t){"2"!=t.status&&"3"!=t.status||t.status==e||n.push(t.id)})),0==n.length)return t.$message({type:"error",message:"请勾选需要改变状态的选手!"});t.showLoading(),t.$ajax({url:r["a"].changeAllPlayerStatus,method:"post",data:{ids:JSON.stringify(n),status:e}}).then((function(e){200==e.code?(t.$message({type:"success",message:"操作成功!"}),t.queryData()):t.$message({type:"error",message:e.message}),setTimeout((function(){t.fullLoading.close()}),300)}))},doAddAllTotalVotes:function(){var e=this,t=e.dataList,n=[],a=/^-?\d+$/;if(t.forEach((function(e){e.totalVotesInput&&a.test(e.totalVotesInput)&&n.push({id:e.id,num:e.totalVotesInput-0})})),0==n.length)return e.$message({type:"error",message:"未检测到输入或者您的输入不正确!"});e.showLoading(),e.$ajax({url:r["a"].addAllVote,method:"post",data:{data:JSON.stringify(n)}}).then((function(t){200==t.code?(e.$message({type:"success",message:"改票成功!"}),e.queryData()):e.$message({type:"error",message:t.message}),setTimeout((function(){e.fullLoading.close()}),300)}))},handleSelectionChange:function(e){this.multipleSelection=e},queryAct:function(){var e=this;e.$ajax({url:r["a"].getActivity+e.act.id}).then((function(t){if(200==t.code){var n=t.data,a=e.act;a.title=n.title,a.starPlayer=n.starPlayer,a.voteStartTime=Object(i["d"])(new Date(n.voteStartTime),"yyyy-MM-dd hh:mm"),a.voteEndTime=Object(i["d"])(new Date(n.voteEndTime),"yyyy-MM-dd hh:mm")}else e.$router.back()}))},queryData:function(){var e=this;e.loading=!0,e.$ajax({url:r["a"].getPlayers,params:{actId:e.act.id,pageSize:e.currentPageSize,page:e.currentPage,key0:encodeURIComponent(e.keywords0),key1:encodeURIComponent(e.keywords1),key2:encodeURIComponent(e.keywords2),order:e.currOrder,orderDir:e.currOrderDir,status:d[e.activeTab]}}).then((function(t){200==t.code?(t.data?(e.total=t.data.total,e.dataList=t.data.dataList.map((function(e){return e.createdAt=Object(i["d"])(new Date(e.createdAt)),e.statusText=c[e.status],e.typeText=u[e.type],e.totalVotesFocus=!1,e.totalVotesInput="",e.cashGift=(e.cashGift/100).toFixed(2),e}))):(e.total=0,e.dataList=[]),e.refreshUrl()):e.$message({type:"error",message:t.message||"数据查询失败!"}),setTimeout((function(){e.loading=!1}),200)}))},doSortChange:function(e){var t=this;e.prop?t.currOrder=e.prop:t.currOrder="","ascending"==e.order?t.currOrderDir="ASC":"descending"==e.order?t.currOrderDir="DESC":t.currOrderDir="",t.currentPage=1,t.queryData()},showLoading:function(){var e=this;e.fullLoading=this.$loading({lock:!0,text:"数据请求中...",spinner:"el-icon-loading",background:"rgba(0, 0, 0, 0.7)"})},doFocusTotalVotes:function(e){e.totalVotesFocus=!0},doBlurTotalVotes:function(e){setTimeout((function(){e.totalVotesFocus=!1}),300)},doAddTotalVotes:function(e){var t=this,n=/^-?\d+$/,a=e.totalVotesInput.trim();if(!n.test(a))return t.$notify({type:"error",title:"提醒",message:"请输入正确的数字!"});t.showLoading(),t.$ajax({url:r["a"].addSysVote,method:"post",data:{playerId:e.id,count:a}}).then((function(e){200==e.code?(t.$message({type:"success",message:"加票成功!"}),t.queryData()):t.$message({type:"error",message:e.message}),setTimeout((function(){t.fullLoading.close()}),300)}))},doSearch:function(){var e=this;e["keywords0"]=e["keywords0"].trim(),e["keywords1"]=e["keywords1"].trim(),e["keywords2"]=e["keywords2"].trim(),e.currentPage=1,e.queryData()},doEdit:function(e){this.$router.push({name:"editPlayer",query:{id:e.id}})},toViewOrder:function(){this.$router.push({name:"orders",query:{actId:this.act.id}})},doAdd:function(){this.$router.push({name:"addPlayer",query:{actId:this.act.id}})},doDel:function(e){var t=this;t.$confirm("将删除名称为".concat(e.name,"的选手，是否继续？"),"提醒",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning",closeOnClickModal:!1,confirmButtonClass:"el-button--danger el-button--medium is-plain",cancelButtonClass:"el-button--primary el-button--medium is-plain"}).then((function(){t.$ajax({method:"DELETE",url:r["a"].delPlayer+e.id}).then((function(n){200==n.code?(t.$message({type:"success",message:"成功删除名称为".concat(e.name,"的选手!")}),t.queryData()):t.$message({type:"error",message:"名称为".concat(e.name,"的选手删除失败!")})}))}))},doViewVote:function(e){this.$router.push({name:"votes",query:{pId:e.id,aId:this.act.id}})},doViewVoteStat:function(e){this.$router.push({name:"voteStat",query:{pId:e.id,id:this.act.id}})},doShowLink:function(e){var t=this;t.linkDialogVisible=!0,t.actLink=location.origin+"/client/detail?pId="+e.id+"&actId="+t.act.id,setTimeout((function(){t.qrCode?(t.qrCode.clear(),t.qrCode.makeCode(t.actLink)):t.qrCode=new l.a("link-qrcode",{width:150,height:150,text:t.actLink},500)}))},doSetStar:function(e){var t=this;e.id==t.act.starPlayer||t.$store.state.miniPower||t.$confirm("将名称为".concat(e.name,"的选手设为今日之星，是否继续？"),"提醒",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning",closeOnClickModal:!1,confirmButtonClass:"el-button--danger el-button--medium is-plain",cancelButtonClass:"el-button--primary el-button--medium is-plain"}).then((function(){t.$ajax({method:"POST",url:r["a"].setPlayerStar,data:{id:e.id}}).then((function(e){200==e.code?(t.$message({type:"success",message:"今日之星设置成功!"}),t.queryAct()):t.$message({type:"error",message:"今日之星设置失败!"})}))}))},doBand:function(e,t){var n=this;n.$confirm(3==t?"将禁止名称为".concat(e.name,"的选手投票，是否继续？"):"将恢复名称为".concat(e.name,"的选手投票，是否继续？"),"提醒",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning",closeOnClickModal:!1,confirmButtonClass:"el-button--danger el-button--medium is-plain",cancelButtonClass:"el-button--primary el-button--medium is-plain"}).then((function(){n.$ajax({method:"POST",url:r["a"].changePlayerStatus,data:{id:e.id,status:t}}).then((function(e){200==e.code?(n.$message({type:"success",message:"状态修改成功!"}),n.queryData()):n.$message({type:"error",message:"状态修改失败!"})}))}))},doAudit:function(e,t){var n=this;n.$confirm("确认名称为".concat(e.name,2==t?"的选手审核通过，是否继续？":"的选手审核不通过，是否继续？"),"提醒",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning",closeOnClickModal:!1,confirmButtonClass:"el-button--danger el-button--medium is-plain",cancelButtonClass:"el-button--primary el-button--medium is-plain"}).then((function(){n.$ajax({method:"POST",url:r["a"].changePlayerStatus,data:{id:e.id,status:t}}).then((function(e){200==e.code?(n.$message({type:"success",message:"状态修改成功!"}),n.queryData()):n.$message({type:"error",message:"状态修改失败!"})}))}))},doDetail:function(e){this.$router.push({name:"playerDetail",query:{id:e.id}})},doSwitchTab:function(){var e=this;e.currentPage=1,e.queryData()},handleSizeChange:function(e){this.currentPageSize=e,this.currentPage=1,this.queryData()},handleCurrentPageChange:function(e){this.currentPage=e,this.queryData()},getIndex:function(e){return(this.currentPage-1)*this.currentPageSize+e+1},doBack:function(){this.$router.back()},refreshUrl:function(){var e=this;"players"==e.$route.name&&e.$router.replace({name:"players",query:{id:e.act.id,s:e.activeTab,p:e.currentPage,g:e.currentPageSize,k0:e.keywords0?encodeURIComponent(e.keywords0):"",k1:e.keywords1?encodeURIComponent(e.keywords1):"",k2:e.keywords2?encodeURIComponent(e.keywords2):"",o:e.currOrder,d:e.currOrderDir}})}}},m=p,g=(n("e507"),n("4e82")),y=Object(g["a"])(m,a,o,!1,null,null,null);t["default"]=y.exports},e499:function(e,t,n){},e507:function(e,t,n){"use strict";var a=n("e499"),o=n.n(a);o.a}}]);