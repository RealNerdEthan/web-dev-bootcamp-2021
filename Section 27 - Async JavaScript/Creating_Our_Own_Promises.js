//This is the basic setup of a promise
// new Promise(function(resolve, reject){

// })

const fakeRequest = function(url){
    return new Promise(function(resolve, reject){
        const randomNumber = Math.random();
        setTimeout(function(){
            if(randomNumber < 0.7){
                resolve('Your fake data here');
            }
            reject('Request Error');
            
        }, 1000)
    })
}

fakeRequest('reddit.com/page1')
    .then(function(data){
        console.log('Done with request! Data is:', data)
    })
    .catch(function(error){
        console.log('Oh no!', error)
    })


    
    //This below is a rewrite of the delayed color change now that we know about promises

    const delayedColorChange = function(color, delay){
        return new Promise(function(resolve, reject){
            setTimeout(function(){
                document.body.style.backgroundColor = color;
                resolve();
            }, delay)
        })
    }

    delayedColorChange('red', 1000)
        .then(function(){
            return delayedColorChange('orange', 1000)
        })
        .then(function(){
            return delayedColorChange('yellow', 1000)
        })
        .then(function(){
            return delayedColorChange('green', 1000)
        })
        .then(function(){
            return delayedColorChange('blue', 1000)
        })
        .then(function(){
            return delayedColorChange('indigo', 1000)
        })
        .then(function(){
            return delayedColorChange('violet', 1000)
        })