const Koa = require('koa');

//解析responseBody
const bodyParser = require('koa-bodyparser');

const app = new Koa();

app.use(bodyParser());

//便利所有接口；
const controller = require('./controller');
// add router middleware:
app.use(controller());

app.listen(3000);
console.log('app started at port 3000...');
