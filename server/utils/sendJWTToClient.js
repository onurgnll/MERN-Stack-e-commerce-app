const sendJWTToClient = (user,res) => {
    
    const token = user.generateJWTForUser();
    const {JWT_COOKIE} = process.env
    return res
    .status(200)
    .cookie("access_token" , token,{
        expire: new Date(Date.now + parseInt(JWT_COOKIE) * 1000)
    })
    .json({
        success: true,
        access_token: token,
        data: {
            name: user.name,
            email: user.email

        }
    })

}

const isTokenIncluded = (req) => {
    return req.headers.authorization && req.headers.authorization.startsWith("Bearer:")
}


module.exports = {sendJWTToClient,isTokenIncluded};