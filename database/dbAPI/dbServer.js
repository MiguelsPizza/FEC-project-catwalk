const express = require('express');
const routes = require('./productsRoutes')
const db = require('./index.js')

const app = express();
let port = 5500;

app.use(express.static('public'));
app.use(express.json());

app.get('/products', (req, res) => {
  console.log(req)
  routes.getProducts(req, (data)=>{
    res.send(data)
  })
})

//gets the data for the product with this ID
app.get('/products/:product_id', (req, res) => {
  console.log(req.params)
  routes.getProduct(req.params, (data)=>{
    res.send(data)
  })

})

//gets all styles of the product with this ID
app.get('/products/:product_id/styles', (req, res) => {
  routes.getProductStyles(req.params, (data)=>{
    res.send(data)
  })
})

// //retrieves list of products added to the cart
// app.get('/cart', (req, res) => {

// })

// //adds a product to the cart
// app.post('/cart', (req, res) => {

// })



app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
})