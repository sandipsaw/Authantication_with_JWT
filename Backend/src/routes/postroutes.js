const express = require('express');
const createPostController = require('../controller/create.post.controller')
const authMiddleware = require('../middleware/auth.middleware');

const router = express.Router();

router.post('/',authMiddleware.createPostController)

module.exports = router