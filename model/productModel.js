const mongoose= require('mongoose');

const productSchema= mongoose.Schema({
    name:String,
            category:String,
            discription:String,
            image:String
});
const productModel = mongoose.model('Product',productSchema);

module.exports =productModel;