// pages/warnPage/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    checkArr: [{
      value: "私锁私用",
      key: false,
    }, {
      value: "车牌缺损",
      key: false,
    }, {
      value: "轮胎坏了",
      key: false,
    }, {
      value: "车锁坏了",
      key: false,
    }, {
      value: "违规乱停",
      key: false,
    }, {
      value: "密码不对",
      key: false,
    }, {
      value: "违规乱停",
      key: false,
    }, {
      value: "其他故障",
      key: false,
    }],
    picText:"拍摄/相册",
    inputValue:"车牌号",
    picArr:[],
    checkBox: [],
    
  },
  checked(e){
    let checkBox = [];
    checkBox.push(e.detail.value)
    this.setData({
      checkBox
    })
  },
  addpic(){
    let picArr = [];
    wx.chooseImage({
      success: (res) => {
        console.log(res)
        picArr.push(...res.tempFilePaths)
        this.setData({
          picArr,
        })
      },
    })
  },
  inputChange(e){
    clearTimeout(this.timer)
    this.timer = setTimeout(() =>{
      console.log(e.detail.value)
    }, 300)
  },
  btnClick(){
    if(this.data.checkBox.length && this.data.picArr.length && this.data.inputValue !== '车牌号'){
      wx.showLoading({
        title: '正在提交信息',
      })
      wx.request({
        url: 'https://www.easy-mock.com/mock/5b8bdd9e61840c7b403365cb/get/submitSuccess',
        success:(res) => {
          console.log(res)
          wx.showToast({
            title: '提交成功',
            icon:'success'
          }),
          wx.navigateBack({
            delta:1,
            fail:() => {
              wx.redirectTo({
                url: '../index/index',
              })
            }
          })
        }
      })
    }else{
      wx.showModal({
        title: '请填写完整信息',
        content: '请补全报错信息,方便师傅维修,给您造成不便,非常抱歉',
        confirmText:"继续填写",
        cancelText:"取消填写",
        success:(e) => {
          if(!e.confirm){
            wx.redirectTo({
              url: '../index/index',
            })
          }
        }
      })
    }
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    this.timer = null;
    wx.getStorage({
      key: 'number',
      success: (res) => {
        this.setData({
          inputValue: res.data
        })
      },
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})