const mongoose = require("mongoose");

const Schema = mongoose.Schema;


const ProductSchema = new Schema({

    name: {
        type : String,
        required:[true,"Please provide a name"]

    },
    category:{
        type : String,
        required:[true,"Please provide a category name"]

    },

    price: {
        type : Number,
        required:[true,"Please provide a price"]

    },


    image_url:{
        type : String,
        required:[true,"Please provide a imageurl"]

    }



})


module.exports  = mongoose.model("Product",ProductSchema);