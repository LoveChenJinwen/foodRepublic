// pages/republic/republic.js
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
    userInfo: app.globalData.userInfo,
    searchPlace: '都昌煎饺、豆参',
    search: '',
    top: false,
    bottom: false,
    imgUrls: [
      'https://images.unsplash.com/photo-1551334787-21e6bd3ab135?w=640',
      'https://images.unsplash.com/photo-1551214012-84f95e060dee?w=640',
      'https://images.unsplash.com/photo-1551446591-142875a901a1?w=640'
    ],
    indicatorDots: true,
    autoplay: true,
    interval: 5000,
    duration: 1000,
    list: [
      {
        "image": 'https://images.unsplash.com/photo-1551214012-84f95e060dee',
        'detail': '红烧肉是一道著名的大众菜肴，属于热菜。其以五花肉为制作主料，最好选用肥瘦相间的三层肉（五花肉）来做，做法多达二三十种',
        'time': '6-10 15:51',
        'addr': '上海浦东',
        "userName": '晨爱矝文',
        "isThumb": '0',
        "thumb": '18',
        "isLike": '0',
        "like": '10',
        "comment": '200'
      },
      {
        "image": 'https://images.unsplash.com/photo-1551334787-21e6bd3ab135',
        'detail': '红烧肉是一道著名的大众菜肴，属于热菜。其以五花肉为制作主料，最好选用肥瘦相间的三层肉（五花肉）来做，做法多达二三十种',
        'time': '6-09 15:51',
        'addr': '江西省九江市都昌县',
        "userName": '晨爱矝文',
        "isThumb": '1',
        "thumb": "186",
        "isLike": '0',
        "like": "109",
        "comment": '400'
      },
      {
        "image": 'https://images.unsplash.com/photo-1551446591-142875a901a1',
        'detail': '红烧肉是一道著名的大众菜肴，属于热菜。其以五花肉为制作主料，最好选用肥瘦相间的三层肉（五花肉）来做，做法多达二三十种',
        'time': '6-06 15:51',
        'addr': '江西省九江市都昌县',
        "userName": '晨爱矝文',
        "isThumb": '0',
        "thumb": "286",
        "isLike": '1',
        "like": "190",
        "comment": '600'
      }
    ]
  },
  lifetimes: {
    attached: function() {
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    }
  },
  /**
   * 组件的方法列表
   */
  methods: {
    onSearch(value) {
      console.log(value)
    },
    thumbClick(e) {
      if (e.currentTarget) {
        let index = e.currentTarget.dataset.index;
        let temp = this.data.list;
        temp[index].isThumb = temp[index].isThumb == "1" ? "0" : "1";
        temp[index].thumb = temp[index].isThumb == "1" ? ++temp[index].thumb : --temp[index].thumb;
        this.setData({
          list: temp
        })
      }
    },
    likeClick(e) {
      if (e.currentTarget) {
        let index = e.currentTarget.dataset.index;
        let temp = this.data.list;
        temp[index].isLike = temp[index].isLike == "1" ? "0" : "1";
        temp[index].like = temp[index].isLike == "1" ? ++temp[index].like : --temp[index].like;
        this.setData({
          list: temp
        })
      }
    },
    onPullDownRefresh: function () {
      if (this.data.top || this.data.bottom) {
        return
      }
      let b = this.data.list.concat();
      this.setData({
        top: true,
        list: []
      })
      //数据请求
      setTimeout(() => {
        this.setData({
          top: false,
          list: b.concat()
        })
        wx.stopPullDownRefresh();
      }, 2000)
    },
    onReachBottom: function () {
      if (this.data.top || this.data.bottom) {
        return
      }
      this.setData({
        bottom: true
      })
     //数据请求
      //数据请求
      setTimeout(() => {
        this.setData({
          bottom: false,
          list: this.data.list.concat(this.data.list)
        })
        console.log(1);
      }, 2000)
    }
  },
  pageLifetimes: {
    show() {
      if (typeof this.getTabBar === 'function' &&
        this.getTabBar()) {
        this.getTabBar().setData({
          selected: 0
        })
      }
      this.setData({
        userInfo: app.globalData.userInfo
      })
    }
  }
})
