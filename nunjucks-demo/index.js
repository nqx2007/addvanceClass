const Koa=require('koa');
const Router=require('koa-router');
const nunjucks=require('koa-nunjucks-2');
const static=require("koa-static");

const app=new Koa();
const router=new Router();


app.use(nunjucks({
    ext:'html',
    path:__dirname+"/views",
    nunjucksConfig:{
        trimBlocks:true   //放置xss漏洞
    }
}));
app.use(static(__dirname+"/static"))

router.get("/",async ctx=>{
    await ctx.render("index",{name:"niuqingxia",num:5,items:[1,2,3,4,5,6]})
})





app.use(router.routes());
app.listen(8000)