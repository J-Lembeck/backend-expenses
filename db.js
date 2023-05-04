const dotenv = require("dotenv")
dotenv.config()

const Sequelize = require('sequelize');
const sequelize = new Sequelize(process.env.DBDATABASE, process.env.DBUSER, process.env.DBPASSWORD, {
    dialect: 'mysql',
    host: process.env.DBHOST,
    port: process.env.DBPORT
});

module.exports = sequelize;