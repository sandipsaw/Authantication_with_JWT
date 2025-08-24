const express = require('express')
require('dotenv').config()
const authrRoutes = require('./routes/auth.routes')

const app = express()
app.use(express.json())

app.use('/auth',authrRoutes)


module.exports = app
