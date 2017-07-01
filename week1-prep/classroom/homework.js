var express = require('express');
var random = require('./random');

var app = express();

app.listen(3000, function(err) {
	if(err) return console.error(err);
	console.log('Listening at http://localhost:3000');
});

var myCounter=0;
app.get('/counter', function(req,res) {
	res.json(myCounter);
});

app.get('/counter/increase', function(req,res) {
	myCounter++;
	res.json(myCounter);
});

app.get('/counter/decrease', function(req,res) {
	myCounter--;
	res.json(myCounter);
});

app.get('/counter/increase/:amount', function(req,res) {
	myCounter += Number(req.params.amount);
	res.json(myCounter);
});


app.get('/counter/decrease/:amount', function(req,res) {
	myCounter -= Number(req.params.amount);
	res.json(myCounter);
});








app.get('/dice', function(req,res) {
	res.json(random.randomRange(1,6));
});


app.get('/add/:x/:y', function(req,res) {
	var x = Number(req.params.x);
	var y = Number(req.params.y);
	console.log('add handler: %j %j', x, y);
	res.json(x+y);
});

app.get('/sub/:x/:y', function(req,res) {
	var x = Number(req.params.x);
	var y = Number(req.params.y);
	console.log('sub handler: %j %j', x, y);
	res.send('Answer: ' + (x-y));
});

app.get('/div/:x/:y', function(req,res) {
	var x = Number(req.params.x);
	var y = Number(req.params.y);
	console.log('div handler: %j %j', x, y);
	res.send('Answer: ' + (x/y));
});

app.get('/mult/:x/:y', function(req,res) {
	var x = Number(req.params.x);
	var y = Number(req.params.y);
	console.log('mult handler: %j %j', x, y);
	res.send('Answer: ' + (x*y));
});
