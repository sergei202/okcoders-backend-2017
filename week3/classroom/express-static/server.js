var express = require('express');

var app = express();

app.listen(3000, function() {
	console.log('Listening');
});


app.use('/', express.static('./public'));

app.get('/index.html', function(req,res) {
	res.send('Not here');
});


app.get('/bobby', function(req,res) {
	res.json([1,2,3]);
});

app.get('/:name', function(req,res) {
	res.json({name: req.params.name});
});
