var express = require("express");
var app = express();

app.listen(4000, function() {
	console.log("Listening to localhost:4000");
});

app.get('/', function(req, res){
	res.send("Hello world!");
});

var test = require("./routes/test.js");

app.use('/test', test);






