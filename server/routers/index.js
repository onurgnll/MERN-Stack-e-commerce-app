

const auth = require("./auth")
const categories = require("./categories")
const products = require("./products")
const express = require("express");
const router = express.Router();

router.get("/", (req,res,next) => {
    res.json({
        success: true
    })
})
router.use("/auth", auth)
router.use("/categories", categories)

router.use("/products", products)

module.exports = router;