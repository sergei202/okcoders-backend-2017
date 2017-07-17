var express = require('express');

var app = express();

app.listen(3000, function() {
	console.log('Listening on 3000');
});

// Mount the public directory at /
app.use('/', express.static('./public'));
