const Expenses = require("../models/expenses");
const Categories = require("../models/categories");

const expensesService = {
    async findAll(req, res) {
        try {
            const expenses = await Expenses.findAll()

            const result = await Promise.all(expenses.map(async (expense) => {
                const category = await Categories.findByPk(expense.id);
                
                return(
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
    }
}

module.exports = expensesService;