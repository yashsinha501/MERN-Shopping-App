const express = require('express');
const product=require('../controllers/product.controller')
const router=express.Router();

router.get('/',product.getProduct)
router.get('/:id',product.getOneProduct)
router.post('/addData',product.addProduct)
module.exports=router;