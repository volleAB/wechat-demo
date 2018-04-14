// pages/cart/cart.js
var postData = require("../../data/post-data.js");
Page({
  data: {
    cartListShow: true,
    showModal: false,
    postList: postData.postList,
    priceAll:0
  },
  onLoad: function (options) {
    //this.setData({
    // postList: postData.postList
    //});
    if (this.data.postList.length < 1) {
      this.setData({
        showModal: true,
        priceAll: 0
      });
    }else{
      var price_all = 0;
      for( var price_i in this.data.postList)
      {
        price_all = price_all + this.data.postList[price_i].price * this.data.postList[price_i].num;
      }
      // price_all = this.data.postList[0].price;
    }
    this.setData({
      
      priceAll: price_all
    });
  },
  plus: function (e) {
    var that = this;
    var index = e.currentTarget.dataset.index;
    var num = that.data.postList[index].num;
    var prices = that.priceAll;
    if (num > 1) {
      num--;
      this.setData({

        priceAll: that.data.priceAll - that.data.postList[index].price
      });
    } else {
      wx.showModal({
        title: '',
        content: '是否删除此菜品?',
        success: function (res) {
          if (res.confirm) {
            carts.splice(index, 1);
            that.setData({
              postList: carts,
              priceAll: that.data.priceAll - that.data.postList[index].price * num
            });
            if (that.data.postList.length < 1) {
              that.setData({
                cartListShow: false,
                showModal: true,
              });
            }
          } else if (res.cancel) {
            return;
          }
        }
      })
    }
    var carts = that.data.postList;
    carts[index].num = num;
    that.setData({
      postList: carts
    });
    //this.data.postList[index].num;
  },
  add: function (e) {
    var index = e.currentTarget.dataset.index;
    var num = this.data.postList[index].num;
    num++;
    this.setData({

      priceAll: this.data.priceAll + this.data.postList[index].price
    });
    var carts = this.data.postList;
    carts[index].num = num;
    this.setData({
      postList: carts,
    });
  },
  delThisFood: function (e) {
    var that = this;
    var index = e.currentTarget.dataset.index;
    var num = that.data.postList[index].num;
    var price = that.data.postList[index].price;
    var carts = that.data.postList;
    wx.showModal({
      title: '',
      content: '是否删除此菜品?',
      success: function (res) {
        if (res.confirm) {
          carts.splice(index, 1);
          that.setData({
            postList: carts,
            priceAll: that.data.priceAll - price * num
          });
          if (that.data.postList.length < 1) {
            that.setData({
              cartListShow: false,
              showModal: true
            });
          }
        } else if (res.cancel) {
          return;
        }
      }
    })
  }
})
module.exports = {
  postList: Page.data.priceAll
}