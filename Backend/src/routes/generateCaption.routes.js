const express = require('express');
const jwt = require('jsonwebtoken')
const router = express.Router();

router.post('/generateCaption',(req,res)=>{
    const token = req.cookies.token;

    if(!token){
        return res.status(401).json({
            message:"Unauthorized user, please login first..."
        })
    }
    jwt.verify({token,process.env.JWT_SECRET})
})