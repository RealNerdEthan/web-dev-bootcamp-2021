//Promise version of Fetch API (the benefit of this is that making multiple requests in a series is super easy to do and you can set seperate eror codes for each fetch)
// fetch('https://api.cryptonator.com/api/ticker/btc-usd')
//     .then(function(response){
//         console.log('Response, waiting to parse...', response)
//         return response.json()
//     })
//     .then(function(data){
//         console.log('Data parsed...', data)
//         console.log('Current price:', data.ticker.price)
//     })
//     .catch(function(error){
//         console.log('Oh no, encountered an error!', error)
//     })


//ASync version of Fetch API built on top of promises
const fetchBitcoinPrice = async function(){
    try {
        const response = await fetch('https://api.cryptonator.com/api/ticker/btc-usd')
        const data = await response.json();
        console.log('Current price:', data.ticker.price)
    }
    catch(error) {
        console.log('Oh no, error encountered!', error)
    }
}