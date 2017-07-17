var express = require('express');

var app = express();

app.listen(3000, function() {
	console.log('Listening on 3000');
});

// Mount the public directory at /
app.use('/', express.static('./public'));

var catVotes = 0;
var dogVotes = 0;


// These routes just return the value without modifying them
app.get('/catVotes', function(req,res) {
	res.json(catVotes);
});
app.get('/dogVotes', function(req,res) {
	res.json(dogVotes);
});

app.get('/votes', function(req,res) {
	res.json({
		catVotes: catVotes,
		dogVotes: dogVotes
	});
});

/// These modify the value and then return them
app.get('/catVotes/vote', function(req,res) {
	catVotes++;
	res.json(catVotes);
});
app.get('/dogVotes/vote', function(req,res) {
	dogVotes++;
	res.json(dogVotes);
});
