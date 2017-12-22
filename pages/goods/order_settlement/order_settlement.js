// pages/goods/order_settlement/order_settlement.js
Page({
  data: {
    "userName":"Kingman",
    "address":"上海市闵行区紫月路506号",
    "telNumber":"17321292727"
  },
  //結算
  pay: function () {
    //确认支付逻辑
    var resultType = "success";
    wx.redirectTo({
      url: '../pay/pay?resultType=' + resultType
    })
  },
  onLoad: function (options) {
    // 页面初始化 options为页面跳转所带来的参数
  },
  onReady: function () {
    // 页面渲染完成
  },
  onShow: function () {
    // 页面显示
  },
  onHide: function () {
    // 页面隐藏
  },
  onUnload: function () {
    // 页面关闭
  },
  chooseAddress: function () {
    var that = this;
    if (wx.chooseAddress) {
      wx.chooseAddress({
        success: function (res) {
          console.log('获取地址成功')
          console.log(res)
          that.setData({
            address: res.provinceName+res.cityName+res.countyName+res.detailInfo,
            userName:res.userName,
            telNumber:res.telNumber
          })
        },
        fail: function (res) {
          console.log('获取地址失败')
        },
      })
    } else {
      // 如果希望用户在最新版本的客户端上体验您的小程序，可以这样子提示
      wx.showModal({
        title: '提示',
        content: '当前微信版本过低，无法使用该功能，请升级到最新微信版本后重试。'
      })

    }
  }
})