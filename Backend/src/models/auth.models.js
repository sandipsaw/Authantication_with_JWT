const mongoose =  require('mongoose')

const authSchema = new mongoose.Schema({
    username:String,
    password:String
})
const authmodel = mongoose.model('auth',authSchema)

module.exports = authmodel