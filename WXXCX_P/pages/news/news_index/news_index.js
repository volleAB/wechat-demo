// //new_list.js
var app = getApp();
var url_content ='/news/api/list/2';
var url = app.BASE_URL.concat(url_content);
var page =0;
var id = 0;

//var utils=require('../../utils/util.js');

// 获取数据的方法，具体怎么获取列表数据大家自行发挥
// 获取数据
var GetList = function(that){
  that.setData({
    hidden:false
  });
  wx.request({
    url: url,
    data:{
      page : page,
      id : id,
    },
    success:function(res){
      var list = res.data.content;
      that.setData({
        list: list
      });
    }
  });
}

Page({
 data:{
  hidden:true,
  // list:[
  //   {
  //     news_title:"dada",
  //     news_push_time:"1312",
  //     news_preview:"dadwqd"
  //   },
  //   {
  //     news_title: "dasdda",
  //     news_push_time: "132112",
  //     news_preview: "dawqwd"
  //   },
  //   {
  //     news_title: "asdda",
  //     news_push_time: "11862",
  //     news_preview: "dadswd"
  //   },
  // ],
  search: app.BASE_IMGURL + "/img/search.png",
  limit0: 1,
  limit1: 15,
  scrollTop: 0,
  scrollHeight: 0,
  topNum: 0,
  show: true
 },
 onLoad:function(){
  //  这里要非常注意，微信的scroll-view必须要设置高度才能监听滚动事件，所以，需要在页面的onLoad事件中给scroll-view的高度赋值
   var that = this;
   wx.showToast({
     title: '请等待',
     icon: 'loading',
     duration: 15000,
   }),
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
   this.setData({
     limit0: limit0 + 15,
     limit1: limit1 + 15,
   })
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
 }
})