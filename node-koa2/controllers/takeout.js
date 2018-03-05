const APIError = require('../rest').APIError;
const model = require('../model');
const datetimeFormatUtil = require('../getTime')
module.exports = {

    'GET /api/takeout/enter/:vercode': async(ctx, next) => {
        let code = 200200;
        let msg = "查询成功";
        let vercode = ctx.params.vercode;
        let chest = model.chest;
        let onechest = await chest.findOne({
            where: {
                randcode: vercode
            }
        });
        if (!onechest) {
            code = 200201;
            msg = "匹配不到柜子,请重试";
            ctx.rest({
                code: code,
                msg: msg
            })
        } else {
            console.log(JSON.stringify(onechest));
            let chestid = onechest.chestid;
            ctx.rest({
                code: code,
                msg: msg,
                chestid: chestid
            })
        }

    },

    'POST /api/takeout/sure': async(ctx, next) => {
        let code = 200200;
        let msg = "取件成功";
        let vercode = ctx.request.body.vercode;
        let chestid = ctx.request.body.chestid;
        let chest = model.chest;
        let takeout = model.takeout;
        let onechest = await chest.findOne({
            where: {
                randcode: vercode,
                chestid: chestid
            }
        });
        let manid = onechest.manid;
        let phone = onechest.phone;
        onechest.status = 0;
        onechest.randcode = null;
        onechest.phone = null;
        onechest.manid = null;
        await onechest.save();
        let now = datetimeFormatUtil(Date.now());
        let record = await takeout.create({
            chestid: chestid,
            manid: manid,
            phone: phone,
            randcode: vercode,
            time: now
        });
        ctx.rest({
            code: code,
            msg: msg,
            record: JSON.stringify(record)
        })
    },
    'GET /api/takeout/success/:vercode': async(ctx, next) => {
        let code = 200200;
        let msg = "查询信息成功";
        let takeout = model.takeout;
        let man = model.man;
        let vercode = ctx.params.vercode;

        //根据randcode来查询记录的时间
        let onetakeout = await takeout.findOne({
            where: {
                randcode: vercode
            }
        })
        let phone = onetakeout.phone;
        let manid = onetakeout.manid;
        let chestid = onetakeout.chestid;
        let oneman = await man.findOne({
            where: {
                manid: manid
            }
        });
        let name = oneman.name;
        let company = oneman.company;
        let time = onetakeout.time;

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