import Vue from 'vue'
import axios from 'axios'
import wx from 'weixin-js-sdk'
Vue.prototype.$axios = axios
Vue.prototype.$wechat = wx
const wechatShare = {
  install(Vue) {
    Vue.prototype.wxShare = function (shareData, url) {
      this.$axios.get('/v2/weixin-share/get', {
        // 請求配置
        params: {
          currentUrl: url  // 根據後臺配置填寫
        }
      })
        .then(res => {
          const Data = res.data.data
          this.$wechat.config({
            debug: false,
            appId: Data.appId,
            timestamp: Data.timestamp,
            nonceStr: Data.nonceStr,
            signature: Data.signature,
            jsApiList: ['updateAppMessageShareData', 'updateTimelineShareData']
          })
        })
      this.$wechat.ready(() => {
        // 自定義“分享給朋友”及“分享到QQ”按鈕的分享內容（1.4.0）
        this.$wechat.updateAppMessageShareData({
          title: shareData.title,
          desc: shareData.desc,
          link: shareData.url,
          imgUrl: shareData.image,
          success: function () {
            // 設置成功
          },
          cancel: function () {
            // console.log('分享取消')
          }
        })
        // 自定義“分享到朋友圈”及“分享到QQ空間”按鈕的分享內容（1.4.0）
        this.$wechat.updateTimelineShareData({
          title: shareData.title,
          desc: shareData.desc,
          link: shareData.url,
          imgUrl: shareData.image,
          success: function () {
            // 設置成功
          },
          cancel: function () {
            // console.log('分享取消')
          }
        })
      })
    }
  }
}
Vue.use(wechatShare)