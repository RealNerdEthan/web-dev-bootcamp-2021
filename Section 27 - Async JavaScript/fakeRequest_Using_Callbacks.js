//This is setup as a fake example of how we'd use a promise to call data from an API. It's mimic a real world example of callback hell and how they work

const fakeRequestCallback = function(url, success, failure){
    const delay = Math.floor(Math.random() * 4500) + 500;
    setTimeout(function(){
        if(delay > 4000) {
            failure('Connection timed out')
        } else {
            success(`Here is your fake data from ${url}`)
        }
    }, delay)
}

//-------------------------------------------------------------
//Here is the function that calls the fake data using the functions from above

// fakeRequestCallback('books.com', function(response){
//     console.log('It worked!', response)
// }, function(error){
//     console.log('Fake Error', error)
// })

//Here are nested callbacks, these are in a chain and if one fails the following one doesn't run
fakeRequestCallback('books.com/page1', function(response){
    console.log('1st request worked', response)
    fakeRequestCallback('books.com/page2', function(response){
        console.log('2nd request worked', response)
        fakeRequestCallback('books.com/page3', function(response){
            console.log('3rd request worked', response)
        }, function(error){
            console.log('3rd request error', error)
        })
    }, function(error){
        console.log('2nd request error', error)
    })
}, function(error){
    console.log('1st request error', error)
})