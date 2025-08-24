const express = require('express')
const authmodel = require('../models/auth.models')
const router = express.Router();


router.post('/register',async(req,res)=>{
    const {username,password} = req.body
    await authmodel.create({
        username,password
    })
    res.json({
        message:"user registered succesfully",
    })
})

router.post('/login',async(req,res)=>{
    const {username,password} = req.body

    const user = await authmodel.findOne({
        username:username
    })
    if(!user){
        return res.status(401).json({
            message:"user not found please registered first"
        })
    }
    const isPasswordValid = password == user.password

    if(!isPasswordValid){
        return res.status(401).json({
            message:"wrong Password Please enter valid password"
        })
    }
    res.status(200).json({
        message:"user logged in Succesfully.."
    })
})

module.exports = router