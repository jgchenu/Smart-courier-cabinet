const APIError = require('../rest').APIError;
const model = require('../model');
const datetimeFormatUtil = require('../getTime')
module.exports = {

    'GET /api/deposits/find': async(ctx, next) => {
        let code = 200200;
        let msg = "查找到柜子";
        let chest = model.chest;
        let chests = await chest.findAll({
            where: {
                status: 0
            }
        });
        console.log(JSON.stringify(chests));
        if (chests.length == 0) {
            code = 200201;
            msg: "没有柜子可以用了"
        } else {
            let chestid = chests[0].chestid;
            ctx.rest({
                code: code,
                msg: msg,
                chestid: chestid
            });
            return;
        }
        ctx.rest({
            code: code,
            msg: msg
        });

    },
    'POST /api/deposits/sure': async(ctx, next) => {
        let code = 200200;
        let msg = "存取成功";
        let chest = model.chest;
        let deposits = model.deposits;
        let chestid = ctx.request.body.chestid;
        let manid = ctx.request.body.manid;
        let phone = ctx.request.body.phone;

        //修改柜子状态成功
        let chests = await chest.findAll({
            where: {
                status: 0,
                chestid: chestid
            }
        });
        let randcode = Math.floor(Math.random() * (999999 - 100000 + 1) + 100000);
        chests[0].status = 1;
        chests[0].manid = manid;
        chests[0].phone = phone;
        chests[0].randcode = randcode;
        await chests[0].save();

        //增加存件记录


        let now = datetimeFormatUtil(Date.now());
        //获取当前的时间
        let record = await deposits.create({
            chestid: chestid,
            manid: manid,
            phone: phone,
            randcode: randcode,
            time: now
        });
        ctx.rest({
            code: code,
            msg: msg,
            record: JSON.stringify(record)
        });
        return;

    },
    'GET /api/deposits/success/:chestid': async(ctx, next) => {
        let code = 200200;
        let msg = "查询信息成功";
        let chest = model.chest;
        let man = model.man;
        let deposit = model.deposits;
        let chestid = ctx.params.chestid;
        //查询存件的chest表
        let onechest = await chest.findOne({
            where: {
                chestid: chestid
            }
        });
        let manid = onechest.manid;
        let randcode = onechest.randcode;
        //根据chest表，根据chestid查到manid，然后到man去查
        let oneman = await man.findOne({
            where: {
                manid: manid
            }
        });
        //根据randcode来查询记录的时间
        let onedeposit = await deposit.findOne({
            where: {
                randcode: randcode
            }
        })
        let name = oneman.name;
        let company = oneman.company;
        let phone = onechest.phone;
        let time = onedeposit.time;
        ctx.rest({
            code: code,
            msg: msg,
            time: time,
            mandid: manid,
            name: name,
            company: company,
            chestid: chestid,
            phone: phone
        });
    },


};