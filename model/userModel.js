const mongoose =require('mongoose');
const bcrypt=require('bcrypt')
const userSchema= new mongoose.Schema({
    name:{
        type:String,
        require:[true,"enter your name"]
    },
    email:{
        type:String,
        require:[true,"enter your email"],
        unique:true
    },
    password:{
        type:String,
        require:[true,"enter your password"]
    },
    isAdmin:{
        type:Boolean,
        default:false
    }
});
userSchema.pre('save',async function(next){
    try {
        
        
        const hash=await bcrypt.hash(this.password,10);
        this.password=hash;
        next();
    } catch (error) {
        next(error);
}
})
 
const userModel=mongoose.model('User',userSchema);

module.exports=userModel;