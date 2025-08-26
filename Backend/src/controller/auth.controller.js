const authmodel = require('../models/auth.models')
const jwt = require('jsonwebtoken')
const cookie = require('cookie-parser')
const bcrypt = require('bcryptjs')


const registerController = async(req,res)=>{

    const {username,password} = req.body

    const isUserFound = await authmodel.findOne({
        username
    })
    if(isUserFound){
        return res.status(400).json({
            message:"user already have an account"
        })
    }
    const user = await authmodel.create({
        username,
        password: await bcrypt.hash(password,10)
    })
    const token = jwt.sign({id:user._id},process.env.JWT_SECRET)

    res.cookie("token",token)

    res.status(201).json({
        message:"user registered succesfully",
        user,
    })
}


const loginController = async(req,res)=>{
    const {username,password} = req.body

    const user = await authmodel.findOne({
        username
    })
    if(!user){
        return res.status(401).json({
            message:"user not found please registered first"
        })
    }
    const isPasswordValid = await bcrypt.compare(password,user.password)

    if(!isPasswordValid){
        return res.status(401).json({
            message:"wrong Password Please enter valid password"
        })
    }
    const token = jwt.sign({id:user._id},process.env.JWT_SECRET)

    res.cookie("token",token)

    res.status(200).json({
        message:"user logged in Succesfully.."
    })
}

module.exports = {
    registerController,
    loginController
}