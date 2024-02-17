var btc = document.getElementById('bitcoin')
var eth = document.getElementById('etherem')
var doge = document.getElementById('dogecoin')

var settings ={
    "async":true,
    "scrossDomain":true,
    "url": "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin%2Cethereum%2Cdogecoins&vs_currencies=usd",
    "method":"GET",
    "headers":{}
}

$.ajax(settings).done(function(response){
    btc.innerHTML = response.bitcoin.usd;
    eth.innerHTML = response.etherem.usd;
    doge.innerHTML = response.dogcoin.usd;
});