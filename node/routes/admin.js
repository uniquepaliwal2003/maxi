const path=require('path');

const express = require('express');

const router = express.Router();

const rootDir = require('../util/path')

// /admin/add-product
router.get('/add-product',(req,res,next)=>{
  res.sendFile(path.join(rootDir,'views','add-product.html'));
});
// /admin/product
router.post('/product',(req,res,next)=>{
  console.log(req.body);
  res.redirect('/');
});
// good to put /admin in each of the address , can be removed and added in the use.app in the app.js
module.exports = router;