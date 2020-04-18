
const  newsService=require("../service/news")

module.exports={
    //显示首页
    async showIndex(ctx){
        // ctx.body="新闻页的首页"
        let pagenumber=ctx.query.p || 1;
        let pagecount=5;
        const {showpagedata,pagescount}=newsService.getHomeData(pagenumber,pagecount);
        await ctx.render("news/home.pug",{
            showpagedata,
            pagescount
        })
    },
    async showDetail(ctx){
        let id=ctx.query.id ||1;
        console.log(id)
        let detailData=newsService.getNewsDetail(id);
        console.log(detailData)
        // ctx.body="新闻页的详情页"
        await ctx.render("news/detail.pug",{
            detailData
        })
        
    }
}