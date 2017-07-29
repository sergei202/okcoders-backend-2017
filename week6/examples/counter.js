var mongoose = require('mongoose');
mongoose.Promise = global.Promise;

// Connect to the okcoders database on localhost
mongoose.connect('mongodb://localhost/okcoders', {useMongoClient:true});

// Define our Counter model
var Counter = mongoose.model('Counter', {
	name: String,
	count: Number
});


// This will get the counter document and create it if it doesn't exist
function getCounter(counterName) {
	console.log('getCounter() ', counterName);
	return Counter
		.findOne({name:counterName})
		.exec()
		.then(function(counter) {
			console.log('Counter.findOne returned ', counter);

			// counter will be null if it doesn't exist
			if(!counter) {
				// Create a new counter document with a count of zero
				counter = new Counter({count:0, name:counterName});
				// Return our saved new document
				return counter.save();
			}
			// If it does exist then just return it
			return counter;
		});
}

// Add one to counter.count and save it
function incrementCounter(counterName) {
	console.log('incrementCounter()');
	return getCounter(counterName).then(function(counter) {
		console.log('getCounter() returned ', counter);
		// At this point we have a counter document that we can increment
		counter.count++;
		// Return the saved document
		return counter.save();
	});
}

// incrementCounter('blue').then(console.log);
// incrementCounter('red').then(console.log);
// incrementCounter('cat').then(console.log);
// incrementCounter('phone').then(console.log);

incrementCounter('red')
	.then(function(counter) {
		console.log(counter.name, ' has been run ', counter.count, 'times!');
	});

incrementCounter('blue')
	.then(function(counter) {
		console.log(counter.name, ' has been run ', counter.count, 'times!');
	});
