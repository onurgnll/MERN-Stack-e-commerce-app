

const express = require("express");
const {addProduct, getProducts} = require("../controllers/products.js");
const router = express.Router();

router.get("/", getProducts)


router.post("/" , addProduct);


module.exports = router;