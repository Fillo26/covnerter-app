var express = require("express");
var app = express();
var appID = "26e379c13e6541d7ad63d493fceab562";
app.use(express.static('public'));
app.set('view engine', 'ejs');


app.get('/', function(req, res) {
    res.render('index.ejs',{message:'errorMessage'});
});

app.listen(3000, function() {
    console.log("Server is running")
});

let url = 'https://openexchangerates.org/api/latest.json?app_id=26e379c13e6541d7ad63d493fceab562';
var request = require('request');

/*request(url, function (err, response, body) {
    if(err){
        console.log('error:', error);
    } else {
        let conRates = JSON.parse(body);
        console.log(body);
        console.log("1 USD = " + conRates.rates.EUR + " EUR.");
        var convertToUSD = 1/conRates.rates.CZK;
        var convertToFinal = convertToUSD*conRates.rates.GBP;
        console.log("1 CZK = " +  convertToFinal + " GBP.");
    }
});*/
