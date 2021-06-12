var app = new Vue({
    el: '#app',
    data: {
        query: "",
        musicList: [],
        musicUrl: "",
        picUrl: "",
        userHot: [],
        ccc: false,
        isshow: false,
        videoShow: false,
        mvUrl:""
    },
    methods: {
        a() {
            axios.get("https://autumnfish.cn/search?keywords=" + this.query).then((response) => {
                    this.musicList = response.data.result.songs;
                }),
                function (err) {
                    console.log(err);
                };
        },
        btnClick () {
            this.a()
        },
        b: function (musicId) {
            axios.get("https://autumnfish.cn/song/url?id=" + musicId).then((response) => {
                    this.musicUrl = response.data.data[0].url;
                }),
                function (err) {
                    console.log(err);
                };
            axios.get("https://autumnfish.cn/song/detail?ids=" + musicId).then((response) => {
                    this.isshow = !this.isshow;
                    this.picUrl = response.data.songs[0].al.picUrl;
                }),
                function (err) {
                    console.log(err);
                };
            axios.get("https://autumnfish.cn/comment/hot?type=0&id=" + musicId).then((response) => {
                this.userHot = response.data.hotComments;
            }), (err) => {
                console.log('报错了,老哥');
            };
        },
        play: function () {
            this.ccc = true
        },
        pause: function () {
            this.ccc = false
        },
        playMv: function (mvid) {
            axios.get("https://autumnfish.cn/mv/url?id=" + mvid).then((response) => {
                    console.log(response);
                    console.log(response.data.data.url);
                    this.videoShow=true;
                    this.mvUrl=response.data.data.url;
                }),
                function (err) {
                    console.log('报错了,老哥');
                };
        },
        XX:function(){
            this.videoShow=false;
            this.mvUrl=""
        }
    }
})