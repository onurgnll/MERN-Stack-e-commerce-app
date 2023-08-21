const Product = require("../models/Product")


const addProduct = async (req, res,next) => {
    try {
        const { name, category, price, image_url } = req.body;
    
        await Product.create({
            name,
            category,
            price,
            image_url
        })
    
        res.json({
            success: true,
        })
        
    } catch (error) {
        return next(error)
        
    }
}



const getProducts = async (req, res,next) => {
    try {

        const all = await Product.find();
        res.send(all)
    } catch (error) {
        next(error)
    }

}

module.exports = {
    addProduct, getProducts
}