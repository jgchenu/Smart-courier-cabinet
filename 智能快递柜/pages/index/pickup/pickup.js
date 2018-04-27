// pages/index/pickup/pickup.js
let app = getApp();
let globalData = app.globalData;
let baseUrl = globalData.baseUrl;

Page({

  /**
   * 页面的初始数据
   */
  data: {
    chestid: ""
  },
  deposits: function () {
    let chestid = this.data.chestid;
    wx.request({
      url: `${baseUrl}/takeout/sure`,
      method: 'POST',
      header: {
        "Content-type": "application/json"
      },
      data: {
        vercode: globalData.vercode,
        chestid: chestid
      },
      success: (res) => {
        console.log(res);
        if (res.data.code === 200200) {
          wx.showToast({
            title: res.data.msg,
            icon: 'success',
            duration: 1000,
            success: () => {
              setTimeout(() => {
                wx.navigateTo({
                  url: '../pickupSucc/pickupSucc',
                })
              }, 1000)
            }
          })
        }

      }
    })

  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.request({
      url: `${baseUrl}/takeout/enter/${globalData.vercode}`,
      method: 'GET',
      header: {
        "Content-type": "application/json"
      },
      success: (res) => {
        console.log(res);
        this.setData({
          chestid: res.data.chestid
        })
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