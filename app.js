// nothing to do
//
App({
  onLaunch() {
      // App Launch
      console.log("小程序初始化");

      wx.getLocation({
      type: ' gcj02', // 默认为 wgs84 返回 gps 坐标，gcj02 返回可用于 wx.openLocation 的坐标
      success: function(res){
        // success
        // latitude : 39.90403 longitude : 116.407526
        console.log(res)
        var latitude = res.latitude
        var longitude = res.longitude
        wx.openLocation({
          latitude: latitude,
          longitude: longitude,
          scale: 28
        })
      },
      fail: function() {
        // fail
      },
      complete: function() {
        // complete
      }
    })

    wx.getUserInfo({
      success: function(res) {
        console.log(res);
        var userInfo = res.userInfo
        var nickName = userInfo.nickName
        var avatarUrl = userInfo.avatarUrl
        var gender = userInfo.gender //性别 0：未知、1：男、2：女
        var province = userInfo.province
        var city = userInfo.city
        var country = userInfo.country
      }
    })
  },

  onShow() {
    // App show
    console.log("小程序显示");
  },

  onHide() {
    // App hide
    console.log("小程序隐藏");
  }
})
