// pages/goods/goods.js
Page({
    data: {
        curNav:1,
        goods: [
            {
                "id":1,
                "name": "热销",
                "type": -1,
                "foods": [
                    {
                        "name": "白玫瑰",
                        "price": 10,
                        "oldPrice": "",
                        "description": "",
                        "sellCount": 229,
                        "Count": 0,
                        "rating": 100,
                        "info": "好看，特别",
                        "ratings": [
                            {
                                "username": "3******c",
                                "rateTime": 1469281964000,
                                "rateType": 0,
                                "text": "很喜欢的的话",
                                "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
                            },
                            {
                                "username": "2******3",
                                "rateTime": 1469271264000,
                                "rateType": 0,
                                "text": "",
                                "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
                            },
                            {
                                "username": "3******b",
                                "rateTime": 1469261964000,
                                "rateType": 1,
                                "text": "",
                                "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
                            }
                        ],
                        "icon": "http://fuss10.elemecdn.com/c/cd/c12745ed8a5171e13b427dbc39401jpeg.jpeg?imageView2/1/w/114/h/114",
                        "image": "http://fuss10.elemecdn.com/c/cd/c12745ed8a5171e13b427dbc39401jpeg.jpeg?imageView2/1/w/750/h/750"
                    },
                    {
                        "name": "玫瑰花",
                        "price": 14,
                        "oldPrice": "",
                        "description": "",
                        "sellCount": 188,
                        "Count": 0,
                        "rating": 96,
                        "ratings": [
                            {
                                "username": "3******c",
                                "rateTime": 1469281964000,
                                "rateType": 0,
                                "text": "",
                                "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
                            },
                            {
                                "username": "2******3",
                                "rateTime": 1469271264000,
                                "rateType": 0,
                                "text": "",
                                "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
                            },
                            {
                                "username": "3******b",
                                "rateTime": 1469261964000,
                                "rateType": 1,
                                "text": "",
                                "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
                            }
                        ],
                        "info": "",
                        "icon": "http://fuss10.elemecdn.com/c/6b/29e3d29b0db63d36f7c500bca31d8jpeg.jpeg?imageView2/1/w/114/h/114",
                        "image": "http://fuss10.elemecdn.com/c/6b/29e3d29b0db63d36f7c500bca31d8jpeg.jpeg?imageView2/1/w/750/h/750"
                    },
                    {
                        "name": "百合",
                        "price": 10,
                        "oldPrice": "",
                        "description": "",
                        "sellCount": 124,
                        "Count": 0,
                        "rating": 85,
                        "info": "",
                        "ratings": [
                            {
                                "username": "3******c",
                                "rateTime": 1469281964000,
                                "rateType": 1,
                                "text": "送人必备",
                                "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
                            },
                            {
                                "username": "2******3",
                                "rateTime": 1469271264000,
                                "rateType": 1,
                                "text": "很一般啊",
                                "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
                            },
                            {
                                "username": "3******b",
                                "rateTime": 1469261964000,
                                "rateType": 0,
                                "text": "",
                                "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
                            }
                        ],
                        "icon": "http://fuss10.elemecdn.com/f/28/a51e7b18751bcdf871648a23fd3b4jpeg.jpeg?imageView2/1/w/114/h/114",
                        "image": "http://fuss10.elemecdn.com/f/28/a51e7b18751bcdf871648a23fd3b4jpeg.jpeg?imageView2/1/w/750/h/750"
                    },
                    {
                        "name": "蓝色妖姬",
                        "price": 14,
                        "oldPrice": "",
                        "description": "",
                        "sellCount": 114,
                        "Count": 0,
                        "rating": 91,
                        "info": "",
                        "ratings": [
                            {
                                "username": "3******c",
                                "rateTime": 1469281964000,
                                "rateType": 1,
                                "text": "可以放心购买",
                                "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
                            },
                            {
                                "username": "2******3",
                                "rateTime": 1469271264000,
                                "rateType": 0,
                                "text": "",
                                "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
                            },
                            {
                                "username": "3******b",
                                "rateTime": 1469261964000,
                                "rateType": 0,
                                "text": "",
                                "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
                            }
                        ],
                        "icon": "http://fuss10.elemecdn.com/d/b9/bcab0e8ad97758e65ae5a62b2664ejpeg.jpeg?imageView2/1/w/114/h/114",
                        "image": "http://fuss10.elemecdn.com/d/b9/bcab0e8ad97758e65ae5a62b2664ejpeg.jpeg?imageView2/1/w/750/h/750"
                    },
                    {
                        "name": "红袖鲜花",
                        "price": 17,
                        "oldPrice": "",
                        "description": "",
                        "sellCount": 101,
                        "Count": 0,
                        "rating": 78,
                        "info": "",
                        "ratings": [
                            {
                                "username": "3******c",
                                "rateTime": 1469281964000,
                                "rateType": 1,
                                "text": "美",
                                "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
                            },
                            {
                                "username": "2******3",
                                "rateTime": 1469271264000,
                                "rateType": 0,
                                "text": "",
                                "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
                            },
                            {
                                "username": "3******b",
                                "rateTime": 1469261964000,
                                "rateType": 0,
                                "text": "",
                                "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
                            }
                        ],
                        "icon": "http://fuss10.elemecdn.com/7/72/9a580c1462ca1e4d3c07e112bc035jpeg.jpeg?imageView2/1/w/114/h/114",
                        "image": "http://fuss10.elemecdn.com/7/72/9a580c1462ca1e4d3c07e112bc035jpeg.jpeg?imageView2/1/w/750/h/750"
                    }
                ]
            },
            {
                "id":2,
                "name": "白牡丹",
                "type": 2,
                "foods": [
                    {
                        "name": "白牡丹花束",
                        "price": 29,
                        "oldPrice": 36,
                        "description": "买买买",
                        "sellCount": 17,
                        "Count": 0,
                        "rating": 100,
                        "info": "",
                        "ratings": [
                            {
                                "username": "2******3",
                                "rateTime": 1469271264000,
                                "rateType": 0,
                                "text": "",
                                "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
                            }
                        ],
                        "icon": "http://fuss10.elemecdn.com/6/72/cb844f0bb60c502c6d5c05e0bddf5jpeg.jpeg?imageView2/1/w/114/h/114",
                        "image": "http://fuss10.elemecdn.com/6/72/cb844f0bb60c502c6d5c05e0bddf5jpeg.jpeg?imageView2/1/w/750/h/750"
                    }
                ]
            },
            {
                "id":3,
                "name": "花篮",
                "type": 1,
                "foods": [
                    {
                        "name": "花篮套餐1",
                        "price": 8,
                        "oldPrice": 10,
                        "description": "",
                        "sellCount": 15,
                        "Count": 0,
                        "rating": 100,
                        "info": "",
                        "ratings": [
                            {
                                "username": "3******c",
                                "rateTime": 1469281964000,
                                "rateType": 0,
                                "text": "还可以",
                                "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
                            },
                            {
                                "username": "2******3",
                                "rateTime": 1469271264000,
                                "rateType": 0,
                                "text": "",
                                "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
                            }
                        ],
                        "icon": "http://fuss10.elemecdn.com/e/c6/f348e811772016ae24e968238bcbfjpeg.jpeg?imageView2/1/w/114/h/114",
                        "image": "http://fuss10.elemecdn.com/e/c6/f348e811772016ae24e968238bcbfjpeg.jpeg?imageView2/1/w/750/h/750"
                    }
                ]
            },
            {
                "id":5,
                "name": "勿忘我",
                "type": -1,
                "foods": [
                    {
                        "name": "米米号",
                        "price": 4,
                        "oldPrice": "",
                        "description": "",
                        "sellCount": 84,
                        "Count": 0,
                        "rating": 100,
                        "info": "",
                        "ratings": [
                            {
                                "username": "3******c",
                                "rateTime": 1469281964000,
                                "rateType": 0,
                                "text": "",
                                "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
                            },
                            {
                                "username": "2******3",
                                "rateTime": 1469271264000,
                                "rateType": 0,
                                "text": "",
                                "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
                            },
                            {
                                "username": "3******b",
                                "rateTime": 1469261964000,
                                "rateType": 0,
                                "text": "",
                                "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
                            }
                        ],
                        "icon": "http://fuss10.elemecdn.com/9/b5/469d8854f9a3a03797933fd01398bjpeg.jpeg?imageView2/1/w/114/h/114",
                        "image": "http://fuss10.elemecdn.com/9/b5/469d8854f9a3a03797933fd01398bjpeg.jpeg?imageView2/1/w/750/h/750"
                    },
                    {
                        "name": "圣女花束",
                        "price": 9,
                        "oldPrice": "",
                        "description": "",
                        "sellCount": 28,
                        "Count": 0,
                        "rating": 100,
                        "info": "",
                        "ratings": [
                            {
                                "username": "3******c",
                                "rateTime": 1469281964000,
                                "rateType": 0,
                                "text": "",
                                "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
                            },
                            {
                                "username": "2******3",
                                "rateTime": 1469271264000,
                                "rateType": 0,
                                "text": "",
                                "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
                            },
                            {
                                "username": "3******b",
                                "rateTime": 1469261964000,
                                "rateType": 0,
                                "text": "",
                                "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
                            }
                        ],
                        "icon": "http://fuss10.elemecdn.com/6/54/f654985b4e185f06eb07f8fa2b2e8jpeg.jpeg?imageView2/1/w/114/h/114",
                        "image": "http://fuss10.elemecdn.com/6/54/f654985b4e185f06eb07f8fa2b2e8jpeg.jpeg?imageView2/1/w/750/h/750"
                    }
                ]
            },
            {
                "id":6,
                "name": "郁金香",
                "type": -1,
                "foods": [
                    {
                        "name": "瑞士郁金香",
                        "price": 37,
                        "oldPrice": "",
                        "description": "特产,值得拥有",
                        "sellCount": 3,
                        "Count": 0,
                        "rating": 100,
                        "info": "",
                        "ratings": [
                            {
                                "username": "2******3",
                                "rateTime": 1469271264000,
                                "rateType": 0,
                                "text": "",
                                "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
                            }
                        ],
                        "icon": "http://fuss10.elemecdn.com/f/49/27f26ed00c025b2200a9ccbb7e67ejpeg.jpeg?imageView2/1/w/114/h/114",
                        "image": "http://fuss10.elemecdn.com/f/49/27f26ed00c025b2200a9ccbb7e67ejpeg.jpeg?imageView2/1/w/750/h/750"
                    },
                    {
                        "name": "山东郁金香",
                        "price": 31,
                        "oldPrice": "",
                        "description": "",
                        "sellCount": 12,
                        "Count": 0,
                        "rating": 100,
                        "info": "",
                        "ratings": [
                            {
                                "username": "2******3",
                                "rateTime": 1469271264000,
                                "rateType": 0,
                                "text": "",
                                "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
                            }
                        ],
                        "icon": "http://fuss10.elemecdn.com/8/96/f444a8087f0e940ef264617f9d98ajpeg.jpeg?imageView2/1/w/114/h/114",
                        "image": "http://fuss10.elemecdn.com/8/96/f444a8087f0e940ef264617f9d98ajpeg.jpeg?imageView2/1/w/750/h/750"
                    }
                ]
            },
            {
                "name": "金菊",
                "type": -1,
                "foods": [
                    {
                        "name": "嫩菊花",
                        "price": 6,
                        "oldPrice": "",
                        "description": "",
                        "sellCount": 1,
                        "Count": 0,
                        "rating": "",
                        "info": "",
                        "ratings": [],
                        "icon": "http://fuss10.elemecdn.com/b/5f/b3b04c259d5ec9fa52e1856ee50dajpeg.jpeg?imageView2/1/w/114/h/114",
                        "image": "http://fuss10.elemecdn.com/b/5f/b3b04c259d5ec9fa52e1856ee50dajpeg.jpeg?imageView2/1/w/750/h/750"
                    },
                    {
                        "name": "老菊花",
                        "price": 6,
                        "oldPrice": "",
                        "description": "",
                        "sellCount": 7,
                        "Count": 0,
                        "rating": 100,
                        "info": "",
                        "ratings": [
                            {
                                "username": "3******c",
                                "rateTime": 1469281964000,
                                "rateType": 0,
                                "text": "",
                                "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
                            },
                            {
                                "username": "2******3",
                                "rateTime": 1469271264000,
                                "rateType": 0,
                                "text": "",
                                "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
                            },
                            {
                                "username": "3******b",
                                "rateTime": 1469261964000,
                                "rateType": 0,
                                "text": "",
                                "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
                            }
                        ],
                        "icon": "http://fuss10.elemecdn.com/b/9f/5e6c99c593cf65229225c5661bcdejpeg.jpeg?imageView2/1/w/114/h/114",
                        "image": "http://fuss10.elemecdn.com/b/9f/5e6c99c593cf65229225c5661bcdejpeg.jpeg?imageView2/1/w/750/h/750"
                    },
                    {
                        "name": "黄菊花",
                        "price": 8,
                        "oldPrice": 10,
                        "description": "",
                        "sellCount": 15,
                        "Count": 0,
                        "rating": 100,
                        "info": "",
                        "ratings": [
                            {
                                "username": "3******c",
                                "rateTime": 1469281964000,
                                "rateType": 0,
                                "text": "还可以",
                                "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
                            },
                            {
                                "username": "2******3",
                                "rateTime": 1469271264000,
                                "rateType": 0,
                                "text": "",
                                "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
                            }
                        ],
                        "icon": "http://fuss10.elemecdn.com/e/c6/f348e811772016ae24e968238bcbfjpeg.jpeg?imageView2/1/w/114/h/114",
                        "image": "http://fuss10.elemecdn.com/e/c6/f348e811772016ae24e968238bcbfjpeg.jpeg?imageView2/1/w/750/h/750"
                    }
                ]
            }
        ],
        toView: '0',
        scrollTop: 100,
        foodCounts: 0,
        totalPrice: 0,// 总价格
        totalCount: 0, // 总商品数
        carArray: [],
        minPrice: 20,//起送價格
        payDesc: '',
        deliveryPrice: 4,//配送費
        fold: true,
        selectFoods: [{ price: 20, count: 2 }],
        cartShow: 'none',
        status: 0,
        selected: 'none',
    },
    selectMenu: function (e) {
        var index = e.currentTarget.dataset.itemIndex;
        var id = e.currentTarget.dataset.id;
        this.setData({
            toView: 'order' + index.toString(),
            curNav: id
        })
        console.log(this.data.toView);
    },
    //移除商品
    decreaseCart: function (e) {
        var index = e.currentTarget.dataset.itemIndex;
        var parentIndex = e.currentTarget.dataset.parentindex;
        this.data.goods[parentIndex].foods[index].Count--
        var num = this.data.goods[parentIndex].foods[index].Count;
        var mark = 'a' + index + 'b' + parentIndex
        var price = this.data.goods[parentIndex].foods[index].price;
        var obj = { price: price, num: num, mark: mark, name: name, index: index, parentIndex: parentIndex };
        var carArray1 = this.data.carArray.filter(item => item.mark != mark);
        carArray1.push(obj);
        console.log(carArray1);
        this.setData({
            carArray: carArray1,
            goods: this.data.goods
        })
        this.calTotalPrice()
        this.setData({
            payDesc: this.payDesc(),
        })
        //关闭弹起
        var count1 = 0
        for (let i = 0; i < carArray1.length; i++) {
            if (carArray1[i].num == 0) {
                count1++;
            }
        }
        //console.log(count1)
        if (count1 == carArray1.length) {
            if (num == 0) {
                this.setData({
                    cartShow: 'none'
                })
            }
        }
    },
    decreaseShopCart: function (e) {
        console.log('1');
        this.decreaseCart(e);
    },
    //添加到购物车
    addCart(e) {
        var index = e.currentTarget.dataset.itemIndex;
        var parentIndex = e.currentTarget.dataset.parentindex;
        this.data.goods[parentIndex].foods[index].Count++;
        var mark = 'a' + index + 'b' + parentIndex
        var price = this.data.goods[parentIndex].foods[index].price;
        var num = this.data.goods[parentIndex].foods[index].Count;
        var name = this.data.goods[parentIndex].foods[index].name;
        var obj = { price: price, num: num, mark: mark, name: name, index: index, parentIndex: parentIndex };
        var carArray1 = this.data.carArray.filter(item => item.mark != mark)
        carArray1.push(obj)
        console.log(carArray1);
        this.setData({
            carArray: carArray1,
            goods: this.data.goods
        })
        this.calTotalPrice();
        this.setData({
            payDesc: this.payDesc()
        })
    },
    addShopCart: function (e) {
        this.addCart(e);
    },
    //计算总价
    calTotalPrice: function () {
        var carArray = this.data.carArray;
        var totalPrice = 0;
        var totalCount = 0;
        for (var i = 0; i < carArray.length; i++) {
            totalPrice += carArray[i].price * carArray[i].num;
            totalCount += carArray[i].num
        }
        this.setData({
            totalPrice: totalPrice,
            totalCount: totalCount,
            //payDesc: this.payDesc()
        });
    },
    //差几元起送
    payDesc() {
        if (this.data.totalPrice === 0) {
            return `￥${this.data.minPrice}元起送`;
        } else if (this.data.totalPrice < this.data.minPrice) {
            let diff = this.data.minPrice - this.data.totalPrice;
            return '还差' + diff + '元起送';
        } else {
            return '去结算';
        }
    },
    //結算
    pay() {
        // 跳到订单结算页面
        wx.navigateTo({
          url: '../goods/order_settlement/order_settlement',
        })

        if (this.data.totalPrice < this.data.minPrice) {
            return;
        }
        // window.alert('支付' + this.totalPrice + '元');
        //确认支付逻辑
        var resultType = "success";
        wx.redirectTo({
            // url: '../goods/pay/pay?resultType=' + resultType
        })
    },
    more() {
        // 跳到商家详情
        wx.navigateTo({
          url: '../goods/shops_info/shops_info',
        })
    },
    //彈起購物車
    toggleList: function () {
        if (!this.data.totalCount) {
            return;
        }
        this.setData({
            fold: !this.data.fold,
        })
        var fold = this.data.fold
        //console.log(this.data.fold);
        this.cartShow(fold)
    },
    cartShow: function (fold) {
        console.log(fold);
        if (fold == false) {
            this.setData({
                cartShow: 'block',
            })
        } else {
            this.setData({
                cartShow: 'none',
            })
        }
        console.log(this.data.cartShow);
    },
    tabChange: function (e) {
        var showtype = e.target.dataset.type;
        this.setData({
            status: showtype,
        });
    },
    onLoad: function (options) {
        // 页面初始化 options为页面跳转所带来的参数
        this.setData({
            payDesc: this.payDesc()
        });
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
    tap_myorder : function(){
      console.log("asdfadfasdfasdf");
      wx.navigateTo({
        url: '/pages/goods/myorder/myorder',
      })
    },
    onShareAppMessage: function (res) {
    }
})
