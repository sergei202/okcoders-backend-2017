// Get a random number.  It will be between 0 and 1.  It is called a floating-point number.
// var randomNumber = Math.random();
// console.log(randomNumber);


// Math.round() will round a number of the closest integer
// console.log(Math.round(0.99));


// Get a random number between 0 and 10.
// var randomNumber = Math.random();		// randomNumber is between 0 and 1
// randomNumber = randomNumber * 10;		// randomNumber is between 0 and 10, but is a floating-point
// randomNumber = Math.round(randomNumber);
// console.log(randomNumber);




// Returns a random number between start and end
function randomRange(start,end) {
	// Get a random number
	var rand = Math.random();
	// Multiply it by the range (end-start)
	rand = rand * (end-start);
	// and offset by start
	rand = rand + start;
	// Round it to drop the decimal.
	rand = Math.round(rand);
	// Return!
	return rand;
}
// You can test our randomRange function with:
// console.log(randomRange(1,100));


// Export randomRange so it can be used by other scripts
exports.randomRange = randomRange;

// Export a secret number
exports.superSecretNumber = 202;
