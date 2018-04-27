// pages/index/deposits/deposits.js
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
    wx.request({
      url: `${baseUrl}/deposits/sure`,
      method: 'POST',
      header: {
        "Content-type": "application/json"
      },
      data: {
        chestid: this.data.chestid,
        phone: globalData.phone,
        manid: globalData.manid
      },
      success: (res) => {
        console.log(res);
        if (res.data.code == 200200) {
          wx.showToast({
            title: res.data.msg,
            icon: 'success',
            duration: 1000,
            success: () => {
              wx.showToast({
                title: '存件成功',
                icon: 'success',
                duration: 1000,
                success: () => {
                  setTimeout(() => {
                    wx.navigateTo({
                      url: `../depSucess/depSucess?chestid=${this.data.chestid}`,
                    })
                  }, 1000)
                }
              })
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
      url: `${baseUrl}/deposits/find`,
      method: 'GET',
      header: {
        "Content-type": "application/json"
      },
      success: (res) => {
        if (res.data.code == 200200) {
          wx.showToast({
            title: res.data.msg,
            icon: 'success',
            duration: 1000,
            success: () => {
              this.setData({
                chestid: res.data.chestid
              });
            }
          })
        } else if (res.data.code == 200201) {
          wx.showToast({
            title: res.data.msg,
            icon: 'none',
            duration: 1000,
            success: () => {
              setTimeout(() => {
                wx.navigateBack({
                  delta: 1
                })
              }, 1000)
            }
          })
        }
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