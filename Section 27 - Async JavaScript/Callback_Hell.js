//First way to do consecutive callbacks
// setTimeout (function(){
//     document.body.style.backgroundColor = 'red';
// }, 1000)

// setTimeout (function(){
//     document.body.style.backgroundColor = 'orange';
// }, 2000)

// setTimeout (function(){
//     document.body.style.backgroundColor = 'yellow';
// }, 3000)

//--------------------------------------------------------------------------

//Second way to run consecutive callbacks, but this time they are nested
// setTimeout (function(){
//     document.body.style.backgroundColor = 'red';
//     setTimeout (function(){
//         document.body.style.backgroundColor = 'orange';
//         setTimeout (function(){
//             document.body.style.backgroundColor = 'yellow';
//         }, 1000)
//     }, 1000)
// }, 1000)

//--------------------------------------------------------------------------

//Third way, create a function for callbacks where you pass in a color and timer
const delayedColorChange = function(newColor, delay, doNext){
    setTimeout(function(){
        document.body.style.backgroundColor = newColor;
        doNext && doNext();
    }, delay)
}

delayedColorChange('red', 1000, function(){
    delayedColorChange('orange', 1000, function(){
        delayedColorChange('yellow', 1000, )
    })
});

//---------------------------------------------------------------------------

//This is an example of real world nested callbacks
searchMoviesAPI('FindingNemo', function(){
    saveToMyDatabase(movies, function(){
        //if it works, run this:
    }, function(){
        //if it doesn't work, run this:
    })
}, function(){
    //if API is down or the request failed, run this:
});