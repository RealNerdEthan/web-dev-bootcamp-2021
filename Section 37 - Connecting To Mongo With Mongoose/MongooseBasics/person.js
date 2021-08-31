//Header -----------------------------------------------------------------
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

// -----------------------------------------------------------------------

const personSchema = new mongoose.Schema({
    first: String,
    last: String
})

//This is a 'getter' for a virtual property and doesn't live on the database at all, only on the JavaScript side in Mongoose
personSchema.virtual('fullName').get(function(){
    return `${this.first} ${this.last}`
})

//There are also virtal setters

//Middleware with 'pre' and 'post' allows you ti run code when object is saved as shown in the example below (and can do much more)
personSchema.pre('save', async function(){
    console.log('About to save!')
})

personSchema.post('save', async function(){
    console.log('Just saved!')
})

const Person = mongoose.model('Person', personSchema);