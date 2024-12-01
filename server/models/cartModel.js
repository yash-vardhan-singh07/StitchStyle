const mongoose=require('mongoose');
mongoose.connect(process.env.mongo)
.then(function(db){
    console.log("cart db connected");
})
.catch(function(err){
    console.log(err,);

});

// yahan pe plan ki jagah products banega aur uska review wala banega

const cartSchema=new mongoose.Schema({
    userId:{
        type:String,
        required:true,
    },
    productId:[{
        type:String,
    }]
});



const cartModel=mongoose.model("cartModel",cartSchema);
module.exports=cartModel;