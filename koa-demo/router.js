const adminRouter=require("./routers/admin");
const newsRouter=require("./routers/news")


module.exports=(app)=>{
    app.use(newsRouter.routes());
    app.use(adminRouter.routes());
}