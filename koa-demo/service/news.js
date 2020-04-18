const newsData=require("../data/data.json");


module.exports={
    /*获取需要显示的数据
    @pagenumber:需要显示的页码
    @pagecount:每页显示的记录条数
    @return:返回需要显示的数据和总页数
    */
    getHomeData(pagenumber,pagecount){
        let pagescount=this.getPageCont(pagecount);
        let showpagedata=newsData.slice((pagenumber-1)*pagecount,pagenumber*pagecount);
        return {showpagedata,pagescount}
    },
    /*
    获取记录总页数
    @pagecount:每页显示的记录条数
    @return:返回总页数
    */
   getPageCont(pagecount){
       return Math.ceil(newsData.length/pagecount)
   },
   /*获取某一条新闻的详情
   @id:新闻的id
   */
   getNewsDetail(id){
       return newsData.filter(item=>item.id==id)[0]
   }
}