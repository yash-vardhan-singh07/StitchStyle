const express=require('express');
const app=express();
const cors=require('cors');
app.use(express.json());
app.listen(3000);
console.log("app listening");
const path=require('path');
const bodyParser = require('body-parser');





const corsOptions={
    origin:"http://localhost:5173",
    method:"POST,GET,PUT,PATCH,DELETE,HEAD",
    credentials:true,
    origin:true,
}
app.use(cors(corsOptions));

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, '/')));

const userRouter=require('./routers/userRouter.js'); 

app.use("/user",userRouter);







