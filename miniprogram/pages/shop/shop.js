// pages/shop/shop.js
var bool = true;
Page({
  data: {
    show_edit: "block",
    edit_name: "编辑商品",
    edit_show: "none",
    hasList: true,
    list: [{
      id: 1,
      big: '真质康商城',
      image: 'image/commodity1.jpg',
      title: '电子体温计 深圳华盛昌非接触红外额体温计DT-8806S',
      pro_name: "由真质康商城 配送并提供售后服务",
      num: 1,
      price: 140.00,
      selected: false
    },
    {
      id: 2,
      big: '南京万福',
      image: 'image/commodity2.jpg',
      title: '消毒试剂 南京万福金安万福金安消毒液2500ML',
      price: 40.50,
      num: 1,
      selected: false
    }, {
      id: 3,
      big: '真质康商城',
      image: 'image/commodity1.jpg',
      title: '电子体温计 深圳华盛昌非接触红外额体温计DT-8806S',
      pro_name: "由真质康商城 配送并提供售后服务",
      num: 1,
      price: 140.00,
      selected: false
    }, {
      id: 3,
      big: '真质康商城',
      image: 'image/commodity1.jpg',
      title: '电子体温计 深圳华盛昌非接触红外额体温计DT-8806S',
      pro_name: "由真质康商城 配送并提供售后服务",
      num: 1,
      price: 140.00,
      selected: false
    }
    ],
    totalPrice: 0.0,
    selectAllStatus: false,
  },
  onShow() {
    wx.showToast({
      title: '加载中',
      icon: "loading",
      duration: 1000
    })
    this.count_price();
  },
  selectList(e) {
    var that = this;
    var index = e.currentTarget.dataset.index;
    var list = that.data.list;
    that.data.selectAllStatus = true;
    /*循环数组数据，判断----选中/未选中[selected]*/
    list[index].selected = !list[index].selected;
    for (var i = list.length - 1; i >= 0; i--) {
      if (!list[i].selected) {
        that.data.selectAllStatus = false;
        break;
      }
    }
    /*重新渲染*/
    that.setData({
      list: list,
      selectAllStatus: that.data.selectAllStatus
    })
    /*计算金额*/
    that.count_price();
  },
  /*编辑*/
  btn_edit: function () {
    var that = this;
    if (bool) {
      that.setData({
        edit_show: "block",
        edit_name: "取消",
        show_edit: "none"
      })
      bool = false;
    } else {
      that.setData({
        edit_show: "none",
        edit_name: "编辑商品",
        show_edit: "block"
      })
      bool = true;
    }
  },
  /*删除*/
  deletes: function (e) {
    var that = this;
    //获取索引
    const index = e.currentTarget.dataset.index;
    //获取商品列表
    let list = this.data.list;
    wx.showModal({
      title: '提示',
      content: '确认删除吗',
      success: function (res) {
        if (res.confirm) {
          //删除索引从1
          list.splice(index, 1);
          that.setData({
            list: list//页面渲染数据
          });
          if (!list.length) {
            that.setData({
              hasList: false
            });
          } else {
            //金额
            that.count_price();
          }
        } else {
          console.log(res);
        }
      },
      fail: function (res) {
        console.log(res);
      }
    })
  },

  /*分享*/
  btn_share: function () {
    if (res.from == 'btn_share') { }
    return {
      title: '转发',
      path: '',
      success: function (res) {
        console.log('成功', res)
      }
    }
  },
  /*全选*/
  selectAll(e) {
    let selectAllStatus = this.data.selectAllStatus;
    selectAllStatus = !selectAllStatus;
    let list = this.data.list;
    // 如果数组数据全部为selected[true],全选
    for (let i = 0; i < list.length; i++) {
      list[i].selected = selectAllStatus;
    }
    /*页面重新渲染*/
    this.setData({
      selectAllStatus: selectAllStatus,
      list: list
    });
    //计算金额
    this.count_price();
  },
  //绑定数量
  btn_add(e) {
    const index = e.currentTarget.dataset.index;
    let list = this.data.list;//获取点击索引
    let num = list[index].num;//获取商品数量
    num = num + 1;//点击递增
    list[index].num = num;
    this.setData({
      list: list
    });
    this.count_price();//计算金额
  },
  btn_minus(e) {
    const index = e.currentTarget.dataset.index;
    let list = this.data.list;
    let num = list[index].num;
    if (num <= 1) {
      return false;
    }
    num = num - 1;
    list[index].num = num;
    this.setData({
      list: list//渲染页面
    });
    this.count_price();
  },
  //提交订单
  btn_submit_order: function () {
    var that = this;
    console.log(that.data.totalPrice);
    //支付
    /*
    wx.requestPayment(
      {
        timeStamp:'',
        nonceStr:'',
        package:'',
        signType:'MD5',
        paySign:'',
        success:function(res){},
        fail:function(res){},
        complete:function(res){}
      }
    )*/
    wx.showModal({
      title: '提示',
      content: '合计金额' + that.data.totalPrice
    })
  },
  //收藏
  btn_collert: function () {
    wx.showToast({
      title: '',
      duration: 2000
    })
  },
  //计算总价
  count_price() {
    let list = this.data.list;
    let total = 0;
    for (let i = 0; i < list.length; i++) {
      if (list[i].selected) {
        total += list[i].num * list[i].price;
      }
    }
    this.setData({
      list: list,
      totalPrice: total.toFixed(2)
    });
  },




  //滑动删除









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
    wx.showNavigationBarLoading();
    var that = this;

    console.log(that.data.types_id);
    console.log(that.data.sel_name);
    wx.reques({
      url: host + '请求后台数据地址',
      method: "post",
      data: {
        page: 1,
      }, success: function () {
        that.setData({
          list: rea.data.data.datas
        })
      }
    })
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