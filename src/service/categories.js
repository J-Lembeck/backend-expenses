const Categories = require("../models/categories");

const categoriesService = {
    async findAll(req, res) {
        try {
            const categories = await Categories.findAll()
            res.send(categories)
        } catch (error) {
            console.log(error);
        }
    },

    async save(req, res) {
        try {
            const { description } = req.body;
            const categories = Categories.build({ description: description });
            categories.save();
            res.send(categories);
        } catch (error) {
            res.status(500).json(error);
        }
    },

    async update(req, res) {
        try {
            const { id } = req.body;
            const { description } = req.body;

            const category = Categories.update({ description: description }, { where: { id: id } });

            res.send(category);
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

            await Categories.destroy({ where: { id: arr } });

            res.send(`Category with ID has been deleted`);
        } catch (error) {
            res.status(500).json(error);
        }
    },
}

module.exports = categoriesService;