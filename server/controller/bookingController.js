
const stripe = require('stripe')('sk_test_51OhXwkSGSrdlOmm4jcnMZVmmFtY2A4k2xCEhjGwfjqtDjgnxIca5MA26vnzsb2TFDG4Binpra9mmFg04kdIw1Qcu00ADXdKvrt');
const usermodel =require('../models/usermodel')
const planModel=require('../models/productModel')

module.exports.createSession=async function createSession(req,res){
    try{
        let userId=req.id;
        let planId=req.params.id;

        const user=await usermodel.findById(userId);
        const plan=await planModel.findById(planId);

        const session=await stripe.checkout.sessions.create({
            payment_method_types:['card'],
            customer_email:user.email,
            client_reference_id:plan.id,
            line_items:[
                {
                    name:plan.name,
                    description:plan.description,
                    amount:plan.price,
                    currency:"INR",
                    quantity:1
                }
            ],
            success_url:`${req.protocol}://${req.get("host")}/profile`,
            cancel_url:`${req.protocol}://${req.get("host")}/profile`
        })
        res.status(200).json({
            status:"success",
            session
        })
    }
    catch(err){
        res.status(500).json({
            message:err.message,
            message:console.log("createsession agaye")
        });
    }
}


