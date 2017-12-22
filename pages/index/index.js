var app = getApp();
var routes = require('routes');
Page({
  data: {
    cellHeight: '120px',
    ageItems: [],
    banners: [
      {
        imgUrls: app.globalData.urlBase + 'myApplication/images/slider1.png',
        dragon:'跳楼价承接小程序'
      }
    ],
    indicatorDots: true,
    autoplay: true,
    interval: 5000,
    duration: 1000
  },

  onLoad: function () {
    var that = this
    var pageItems = [];
    var row = [];
    var len = routes.PageItems.length;//重组PageItems 
    len = Math.floor((len + 2) / 3) * 3;
    for (var i = 0; i < len; i++) {
      if ((i + 1) % 3 == 0) {
        row.push(routes.PageItems[i]);
        pageItems.push(row);
        row = [];
        continue;
      }
      else {
        row.push(routes.PageItems[i]);
      }
    }

    wx.getSystemInfo({
      success: function (res) {
        var windowWidth = res.windowWidth * 0.8;
        console.log("windowWidth=" + windowWidth);
        that.setData({
          cellHeight: (windowWidth / 3) + 'px'
        })
      },
      complete: function () {
        that.setData({
          pageItems: pageItems
        })
      }
    })
  },
  onDail:function(){
    wx.makePhoneCall({
      phoneNumber: '173 2129 2727'
    })
  },
  onShareAppMessage:function(res){
  },
  onEnter:function(){
    wx.navigateTo({
      url: '/pages/introduction/introduction',
    })
  }
})
