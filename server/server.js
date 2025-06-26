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

// const _dirname=path.dirname("");
// const buildPath=path.join(_dirname,"../Ecommerce");

// app.use(express.static(buildPath))

// app.get("/",function(req,res){
//     res.sendFile(
//         path.join(_dirname,"../Ecommerce/index.html"),
//         function(err){
//             if(err){
//                 res.status(500).send(err);
//             }
//         }
//     )
// })


const corsOptions={
    origin:"http://localhost:5173",
    method:"POST,GET,PUT,PATCH,DELETE,HEAD",
    credentials:true,
    origin:true,
}
app.use(cors(corsOptions));

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, '/')));


if (process.env.NODE_ENV === "production") {
  const path = require("path");
  app.use(express.static(path.join(__dirname, "../client/build")));
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "../client", "build", "index.html"));
  });
}
const productModel=require('../server/models/productModel');

const userRouter=require('./routers/userRouter'); 

app.use("/user",userRouter);







