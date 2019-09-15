// 选择投诉类型  start
var ChooseType = Vue.extend({
    template: "#chooseTypeCom",
    components: {
        TopNav,
        BottomNav,
        AppealNav
    },
    data() {
        return {
            toptxt: '请选择投诉该网页的原因:',
            bottomtxt: '遇到网页流量被劫持怎么办',
            link_url: 'javascript:;',
            types: [{
                    "id": 1,
                    "title": "网页包含欺诈信息（如: 假红包）"
                },
                {
                    "id": 2,
                    "title": "网页包含色情信息"
                },
                {
                    "id": 3,
                    "title": "网页包含暴力恐怖信息"
                },
                {
                    "id": 4,
                    "title": "网页包含政治敏感信息"
                },
                {
                    "id": 5,
                    "title": "网页在收集个人隐私信息（如: 钓鱼链接）"
                },
                {
                    "id": 6,
                    "title": "网页包含诱导分享/关注性质的内容"
                },
                {
                    "id": 7,
                    "title": "网页可能包含谣言信息"
                },
                {
                    "id": 8,
                    "title": "网页包含赌博信息"
                },
            ]
        }
    }
})

Vue.component(ChooseType)
//选择投诉类型  end