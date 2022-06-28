require('./config/config');
require('./models/DB');
const express = require("express");
const routes=require('./Routes/index.Router')
const app = express();
app.use(express.json());
app.use('/api',routes);


app.listen(process.env.PORT);


// const products = require("./assets/product.json");
// const app = express();

// app.get("/", (req, res) => {
// 	res.send("Hello World");
// });

// app.get("/products", (req, res) => {
// 	res.send(products);
// });

// app.listen(3000);