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

//Examples below of promises and how to nest them (could continue with a page 3/4/5 etc)
//Note that this isn't the best way to use promises, but it is technically possible

const request = fakeRequestPromise('yelp.com/api/coffee/page1');

request.then(function(){
    console.log('Promise #1 resolved...Data successfully recieved from source #1!')
    fakeRequestPromise('yelp.com/api/coffee/page2')
        .then(function(){
            console.log('Promise #2 resolved...Data successfully recieved from source #2')
        }).catch(function(){
            console.log('Promise #2 rejected...On no, error encountered with source #2!')
        })
}).catch(function(){
    console.log('Promise rejected...On no, error encountered from source #1!')
})