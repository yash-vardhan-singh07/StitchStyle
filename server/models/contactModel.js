const mongoose=require('mongoose');
const emailValidator=require('email-validator')
mongoose.connect(process.env.mongo)
.then(function(db){
    console.log("contact db connected");
})
.catch(function(err){
    console.log(err);
});

const contactSchema=new mongoose.Schema({
    name:{
        type:String,
        required:[true,'Name is required'],

    },
    email:{
        type:String,
        required:true,
        validate:function(){
            return emailValidator.validate(this.email);
        }
    },
    subject:{
        type:String,
        required:true
    },
    message:{
        type:String,
        required:[true]
    }
});



const contactModel=mongoose.model('contactModel',contactSchema);
module.exports=contactModel;
 