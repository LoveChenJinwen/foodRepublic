let login = { 
  userLogin: function () {
    wx.checkSession({
      success: function () {
        //存在登陆态
        console.log("存在登陆态")
      },
      fail: () => {
        //不存在登陆态
        console.log("不存在登陆态")
        this.onLogin();
      }
    })
  },
  onLogin: function () {
    wx.login({
      success: (res) => {
        if (res.code) {
          //发起网络请求
          //获取到用户凭证 存儲 3rd_session 
          // var json = JSON.parse(res.data.Data)
          // wx.setStorage({
          //   key: "third_Session",
          //   data: json.third_Session
          // })
        }
      },
      fail: function (res) {
      }
    })
  },
  getUserInfo: (success, fail) => {
    wx.getUserInfo({
      success: function (res) {
        var userInfo = res.userInfo
        typeof success == "function" && success(userInfo);
      }, fail: function () {
        typeof fail == "function" && fail();
      }
    })
  }
}
module.exports = {
  login
}