const sequelize = require('../db.js');
const Sequelize = require('sequelize');
module.exports = sequelize.define('chest', {
    chestid: {
        type: Sequelize.INTEGER(11),
        primaryKey: true
    },
    phone: Sequelize.STRING(11),
    randcode: Sequelize.INTEGER(6),
    status: Sequelize.BOOLEAN,
    manid: Sequelize.INTEGER(11)
}, {
    timestamps: false,
    freezeTableName: true
});