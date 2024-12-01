const express = require('express');
const userRouter = express.Router();
const multer=require('multer');
const cookieParser = require('cookie-parser');
const{getUser,getAllUser,updateUser,deleteUser,updateProfileImage,getUserId}=require('../controller/userController');
const{signup,login,isAuthorised,protectRoute,logout,forgetPassword,resetPassword, getsign,contactUs,}=require('../controller/authController');
const{getAllContacts,deleteContact,updateProduct,deleteProduct,products,getSingleProduct,postProduct,getCart, updateCart}=require('../controller/adminController');





userRouter
.route('/signup')
.post(signup)


userRouter
.route('/login')
.post(login)

    
userRouter
.route('/forgetPassword')
.post(forgetPassword)


userRouter
.route('/resetPassword')
.post(resetPassword)






userRouter
.route('/logout')
.get(logout)


userRouter
.route('/shop') 
.get(products)


userRouter
  .route('/contact')
  .post(contactUs)
  

userRouter.use(protectRoute);
userRouter
.route('/userProfile')
.get(getUser)


userRouter.use(protectRoute)
userRouter
    .route('/product/:id')
    .get(getSingleProduct)

userRouter.use(protectRoute)
userRouter
  .route('/sprod/:id')
 


userRouter.use(isAuthorised(['admin']));    
userRouter
.route('/admin/user')
.get(getAllUser)

userRouter.use(isAuthorised(['admin']));
userRouter
.route('/admin/contact')
.get(getAllContacts)


userRouter.use(isAuthorised(['admin']));
userRouter
.route('/admin/contact/:id')
.delete(deleteContact)

userRouter.use(protectRoute)
userRouter.use(isAuthorised(['admin'])); 
userRouter
    .route('/:id')
    .patch(updateUser)
    .delete(deleteUser)
    .get(getUserId)


userRouter.use(protectRoute)
userRouter.use(isAuthorised(['admin'])); 
userRouter
    .route('/product/:id')
    .patch(updateProduct)
    .delete(deleteProduct)
  


userRouter.use(protectRoute)
userRouter.use(isAuthorised(['admin'])); 
userRouter
        .route('/product')
        .post(postProduct)

 






module.exports = userRouter;








