// 底部组件  start
var BottomNav = Vue.extend({
    template: "<p class='small bottom-nav'><a class='deepBlue'" +
        ":href='link_url'>{{bottomtxt}}</a></p>",
    data() {
        return {
            bottomtxt: '',
            link_url: ''
        }

    },
    props: ['bottomtxt', 'link_url'],
    watch: {
        bottomtxt: function(newVal, oldVal) {
            this.bottomtxt = newVal;
        },
        link_url: function(newVal, oldVal) {
            this.link_url = newVal;
        }
    }
})

Vue.component(BottomNav)
// 底部组件  end