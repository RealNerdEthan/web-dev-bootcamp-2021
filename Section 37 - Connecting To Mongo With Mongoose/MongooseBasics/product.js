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
        min: 0
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