// pages/index/login/login.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    password: null,
    phone: null
  },
  //方法
  bindPhoneInput: function (e) {
    this.setData({
      phone: e.detail.value
    })
  },
  bindPassInput: function (e) {
    this.setData({
      password: e.detail.value
    })
  },
  toRegiste: function () {
    wx.navigateTo({
      url: '../registe/registe',
    })
  },
  toEnter: function () {
    if (!/^1[345789]\d{9}$/.test(this.data.phone)) {
      console.log(this.data);
      wx.showToast({
        title: '请输入正确的手机格式',
        icon: 'none',
        duration: 1000
      })
    } else if (!/^\w{6,16}$/.test(this.data.password)) {
      console.log(this.data);
      wx.showToast({
        title: '请输入6至16位数字字母组成的密码',
        icon: 'none',
        duration: 1000
      })
    }
    else {
      wx.showToast({
        title: '登录成功',
        icon: 'success',
        duration: 1000,
        success: () => {
          setTimeout(() => {
            wx.navigateTo({
              url: '../enter/enter',
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