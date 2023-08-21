const Category = require("../models/categories");

const addCategory = async (req, res) => {
    try {

        const { name } = req.body;

        Category.create({
            name
        })

        res.json({
            success: true,
        })

    } catch (error) {
        return next(error)

    }
}


const getCategories = async (req, res, next) => {

    try {
        const all = await Category.find();
        res.send(all)

    } catch (error) {
        next(error)
    }
}

module.exports = {
    addCategory,
    getCategories
}