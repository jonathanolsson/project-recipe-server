var express = require("express");
var test = express.Router();
var fs = require('fs');
var data = require("./getData.js");

test.get('/', function(req, res){
	res.send(data);
});

module.exports = test;