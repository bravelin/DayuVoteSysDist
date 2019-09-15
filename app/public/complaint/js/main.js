'use strict';
$(document).ready(function() {
    Vue.use(VueRouter);

    var router = new VueRouter({
        routes: [{
                path: '/',
                name: 'ChooseType',
                meta: {
                    index: 0,
                    keepAlive: true,
                    title: '投诉'
                },
                component: ChooseType
            },
            {
                path: '/chooseAppeal',
                name: 'ChooseAppeal',
                meta: {
                    index: 1,
                    keepAlive: false,
                    title: '投诉'
                },
                component: ChooseAppeal
            },
            {
                path: '/appealDetail',
                name: 'AppealDetail',
                meta: {
                    index: 3,
                    keepAlive: false,
                    title: '投诉须知'
                },
                component: AppealDetail
            },
            {
                path: '/appealSuccess',
                name: 'AppealSuccess',
                meta: {
                    index: 4,
                    keepAlive: false,
                    title: '投诉'
                },
                component: AppealSuccess
            },
            {
                path: '/netError',
                name: 'NetError',
                meta: {
                    index: 5,
                    keepAlive: false,
                    title: '投诉'
                },
                component: NetError
            },

        ]
    })

    router.beforeEach((to, from, next) => {
        var toDepth = to.meta.index;
        var fromDepth = from.meta.index;

        if (to.meta.title) {
            document.title = to.meta.title;
            if (toDepth == 'undefined' || toDepth == undefined) {
                next({
                    path: "/netError"
                })
            } else if (toDepth < fromDepth) { //类似缓存效果
                from.meta.keepAlive = false;
                to.meta.keepAlive = true;
                next()
            } else {
                next()
            }
        } else {
            next()
        }
    })

    var app = new Vue({
        el: '#app',
        router
    }).$mount('#app')
})