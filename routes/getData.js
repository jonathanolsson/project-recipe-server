var fs = require("fs");

var obj = JSON.parse(fs.readFileSync('data.json', 'utf8'));

module.exports = obj;