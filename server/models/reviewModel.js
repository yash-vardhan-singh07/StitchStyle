const mongoose=require('mongoose');
mongoose.connect('mongodb+srv://singhyashvardhan34:Vardhan16Singh@ss.amltamb.mongodb.net/?retryWrites=true&w=majority')
.then(function(db){
    console.log("plan db connected");
})
.catch(function(err){
    console.log(err);
});

const planSchema=new mongoose.Schema({
    review:{
        type:String,
        required:[true,'Review is required'],

    },
    reting:{
        type:Number,
        min:1,
        max:5,
        required:[true,'rating is required']
    },
    createdAt:{
        type:Date,
        default:Date.now()
    },
    user:{
        type:mongoose.Schema.ObjectId,
        ref:'userModel',
        required:[true]
    }
});

reviewSchema.pre(/^find/,function(next){
     this.populate({
        path:"user",
        select:"name profileImage"
     });
     next();
})

const reviewModel=mongoose.model('reviewModel',reviewSchema);
module.exports=reviewModel;
