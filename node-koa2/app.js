const Koa = require('koa');
const bodyParser = require('koa-bodyparser');
const controller = require('./controller');
const rest = require('./rest');
const app = new Koa();
app.use(bodyParser());
app.use(async(ctx, next) => {
    // console.log(`Process ${ctx.request.method} ${ctx.request.url}...`);
    await next();
});

app.use(rest.restify());
app.use(controller());
app.listen(8080);
console.log('app started at port 8080...');