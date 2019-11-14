var express = require("express");
var app = express();
const bodyParser = require('body-parser');
var currencies, conRates;
app.use(express.static('public'));
app.use('/public', express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({ extended: true }));

//********************************send HTML site to the user************************************
app.get('/', function(req, res) {
    res.sendFile(__dirname + '/index.html');
});

//*****************request currency data from API, save as JSON to currencies**********************
let urlCurrencies = 'https://openexchangerates.org/api/currencies.json';
let requestCur = require('request');
requestCur(urlCurrencies, function(err, response, body){
    if(err){
        console.log('error:', error);
    } else {
        currencies = JSON.parse(body);
    }
});

//*****************request currency rates data from API, save as JSON to conRates*****************
let url = 'https://openexchangerates.org/api/latest.json?app_id=26e379c13e6541d7ad63d493fceab562';
let request = require('request');
request(url, function (err, response, body) {
    if(err){
        console.log('error:', error);
    } else {
        conRates = JSON.parse(body);
    }
});

//**********************************send received data to client side****************************
app.get('/currencies', function(req, res){
    res.send(currencies);
});

//***************************************launch the server***************************************
app.listen(3000, function() {
    console.log("Server is running")
});

//*****************Receive data from client, calculate conversion ,send result back to client*******
app.get('/convert/:amount-:from-:to', function(req, res){
    const amount = req.params.amount;
    const from = req.params.from;
    const to = req.params.to;
    console.log(amount,from,to);
    if(from === "USD"){
        result = amount * conRates.rates[to];
    }else{
        let midResult = amount / conRates.rates[from];
        result = midResult * conRates.rates[to];
    }
    res.json(result);
});