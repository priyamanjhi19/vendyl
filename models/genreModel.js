const con =require('../config.js');



const genreSchema=new con.Schema({

    genereName:{type:String,required:true}
    
    
    });

 const Generes=con.model('Genere',genreSchema);

 module.exports=Generes; 
