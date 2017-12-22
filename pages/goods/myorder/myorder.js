// pages/goods/myorder/myorder.js
var app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    orders:[
      {
        "orderId": "2232342131234",
        "storeName": "石屏路店",
        "orderStatus":"2",  //交易关闭
        "totalPrice": 299,
        "subOrders":[
          {
            "goodImg": app.globalData.urlBase + "onlineFlower/images/red_rose.png",
            "goodName": "红玫瑰",
            "goodDescription":"新品",
            "count":1,
            "price":99
          },
          {
            "goodImg": app.globalData.urlBase + "onlineFlower/images/red_rose.png",
            "goodName": "黑玫瑰",
            "goodDescription": "新品",
            "count": 2,
            "price": 100
          }
        ]
      },
      {
        "orderId": "2232342131235",
        "storeName": "石屏路店2",
        "orderStatus": "2",  //交易关闭
        "totalPrice": 418,
        "subOrders": [
          {
            "goodImg": app.globalData.urlBase + "onlineFlower/images/red_rose.png",
            "goodName": "黑玫瑰",
            "goodDescription": "新品",
            "count": 2,
            "price": 109
          },
          {
            "goodImg": app.globalData.urlBase + "onlineFlower/images/red_rose.png",
            "goodName": "黑玫瑰",
            "goodDescription": "新品",
            "count": 2,
            "price": 100
          }
        ]
      },
      {
        "orderId": "2232342131236",
        "storeName": "石屏路店3",
        "orderStatus": "2",  //交易关闭
        "totalPrice": 9999,
        "subOrders": [
          {
            "goodImg": app.globalData.urlBase + "onlineFlower/images/red_rose.png",
            "goodName": "红玫瑰",
            "goodDescription": "新品",
            "count": 1,
            "price": 99
          },
          {
            "goodImg": app.globalData.urlBase + "onlineFlower/images/red_rose.png",
            "goodName": "黑玫瑰",
            "goodDescription": "新品",
            "count": 2,
            "price": 100
          }
        ]
      }
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  }
})