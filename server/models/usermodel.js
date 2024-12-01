const mongoose=require('mongoose');
const emailValidator=require('email-validator')
const bcrypt=require('bcrypt');
const crypto=require('crypto');
mongoose.connect(process.env.mongo)
.then(function(db){
    console.log("db connected");
})
.catch(function(err){
    console.log(err);
})

// Define a schema for the user
const userSchema = new mongoose.Schema({
  name:{
     type:String,
     required:true
  },
  email:{ 
    type:String,
    required:true,
    unique: true,
    validate:function(){
        return emailValidator.validate(this.email);
    }
  },
  password:{
    type:String,
    required:true,
    minLength:8
  },
  confirmPassword:{
    type:String,
    required:true,
    minLength:8,
    validate:function(){
        return this.confirmPassword==this.password;
    }
  },
  role:{
    type:String,
    enum:['admin','user','delivery','warehouse'],
    default:'user'
  },
  pofileImage:{
    type:String,
    default:'../img/banner/bac.jpg'
  },
  resetToken:String
});



userSchema.pre('save',async function(){
    let salt=await bcrypt.genSalt();
    let hashedString=await bcrypt.hash(this.password,salt);
    this.password=hashedString;
});


userSchema.methods.createRS=function(){
      const resetToken=crypto.randomBytes(32).toString("hex");
      this.resetToken=resetToken;
      return resetToken;
}


userSchema.methods.resetPasswordHandler=function(password,confirmPassword){
      this.password=password;
      this.confirmPassword=confirmPassword;
      this.resetToken=undefined;
}


userSchema.pre('save',function(){
    this.confirmPassword=undefined;
});


const userModel=mongoose.model("userModel",userSchema);
module.exports=userModel;

