const Categories = require("../models/categories");

const categoriesService ={
    async findAll(req, res) {
        try {
            const categories = await Categories.findAll()
            res.send(categories)
        } catch (error) {
            console.log(error);
        }
    },
}

module.exports = categoriesService;