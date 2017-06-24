var random = require('./random');

// Our dice throws
var throws = [];

// Stores counts of the faces thrown
var faces = [null, 0,0,0,0,0,0];

for(var i=0;i<600;i++) {
	var dice = throwDice();
	throws.push(dice);
	faces[dice]++;
}

// console.log('throws: ', throws);
console.log('faces:  ', faces);


// Define a function to return 1-6
function throwDice() {
	return random.randomRange(1,6);
}
