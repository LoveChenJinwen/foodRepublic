// pages/setting/setting.js
let app = getApp();
Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {
    userInfo: null,
    canIUse: wx.canIUse('button.open-type.getUserInfo')
  },
  lifetimes: {
    attached: function () {
      this.setData({
        userInfo: app.globalData.userInfo
      })
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo
        })
      }
    }
  },
  /**
   * 组件的方法列表
   */
  methods: {
    onPullDownRefresh: function() {
      wx.stopPullDownRefresh();
    },
    getUserInfo: function(e) {
      app.globalData.userInfo = e.detail.userInfo;
      this.setData({
        userInfo: app.globalData.userInfo
      })
    },
    previewImg: function(e) {
      let imgUrl = 'https://images.unsplash.com/photo-1551334787-21e6bd3ab135?w=640';
      wx.previewImage({
        current: imgUrl,     //当前图片地址
        urls: [imgUrl],               //所有要预览的图片的地址集合 数组形式
        success: function (res) { },
        fail: function (res) { },
        complete: function (res) { },
      })
    },
    getRootPath: function() {
      let pathName = window.location.pathname.substring(1);
      let webName = pathName == '' ? '' : pathName.substring(0, pathName.indexOf('/'));
      return window.location.protocol + '//' + window.location.host + '/' + webName + '/';
    }
  },
  pageLifetimes: {
    show() {
      if (typeof this.getTabBar === 'function' &&
        this.getTabBar()) {
        this.getTabBar().setData({
          selected: 4
        })
      }
    }
  }
})
