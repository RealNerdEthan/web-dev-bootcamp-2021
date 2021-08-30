const mongoose = require("mongoose");

//Connect to the MongoDB
mongoose.connect('mongodb://localhost:27017/shopApp', {useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => {
        console.log("Connection open!");
    })
    .catch(err => {
        console.log("Encountered an error!");
        console.log(err);
    });

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        maxlength: 20
    },
    price: {
        type: Number,
        required: true,
        min: [0, 'Price must be positive!']
    },
    onSale: {
        type: Boolean,
        default: false
    },
    categories: {
        type: [String],
        default: 'Cycling'
    },
    qty: {
        online: {
            type: Number,
            default: 0
        },
        inStore: {
            type: Number,
            defualt: 0
        }
    },
    size: {
        type: String,
        enum: ['S', 'M', 'L']
    }
});

const Product = mongoose.model('Product', productSchema);

//Products
const bike = new Product({ name: 'Mountain Bike', price: 599 });
bike.save()
.then(function(data){
    console.log('It worked!');
    console.log(data);
})
.catch(function(error){
    console.log('Encountered an error!');
    console.log(error);
})

const bikeHelmet = new Product({ name: 'Bike Helmet', price: 29.50, categories: ['Cycling', 'Saftey']});
bikeHelmet.save()
.then(function(data){
    console.log('It worked!');
    console.log(data);
})
.catch(function(error){
    console.log('Encountered an error!');
    console.log(error);
})

// const bikePump = new Product({ name: 'Bike Pump', price: 19.99, categories: ['Cycling']});
// bikePump.save()
//     .then(function(data){
//         console.log('It worked!');
//         console.log(data);
//     })
//     .catch(function(error){
//         console.log('Encountered an error!');
//         console.log(error);
//     })

//This updaes the Bike Pump and add {runValidators: true} which applies our validations to the product when updating
Product.findOneAndUpdate({ name: 'Bike Pump' }, { price: 10.99 }, { new: true, runValidators: true })
    .then(function(data){
        console.log('It worked!');
        console.log(data);
    })
    .catch(function(error){
        console.log('Encountered an error!');
        console.log(error);
    })


//This runs validation against a set of values instead of just one. In this case, the sizes of S, M, or L.
const cyclingJersey = new Product({ name: 'Cycling Jersey', price: 49.50, categories: ['Cycling'], size: 'S'});
cyclingJersey.save()
    .then(function(data){
        console.log('It worked!');
        console.log(data);
    })
    .catch(function(error){
        console.log('Encountered an error!');
        console.log(error);
    })