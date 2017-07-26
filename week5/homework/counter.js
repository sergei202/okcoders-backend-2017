var mongoose = require('mongoose');
mongoose.Promise = global.Promise;

// Connect to the okcoders database on localhost
mongoose.connect('mongodb://localhost/okcoders', {useMongoClient:true});

// Define our Counter model
var Counter = mongoose.model('Counter', {
	count: Number
});


// This will get the counter document and create it if it doesn't exist
function getCounter() {
	return Counter.findOne().exec().then(function(counter) {
		// counter will be null if it doesn't exist
		if(!counter) {
			// Create a new counter document with a count of zero
			counter = new Counter({count:0});
			// Return our saved new document
			return counter.save();
		}
		// If it does exist then just return it
		return counter;
	});
}

// Add one to counter.count and save it
function incrementCounter() {
	return getCounter().then(function(counter) {
		// At this point we have a counter document that we can increment
		counter.count++;
		// Return the saved document
		return counter.save();
	});
}


incrementCounter().then(function(counter) {
	console.log('This program has been run', counter.count, 'times!');
});
