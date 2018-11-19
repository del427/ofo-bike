// pages/moneyPage/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    money:0,
  },
  inputChange(e){
    let money = parseInt(e.detail.value);
    if (money >= 0 && typeof money === 'number'){
      this.setData({
        money: money 
      })
    }
  },
  btnClick(){
    let money = this.data.money;
    wx.getStorage({
      key: 'money',
      success: (res) => {
        wx.setStorage({
          key: 'money',
          data: parseInt(this.data.money) + parseInt(res.data),
        })
      },
      fail:() => {
        wx.setStorage({
          key: 'money',
          data: parseInt(this.data.money),
        })
      }
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.getStorage({
      key: 'money',
      success: (res) => {
        console.log(res)
        this.setData({
          money:res.data
        })
      },
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