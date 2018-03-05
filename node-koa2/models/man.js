const sequelize = require('../db.js');
const Sequelize = require('sequelize');
module.exports = sequelize.define('man', {
    manid: {
        type: Sequelize.INTEGER(11),
        primaryKey: true
    },
    phone: Sequelize.STRING(11),
    name: Sequelize.STRING(255),
    password: Sequelize.STRING(20),
    company: Sequelize.STRING(255)
}, {
    timestamps: false,
    freezeTableName: true
});