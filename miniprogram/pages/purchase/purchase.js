const db=wx.cloud.database({});
const cont=db.collection('purchase');

Page({

  /**
   * 页面的初始数据
   */
  data: {
    path: [{
      id: 1,
      image: 'image/1.jpg',
      title: '白大褂 男',
      price: '38元'
    }, {
      id: 2,
      image: 'image/2.jpg',
      title: '白大褂 女',
      price: '38元'
    }, {
      id: 3,
      image: 'image/3.jpg',
      title: '护士服 女',
      price: '35元'
    }, {
      id: 4,
      image: 'image/4.jpg',
      title: '护士服 男',
      price: '35元'
    }, {
      id: 5,
      image: 'image/5.jpg',
      title: '手术服',
      price: '55元'
    }
    ]



  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    db.collection('purchase').get({
      success(res){
        console.log(res.data)
      }
    })
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