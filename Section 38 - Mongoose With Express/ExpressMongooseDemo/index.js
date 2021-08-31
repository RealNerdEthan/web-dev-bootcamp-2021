const express = require('express');
const app = express();
const path = require('path');

//Mongoose ---------------------------------------------------------------
//Require Mongoose
const mongoose = require("mongoose");
//Require the model
const Product = require('./models/product');
//Require Method-Override
const methodOverride = require('method-override');
const { REPL_MODE_SLOPPY } = require('repl');


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

app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs');

app.use(express.urlencoded({extended: true}))
app.use(methodOverride('_method'))

const categories = ['fruit', 'vegetable', 'dairy']

//Route to the index page which shows all our products
app.get('/products', async function(request, response){
    const {category} = request.query;
    if(category){
        const products = await Product.find({category})
        response.render('products/index', {products, category})
    } else{
        const products = await Product.find({});
        response.render('products/index', {products, category: 'All'})
    }
})

//Route to create a new product
app.get('/products/new', function(request, response){
    response.render('./products/new', {categories})
})

//Route for submit new product button
app.post('/products', async function(request, response){
    const newProduct = new Product(request.body);
    await newProduct.save();
    console.log(newProduct);
    response.redirect(`./products/${newProduct._id}`)
})

//Route to a details page for each product using its ID
app.get('/products/:id', async function(request, response){
    const {id} = request.params;
    const foundProduct = await Product.findById(id);
    console.log(foundProduct);
    response.render('./products/details', {foundProduct});
})

//Route to edit a product
app.get('/products/:id/edit', async function(request, response){
    const {id} = request.params;
    const foundProduct = await Product.findById(id);
    response.render('./products/edit', {foundProduct, categories});
})

//Route to update a product
app.put('/products/:id', async function(request, response){
    const {id} = request.params;
    const product = await Product.findByIdAndUpdate(id, request.body, {runValidators: true, new: true});
    response.redirect(`/products/${product._id}`);
})

//Route for deleting a product
app.delete('/products/:id', async function(request, response){
    const {id} = request.params;
    const deletedProduct = await Product.findByIdAndDelete(id);
    response.redirect('/products');
})

app.listen(3000, function(){
    console.log('App is listening on port 3000...')
})