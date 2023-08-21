
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const Schema = mongoose.Schema;

const userSchema = new Schema({

    name: {
        type: String,
        required:[true,"Please provide a name"]
    },

    email: {
        type: String,
        required:[true,"Please provide a email"],
        match : [
            /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
            "Please provide a valid email"
        ],
        unique: true
    },
    password: {
        type: String,
        required:[true,"Please provide a name"],
        
        minlength : 6

    },
    
    role : {
        type : String,
        enum : ["user","admin"],
        default : "user"
    },

})


userSchema.methods.generateJWTForUser = function(){
    const {JWT_SECRET, JWT_EXPIRE} = process.env;

    const payload = {
        id: this._id,
        name: this.name
    }

    const token = jwt.sign(payload, JWT_SECRET,{
        expiresIn: JWT_EXPIRE
    })
    return token;
}


module.exports  = mongoose.model("User",userSchema);