// pages/recipe/recipe.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    recipe:[],
    isshow:[],
    isshow_arrow:true,
    // test:[0,22,334,2,1,2,0]
    isshow_suggest:true,
    suggest:['1、不吸烟：吸烟会使寿命平均减少10年。据有的医学专家说，在40岁至65岁间死亡的人，有30%是因患与吸烟有关的疾病而致命。因吸烟而患肺癌、支气管炎的占总患病人数的9%，有20%的吸烟者患心力衰竭。但如果在50岁前戒烟，你仍可恢复健康。','2、少喝酒：对某些人来说，酒有着特殊的危险。如吸烟的人，酒又喝得很多，其患食道癌的危险可能增加44%；酒能增加患肝癌、口腔癌和喉头癌的可能性；酒可升高血压，从而导致心脏病和脑卒中。','3、控脂肪：每天脂肪摄入量不得超过总热量的30%，高脂肪饮食可导致肥胖症、心脏病和高血脂症。5、多果菜：维生素A、维生素C和维生素E有保护身体健康的作用，每天至少应食用400克水果和蔬菜（不包括土豆）。']

  },

  getRecipe(e){
    var that=this;
    that.setData({isshow:[],isshow_suggest:false})
    wx.request({
      url:"https://way.jd.com/jisuapi/search?keyword="+e.detail.value+"&num=7&appkey=de0c34ea873c2f03503696703f9be906",
      success(res){
        // console.log(res);
        if(res.data.code==='10000'){
          for(var i = 0;i<res.data.result.result.list.length;i++){
            res.data.result.result.list[i].content=res.data.result.result.list[i].content.replace(/<br \/>/g,' ');
            for(var j=0;j<res.data.result.result.list[i].process.length;j++){
              res.data.result.result.list[i].process[j].pcontent=res.data.result.result.list[i].process[j].pcontent.replace(/<br \/>/g,' ');
            }
          }
          that.setData({
            recipe:res.data.result.result.list
          });
          console.log(that.data.recipe)
        }
      }
    })

  },


  getSpread(e){
    let that=this;
    var showorhide=[];
    // console.log(e);
    // console.log(e.currentTarget.id);
 
    for(var i=0;i<=that.data.recipe.length;i++){
      if(e.currentTarget.id==i) {showorhide.push(1);}
      else {showorhide.push(0);}
    }
    
    that.setData({isshow:showorhide});
    console.log("isshow:"+that.data.isshow);

  },



  getClose(e){
    let that=this;
    var showorhide=[];
    showorhide=that.data.isshow;
 
    
    for(var i=0;i<=that.data.recipe.length;i++){
      if(e.currentTarget.id==i) {showorhide[i]=0}
      else {;}
    }
    that.setData({isshow:showorhide});
    console.log("isclose:"+that.data.isshow);
    



  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(this.data.suggest)

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})