
var express = require('express');
const userModel=require('../model/userModel')
const adminController =require('../controller/adminController')

var router = express.Router();
const isAdmin =(req,res,next)=>{
    if(req.session.isAdmin){
        next()
    }
    else{
        res.redirect('/')
    }
}
router.route('/')
.get(isAdmin,adminController.getAdminPage);


router.route('/user/:id')
.get(isAdmin,adminController.getUpdateUser)
.post(isAdmin, adminController.postUpdateUser)
.delete(isAdmin,adminController.deleteUser)


router.route('/createUser')
.get(isAdmin,adminController.getcreateUser)
.post(isAdmin,adminController.postcreateUser);


module.exports=router