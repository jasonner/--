var wxShare = {
    data: {
        title: 'CSN BP PRO问卷',
        desc: 'CSN BP PRO问卷调查',
        imgUrl: '',
        link: 'https://wxcore.forhoo.com.cn/21/wj/20210714wj/'
    },
    init: function () {
        var self = this;
        $.getJSON('/lhwxlogin/jsapi', {
            url: window.location.href
        }, function (result) {
            if (result) {
                var config = {
                    debug: false, // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
                    appId: result.appId, // 必填，公众号的唯一标识
                    timestamp: result.timestamp, // 必填，生成签名的时间戳
                    nonceStr: result.nonceStr, // 必填，生成签名的随机串
                    signature: result.signature, // 必填，签名，见附录1
                    jsApiList: ['hideOptionMenu','hideAllNonBaseMenuItem','checkJsApi', 'chooseImage', 'previewImage', 'uploadImage', 'downloadImage', 'getNetworkType', 'openLocation', 'getLocation']
                };
                wx.config(config);
                self.share();
            }
        })
    },
    share: function () {
        var data = this.data;
        wx.ready(function () {
            var config = {
                link: data.link,
                imgUrl: data.imgUrl,
                title: data.title,
                desc: data.desc,
                success: function () { },
                cancel: function () {
                    // 用户取消分享后执行的回调函数
                }
            };
            // wx.onMenuShareTimeline(config);
            // wx.onMenuShareAppMessage(config);
            wx.hideOptionMenu();
        })
    },

};

wxShare.init();