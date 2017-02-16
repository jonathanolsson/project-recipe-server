var express = require("express");
var test = express.Router();

test.get('/', function(req, res){
	res.json({"message":"Hello to the world of testing!", "quantity":"All of dem!"});
});

module.exports = test;