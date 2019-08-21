const Koa = require('koa');

//解析responseBody
const bodyParser = require('koa-bodyparser');

const app = new Koa();

app.use(bodyParser());

//便利所有接口；
const controller = require('./controller');
// add router middleware:
app.use(controller());


//-----------------------------数据库操作----start
//便利数据库表并初始化表数据
// const model = require('./model');
//
// let Pet = model.Pet;

//添加数据
// (async () => {
//     let now = Date.now();
//     let dog = await Pet.create({
//         id: 'd-' + now,
//         name: 'test22',
//         gender: false,
//         birth: '2008-08-08',
//         createdAt: now,
//         updatedAt: now,
//         version: 0
//     });
//     console.log('created: ' + JSON.stringify(dog));
// })();

//删除数据
// (async () => {
//     var p = await queryFromSomewhere();
//     await p.destroy();
// })();

//更新数据
// (async () => {
//     let pets = await Pet.findAll({
//         where: {
//             version: '0'
//         }
//     });
//     for (let p of pets) {
//         p.gender = true;
//         p.updatedAt = Date.now();
//         p.version++;
//         await p.save();
//     }
// })();

//查询数据
// (async () => {
//     let pets = await Pet.findAll({
//         where: {
//             name: 'Gaffey'
//         }
//     });
//     console.log(`find ${pets.length} pets:`);
//     for (let p of pets) {
//         console.log(JSON.stringify(p));
//     }
// })();

//-----------------------------数据库操作----end

app.listen(3000);
console.log('app started at port 3000...');
