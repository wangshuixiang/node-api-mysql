// let userS=[];
const model = require('../model');
let Pet = model.Pet;
let urlDeal = require('url');


let getUsers = async (ctx, next) => {
    ctx.response.type = 'application/json';
    // 设置Response Body:
    let para = urlDeal.parse(ctx.request.url, true);
    console.log(para.query.name);
    let userS = await Pet.findAll({
        where: {
            name: para.query.name
        }
    });
    ctx.response.body = {
        data: userS
    };
};

let login = async (ctx, next) => {
    ctx.response.type = 'application/json';
    console.log(JSON.stringify(ctx));
    let userS = await Pet.findAll({
        // where: {
        //     name: para.query.name
        // }
    });
    // 设置Response Body:
    ctx.response.body = {
        data: userS
    };
};

module.exports = {
    'GET /user/getUsers': getUsers,
    'POST /user/login': login,
};


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
