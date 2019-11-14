var express = require("express");
var app = express();
var appID = "26e379c13e6541d7ad63d493fceab562";
const bodyParser = require('body-parser');
var jsonData, currencies;
app.use(express.static('public'));
var path = require('path');
app.use('/public', express.static(__dirname + '/public'));
//app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', function(req, res) {
    res.sendFile(__dirname + '/index.html');
});

//request data from API, save as JSON to currencies
let urlCurrencies = 'https://openexchangerates.org/api/currencies.json';
var request = require('request');
request(urlCurrencies, function(err, response, body){
    if(err){
        console.log('error:', error);
    } else {
        currencies = JSON.parse(body);
    }
});
//send received data to client side
app.get('/currencies', function(req, res){
    res.send(currencies);
})

app.listen(3000, function() {
    console.log("Server is running")
});

app.post('/', function(req, res){
    res.sendFile(__dirname + '/index.html');
});

let url = 'https://openexchangerates.org/api/latest.json?app_id=26e379c13e6541d7ad63d493fceab562';
/*var request = require('request');


request(url, function (err, response, body) {
    if(err){
        console.log('error:', error);
    } else {
        let conRates = JSON.parse(body);
        jsonData = conRates;
        console.log(body);
        console.log("1 USD = " + conRates.rates.EUR + " EUR.");
        var convertToUSD = 1/conRates.rates.CZK;
        var convertToFinal = convertToUSD*conRates.rates.GBP;
        console.log("1 CZK = " +  convertToFinal + " GBP.");
    }
});*/
