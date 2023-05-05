const Sequelize = require('sequelize');
const database = require('../../db');
const Categories = require("./categories");

const Expenses = database.define("expenses",
    {
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true
        },
        category_id: {
            type: Sequelize.INTEGER,
            rallowNull: false,
            references: { model: "categories", key: "id" }
        },
        value: {
            type: Sequelize.DECIMAL(10,2),
            allowNull: false
        },
        description: {
            type: Sequelize.STRING,
            allowNull: false
        },
        period: {
            type: Sequelize.DATE,
            allowNull: false
        }
    },
    {
        timestamps: false
    }
)

module.exports = Expenses;