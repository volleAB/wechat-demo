var url = "http://www.imooc.com/course/ajaxlist";
var page =0;
var id = 0;
/*var page_size = 20;*/
/*var sort = "last";*/
/*var is_easy = 0;*
/*var pos_id = 0;*/
/*var unlearn = 0;*/
 

var utils=require('../../../utils/util.js');

  

// 获取数据的方法，具体怎么获取列表数据大家自行发挥
// 获取数据
var GetList = function(that){
  that.setData({
    hidden:false
  });
  wx.request({
    url:url,
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
      var list = that.data.list;
      for(var i = 0; i < res.data.list.length; i++){
        res.data.list[i].create_time=utils.timestampTotime(res.data.list[i].create_time);
        list.push(res.data.list[i]);
        
      }
      that.setData({
        list : list
      });
      page ++;
      id++;
      that.setData({
        hidden:true
      });
    }
  });
}
Page({
 data:{
  hidden:true,
  list:[],
  scrollTop : 0,
  scrollHeight:0
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
 bindDownLoad:function(){
  //  该方法绑定了页面滑动到底部的事件
   var that = this;
   GetList(that);
 },
 scroll:function(event){
  //  该方法绑定了页面滚动时的事件
   this.setData({
     scrollTop : event.detail.scrollTop
   });
 },
 refresh:function(event){
  //  该方法绑定了页面滑动到顶部的事件，然后做上拉刷新
   page = 0;
   this.setData({
     list : [],
     scrollTop : 0
   });
   GetList(this)
 },
 /*
 //点击列表跳转传参
 listClick:function(event){ 
 console.log(event); 
 var p = event.currentTarget.id 
  
 wx.navigateTo({url:'/pages/descriptionpage/descriptionpage?id='+p}) 
 } */
})