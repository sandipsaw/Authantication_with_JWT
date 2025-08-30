const postModel = require('../models/post.models')
const generateCaption = require('../service/ai.service')

const createPostController = async(req,res)=>{
    const file = req.file
    console.log("file recived -->",file);
    const base64ImageFile = new Buffer.from(file.buffer).toString('base64')
    const caption = await generateCaption(base64ImageFile)
    // console.log(caption);
    
    res.status(200).json({
        "message":"caption is ready to post",
        caption,
    })
}

module.exports = {
    createPostController,
}
