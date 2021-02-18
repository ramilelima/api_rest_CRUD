const Sequelize = require("sequelize");

require('dotenv').config();

const connection = new Sequelize('process.env.DB_TABLE', 'process.env.DB_USER', 'process.env.DB_PASSWORD', {
    host: 'process.env.DB_HOST',
    dialect: 'process.env.DIALECT',
    timezone: 'process.env.TIMEZONE'
});

module.exports = connection;