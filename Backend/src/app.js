require('dotenv').config()
const express = require('express')
const authRoutes = require('./routes/auth.routes')
const cookieParser = require('cookie-parser');
const postRoutes = require('./routes/postroutes')


const app = express()
app.use(express.json())
app.use(cookieParser());

app.use('/auth',authRoutes)
app.use('/auth/post',postRoutes)

module.exports = app