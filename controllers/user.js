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

module.exports = {
    'GET /user/getUsers': getUsers
};
