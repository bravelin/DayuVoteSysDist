(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-a999357a"],{"276a":function(e,s,t){"use strict";t("777a")("trim",(function(e){return function(){return e(this,3)}}))},"4cf3":function(e,s,t){},"6ba9":function(e,s,t){"use strict";var i=t("4cf3"),o=t.n(i);o.a},"777a":function(e,s,t){var i=t("e46b"),o=t("f6b4"),n=t("238a"),r=t("9769"),a="["+r+"]",c="​",u=RegExp("^"+a+a+"*"),d=RegExp(a+a+"*$"),p=function(e,s,t){var o={},a=n((function(){return!!r[e]()||c[e]()!=c})),u=o[e]=a?s(l):r[e];t&&(o[t]=u),i(i.P+i.F*a,"String",o)},l=p.trim=function(e,s){return e=String(o(e)),1&s&&(e=e.replace(u,"")),2&s&&(e=e.replace(d,"")),e};e.exports=p},9769:function(e,s){e.exports="\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff"},ede4:function(e,s,t){"use strict";t.r(s);var i=function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("div",{staticClass:"page login-page"},[t("div",{staticClass:"dialog",class:{active:e.isDialogActive}},[e._m(0),t("div",{staticClass:"form"},[t("h1",[e._v("亿通投票系统后台登录")]),t("div",{staticClass:"person"},[t("input",{directives:[{name:"model",rawName:"v-model",value:e.userName,expression:"userName"}],ref:"un",attrs:{type:"text",tabindex:"1",disabled:e.isProcessing,placeholder:"请输入用户名",maxlength:"45",autocomplete:"off"},domProps:{value:e.userName},on:{input:function(s){s.target.composing||(e.userName=s.target.value)}}})]),t("div",{staticClass:"lock"},[t("input",{directives:[{name:"model",rawName:"v-model",value:e.password,expression:"password"}],ref:"pw",attrs:{type:"password",tabindex:"2",disabled:e.isProcessing,placeholder:"请输入密码",maxlength:"45",autocomplete:"off"},domProps:{value:e.password},on:{input:function(s){s.target.composing||(e.password=s.target.value)}}})]),t("div",{staticClass:"btn",class:{active:e.userName&&e.password,processing:e.isProcessing},attrs:{tabindex:"3"},on:{click:function(s){return e.doLogin()}}},[e._v(e._s(e.isProcessing?"正在登录...":"登录"))])]),t("div",{staticClass:"info",class:{active:e.isShowTip,success:e.isSuccess}},[e._v(e._s(e.tipStr))])])])},o=[function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("div",{staticClass:"descri"},[t("div")])}],n=(t("276a"),t("46f1")),r=t("f1ed"),a={name:"app",data:function(){return{isDialogActive:!1,isSuccess:!1,isShowTip:!1,tipStr:"",isRemember:!0,isProcessing:!1,userName:"",password:""}},created:function(){var e=this;document.body.addEventListener("keypress",e.doPresskey),e.$store.commit("switchLoading",!1)},mounted:function(){var e=this;e.$nextTick((function(){var s=e.$store.state,t=s.userName,i=s.password,o=e.$refs;setTimeout((function(){e.isDialogActive=!0,o.pw.value=e.password=i,o.un.value=e.userName=t,t?i||o.pw.focus():o.un.focus()}),500)}))},methods:{showTip:function(e){var s=arguments.length>1&&void 0!==arguments[1]&&arguments[1],t=this;t.tipStr=e,t.isSuccess=s,t.isShowTip=!0,setTimeout((function(){t.isShowTip=!1}),1500)},doLogin:function(){var e=this,s=e.$refs;if(!e.isProcessing){if(e.userName=e.userName.trim(),!e.userName)return s.un.focus(),e.showTip("请输入用户名！");if(!e.password)return s.pw.focus(),e.showTip("请输入密码！");localStorage;e.isProcessing=!0,e.$ajax({url:n["a"].login,method:"post",data:{userName:e.userName,password:Object(r["a"])(e.password)}}).then((function(s){if(200===s.code){var t=s.data,i=t.user,o=e.$store;e.showTip("登录成功！",!0),o.commit("setUserInfo",{userToken:t.token,userId:i.id,userName:i.loginName,userRealName:i.realName,userRole:i.role,miniPower:i.miniPower}),e.$emit("login"),setTimeout((function(){e.$router.push({name:"1"==i.miniPower?"acts":"home"})}),500)}else e.isProcessing=!1,e.showTip("用户名或密码错误！",!1)}),(function(){e.isProcessing=!1,e.showTip("用户名或密码错误！",!1)}))}},doPresskey:function(e){13===e.keyCode&&this.doLogin()}},beforeDestroy:function(){document.body.removeEventListener("keypress",this.doPresskey)}},c=a,u=(t("6ba9"),t("4e82")),d=Object(u["a"])(c,i,o,!1,null,null,null);s["default"]=d.exports}}]);