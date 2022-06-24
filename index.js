const express = require('express');
const products=require('./assets/products.json');
const app = express()


app.get('/',(req, res) => {
  res.send('Hello World')
});

app.get('/getProducts/',(req, res) => {

  let cat=[];
    let data=products.filter((curData)=>{

      if(curData.category==="jewelery"){
          cat.push(curData);
      }    
    
    })
    res.send(cat);
  });

app.listen(3000);