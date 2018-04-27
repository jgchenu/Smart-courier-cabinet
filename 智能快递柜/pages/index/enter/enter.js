// pages/index/enter/enter.js
let app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    phone:null
  },
  bindPhoneInput: function (e) {
    this.setData({
      phone: e.detail.value
    })
  },
  toDeposits: function () {
    if (!/^1[345789]\d{9}$/.test(this.data.phone)) {
      console.log(this.data);
      wx.showToast({
        title: '请输入正确的手机格式',
        icon: 'none',
        duration: 1000
      })
    }
    else {
      app.globalData.phone = this.data.phone;
      wx.showToast({
        title: '手机验证通过',
        icon: 'success',
        duration: 1000,
        success: () => {
          setTimeout(() => {
            wx.navigateTo({
              url: '../deposits/deposits',
            })
          }, 1000)
        }
      })
    }


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