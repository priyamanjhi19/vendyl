const mongoose=require('mongoose');
const express=require('express');
const app=express();
app.use(express.json());
mongoose.connect("mongodb://localhost/vidly")
.then(()=>console.log('connected'));


const genreSchema=new mongoose.Schema({

    genereName:String
    
    
    });

const Generes=mongoose.model('Genere',genreSchema);

app.listen(3000, function () {
    console.log('efwef');
  });

app.post('/api/pushdata',(req,res)=>{
    

    const genere1=new Generes({
        genereName:req.body.genre
    
    
    });
    genere1.save().then(res.send({'dcsc':'sadad'})).catch(res.send({'dcsc':'sefrfe'}) );

} );






