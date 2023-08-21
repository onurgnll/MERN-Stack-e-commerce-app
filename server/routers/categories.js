

const express = require("express");
const {addCategory, getCategories} = require("../controllers/category");
const router = express.Router();

router.get("/", getCategories)


router.post("/" , addCategory);


module.exports = router;