var express = require("express");
var app = express();

app.get('/', function(req, res) {
    res.send("Hello from app.js!")
});

app.listen(3000, function() {
    console.log("Server is running")
});
