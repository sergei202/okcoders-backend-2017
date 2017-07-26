var mongoose = require('mongoose');

mongoose.Promise = global.Promise;	// Tell mongoose to our ES6 promises

// Connect to our local MongoDB instance and use the 'okcoders' database
mongoose.connect('mongodb://localhost/okcoders', {
	useMongoClient: true
});

// Create an Item model
var Item = mongoose.model('Item', {
	name: String,
	price: Number,
	qty: Number
});

// var doc = new Item({
// 	name: 'Rock Food',
// 	price: 1.99,
// 	qty: 4,
// 	color: 'blue'
// });
// doc.save();
// console.log('doc: ', doc);

getItems();

function getItems() {
	Item.find().then(function(items) {
		console.log('items: %j', items);
	});
}
