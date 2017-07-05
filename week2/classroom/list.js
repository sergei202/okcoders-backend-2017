// Require the express module.  Make sure you install it first with: npm install express
var express = require('express');

// Create an express server
var app = express();

// Listen on port 3000 and let us know when the server is ready
app.listen(3000, function(err) {
	if(err) return console.error(err);
	console.log('Listening at http://localhost:3000/');
});

// Define our list with a few items
var list = ['apples', 'pears', 'cats'];


// Return all the items in our list
// http://localhost:3000/
app.get('/', function(req,res) {
	res.json(list);
});


// Add a new item
// http://localhost:3000/add/my-new-item
app.get('/add/:item', function(req,res) {
	// Create a variable to reference our item (we could skip this step)
	var item = req.params.item;
	// We push our new item onto our list array
	list.push(item);
	// We return our list that now has the new item in it
	res.json(list);
});

// Remove an item
// http://localhost:3000/remove/cats
app.get('/remove/:item', function(req,res) {
	// We first need to find the index of the item in our list array
	var index = list.indexOf(req.params.item);
	// If the index is -1 then the item wasn't found and we bail out
	if(index==-1) return res.json('Not a valid item!');
	// We remove one item at index position
	list.splice(index,1);
	// We return the list
	res.json(list);
});
