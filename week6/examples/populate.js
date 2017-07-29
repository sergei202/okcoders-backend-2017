/**
 * This examples shows how to use populate().
 * populate() is a way to join different collections.
 * Similar to a MySQL join.
 *
 * Here we are going to create a two collections: authors and books.
 * We'll have a few authors and each one will have 3 books each.
 * We want to save a reference to each author in each book document.
 * We can use the author._id ObjectId to do that.
 *
 * Our program will two two things: initialize() and display()
 *     initialize() will create the data if it doesn't exist
 *     display() will display all the books with the author populated
 */

var mongoose = require('mongoose');

mongoose.Promise = global.Promise;

// Connect to our local MongoDB instance and use the 'okcoders' database
mongoose.connect('mongodb://localhost/okcoders', {
	useMongoClient: true
});

// Our Author model with a few fields
var Author = mongoose.model('Author', {
	name: String,	// author's name
	url: String,	// author's website
	rating: Number	// author's rating (eg: 5 stars)
});

// Our Book model with a reference to the Author model
var Book = mongoose.model('Book', {
	// We create a author property that is an ObjectId pointing to our Author model
	author: {type:mongoose.Schema.Types.ObjectId, ref:'Author'},
	name: String,	// book's name
	price: Number	// book's price
});

// Create some dummy data if it doesn't exist
function initialize() {
	// Count the number of author documents.
	return Author.count().exec().then(function(authorCount) {
		// If authorCount is non-zero then bail out because the data already exists.
		if(authorCount) return;

		console.log('Creating data...');

		// Create an array of author objects
		var authorObjs = [
			{name:'Pierce Brown', url:'http://www.pierce-brown.com/'},
			{name:'Stephen King', url:'https://www.stephenking.com/'},
			{name:'Tim Ferriss',  url:'https://tim.blog/'}
		];

		// We want to take our author objects and turn them into author documents
		// We can use Array.map() to transform them.
		var authorDocs = authorObjs.map(function(authorObj) {
			return new Author(authorObj);
		});

		// Let's create some books
		var bookObjs = [
			// Pierce Brown books
			{author:authorDocs[0]._id, name:'Red Rising',     isbn:'0553390791'},
			{author:authorDocs[0]._id, name:'Golden Sun',     isbn:'0345539818'},
			{author:authorDocs[0]._id, name:'Morning Star',   isbn:'0345539842'},
			// Stephen King books
			{author:authorDocs[1]._id, name:'The Dark Tower', isbn:'3053790796'},
			{author:authorDocs[1]._id, name:'The Stand',      isbn:'4045239818'},
			// Tim Ferriss books
			{author:authorDocs[2]._id, name:'The 4-Hour Workweek', isbn:'9780307465351'},
			{author:authorDocs[2]._id, name:'The 4-Hour Body',     isbn:'9780307465352'}
		];

		// We're going to again transform our array of objects into an array of documents
		var bookDocs = bookObjs.map(function(bookObj) {
			return new Book(bookObj);
		});

		// Now we need to save all of our documents.
		// We can combine (concatenate) our two arrays into one and save each documents
		var allDocs = authorDocs.concat(bookDocs);

		// We now want to save all of our documents and collect the promises from save()
		var promises = allDocs.map(function(document) {
			return document.save();
		});

		// Finally we want to wait until all the documents finish saving.
		// We'll use Promise.all() for that
		return Promise.all(promises);
	});
}


function display() {
	return Book
		.find()					// Find all books.  find({}) would do the same thing
		.populate('author')		// populate the author property
		.exec()					// execute our query
		.then(console.log);		// after the query is done, display the data
}


initialize().then(display);
