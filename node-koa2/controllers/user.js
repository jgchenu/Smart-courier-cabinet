const APIError = require('../rest').APIError;
const model = require('../model');
module.exports = {

    'POST /api/user/login': async(ctx, next) => {
        console.log(ctx.request.body)
        let phone = ctx.request.body.phone;
        let password = ctx.request.body.password;
        let man = model.man;
        let code = 200200;
        let msg = "登陆成功";
        let mans = await man.findAll({
            where: {
                phone: phone
            }
        });
        if (mans.length == 1 && mans[0].password != password) {
            code = 200201;
            msg = "密码错误"
        } else if (mans.length == 0) {
            code = 200202;
            msg = "用户不存在"
        } else if (mans.length == 1 && mans[0].password == password) {
            let manid = mans[0].manid;
            ctx.rest({
                code: code,
                msg: msg,
                manid: manid
            });
            return;
        }
        ctx.rest({
            code: code,
            msg: msg
        });

    },
    'POST /api/user/register': async(ctx, next) => {
        console.log(ctx.request.body)
        let name = ctx.request.body.name;
        let phone = ctx.request.body.phone;
        let password = ctx.request.body.password;
        let company = ctx.request.body.company;
        let man = model.man;
        let code = 200200;
        let msg = "注册成功";
        let mans = await man.findAll({
            where: {
                phone: phone
            }
        });
        if (mans.length == 1) {
            code = 200201;
            msg = "用户已经存在"
        } else if (mans.length == 0) {
            var add = await man.create({
                name: name,
                phone: phone,
                password: password,
                company: company
            });
            ctx.rest({
                code: code,
                msg: msg,
                add: JSON.stringify(add)
            });
            return;
        }
        ctx.rest({
            code: code,
            msg: msg
        });
    }
};