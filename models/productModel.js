const mongoose=require('mongoose');
mongoose.connect('mongodb+srv://singhyashvardhan34:Vardhan16Singh@ss.amltamb.mongodb.net/?retryWrites=true&w=majority')
.then(function(db){
    console.log("product db connected");
})
.catch(function(err){
    console.log(err,);

});

// yahan pe plan ki jagah products banega aur uska review wala banega

const productSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true,
        maxLength:[40,'Plan name shoul not exceed 40 characters']
    },
    available:{
         type:Number,
         required:true
    },
    price:{
        type:Number,
        required:[true,'Price not entered']
    },
    ratingsAverage:{
        type:Number
    },
    discount:{
        type:Number,
        validate:[function(){
            return this.discount<100
        },'Discount should not exceed price']
    },
    details:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    img:{
        type:String,
    },
    category:{
        type:String,
    }
});



const productModel=mongoose.model("productModel",productSchema);
module.exports=productModel;