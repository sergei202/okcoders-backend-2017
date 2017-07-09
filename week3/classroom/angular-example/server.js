var express = require('express');

var app = express();

app.listen(3001, function() {
	console.log('Listening on 3001');
});

// Mount the public directory at /
app.use('/', express.static('./public'));


/********************************************
 * This code is for list-server.html
 *******************************************/

// Create a simple array with some items
var list = ['Eggs','Milk','Bread'];

// Return all the items in the list
app.get('/list', function(req,res) {
	res.json(list);
});

// Add a new item to our list and then return the updated list.
// This allows us to add a new item using a GET request:  http://localhost:3000/list/add/my-new-item
app.get('/list/add/:item', function(req,res) {
	list.push(req.params.item);
	res.json(list);
});


/********************************************
 * This code is for http.html
 *******************************************/
var visitors = 0;
app.get('/visitors', function(req,res) {
	visitors++;				// Increase our visitors variable by 1
	res.json(visitors);		// Return the updated visitors count
});
