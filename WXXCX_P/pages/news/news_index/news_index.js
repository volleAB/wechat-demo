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
      /*page_size : page_size,*/
      /*sort : sort,*/
      /*is_easy : is_easy,*/
      id : id,
      /*pos_id : pos_id,*/
      /*unlearn : unlearn*/
    },
    success:function(res){
      //console.info(that.data.list);

      var list = res.data.content;
      // console.log('list:', list);
      // for(var i = 0; i < res.data.content.length; i++){
        //res.data.list[i].create_time=utils.timestampTotime(res.data.list[i].create_time);
        //list.push(res.data.content[i]); 
      // }
      that.setData({
        list: list
      });
      // page ++;
      // id++;
      // that.setData({
        // hidden:true
      // });
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
  search: app.BASE_IMGURL + "/img/broadcast/search.png",
  limit0: 1,
  limit1: 15,
  topNum: 0
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
 returnTop: function () {

   console.log("run", this.data.topNum)
   this.setData({
     topNum: this.data.topNum = 0
   });
   console.log(this.data.topNum)
 }
})