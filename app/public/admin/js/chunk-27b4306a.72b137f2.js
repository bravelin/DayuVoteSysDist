(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-27b4306a"],{"276a":function(e,t,a){"use strict";a("777a")("trim",(function(e){return function(){return e(this,3)}}))},6878:function(e,t,a){},"777a":function(e,t,a){var r=a("e46b"),n=a("f6b4"),i=a("238a"),o=a("9769"),c="["+o+"]",l="​",s=RegExp("^"+c+c+"*"),u=RegExp(c+c+"*$"),d=function(e,t,a){var n={},c=i((function(){return!!o[e]()||l[e]()!=l})),s=n[e]=c?t(p):o[e];a&&(n[a]=s),r(r.P+r.F*c,"String",n)},p=d.trim=function(e,t){return e=String(n(e)),1&t&&(e=e.replace(s,"")),2&t&&(e=e.replace(u,"")),e};e.exports=d},"8bec":function(e,t,a){"use strict";var r=a("6878"),n=a.n(r);n.a},9769:function(e,t){e.exports="\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff"},bf4b:function(e,t,a){"use strict";a.r(t);var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"page order-list-page"},[a("div",{staticClass:"page-content"},[a("div",{staticClass:"page-tools"},[a("h3",[e._v("打赏情况")]),a("el-input",{attrs:{placeholder:"请输入要查询的关键字",maxlength:"50"},nativeOn:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.doSearch(t)}},model:{value:e.keywords,callback:function(t){e.keywords=t},expression:"keywords"}}),a("el-button",{attrs:{type:"success",plain:"",icon:"el-icon-search"},on:{click:function(t){return e.doSearch()}}},[e._v("搜索")]),a("el-button",{attrs:{type:"primary",plain:"",icon:"el-icon-refresh"},on:{click:function(t){return e.queryData()}}},[e._v("刷新")]),a("el-button",{attrs:{type:"warning",plain:"",icon:"el-icon-back"},on:{click:function(t){return e.doBack()}}},[e._v("返回")])],1),a("el-tabs",{attrs:{type:"card"},on:{"tab-click":e.doSwitchTab},model:{value:e.activeTab,callback:function(t){e.activeTab=t},expression:"activeTab"}},[a("el-tab-pane",{attrs:{label:"所有状态",name:"all"}}),a("el-tab-pane",{attrs:{label:"已支付",name:"already"}}),a("el-tab-pane",{attrs:{label:"待支付",name:"wait"}}),a("el-tab-pane",{attrs:{label:"已取消",name:"cancelled"}})],1),a("div",{staticClass:"page-wrapper",style:{width:e.tableWidth+"px"}},[e.act.id?a("h3",[e._v(e._s(e.act.title))]):e._e(),a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],ref:"table",attrs:{data:e.dataList,border:"",stripe:"","element-loading-text":"数据加载中...","element-loading-spinner":"el-icon-loading","element-loading-background":"rgba(0, 0, 0, 0.5)"},on:{"sort-change":e.doSortChange}},[a("el-table-column",{attrs:{label:"序号",fixed:"left",width:"50",type:"index",align:"center",index:e.getIndex}}),a("el-table-column",{attrs:{prop:"title","min-width":"130",label:"活动名称",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("a",{staticClass:"title-link",on:{click:function(a){return e.doActDetail(t.row)}}},[e._v(e._s(t.row.title))])]}}])}),a("el-table-column",{attrs:{prop:"name",fixed:"left","min-width":"120",label:"选手名称",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("a",{staticClass:"title-link",on:{click:function(a){return e.doPlayerDetail(t.row)}}},[e._v(e._s(t.row.name))])]}}])}),a("el-table-column",{attrs:{prop:"no",width:"75",label:"选手编号",align:"center"}}),a("el-table-column",{attrs:{prop:"userId","min-width":"125",label:"用户(IP)",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("div",[e._v(e._s(t.row.nickName)+"("+e._s(t.row.ip)+")")]),t.row.place?a("div",[e._v(e._s(t.row.place))]):e._e()]}}])}),a("el-table-column",{attrs:{sortable:"custom",prop:"totalFee",width:"100",label:"金额(元)",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("span",{staticClass:"red-text bold"},[e._v(e._s(t.row.totalFee))])]}}])}),a("el-table-column",{attrs:{sortable:"custom",prop:"voteCount",width:"75",label:"票数",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("span",{staticClass:"green-text bold"},[e._v(e._s(t.row.voteCount))])]}}])}),a("el-table-column",{attrs:{sortable:"custom",prop:"timeStart","min-width":"130",label:"订单创建时间",align:"center"}}),a("el-table-column",{attrs:{sortable:"custom",prop:"timeEnd","min-width":"130",label:"交易结束时间",align:"center"}}),a("el-table-column",{attrs:{prop:"transactionId","min-width":"140",label:"微信支付订单号",align:"center"}}),a("el-table-column",{attrs:{prop:"id","min-width":"110",label:"系统订单号",align:"center"}}),a("el-table-column",{attrs:{prop:"statusText",width:"80",fixed:"right",label:"状态",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("span",{class:{"green-text":"1"==t.row.status,"red-text":"1"!=t.row.status}},[e._v(e._s(t.row.statusText))])]}}])})],1)],1),a("el-pagination",{directives:[{name:"show",rawName:"v-show",value:e.total,expression:"total"}],attrs:{"current-page":e.currentPage,"page-sizes":[10,15,25,45,100],"page-size":e.currentPageSize,background:"",layout:"total, sizes, prev, pager, next",total:e.total},on:{"size-change":e.handleSizeChange,"current-change":e.handleCurrentPageChange,"update:currentPage":function(t){e.currentPage=t},"update:current-page":function(t){e.currentPage=t}}})],1)])},n=[],i=(a("f548"),a("cc57"),a("276a"),a("8cb7"),a("46f1")),o=a("f1ed"),c={0:"待支付",1:"已支付",3:"已取消",5:"已取消"},l={name:"OrderList",computed:{tableWidth:function(){var e=this.$store.state;return e.winWidth-(e.navState?280:104)},tableHeight:function(){return this.$store.state.winHeight-215}},data:function(){return{act:{id:"",title:""},dataList:[],loading:!1,currentPage:1,currentPageSize:10,total:0,keywords:"",currOrder:"",currOrderDir:"",activeTab:"all"}},created:function(){var e=this,t=e.$store;t.state;t.commit("switchActiveMenu","orders"),t.commit("setRoutePath",[{label:"投票管理",name:"acts"},{label:"打赏情况",name:"orders"}]),t.commit("switchLoading",!1);var a=e.$route,r=a.query;e.act.id=r.actId||"",e.activeTab=r.s||"all",e.currentPage=parseInt(r.p||1),e.currentPageSize=parseInt(r.g||10),e.keywords=r.k?decodeURIComponent(r.k):"",e.currOrder=r.o||"",e.currOrderDir=r.d||"",e.queryData(),e.act.id&&e.queryAct()},methods:{queryAct:function(){var e=this;e.$ajax({url:i["a"].getActivity+e.act.id}).then((function(t){if(200==t.code){var a=t.data,r=e.act;r.title=a.title}else e.$router.back()}))},queryData:function(){var e=this;e.loading=!0,e.$ajax({url:i["a"].getOrders,method:"post",data:{actId:e.act.id||"",pageSize:e.currentPageSize,page:e.currentPage,key:e.keywords,order:e.currOrder,orderDir:e.currOrderDir,status:e.activeTab}}).then((function(t){200==t.code?(t.data?(e.total=t.data.total,e.dataList=t.data.dataList.map((function(e){return e.totalFee=(e.totalFee/100).toFixed(2),e.statusText=c[e.status],e.timeStart=Object(o["c"])(e.timeStart),e.timeEnd=Object(o["c"])(e.timeEnd),e}))):(e.total=0,e.dataList=[]),e.refreshUrl()):e.$message({type:"error",message:t.message||"数据查询失败!"}),setTimeout((function(){e.loading=!1}),200)}))},doSortChange:function(e){var t=this;e.prop?t.currOrder=e.prop:t.currOrder="","ascending"==e.order?t.currOrderDir="ASC":"descending"==e.order?t.currOrderDir="DESC":t.currOrderDir="",t.currentPage=1,t.queryData()},doSwitchTab:function(){var e=this;e.currentPage=1,e.queryData()},doPlayerDetail:function(e){this.$router.push({name:"players",query:{id:e.actId}})},doActDetail:function(e){this.$router.push({name:"players",query:{id:e.actId}})},doSearch:function(){var e=this;e.keywords=e.keywords.trim(),e.currentPage=1,e.queryData()},handleSizeChange:function(e){this.currentPageSize=e,this.currentPage=1,this.queryData()},handleCurrentPageChange:function(e){this.currentPage=e,this.queryData()},getIndex:function(e){return(this.currentPage-1)*this.currentPageSize+e+1},doBack:function(){this.$router.back()},refreshUrl:function(){var e=this;"orders"==e.$route.name&&e.$router.replace({name:"orders",query:{actId:e.act.id||"",s:e.activeTab,p:e.currentPage,g:e.currentPageSize,k:e.keywords?encodeURIComponent(e.keywords):"",o:e.currOrder,d:e.currOrderDir}})}}},s=l,u=(a("8bec"),a("4e82")),d=Object(u["a"])(s,r,n,!1,null,null,null);t["default"]=d.exports}}]);