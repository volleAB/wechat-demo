"use strict";
var app = getApp();
var root_path = "../../../";
var index_obj = require(root_path+'function/personal_index.js')

Page({
  data:{
    bind:app.BASE_IMGURL+"/img/about/bind.png",
    feedback: app.BASE_IMGURL +"/img/about/feedback.png",
    about: app.BASE_IMGURL +"/img/about/about.png",
    rightjian: app.BASE_IMGURL +"/img/share/rightjian.png",
    background: app.BASE_IMGURL +"/img/about/background4.jpg",
    userInfo: {},
    y_menus: [
      { id: 1, icon:app.BASE_IMGURL+'/img/绑定.png',title:'未绑定',shuoming:'前往绑定',jiantou:'/img/rightjian.png'},
      { id: 2, icon: app.BASE_IMGURL +'/img/反馈.png',title:'反馈',shuoming:'',jiantou:'/img/rightjian.png'},
      { id: 3, icon: app.BASE_IMGURL +'/img/关于.png',title:'关于',shuoming:'',jiantou:'/img/rightjian.png'},
    ]
  },
  onLoad:function(options){
    var that = this;
    app.getUserInfo(function(userInfo){
        
        //设置用户信息
        that.setData({
            userInfo:userInfo
        })
    });
  },
  bind: function (e) {
    var ds = e.currentTarget.dataset;
    wx.navigateTo({
      url: '/pages/about/login/login'
    })
  },
  viewBd: function (e) {
    var ds = e.currentTarget.dataset;
    wx.navigateTo({
      url: '/pages/about/login/login'
    })
  },
    viewFk: function (e) {
    var ds = e.currentTarget.dataset;
    wx.navigateTo({
      url: '/pages/about/feedback/feedback'
    })
  },
    viewGy: function (e) {
    var ds = e.currentTarget.dataset;
    wx.navigateTo({
      url: '/pages/about/copyright/copyright'
    })
  },
  onReady:function(){
        index_obj.set_title();
  },
  onShow:function(){
        index_obj.set_title();
  },
  onHide:function(){
    // 页面隐藏
  },
  onUnload:function(){
    // 页面关闭
  }
})