var app = getApp();
var PageItems =
  [
    {
      text: '银行',
      icon: app.globalData.urlBase + 'myApplication/images/icon_bank.png',
      route: '/pages/bank/bank',
      isTab: false
    },
    {
      text: '在线鲜花',
      icon: app.globalData.urlBase + 'myApplication/images/icon_online_flower.png',
      route: '/pages/goods/goods',
      isTab: false
    },
    {
      text: '抽奖',
      icon: app.globalData.urlBase + 'myApplication/images/icon_lottery.png',
      route: '/pages/lottery/index',
      isTab: false
    },
    {
      text: '日程表',
      icon: app.globalData.urlBase + 'myApplication/images/icon_schedule.jpg',
      route: '/pages/calendar/index',
      isTab: false
    },
    {
      text: '电话业务',
      icon: app.globalData.urlBase + 'myApplication/images/icon_telephone_business.png',
      route: '/pages/telephonebusiness/telephonebusiness',
      isTab: false
    },
    {
      text: '阅读',
      icon: app.globalData.urlBase + 'myApplication/images/icon_reader.png',
      route: '/pages/posts/post',
      isTab: false
    },
    {
      text: '鲜花卡片',
      icon: app.globalData.urlBase + 'myApplication/images/icon_online_mall.png',
      route: '/pages/card/index',
      isTab: false
    },
    {
      text: '电影查询',
      icon: app.globalData.urlBase + 'myApplication/images/icon_movie.png',
      route: '/pages/movies/movies',
      isTab: false
    },
    {
      text: '洗浴按摩',
      icon: app.globalData.urlBase + 'myApplication/images/icon_massage.png',
      route: '/pages/massage/home/home',
      isTab: true
    }
  ];
module.exports = {
  PageItems: PageItems
} 