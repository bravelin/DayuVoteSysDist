Vue.prototype.$close = function() {  //关闭微信浏览器，只在微信端有效，其他会报错
    document.addEventListener('WeixinJSBridgeReady', function() {
        WeixinJSBridge.call('closeWindow');
    }, false);
    WeixinJSBridge.call('closeWindow');
}