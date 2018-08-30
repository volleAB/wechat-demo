var app = getApp();
var list = [];
var brief = [];

  
Page({
  data: {

  },
  
    previewImagexcx: function (e) {
    //console.log(e)
    var current = e.target.dataset.src
    wx.previewImage({
      current: current,
      urls: ["http://news.scuec.edu.cn/wp-content/themes/xww-beta/images/gjmwwx.jpg"],
      success: function (res) {
        console.info("点击图片了")
      },
      fail: function (res) {
        console.log('fail')
      },
      complete: function (res) {
        // complete
      }
    })
  },  
  previewImagewx: function (e) {
    //console.log(e)
    var current = e.target.dataset.src
    wx.previewImage({
      current: current,
      urls: ["http://news.scuec.edu.cn/wp-content/themes/xww-beta/images/znmzdxwb.jpg"],
      success: function (res) {
        console.info("点击图片了")
      },
      fail: function (res) {
        console.log('fail')
      },
      complete: function (res) {
        // complete
      }
    })
  },  
  previewImagewb: function (e) {
    //console.log(e)
    var current = e.target.dataset.src
    wx.previewImage({
      current: current,
      urls: ["http://news.scuec.edu.cn/wp-content/themes/xww-beta/images/znmzdxwx.jpg"],
      success: function (res) {
        console.info("点击图片了")
      },
      fail: function (res) {
        console.log('fail')
      },
      complete: function (res) {
        // complete
      }
    })
  },  
onLoad: function(options) {

   var that = this;
   that.setData({
    id: options.id,
    time: options.time,
    title: options.title,
    author: options.author,
   })
  //  console.log(that.data.id)
    wx.request({
      url: "http://119.23.47.10/brief/",
      success: function (res) {
        list = res.data.mes;
        brief = list[0];
        for(var i = 0; i<30; i++) {
          if (brief[i].id == that.data.id) {
            that.setData({
              details: brief[i].details
            });
          }
        }
          
          console.log(list[0]);
        // console.log(list[1].id);
        // i++;
      }
      
    });
    //取出对应id的文章
    
  //   wx.request( {  
  //     url: url +options.id,  
  //     header: {  
  //       "Content-Type": "application/json"  
  //     },  
  //     method: "GET",  
  //     data:{
  //       imagesource:'http://news.scuec.edu.cn/wp-content/themes/xww-beta/images/gjmwwx.jpg'  
  //     },
  // onHide: function() {
  // },

  
  //     success: function( res ) {  
  
  //       var data = res.data[options.id];  
  //       //console.log(options);
  //       //替换标签中特殊字符  
  //       var infoFlg = "<!--SPINFO#0-->";  
  //       var imgFlg = "<!--IMG#"; 
  //       var reg = new RegExp(/\\n/g);
  //       var reg2=new RegExp(/\\n/);
  //       for(var i=0;i<=7;i++)
  //       {
  //         res.data.content=res.data.content.replace(reg2,"");
  //       }
  //       console.log(res.data.content)   
  //       var content = "<div style=\"margin:10px; line-height:25px; font-weight:200; color:black; word-break:normal\">" + res.data.content.replace(reg, "<br />").replace(/\\r/g,"\n").replace(/\\/g, "").replace(/<img src=\"/g,"<img src=\"http://www.scuec.edu.cn").replace("    "," ")+ "</div>";  
  //       // var content=res.data.content
  //        //替换标签中特殊字符  
  //       var infoFlg = "<!--SPINFO#0-->";  
  //       if (content.indexOf(infoFlg) > 0) {  
  //        content = content.replace(/<!--SPINFO#0-->/, "");  
  //       }  
   
  //      var article = content ;  
  //       WxParse.wxParse('article', 'html', article, self);  
  
  
  //       setTimeout (function () {  
  //         self.setData({  
  //         hide: true  
  //       })  
  //       }, 500)  
  //     }  
  //   });  
} 
})