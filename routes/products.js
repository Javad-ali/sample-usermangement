var express = require('express');
var router = express.Router();

/* GET home page. */
const isLogin = (req,res,next)=>{
    if(!req.session.login){
        res.redirect('/');
    }else{
        next();
    }
}
router.get('/',isLogin, function(req, res, next) {
    let clothes=[
        {
            name:"Puma Men T-Shirt",
            category:"T-shirt",
            discription:"Casual_Tee",
            image:'https://m.media-amazon.com/images/I/61PycmsE40L._UX679_.jpg',
        },
        {
            name:"Peter Englend Casual-Shirt",
            category:"Shirt",
            discription:"Casual_Shirt",
            image:'https://adn-static1.nykaa.com/nykdesignstudio-images/tr:w-960,/pub/media/catalog/product/p/j/pjsfpssph69563_1_123cefe9.jpg?rnd=20200526195200',
        },
        {
            name:"Zara Formal-Blazer",
            category:"Suite",
            discription:"Formal_blazer",
            image:'https://m.media-amazon.com/images/I/51sx+HbErlL._UX679_.jpg',
        },
             {
            name:"Perfomax",
            category:"T-shirt",
            discription:"Active-wear",
            image:'https://assets.ajio.com/medias/sys_master/root/20220125/3YgJ/61ef0a7baeb2695cdd2b1a39/-473Wx593H-441135821-ltblue-MODEL.jpg',
        },
    ]

  res.render('products',{clothes});



});
module.exports = router;