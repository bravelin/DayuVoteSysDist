// 顶部组件  start
var TopNav = Vue.extend({
    template: "<p class='top-nav gray small'>{{toptxt}}</p>",
    data() {
        return {
            toptxt: ''
        }

    },
    props: ['toptxt'],
    watch: {
        toptxt: function(newVal, oldVal) {
            this.toptxt = newVal;
        }
    }
})

Vue.component(TopNav)
// 顶部组件  end