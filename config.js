const mongoose=require('mongoose');
mongoose.connect("mongodb://localhost/vidly",{ useNewUrlParser: true });
module.exports=mongoose;








