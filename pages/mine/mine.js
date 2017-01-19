let app = getApp()
Page({
  data: {
    userInfo: {}
  },
  //事件处理函数
  orderTap: function (e) {
    console.log(e.currentTarget.dataset);
    wx.navigateTo({
      url: './order-list?order_status=' + e.currentTarget.dataset.orderStatus
    })
  },
  afterSaleTap: function () {
    wx.navigateTo({
      url: './after-sale-list'
    })
  },
  shippingTap: function (e) {
    wx.navigateTo({
      url: './shipping-list'
    })
  },
  invoiceTap: function (e) {
    wx.navigateTo({
      url: './invoice-list'
    })
  },
  onLoad: function () {
    console.log('onLoad')
    // let a = app.libs.moment().add(1, 'days').format('YYYY-MM-DD')
    // console.log(a)
    var that = this
    //调用应用实例的方法获取全局数据
    app.getUserInfo(function (userInfo) {
      //更新数据
      that.setData({
        userInfo: userInfo
      })
    })
  }
})