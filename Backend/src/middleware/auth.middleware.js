const jwt = require('jsonwebtoken');
const authmodel = require('../models/auth.models');


const authMiddleware = async(req,res,next)=>{
    const token = req.cookies.token
    
    if(!token){
        return res.status(401).json({
            message:"Unauthorized user, please login first..."
        })
    }
    try{
        const decoded = jwt.verify(token,process.env.JWT_SECRET)
        
        const user = await authmodel.findOne({
            _id : decoded.id
        })

        req.user = user;
        next();
    }catch(err){
        return res.status(401).json({
            message:"invalid token, login first !"
        })
    }
}

module.exports = authMiddleware