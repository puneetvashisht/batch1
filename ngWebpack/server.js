var express = require('express');
var app = express();

var bodyParser = require('body-parser');

app.use(express.static(__dirname+"/dist"));
app.use(bodyParser.json()); // get information from html forms
app.use(bodyParser.urlencoded({ extended: true }));

app.listen(8080, 'localhost', function(){
	console.log("Node is running at localhost:8080");
});