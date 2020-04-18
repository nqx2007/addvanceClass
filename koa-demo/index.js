//项目主入口

const Koa=require("koa");
const views=require("koa-views");
const static=require("koa-static");
const router=require("./router");//引入路由


const app=new Koa();
//设置模板引擎以及目录,下面两种方式都可以
// app.use(views(__dirname+"/views",{
//     map:{
//         html:'pug'
//     }
// }));
app.use(views(__dirname+"/views",{
    extension:"pug"
}))
app.use(static(__dirname+"/static"));//设置静态资源目录
router(app);//设置路由
app.listen(8000)//监听端口