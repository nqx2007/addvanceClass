module.exports={
    showIndex(ctx){
        // ctx.body="后台管理的首页"
        ctx.render("admin/home.pug")
    },
    showDetail(ctx){
        ctx.body="后台管理的详情页"
    }
}