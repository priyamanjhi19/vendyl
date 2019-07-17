const express=require('express');
const app=express();
app.use(express.json());

app.use(require('./routes/genere'));
var port=3000;
app.listen(port, function () {
    console.log(`Server started on http://locahost:${port}`);
  });
