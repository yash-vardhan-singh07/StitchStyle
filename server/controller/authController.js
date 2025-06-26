const express = require('express');
const userModel = require('../models/usermodel');
const jwt = require('jsonwebtoken');
const bcrypt=require('bcryptjs')
const JWT_KEY = require('../public/secrets');
const{sendMail}=require('../routers/nodemailer');
const contactModel = require('../models/contactModel');
const cartModel = require('../models/cartModel');

module.exports.signup = async function signUp(req, res) {
    try {
        let data = req.body;
        const userExists=await userModel.findOne({ email: data.email });
        if(userExists){
            return res.status(400).json({message:"User already exists"});
        }
        let dataObj = req.body;
        let user = await userModel.create(dataObj);
        let jnuser=await userModel.findOne({email:dataObj.email});
        let id=jnuser._id;
        let cart=await cartModel.create({userId:id});
        sendMail("signup",user);
        if (user) {
           return res.json({
                message: "user created successfully",
                data: user
            });
        }
        else {
           return res.status(500).json({
                message: "error while signing"
            });
        }

    }
    catch (err) {
        return res.status(500).json({
            message: err.message
        });
    }
}


module.exports.login = async function login(req, res) {
    try {
        let data = req.body;
        if (data.email) {
            let user = await userModel.findOne({ email: data.email });
            if (user) {
                const comparePassword= await bcrypt.compare(data.password,user.password);
                if (comparePassword) {
                    let uid = user['_id'];
                    let token = jwt.sign({ payload: uid }, JWT_KEY);
                    res.cookie("login" , token, { httpOnly: false ,sameSite:'none'});
                    return res.json( token );
                    
                }
                else {
                    return res.status(500).json({
                        message: "Wrong credentials"
                    });
                }
            }
            else {
                return res.status(500).json({
                    message: "user not found"
                });
            }
        }
        else {
            return res.status(500).json({
                message: "Empty field found"
            });
        }
    }
    catch (err) {
        return res.status(500).json({
            message: err.message
        });
    }
}



module.exports.isAuthorised = function isAuthorised(roles) {
    return function (req, res, next) {
        if (roles.includes(req.role) == true) {
            next();
        }
        else {
            res.status(401).json({ 
                message: "Operation not allowed user not admin"
            })
        }
    } 
}


module.exports.protectRoute = async function protectRoute(req, res, next) {
    try {
        const token=req.header("Authorization");
        
        if (token) {
            
            let payload = jwt.verify(token, JWT_KEY);
            if (payload) {
                const user = await userModel.findById(payload.payload).select({password:0});    
                req.user=user;
                req.role = user.role;
                req.token=token;
                req.id = user._id;
                next();
            }
            else {
                return res.json({
                    message: 'user not verified'
                });
            }

        }
        else {
            return res.json({
                message:'else from protectroute'
            });
        }
    }
     catch (err) {
        res.json({
            message: err.message,
        });
    }
}


module.exports.forgetPassword = async function forgetPassword(req, res) {
    let { email } = req.body;
    try {
        const user = await userModel.findOne({ email: email });
        if (user) {
            const resetToken = user.createRS();
            let resetPasswordLink = `${req.protocol}://${req.get('host')}/resetPassword/${resetToken}`
        }
        else {
            return res.json({
                message: "Please Signup"
            })
        }
    }
    catch (err) {
        res.json({
            message: err.message
        });
    }
}

module.exports.resetPassword = async function resetPassword(req, res) {
    try {
        const token = req.params.token;
        let { password, confirmPassword } = req.body;
        const user = await userModel.findOne({ resetToken: token });
        if (user) {
            user.resetPasswordHandler(password, confirmPassword);
            await user.save();
            res.json({
                message: "Password Updated Succesfully"
            });
        } else {
            res.json({
                message: "User does not Exist"
            })
        }
    }
    catch (err) {
        res.json({
            message: err.message
        });
    }
}

module.exports.logout=function logout(req,res){
    res.cookie('login','',{maxAge:1});
    res.json({
        message:"User logged out successfully"
    });
}







module.exports.contactUs=async function contactUs(req,res){
    try {
        let dataObj = req.body;
        let feedback = await contactModel.create(dataObj);
        console.log(feedback);
        
        if (feedback) {
            res.json({
                message: "Feedback received successfully",
                data: feedback
            });
        }
        else {
            res.json({
                message: "error while contacting"
            });
        }

    } catch (error) {
        res.status(500).json({
            message: console.log(error.message),
        });
    }
}