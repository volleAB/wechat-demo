// pages/nopay/nopay.js
var priceData = require("../cart/cart.js");
var postData = require("../../data/non-payment.js");
Page({
  data:{
    priceAll: postData.postList,
    postList:postData.postList,
  },
  onLoad:function(options){
    // 页面初始化 options为页面跳转所带来的参数
  },
  onReady:function(){
    // 页面渲染完成
  },
  onShow:function(){
    // 页面显示
  },
  onHide:function(){
    // 页面隐藏
  },
  onUnload:function(){
    // 页面关闭
  }
})
