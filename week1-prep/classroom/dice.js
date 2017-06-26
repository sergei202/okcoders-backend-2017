var random = require('./random');

// Our dice throws
var throws = [];

// Stores counts of the faces thrown
var faces = [null, 0,0,0,0,0,0];

for(var i=0;i<600;i++) {
	// Get a dice throw,  will be 1-6
	var dice = throwDice();
	// Add the throw to our array of throws
	throws.push(dice);
	// Increment the faces counter at the dice index.
	faces[dice]++;
}

// Uncomment this if you want to see the individual throws.
// console.log('throws: ', throws);

console.log('faces:  ', faces);


// Define a function to return 1-6
function throwDice() {
	return random.randomRange(1,6);
}
