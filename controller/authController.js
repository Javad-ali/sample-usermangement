const userModel=require('../model/userModel')
const bcrypt=require('bcrypt')
///////// login /////////////

exports.getLogin=(req,res)=>res.render('index');

exports.postLogin=async(req,res)=>{
    try {
        const user=await userModel.findOne({email:req.body.email});
        if(user){
            bcrypt.compare(req.body.password,user.password).then(data=>{
                if(data){
                    if(user.isAdmin){
                        req.session.isAdmin =true
                        res.redirect('/admin')
        
                    }else{
                req.session.login = true
                req.session.userDetails = user;
                    res.redirect('/products')

                }
            }else{
                res.render('index',{message:'invalid user name or password'})
            }
            })
            }else{
                res.render('index',{message:'invalid user name or password'})

            }
        } catch (error) {
            if(error){
                res.render('index',{message:'invalid user name or password'})

            }
        
    }
}



///////////   signup   ///////


exports.getsignup=(req,res)=>{
    if(req.session.login){
        res.redirect('products')
    }else{

        res.render('signup')
    }
}

exports.postsignup=async(req,res)=>{
    try {
        console.log(req.body.data)
        const inUser = await  userModel.findOne({email:req.body.data.email});
        if(inUser){
            res.json({message:"user exist"});
        }else{
            const newUser=  await new userModel(req.body.data)
            newUser.save();
            req.session.login=true;
            res.json({url:"/products"})
        }
     
    } catch (error) {
        console.log(error);
    }
    

}