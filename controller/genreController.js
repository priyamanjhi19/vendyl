const Generes=require('../models/genreModel.js');

const gencon= {
    index:function(req,res){
        Generes.findOneAndUpdate({genereName:req.body.genre},{ genereName:req.body.genre},{upsert:true,new:true},(err,doc)=>{
            res.json(doc);
        })
    }
}

module.exports=gencon;