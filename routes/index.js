var express = require('express');
const userModel=require('../model/userModel')
const authController=require('../controller/authController')
const bcrypt=require('bcrypt')
var router = express.Router();


const isLogin= (req,res,next)=>{
    if (req.session.login) {
         res.redirect('/products')
    } 
    next()
}
const isAdmin= (req,res,next)=>{
    if (req.session.isAdmin) {
         res.redirect('/admin')
    } 
    next()
}

router.route('/')
.get(isAdmin,isLogin,authController.getLogin)
.post(authController.postLogin)



router.get('/logout', (req, res) => {
    req.session.destroy()
    res.redirect('/')
})


let userExist;
router.route('/signup')
.get(isAdmin,isLogin,authController.getsignup)
.post(isAdmin,isLogin,authController.postsignup)




module.exports = router;
