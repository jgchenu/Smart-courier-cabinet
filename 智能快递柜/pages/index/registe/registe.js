// pages/index/registe/registe.js
let app = getApp();
let globalData = app.globalData;
let baseUrl = globalData.baseUrl;
Page({

  /**
   * 页面的初始数据
   */
  data: {
    array: ['申通快递', '圆通快递', '韵达快递', '顺丰快递'],
    index: 0,
    name: "",
    phone: '',
    pw: "",
    repw: ""
  },
  //方法
  bindPickerChange: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      index: e.detail.value
    })
  },
  bindNameInput: function (e) {
    this.setData({
      name: e.detail.value
    })
  },
  bindPhoneInput: function (e) {
    this.setData({
      phone: e.detail.value
    })
  },
  bindPwInput: function (e) {
    this.setData({
      pw: e.detail.value
    })
  },
  bindRepwInput: function (e) {
    this.setData({
      repw: e.detail.value
    })
  },
  registe: function () {
    if (this.data.name.length > 16 || this.data.name.length < 2) {
      console.log(this.data);
      wx.showToast({
        title: '请输入正确的姓名',
        icon: 'none',
        duration: 1000
      })
    } else if (!/^1[345789]\d{9}$/.test(this.data.phone)) {
      console.log(this.data);
      wx.showToast({
        title: '请输入正确的手机格式',
        icon: 'none',
        duration: 1000
      })
    } else if (!/^\w{6,16}$/.test(this.data.pw)) {
      console.log(this.data);
      wx.showToast({
        title: '请输入6至16位数字字母组成的密码',
        icon: 'none',
        duration: 1000
      })
    } else if (this.data.pw !== this.data.repw) {
      console.log(this.data);
      wx.showToast({
        title: '两次密码输入不一致',
        icon: 'none',
        duration: 1000
      })
    }
    else {
      wx.request({
        url: `${baseUrl}/user/register`,
        method: 'post',
        header: {
          "Content-type": "application/json"
        },
        data: {
          name: this.data.name,
          password: this.data.pw,
          phone: this.data.phone,
          company: this.data.array[this.data.index]
        },
        success: (res) => {
          console.log(res);
          if (res.data.code == 200200) {
            wx.showToast({
              title: res.data.msg,
              icon: 'success',
              duration: 1000,
              success: () => {
                setTimeout(() => {
                  wx.navigateTo({
                    url: '../login/login',
                  })
                }, 1000)
              }
            })
          }else if(res.data.code==200201){
            wx.showToast({
              title: res.data.msg,
              icon: 'none',
              duration: 1000
            })
          }
        },
        fail: (err) => {

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