//This is a file to run whenever I want to 'seed' data into the database so we have something to work with


//Mongoose ---------------------------------------------------------------
//Require Mongoose
const { response } = require("express");
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

//This is how you can create products, one at a time
// const p = new Product({
//     name: 'Ruby Grapefruit',
//     price: 1.99,
//     category: 'fruit'
// })

// p.save()
//     .then(function(p){
//         console.log(p);
//     })
//     .catch(function(error){
//         console.log(error);
//     });


//This is how you can create many products at once using 'insertMany'
const seedProducts = [
    {
        name: 'Fairy Eggplant',
        price: 1.00,
        category: 'vegetable'
    },
    {
        name: 'Organic Goddess Melon',
        price: 4.99,
        category: 'fruit'
    },
    {
        name: 'Organic Mini Seedless Watermelon',
        price: 3.99,
        category: 'fruit'
    },
    {
        name: 'Organic Celery',
        price: 1.99,
        category: 'vegetable'
    },
    {
        name: 'Chocolate Whole Milk',
        price: 2.69,
        category: 'dairy'
    }
]


Product.insertMany(seedProducts)
    .then(function(response){
        console.log(response);
    })
    .catch(function(error){
        console.log(error);
    })