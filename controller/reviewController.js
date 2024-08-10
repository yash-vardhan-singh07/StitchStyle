const contactModel = require("../models/contactModel");
const reviewModel = require("../models/reviewModel");

module.exports.getAllReviews=async function getAllReviews(req,res){
    try{
          const reviews=await reviewModel.find();
          if(reviews){
            return res.json({
                message:"Reviews retrieved",
                data:reviews
            });
          }
          else{
            return res.json({
                message:"reviews not found"
            })
          }
    }
    catch(err){
        res.json({
            message:err.message
        });
    }
}


module.exports.top3reviews=async function top3reviews(req,res){
    try{
          const reviews=await reviewModel.find.sort({
            ratings:-1
          }).limit(3);
          if(reviews){
            return res.json({
                message:"Reviews retrieved",
                data:reviews
            });
          }
          else{
            return res.json({
                message:"reviews not found"
            })
          }
    }
    catch(err){
        res.json({
            message:err.message
        });
    }
}

module.exports.createReview=async function createReview(req,res){
    let review =await reviewModel.create();
}



