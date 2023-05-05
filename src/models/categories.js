const Sequelize = require('sequelize');
const database = require('../../db');
const Expenses = require('./expenses');

const Category = database.define("categories",
    {
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true
        },
        description: {
            type: Sequelize.STRING,
            allowNull: false
        }
    },
    {
        timestamps: false
    }
)

module.exports = Category;