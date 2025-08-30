const express = require('express')
require('dotenv').config()
const authRoutes = require('./routes/auth.routes')
const cookieParser = require('cookie-parser');
const authMiddleware = require('./middleware/auth.middleware');


const app = express()
app.use(express.json())
app.use(cookieParser());

app.use('/auth',authRoutes)
app.use('/auth/post',authMiddleware)

module.exports = app