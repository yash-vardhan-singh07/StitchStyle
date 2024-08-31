const mongoose=require('mongoose');
mongoose.connect('mongodb+srv://singhyashvardhan34:Vardhan16Singh@ss.amltamb.mongodb.net/?retryWrites=true&w=majority&appName=SS')
.then(function(db){
    console.log("video db connected");
})
.catch(function(err){
    console.log(err,);
});


const videoSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true,
        maxLength:[100,'Video name should not exceed 100 characters']
    },
    details:{
        type:String,
        required:true
    },
    url:{
        type:String,
    }
});



const videoModel=mongoose.model("videotModel",videoSchema);
module.exports=videoModel;