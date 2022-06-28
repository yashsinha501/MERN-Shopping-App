const data=require('../assets/product.json')

module.exports.getProduct=((req,res)=>{

    res.send(data);

})