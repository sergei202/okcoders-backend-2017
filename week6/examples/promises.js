function delay(time) {
	return new Promise(function(resolve,reject) {
		setTimeout(function() {
			console.log('delay done');
			resolve();
		}, time);
	});
}

console.log('start of program');
delay(1000)
	.then(function() {return delay(1000);})
	.then(function() {
		console.log('all delays done');
	});


console.log('end of program');
