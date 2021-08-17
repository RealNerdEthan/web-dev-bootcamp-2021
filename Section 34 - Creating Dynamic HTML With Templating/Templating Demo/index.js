const express = require('express');
const app = express();
const path = require('path');

app.set('view engine', 'ejs');
//We set this path so we can run the index.js file while we're working in another directory
app.set('views', path.join(__dirname, '/views'));

app.get('/', function(request, response){
    response.render('home')
})

app.listen(3000, function(){
    console.log('Listening on port 3000!')
})