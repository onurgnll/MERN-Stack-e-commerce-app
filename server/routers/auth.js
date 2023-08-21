

const {register,login,tokentest} = require("../controllers/auth")
const express = require("express");
const router = express.Router();

router.get("/", (req,res,next) => {
    res.json({
        success: true
    })
})
router.post("/login", login)
router.post("/register", register)




module.exports = router;