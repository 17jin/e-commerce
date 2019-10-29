/*const util = require('../../utils/util.js')*/

Page({
  data: {
    logs: [],
    inputValue: ''
  },
  onLoad: function () {
    this.setData({
      logs: (wx.getStorageSync('logs') || []).map(log => {
        return util.formatTime(new Date(log))
      })
    })
  },

  goSearch: function (e) {
    var that = this;
    var formData = e.detail.inputValue;
    if (formData) {
      wx.request({
        url: 'index/index',
        data: {
          title: formData
        },
        success: function (res) {
          that.setData({
            search: res.data,
          })
          let str = JSON.stringify(res.data.result.data);
          wx.navigateTo({
            url: '../purchase/purchase?data=' + str,
          })
        }
      })
    }
    else {
      wx.showToast({
        title: '输入不能为空',
        duration: 1500
      })
    }
  },


  tiao_btn: function () {
    wx.navigateTo({
      url: 'purchase/purchase?',
    })
  },


  /*
  inputBind: function (e) {
    
    wx.navigateTo({
      url: '../../purchase/purchase',
    })
  },*/


  /*
  inputBind: function(e){
    this.setData({
      inputValue: e.detail.value
    })
    Console.log('bindinput'+this.data.inputValue)
  },
  query: function(event){
    var that=this
    wx.request({
    url: '../purchase/purchase'+this.data.inputValue+/0/,
      data:{
        inputValue:this.data.inputValue
      },
      method:'GET',
      success:function(res){
        console.log(res.data)
        var searchData=res.data
        that.setData({
          searchData
        })*/
  /*数据缓存 */
  /* wx.setStorage({
     key: 'searchLists',
     data: {searchLists:res.data}
   })

   if(!that.data.inputValue){
     wx.showToast({
       title: '请重新输入',//没有搜索词
     })
   }else if(searchData.search.lenth==0){
     wx.showToast({
       title: '关键词不存在',
       duration:15,//持续时间
     })
   }else{
     //提取题目关键字，进行匹配
     var searchIndex=searchData.search.lenth
     var d=0
     for (var i = 0; i <= searchIndex - 1; i++) {

       var searchTitle = searchData.search[d].title
       console.log(searchTitle)
       d = d + 1;

       for (var x = 0; x <= searchTitle.length; x++) {
         for (var y = 0; y <= searchTitle.length; y++) {
           var keyWord = searchTitle.substring(x, y);
           console.log(keyWord)
         }
       }
       wx.navigateTo({
         url: '../purchase/purchase',
       })
     }
   }
 }        
})
},*/
})