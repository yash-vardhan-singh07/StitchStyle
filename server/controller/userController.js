
const userModel = require('../models/usermodel');

module.exports.getAllUser = async function getAllUser(req, res) {
    let users = await userModel.find({},{password:0});
    if (users) {
        return res.json(users);
    }
    else {
        return res.json({
            message: "users not found"
        });
    }
} 






module.exports.updateUser = async function updateUser(req, res) {
    try {
        let id = req.params.id;
        let dataTBU = req.body;
        console.log(dataTBU);
        
        const update= await userModel.updateOne({_id:id},{
            $set:dataTBU,
        })
            res.status(200).json(update);
        }
    catch (err) {
        res.json("usercontroller");
    }
}



module.exports.deleteUser = async function deleteUser(req, res) {
    let id = req.params.id;

    let user = await userModel.findByIdAndDelete(id);
    res.json({
        message: "data has been deleted",
        data: user
    });

    if (!user) {
        res.json({
            message: 'user does not exist'
        })
    }
}


module.exports.getUser = async function getUser(req, res) {
    
    try {
        const userData=req.user;
        if(userData){
        return res.status(200).json({userData});
        }
        else{
            return res.status(500).json({message:"error from getuser"})
        }
    } catch (error) {
        console.log("error from user route");
    }
}
module.exports.getUserId = async function getUserId(req, res) {
    
    try {
        const id=req.params.id;
        const userData=await userModel.findById(id);
        
        if(userData){
        return res.status(200).json({userData});
        }
        else{
            return res.status(500).json({message:"error from getuser"})
        }
    } catch (error) {
        console.log("error from user route");
    }
}



module.exports.updateProfileImage=function updateProfileImage(req,res){
    res.json({
        message:"file uploaded"
    });
}