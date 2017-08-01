var mongoose = require('mongoose');
mongoose.Promise = global.Promise;

// Connect to the okcoders database on localhost
mongoose.connect('mongodb://localhost/okcoders', {useMongoClient:true});

var ObjectId = mongoose.Schema.Types.ObjectId;

var Pet = mongoose.model('Pet', {
	name: String,
	favTreat: String,
	owner: {type:ObjectId, ref:'Owner'}
});

var Owner = mongoose.model('Owner', {
	name: String,
	location: String,
	age: Number
});
