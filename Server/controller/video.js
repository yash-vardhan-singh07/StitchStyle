const videoModel=require('../models/videoModel');

module.exports.upload = async function upload(req, res) {
    try {
        let data = req.body;
        const videoExists=await videoModel.findOne({ url: data.url });
        if(videoExists){
            return res.status(400).json({message:"Video already exists"});
        }
        let dataObj = req.body;
        let user = await videoModel.create(dataObj);
        if (user) {
           return res.json({
                message: "Data added successfully",
                data: user
            });
        }
        else {
           return res.status(500).json({
                message: "error while uploading"
            });
        }

    }
    catch (err) {
        return res.status(500).json({
            message: err.message
        });
    }
}


module.exports.videos=async function videos(req,res){
    try {
        const response=await videoModel.find();
        if(!response){
            res.status(404).json({msg:"no products found"})
            return;
        }
        res.status(200).json({response})
    } catch (error) {
        console.log("products error");
    }
}