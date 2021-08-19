const { request } = require('express');
const express = require('express');
const app = express();
const path = require('path');
const redditData = require('./data.json');

app.use(express.static(path.join(__dirname, 'public')));

app.set('view engine', 'ejs');
//We set this path so we can run the index.js file while we're working in another directory
app.set('views', path.join(__dirname, '/views'));

app.get('/', function(request, response){
    response.render('home')
})

app.get('/cats', function(request, response){
    const cats = [
        'Blue', 'Rocket', 'Month', 'Ella', 'Windston'
    ]
    response.render('cats', {cats})
})

app.get('/r/:subreddit', function(request, response){
    const {subreddit} = request.params;
    const data = redditData[subreddit];
    if(data){
        response.render('subreddit', {...data});
    } else{
        response.render('notfound', {subreddit})
    }
    
})

app.get('/random', function(request, response){
    const number = Math.floor(Math.random() * 10) + 1;
    response.render('random', {number});
})

app.listen(3000, function(){
    console.log('Listening on port 3000!')
})