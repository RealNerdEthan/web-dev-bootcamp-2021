const express = require('express');
const app = express();
const morgan = require('morgan');

//Morgan is an example of middleware
app.use(morgan('dev'));

app.get('/', function(request, response){
    response.send('Home Page');
})

app.get('/cats', function(request, response){
    response.send('Meeooww!');
})

app.listen(3000, function(){
    console.log('App is running on localhost:3000...');
})