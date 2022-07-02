const express = require('express');
const product=require('../controllers/product.controller')
const user=require('../controllers/user.controller')
const router=express.Router();

router.get('/',product.getProduct)
router.get('/:id',product.getOneProduct)
router.post('/addData',product.addProduct)
router.post('/newUser',user.register)
router.post('/login',user.login)
module.exports=router;