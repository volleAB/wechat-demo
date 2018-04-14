var app = getApp();
var url_content = '/news/api/content/';
var url = app.BASE_URL.concat(url_content);
var WxParse = require('../../../wxParse/wxParse/wxParse.js');  
  
Page({
  data: {
xcxsource:'http://news.scuec.edu.cn/wp-content/themes/xww-beta/images/gjmwwx.jpg',
wxsource:'http://news.scuec.edu.cn/wp-content/themes/xww-beta/images/znmzdxwb.jpg',
wbsource:'http://news.scuec.edu.cn/wp-content/themes/xww-beta/images/znmzdxwx.jpg'
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
    id:options.id,
    time:options.time,
    name:options.name,
   })
      
    //http://c.m.163.com/nc/article/CADGA4VH0001875N/full.html  
    var self = this;  
    console.log(options.id);  
    wx.request( {  
      url: url +options.id,  
      header: {  
        "Content-Type": "application/json"  
      },  
      method: "GET",  
      data:{
        imagesource:'http://news.scuec.edu.cn/wp-content/themes/xww-beta/images/gjmwwx.jpg'  
      },
  onHide: function() {
  },

  
      success: function( res ) {  
  
        var data = res.data[options.id];  
        //console.log(options);
        //替换标签中特殊字符  
        var infoFlg = "<!--SPINFO#0-->";  
        var imgFlg = "<!--IMG#"; 
        var reg = new RegExp(/\\n/g);
        var reg2=new RegExp(/\\n/);
        for(var i=0;i<=7;i++)
        {
          res.data.content=res.data.content.replace(reg2,"");
        }
        console.log(res.data.content)   
        var content = "<div style=\"margin:10px; line-height:25px; font-weight:200; color:black; word-break:normal\">" + res.data.content.replace(reg, "<br />").replace(/\\r/g,"\n").replace(/\\/g, "").replace(/<img src=\"/g,"<img src=\"http://www.scuec.edu.cn").replace("    "," ")+ "</div>";  
        // var content=res.data.content
         //替换标签中特殊字符  
        var infoFlg = "<!--SPINFO#0-->";  
        if (content.indexOf(infoFlg) > 0) {  
         content = content.replace(/<!--SPINFO#0-->/, "");  
        }  
   
       var article = content ;  
        WxParse.wxParse('article', 'html', article, self);  
  
  
        setTimeout (function () {  
          self.setData({  
          hide: true  
        })  
        }, 500)  
      }  
    });  
} 
})