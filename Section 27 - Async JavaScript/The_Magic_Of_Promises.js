//This is a preconstructed function to simulate calling a webAPI for the purposes of demoing below
const fakeRequestPromise = function(url) {
    return new Promise(function(resolve, reject){
        const delay = Math.floor(Math.random() * (4500)) + 500;
        setTimeout(function(){
            if (delay > 4000){
                reject('Connection timed out')
            } else {
                resolve(`Here is your fake data from ${url}`)
            }
        }, delay)
    })
}


//This is the less optomized nested way of using promises that we're going to rewrite
// const request = fakeRequestPromise('yelp.com/api/coffee/page1');

//fakeRequestPromise('yelp.com/api/coffee/page1')
    // request.then(function(){
    //     console.log('Promise #1 resolved...Data successfully recieved from source #1!')
    //     fakeRequestPromise('yelp.com/api/coffee/page2')
    //         .then(function(){
    //             console.log('Promise #2 resolved...Data successfully recieved from source #2')
    //         }).catch(function(){
    //             console.log('Promise #2 rejected...On no, error encountered with source #2!')
    //         })
    // }).catch(function(){
    //     console.log('Promise rejected...On no, error encountered from source #1!')
    // })


//This is the same as the above code but rewritten to be more efficent. We also added a print out of the data from fakeRequestPromise
fakeRequestPromise('yelp.com/api/coffee/page1')
    .then(function(data){
        console.log('Promise #1 resolved...Data successfully recieved from source #1!')
        console.log(data)
        return fakeRequestPromise('yelp.com/api/coffee/page2')
    })
    .then(function(data){
        console.log('Promise #2 resolved...Data successfully recieved from source #2!')
        console.log(data)
        return fakeRequestPromise('yelp.com/api/coffee/page3')
    })
    .then(function(data){
        console.log('Promise #3 resolved...Data successfully recieved from source #3!')
        console.log(data)
    })
    .catch(function(err){
        console.log('Oh no! A request failed...')
        console.log(err)
    })