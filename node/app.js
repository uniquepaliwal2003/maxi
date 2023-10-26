const express = require('express');
const app = express();

const path=require('path');

const bodyParser = require('body-parser');//this is to take the body and parse it.

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');

app.use(bodyParser.urlencoded({extended:true}));

app.use(express.static(path.join(__dirname,'public')));

app.use('/admin',adminRoutes);
app.use(shopRoutes);

app.use((req,res,next)=>{
  res.status(404).sendFile(path.join(__dirname,'views','404.html'));
});

app.listen(3000);