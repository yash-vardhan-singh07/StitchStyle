const contactModel = require('../models/contactModel');
const productModel = require('../models/productModel');
const cartModel =   require('../models/cartModel');

module.exports.deleteContact=async function deleteContact(req,res){
    let id =req.params.id;
    let contact =await contactModel.findByIdAndDelete(id);

    res.json({
        message: "contact has been deleted",
        data: contact
    });

    if (!contact) {
        res.json({
            message: 'contact does not exist'
        })
    }
}


module.exports.getAllContacts= async function getAllContacts(req, res) {
    let contacts = await contactModel.find();
    
    if (contacts) {
        return res.json(contacts);
    }
    else {
        return res.json({
            message: "contacts not found"
        });
    }
}


module.exports.updateProduct = async function updateProduct(req, res) {
    try {
        let id = req.params.id;
        let dataTBU = req.body;
        console.log(dataTBU);
        
        const update= await productModel.updateOne({_id:id},{
            $set:dataTBU,
        })
            res.status(200).json(update);
        }
    catch (err) {
        res.json("adminController");
    }
}

module.exports.deleteProduct = async function deleteProduct(req, res) {
    let id = req.params.id;

    let product = await productModel.findByIdAndDelete(id);
    res.json({
        message: "data has been deleted",
        data: product
    });

    if (!product) {
        res.json({
            message: 'product does not exist'
        })
    }
}


module.exports.getSingleProduct = async function getSingleProduct(req, res) {
    
    try {
        const id=req.params.id;
        
        const product=await productModel.findById(id);
        
        if(product){
        return res.status(200).json(product);
        }
        else{
            return res.status(500).json({message:"error from getuser"})
        }
    } catch (error) {
        console.log("error from user route");
    }
}



module.exports.products=async function products(req,res){
    try {
        const response=await productModel.find();
        if(!response){
            res.status(404).json({msg:"no products found"})
            return;
        }
        res.status(200).json({response})
    } catch (error) {
        console.log("products error");
    }
}



module.exports.postProduct = async function postProduct(req, res) {
    try {

        let dataObj = req.body;
        let product = await productModel.create(dataObj);
        if (product) {
            res.json({
                message: "product created successfully",
                data: product
            });
        }
        else {
            res.json({
                message: "error while creating product"
            });
        }

    }
    catch (err) {
        res.status(500).json({
            message: err.message,
            message:console.log("yahan auth")
        });
    }
}



module.exports.updateCart = async function updateCart(req, res) {
    try {
        let id = req.params.id;
        let uid=req.header("ID");
        // console.log("uid ",uid, " id ",id);
        
        
        const update= await cartModel.updateOne(
            {userId:uid},
            {$addToSet: { productId: id }},
        )
            res.status(200).json(update);
        }
    catch (err) {
        res.json(err.message);
    }
}



module.exports.getCart = async function getCart(req, res) {
    try {
          let id = req.params.id;
        //   console.log("id from getcart",id);
          
          const data= await cartModel.findOne({userId:id});
            
          res.status(200).json(data);
        }
    catch (err) {
        res.json(err.message);
    }
}