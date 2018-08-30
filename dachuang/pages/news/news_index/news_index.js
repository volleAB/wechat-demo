//new_list.js
var app = getApp();
var url_content ='/news/api/list/2';
// var url = 'http://xxgk.scuec.edu.cn/crawler/';
var page =0;
var id = 0;
var i = 0;

// 获取数据
var GetList = function(that){
  that.setData({
    hidden:false
  }); 
  wx.request({
    url: "http://119.23.47.10/brief/",
    success:function(res){
      var list = res.data.mes;
      var preview = '';
      var page1 = [];
      var page2 = [];
      var page3 = [];
      // console.log(list);
      // for(var i = 0; i < list.length; i++){
      // }
      page1 = list[0]
      that.setData({
        list: page1
      });
      console.log(list);
    }
  });
}
Page({
 data:{
  hidden:true,
  scrollTop: 0,
  scrollHeight: 0,
  topNum: 0,
  show: true
 },
 onLoad:function(){
  //  这里要非常注意，微信的scroll-view必须要设置高度才能监听滚动事件，所以，需要在页面的onLoad事件中给scroll-view的高度赋值
   var that = this;
   wx.getSystemInfo({
     success:function(res){
       console.info(res.windowHeight);
       that.setData({
         scrollHeight:res.windowHeight
       });
     }
   });
 },
 onShow:function(){
  //  在页面展示之后先获取一次数据
  var that = this;
  GetList(that);
 },
 onPullDownRefresh: function () {
   var that = this;
   console.log("好用不?");
   var limit0 = that.data.limit0;
   var limit1 = that.data.limit1;
   console.log(limit0,limit1);
   GetList(that);
 },
 inputFocus: function (e) {
   if (e.target.id == 'userid') {
     this.setData({
       'userid_focus': true
     });
   } else if (e.target.id == 'passwd') {
     this.setData({
       'passwd_focus': true
     });
   }
 },
 inputBlur: function (e) {
   if (e.target.id == 'userid') {
     this.setData({
       'userid_focus': false
     });
   } else if (e.target.id == 'passwd') {
     this.setData({
       'passwd_focus': false
     });
   }
 },
 useridInput: function (e) {
   this.setData({
     userid: e.detail.value
   });
   if (e.detail.value.length >= 7) {
     wx.hideKeyboard();
   }
 },
 handletouchmove: function () {
   this.queryMultipleNodes();
 },
 //获取屏幕滚动出去的高度  
 queryMultipleNodes: function () {
   var self = this;
   var query = wx.createSelectorQuery();
   query.select('#container').boundingClientRect();
   query.selectViewport().scrollOffset();
 },
 //返回顶部  
 backToTop: function () {
   var that = this;
   that.setData({
     scrollTop: 0
   })
  this.onPullDownRefresh();
 },
 scroll: function (e, res) {
   // 容器滚动时将此时的滚动距离赋值给 this.data.scrollTop
   console.log(this.data.scrollTop)
   if (e.detail.scrollTop > 40) {
     this.setData({
       show: false
     });
   } else {
     this.setData({
       show: true
     });
   }
 },
 thisTitlt: function (e) {
  console.log(e);
 }
})