var express = require("express");
var app = express();
var appID = "26e379c13e6541d7ad63d493fceab562";

app.get('/', function(req, res) {
    res.send("Hello from app.js!")
});

app.listen(3000, function() {
    console.log("Server is running")
});

let url = 'https://openexchangerates.org/api/latest.json?app_id=26e379c13e6541d7ad63d493fceab562';
var request = require('request');

request(url, function (err, response, body) {
    if(err){
        console.log('error:', error);
    } else {
        console.log(body);
    }
});
