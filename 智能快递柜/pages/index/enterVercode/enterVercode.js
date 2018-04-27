// pages/index/enterVercode/enterVercode.js
let app = getApp();
let baseUrl = app.globalData.baseUrl;
Page({

  /**
   * 页面的初始数据
   */
  data: {
    vercode: null
  },
  bindPhoneInput: function (e) {
    this.setData({
      vercode: e.detail.value
    })
  },
  toDeposits: function () {
    if (!/^\d{6}$/.test(this.data.vercode)) {
      console.log(this.data);
      wx.showToast({
        title: '请输入正确6位随机码',
        icon: 'none',
        duration: 1000
      })
    }
    else {
      console.log(this.data.vercode)
      wx.request({
        url: `${baseUrl}/takeout/enter/${this.data.vercode}`,
        method: 'GET',
        header: {
          "Content-type": "application/json"
        },
        success: (res) => {
          if (res.data.code === 200200) {
            app.globalData.vercode = this.data.vercode;
            wx.showToast({
              title: res.data.msg,
              icon: 'success',
              duration: 1000,
              success: () => {
                setTimeout(() => {
                  wx.navigateTo({
                    url: '../pickup/pickup',
                  })
                }, 1000)
              }
            })
          } else {
            wx.showToast({
              title: res.data.msg,
              icon: 'none',
              duration: 1000
            })
          }

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