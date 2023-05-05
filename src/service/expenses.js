const Expenses = require("../models/expenses");
const Categories = require("../models/categories");

const expensesService = {
    async findAll(req, res) {
        try {
            const expenses = await Expenses.findAll()

            const result = await Promise.all(expenses.map(async (expense) => {
                const category = await Categories.findByPk(expense.category_id);
                return (
                    {
                        id: expense.id,
                        categoryId: category.id,
                        categoryDescr: category.description,
                        value: expense.value,
                        description: expense.description,
                        period: expense.period
                    }
                )
            }));

            res.send(result)
        } catch (error) {
            console.log(error);
        }
    },

    async save(req, res) {
        try {
            const { category_id, value, description, period } = req.body;
            const expenses = Expenses.build({ category_id: category_id, value: value, description: description, period: period });
            expenses.save();
            res.send(expenses);
        } catch (error) {
            res.status(500).json(error);
        }
    },

    async update(req, res) {
        try {
            const { id } = req.body;
            const { description, value } = req.body;
            
            const expenses = Expenses.update({ description: description, value: value }, { where: { id: id } });
            
            res.send(expenses);
        } catch (error) {
            res.status(500).json(error);
        }
    },

    async delete(req, res) {
        try {
            const arr = [];
            const ids = req.query.ids.split(',');

            ids.forEach(element => {
                arr.push(parseInt(element));
            });

            await Expenses.destroy({ where: { id: arr } });

            res.send(`Expenses with ID has been deleted`);
        } catch (error) {
            res.status(500).json(error);
        }
    },
}

module.exports = expensesService;