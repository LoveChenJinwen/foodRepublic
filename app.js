//app.js
import { login } from './utils/login.js'
App({
  globalData: {
    userInfo: null
  },
  onLaunch: function () {
    // 展示本地存储能力
    // var logs = wx.getStorageSync('logs') || []
    // wx.setStorageSync('logs', logs)
    //获取用户信息
    // 登录
    login.userLogin();
    
    //初始化授权
    wx.getSetting({
      success: res => {
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
          wx.getUserInfo({
            success: res => {
              // 可以将 res 发送给后台解码出 unionId
              this.globalData.userInfo = res.userInfo

              // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
              // 所以此处加入 callback 以防止这种情况
              if (this.userInfoReadyCallback) {
                this.userInfoReadyCallback(res)
              }
            }
          })
        }
        // 是否授权地理位置
        // if (!res.authSetting['scope.userLocation']) {
        //   wx.authorize({
        //     scope: 'scope.userLocation',
        //     success() {
        //       wx.getLocation({
        //         success: function(res) {
        //           console.log(res)
        //           const latitude = res.latitude;
        //           const longitude = res.longitude;
        //           // 去后台获取地理位置
        //         },
        //       })
        //     }
        //   })
        // }
      }
    })
  }
})