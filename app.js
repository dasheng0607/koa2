
const json = require('koa-json')
    , logger = require('koa-logger')
    , auth = require('./server/routes/auth.js') // 引入各种依赖
    , api = require('./server/routes/api.js'); // 引入各种依赖
const Koa = require('koa');
const path = require('path');// 托管前端路由的
const Router = require('koa-router');
const app = new Koa();
const router = new Router();
const bodyParser = require('koa-bodyparser');

// 线上打包用到
const serve = require('koa-static');
app.use(serve(path.resolve('dist')));

app.use(require('koa-static')(__dirname + '/server/file/cn/dev'))
app.use(bodyParser());
app.use(json());
app.use(logger());

app.use(async function onerror(ctx, next) {
    try {
        await next();
    } catch (err) {
        ctx.app.emit('error', err);
        ctx.body = 'server error';
        ctx.status = err.status || 500;
    }
})
app.use(async (ctx,next) => {
    let start = new Date;
    await next();
    let ms = new Date - start;
    console.log('%s %s - %s', ctx.method, ctx.url, ms); // 显示执行的时间
});


router.use('/auth', auth.routes()); // 挂载到koa-router上，同时会让所有的auth的请求路径前面加上'/auth'的请求路径。
router.use('/api', api.routes()); // 挂载到koa-router上，同时会让所有的auth的请求路径前面加上'/auth'的请求路径。

app.use(router.routes()); // 将路由规则挂载到Koa上。

app.on('error', function (err, ctx) {
    console.log('server error', err);
});

app.listen(8989, () => {
    console.log('Koa is listening in 8989');
});

module.exports = app;