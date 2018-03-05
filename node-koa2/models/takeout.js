const sequelize = require('../db.js');
const Sequelize = require('sequelize');
module.exports = sequelize.define('takeout', {
    id: {
        type: Sequelize.INTEGER(11),
        primaryKey: true
    },
    chestid: Sequelize.INTEGER(11),
    manid: Sequelize.INTEGER(11),
    phone: Sequelize.STRING(11),
    randcode: Sequelize.INTEGER(6),
    time: Sequelize.DATE
}, {
    timestamps: false,
    freezeTableName: true
});