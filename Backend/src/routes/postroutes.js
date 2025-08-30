const express = require('express');
const {createPostController} = require('../controller/post.controller')
const authMiddleware = require('../middleware/auth.middleware');
const multer = require('multer');

const router = express.Router();
const upload = multer({storage:multer.memoryStorage()})


router.post('/',authMiddleware,upload.single('image'),createPostController)

module.exports = router