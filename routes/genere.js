var route=require('express').Router();
var gencon=require('../controller/genreController');
route.post('/api/pushdata',(req,res)=>{
    
    gencon.index(req,res);
    

} );
module.exports=route;