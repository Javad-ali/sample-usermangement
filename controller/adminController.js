
const userModel = require('../model/userModel')

exports.getAdminPage =async(req,res)=>{
    console.log(req.session.isAdmin)
    const user =await userModel.find({isAdmin:false}).lean()
    console.log(user)
        res.render('admin',{user});
    }

exports.getUpdateUser=async(req,res)=>{
    const user= await userModel.findById(req.params.id);
    res.render('updateUser',{user})
}


exports.postUpdateUser =async(req,res)=>{
    await userModel.findByIdAndUpdate(req.params.id,{$set:req.body})
    res.redirect('/admin')
}


exports.deleteUser =async(req,res)=>{
    try {
        await userModel.findByIdAndDelete(req.params.id);
        res.json({
            data:{
                status:'success'
            }
        })
    } catch (error) {
        console.log(error);
        
    }
    
}
exports.getcreateUser=(req,res)=>{
    res.render('createUser')
}
exports.postcreateUser=async(req,res)=>{
    console.log(req.body)
    const newuser=await new userModel(req.body);
    await newuser.save();
    res.redirect('/admin')
}