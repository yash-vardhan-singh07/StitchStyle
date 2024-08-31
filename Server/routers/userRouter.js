const express = require('express');
const userRouter = express.Router();
const{upload, videos}=require('../controller/video');





userRouter
.route('/setData')
.post(upload)

userRouter
.route('/getData')
.get(videos)



module.exports = userRouter;








