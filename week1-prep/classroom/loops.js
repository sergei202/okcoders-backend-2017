// Loop and output index 5 times
// for(var i=0;i<5;i++) console.log(i);

// Count indefinitely.  You will need to use Ctrl-C to kill node to stop the program.
// var i=0;
// for(;;) console.log(i++);

// Loop 0 to 9 using a while loop
// var i = 0;
// while(i<10) console.log(i++);

// Define an array and loop thru it using forEach
var numbers = [1,2,3,4,5];
numbers.forEach(function(n,index,array) {
	console.log(n);
});

// Define an inline array and output to console.  forEach passes: element,index,array
// [1,3,5,7,9,11].forEach(console.log);
