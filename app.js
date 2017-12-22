import { log, promiseHandle } from 'utils/util';

App({
  globalData:{
    urlBase: "http://106.14.176.248/kingman/",
    userInfo: null,
    g_isPlayingMusic: false,
    g_currentMusicPostId: null,
    doubanBase: "https://api.douban.com",
  },
  
  getUserInfo:function(cb){
  },

  //自定义配置
  settings: {
    debug: true, //是否调试模式
    moreLink: 'http://github.com/oopsguy'
  }
})