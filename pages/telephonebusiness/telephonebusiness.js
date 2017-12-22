Page({
  data: {},
  bindTelphoneTap: function () {
    wx.makePhoneCall({
      phoneNumber: '173 2129 2727',
    })
  }
})