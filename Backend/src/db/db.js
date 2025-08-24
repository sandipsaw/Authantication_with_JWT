const mongoose = require('mongoose')

function connectToDB(){
    mongoose.connect(process.env.MONGODB_URL)
    .then((req,res)=>{
        console.log("Connect to DB");
    })
}

module.exports = connectToDB;