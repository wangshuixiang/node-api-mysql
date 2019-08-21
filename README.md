# node-api-mysql
nodejs连接数据库提供前端接口

//node js 使用心得
1.模块引用
  module.exports = greet;
  require greet = require("./greet");

2.基础模块
  a.fs       读取文件
  b.stream   文件流
  c.http     服务器
  d.crypto   md5加密等等

3.web开发
  a.koa               nodejs的web开发框架
  b.koa-router        处理url,根据不同url，回到不同页面
  c.koa-bodyparser    解析请求的dody，解析后放在ctx.request.body中
  d.controllers       创建controllers文件夹，存放不同业务的api，并且创建controller.js来调用
  e.models            readdirSync来连接数据库，创建models文件夹，存放每个数据库表的逻辑，并且创建db.js来处理数据库表的统一逻辑，创建model.js来调用



