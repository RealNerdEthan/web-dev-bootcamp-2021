const express = require('express');
const app = express();
const morgan = require('morgan');

//Morgan is an example of middleware and logs info about the incoming request
app.use(morgan('dev'));

//Recreating some of the Morgan NPM functionality and changing it
app.use(function(request, response, next){
    request.requestTime = Date.now();
    console.log(request.method, request.path);
    next();
})

//This middleware only runs on incoming requests with the route path of /cats
app.use('/cats', function(request, response, next){
    console.log('Cats are best friends!');
    next();
})

//This is FAKE authentication but will deny access to a route if query string doesn't include ?password=iamapassword (it's just a demo of creating middleware and checking something on the query string)
const verifyPassword = (function(request, response, next){
    const {password} = request.query;
    if(password === 'iamapassword'){
        next();
    }
    response.send('Sorry, you need a password!');
})

//Our first middleware
// app.use(function(request, response, next){
//     console.log('This is our first middleware!');
//     next();
// })

app.get('/', function(request, response){
    console.log(`Request Date: ${request.requestTime}`);
    response.send('Home Page');
})

app.get('/cats', function(request, response){
    console.log(`Request Date: ${request.requestTime}`);
    response.send('Meeooww!');
})

app.get('/secret', verifyPassword, function(request, response){
    response.send('My Secret: Fall is my favorite season!');
})

//This will only run if no route matches the request, hence why it's at the end of the code
app.use(function(request, response){
    response.status(404).send('Page not found...');
})

app.listen(3000, function(){
    console.log('App is running on localhost:3000...');
})