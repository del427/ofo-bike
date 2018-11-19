// pages/charging/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    hour:0,
    min:0,
    secd:0,
    number:1234,
    btntext:'结束骑行'
  },
  //开始结束骑行
  overBtn(){
    if(this.timer){
      clearInterval(this.timer)
      this.timer = null;
      this.setData({
        btntext:'恢复骑行'
      })
    }else{
      let hour = this.data.hour,
        min = this.data.min,
        secd = this.data.secd;
      this.timer = setInterval(() => {
        ++secd;
        if (secd >= 60) {
          secd = 0;
          ++min;
          if (min >= 60) {
            ++hour;
            min = 0;
          }
        }
        this.setData({
          hour, min, secd,
        })
      }, 1000)
    }
  },
  //返回地图
  ruturnMap(){
    if(this.timer){
      wx.navigateTo({
        url:`../index/index?number=${this.data.number}`
      })
    }else{
      wx.redirectTo({
        url:`../index/index?number=${this.data.number}`
      })
    }
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let hour = 0,
        min = 0,
        secd = 0,
        timer = null;
    this.setData({
      number: options.number,
    })
    this.timer = setInterval(() => {
      ++secd;
      if(secd >= 60){
        secd = 0;
        ++min;
        if(min >= 60){
          ++hour;
          min = 0;
        }
      }
      this.setData({
        hour,min,secd,
      })
    },1000)
   
    
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