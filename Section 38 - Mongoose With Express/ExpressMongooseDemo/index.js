const express = require('express');
const app = express();
const path = require('path');

//Mongoose ---------------------------------------------------------------
//Require Mongoose
const mongoose = require("mongoose");
//Require the model
const Product = require('./models/product');

//Connect to the MongoDB
mongoose.connect('mongodb://localhost:27017/farmStand', {useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => {
        console.log("Mongo connection open!");
    })
    .catch(err => {
        console.log("Encountered a Mongo connection error!");
        console.log(err);
    });
// -----------------------------------------------------------------------

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

//Setting our routes
app.get('/products', async function(request, response){
    const products = await Product.find({});
    response.render('products/index', {products})
})

app.listen(3000, function(){
    console.log('App is listening on port 3000...')
})