const Router=require("koa-router")
const adminRouter=new Router({
    prefix:"/admin"
})
const adminController=require("../controller/admin")

adminRouter.get("/index",adminController.showIndex)
adminRouter.get("/detail",adminController.showDetail)
module.exports=adminRouter;