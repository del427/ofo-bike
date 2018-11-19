// pages/index/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    longitude:0,
    latitude:0,
    number:null
  },
  usePage(){
    wx.scanCode({
      success:() => {
        wx.showLoading({
          title: '扫描密码中',
        })
        wx.request({
          url:'https://www.easy-mock.com/mock/5b8bdd9e61840c7b403365cb/get/getName',
          success:(res) => {
            wx.hideLoading()
            wx.navigateTo({
              url: `../usePage/index?password=${res.data.data.password}&number=${res.data.data.number}`,
              success:()=>{
                wx.showToast({
                  title: '获取密码成功',
                })
              }
            })
          }
        })
        
      }
    })
  },
  avatarPage(){
    wx.navigateTo({
      url: '../avatarPage/index',
    })
  },
  locationPage(){
    wx.getSetting({
      success:() => {
        wx.getLocation({
          success: (res) => {
            this.setData({
              longitude:res.longitude,
              latitude:res.latitude
            })
          },
        })
      }
    })
  },
  warnPage(){
    wx.navigateTo({
      url:`../warnPage/index?number=${this.data.number}`,
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.getSetting({
      success:()=>{
        wx.getLocation({
          success: (res) => {
            this.setData({
              longitude:res.longitude,
              latitude:res.latitude,
              
            })
          },
        })
      }
    })
    if(options.number){
      this.setData({
        number:options.number
      })
    }
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