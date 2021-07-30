//This is still promise based and built on top of FetchAPI but is shorter
axios.get('https://api.cryptonator.com/api/ticker/btc-usd')
    .then(function(response){
        console.log('Current Bitcoin price:', response.data.ticker.price)
    })
    .catch(function(error){
        console.log('Oops, encountered an error...', error)
    })

//Rewritten as an async function 
const fetchBitcoinPrice = async function(){
    try{
        const response = await axios.get('https://api.cryptonator.com/api/ticker/btc-usd')
        console.log(response.data.ticker.price)
    }
    catch(error){
        console.log(error)
    }
}