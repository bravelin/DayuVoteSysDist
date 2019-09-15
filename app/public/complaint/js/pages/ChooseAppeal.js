//提交投诉  start
var ChooseAppeal = Vue.extend({

    template: "#chooseAppealCom",
    components: {
        TopNav,
        BottomNav,
        AppealNav
    },
    data() {
        return {
            toptxt: '你可以:',
            bottomtxt: '',
            link_url: 'javascript:;',
            title: '提交给微信团队审核',
            i: ''
        }
    },
    mounted() {
        let _this = this;
        _this.setUrl();
    },
    methods: {
        submitAppeal() {
            let _this = this;
            _this.$router.push({
                name: "AppealSuccess"
            })
        },
        setUrl() {
            let _this = this,
                i = _this.$route.query.id;
            _this.i = i;
            if (i == 6) {
                _this.bottomtxt = '了解什么是诱导分享类内容';
                _this.link_url = 'www.baidu.com';
            } else if (i == 7) {
                _this.bottomtxt = '了解微信对谣言的治理';
                _this.link_url = '';
            }
        }
    }
})

Vue.component(ChooseAppeal)
//提交投诉  end