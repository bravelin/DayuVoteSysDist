(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d21b85d"],{bfad:function(e,t,i){"use strict";i.r(t);var s=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"page home-page"},[i("div",{staticClass:"wrap"},[0==e.actTime.type?i("div",{staticClass:"act-time"},[e._v("活动时间："+e._s(e.actTime.time))]):e._e(),1==e.actTime.type?i("div",{staticClass:"act-time"},[e._v("报名时间："+e._s(e.actTime.time1))]):e._e(),1==e.actTime.type?i("div",{staticClass:"act-time"},[e._v("投票时间："+e._s(e.actTime.time2))]):e._e(),i("div",{directives:[{name:"show",rawName:"v-show",value:4==e.actStatus&&5==e.actStatus,expression:"actStatus==4 && actStatus==5"}],staticClass:"act-status"},[e._v("抱歉,"+e._s("4"==e.actStatus?"活动已结束!":"5"==e.actStatus?"活动已关闭!":"活动未进行!"))])]),i("div",{staticClass:"info-title"},[e._v("奖品设置")]),i("div",{staticClass:"info-content",domProps:{innerHTML:e._s(e.actPrize)}}),i("Preview",{attrs:{"is-show":e.showPreview,list:e.previewList,index:e.previewIndex},on:{"update:isShow":function(t){e.showPreview=t},"update:is-show":function(t){e.showPreview=t}}})],1)},a=[],n=i("cb63"),c=i("f1ed"),r=(i("46f1"),i("e6c4")),o={name:"Prize",components:{Preview:r["a"]},computed:{actStatus:function(){return this.$store.state.act.status},actPrize:function(){return Object(n["a"])(this.$store.state.act.prizes)},actTime:function(){var e=this.$store.state.act,t="yyyy-MM-dd hh:mm",i=Object(c["b"])(e.signUpStartTime,t),s=Object(c["b"])(e.signUpEndTime,t),a=Object(c["b"])(e.voteStartTime,t),n=Object(c["b"])(e.voteEndTime,t),r=new Date,o=r.getTime()>e.signUpStartTime.getTime()&&r.getTime()<e.signUpEndTime.getTime();return a==i&&n==s?{type:0,time:a+" ~ "+n,canSign:o}:{type:1,time1:i+" ~ "+s,time2:a+" ~ "+n,canSign:o}}},data:function(){return{showPreview:!1,previewList:[],previewIndex:0,images:null}},mounted:function(){var e=this;e.$store.commit("switchLoading",!1),e.$nextTick(function(){document.body.addEventListener("click",e.doHandleClick),setTimeout(function(){e.initPreview(),e.$emit("share",{name:"global"})},1500)})},methods:{initPreview:function(){for(var e,t=this,i=document.querySelectorAll("img"),s=[],a=null,n=0;n<i.length;n++){for(a=i[n],e=0;e<s.length;e++)if(s[e]==a.src)break;e==s.length&&s.push(a.src)}0!=s.length&&(t.images=s,t.getImageSize(0))},getImageSize:function(e){var t=this,i=t.images[e],s=new Image;s.onload=function(){t.previewList.push({src:i,w:this.width,h:this.height}),e<t.images.length-1&&t.getImageSize(e+1)},s.src=i},doHandleClick:function(e){var t=this,i=e.target;if(!t.showPreview&&/img/i.test(i.tagName)&&"pswp__img"!=i.className){t.previewIndex=0;for(var s=0;s<t.previewList.length;s++)if(t.previewList[s].src==i.src){t.previewIndex=s;break}t.showPreview=!0}}},beforeDestroy:function(){var e=this;document.body.removeEventListener("click",e.doHandleClick)}},m=o,u=i("6691"),d=Object(u["a"])(m,s,a,!1,null,null,null);t["default"]=d.exports}}]);