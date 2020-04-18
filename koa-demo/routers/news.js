const Router=require("koa-router");
const newsRouter=new Router({
    prefix:"/news"
})
const newsController=require("../controller/news")
newsRouter.get("/index",newsController.showIndex)
newsRouter.get("/detail",newsController.showDetail)

module.exports=newsRouter;