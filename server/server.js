const express=require('express');
const app=express();
const cookieParser=require('cookie-parser');
const cors=require('cors');
app.use(express.json());
app.listen(3000);
console.log("app listening");
app.use(cookieParser());
const path=require('path');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');


const corsOptions={
    origin:"http://localhost:5173",
    method:"POST,GET,PUT,PATCH,DELETE,HEAD",
    credentials:true,
    origin:true,
}
app.use(cors(corsOptions));

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, '/')));
const productModel=require('../server/models/productModel');

const userRouter=require('./routers/userRouter'); 

app.use("/user",userRouter);







