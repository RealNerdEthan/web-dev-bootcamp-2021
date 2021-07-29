//PLEASE NOTE: this is the old and outdated way to make API requests and is for general knowledge purposes only

//This doesn't support promises

const request = new XMLHttpRequest();

request.onload = function (){
    console.log('All done with the rerquest!');
    console.log(this);
    const data = JSON.parse(this.responseText);
    console.log(data.ticker.price);
}

request.onerror = function(){
    console.log('Error!');
    console.log(this);
}

request.open('Get', 'https://api.cryptonator.com/api/ticker/btc-usd')
request.send();