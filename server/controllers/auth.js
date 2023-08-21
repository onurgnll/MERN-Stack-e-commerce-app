const User = require("../models/User.js");
const {sendJWTToClient} = require("../utils/sendJWTToClient.js");
const {CustomError} = require("../middlewares/errorHandler.js")


const register = async(req,res,next) => {

    try {

        const {name,email,password} = req.body;

        const newuser = await User.create({
            name,
            email,
            password
        })

        sendJWTToClient(newuser , res)
        
    } catch (error) {
        next(error)
    }
}

const login = async(req,res,next) => {

    const {email,password} = req.body;
    
    if(!validateUserInput(email,password)) {
        return next(new CustomError("Please check your inputs",400));
    }
    
    const user = await User.findOne({email});
    if ( !user ) {
        
        return next(new CustomError("Böyle Bir Kullanıcı Bulunamadı",401));
    }
    if(!checkPassword(password,user.password)){
        return next(new CustomError("Hatalı Şifre Girildi",401));

    }

    sendJWTToClient(user,res)

    
}


const checkPassword = (password,hashedPassword) => {

    return password ==hashedPassword;

}
const validateUserInput = (email,password) => email && password;


module.exports = {
    register,
    login
}