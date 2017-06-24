// Load our express module
var express = require('express');

// Create a express server
var app = express();

// Listen on port 3000, http://localhost:3000/
app.listen(3000);

// Define a route at /
app.get('/', function(req,res) {
	res.send('<h1>Hello World from Sergei</h1>');
});

// Say hello [name]
app.get('/hello/:name', function(req,res) {
	// name is accessible from req.params.name
	res.send('<h1>Hello ' + req.params.name + '</h1>');
});

// Create a visit counter
var counter = 0;
app.get('/counter', function(req,res) {
	counter++;
	res.send('<h1>Counter: ' + counter + '</h1>');
});
