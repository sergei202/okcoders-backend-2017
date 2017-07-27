Week 5: Homework
====

This week's homework will be all about MongoDB and mongoose.  If you haven't already, please read the [overview](https://github.com/sergei202/okcoders-backend-2017/blob/master/week5/overview.md).

Let's start with some mongoose examples.

## Counter Example
Let's create a simple node program that counts the number of times it has been run.  It will consist of two functions: `getCounter()` and `incrementCounter()` .

Let's create a `counter.js` file and get mongoose setup:

```
var mongoose = require('mongoose');
mongoose.Promise = global.Promise;

mongoose.connect('mongodb://localhost/okcoders');	// Use okcoders database
```


Our Counter model will be very simple:
```
var Counter = mongoose.model('Counter', {
	count: Number
});
```

### `getCounter()`
We know we can use `Counter.find()` to get all the documents in the counter collection.  But since our collection will only have one document we can use `Counter.findOne()` to get the first matching document:

```
function getCounter() {
	return Counter.findOne().exec();	// Return the first document
}
```

But what if this is the first time we run our program and there are not counter documents?  Let's change our code to create a new counter document if it doesn't exist:

```
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
```

Let's test our code:
```
getCounter().then(function(counter) {
	console.log('counter = ', counter);
});
```

We should see something like: `counter =  { _id: 5979126ad9793539ba75284d, count: 1, __v: 0 }
`

### `incrementCounter()`
Our `incrementCounter()` function will simply take the counter document from `getCounter()` and increment the `count` property and save it.

```
function incrementCounter() {
	return getCounter().then(function(counter) {
		// At this point we have a counter document that we can increment
		counter.count++;
		// Return the saved document
		return counter.save();
	});
}
```

Let's test our function:
```
incrementCounter().then(function(counter) {
	console.log('counter = ', counter);
});
```

Running this a few times we see our count property increase!

Let's change our output to be a bit more friendly:

```
incrementCounter().then(function(counter) {
	console.log('This program has been run', counter.count, 'times!');
});
```

See [`counter.js`](https://github.com/sergei202/okcoders-backend-2017/blob/master/week5/homework/counter.js) for the full example.

## Counter Homework
Take the example above and change it allow us to track multiple counters.

I want to be able to do things like:
```
incrementCounter('start');
...
incrementCounter('visits');
...
getCounter('returns');
```

Some hints:
- You'll need to add a `name` property to the `Counter` model
- `getCounter()` will also need an argument to identify which counter we want
- Same goes for `incrementCounter()`
- Remember that `find()` and `findOne()` both take a query object
