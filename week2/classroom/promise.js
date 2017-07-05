// Create a resolved promise
// var promise = Promise.resolve('done');
// promise.then(console.log);

function mult(value) {
	return Promise.resolve(value*2);
}

var p = Promise.resolve(100);

p.then(mult).then(mult).then(mult).then(console.log);








/*
function delay(ms,value) {
	return new Promise(function(resolve,reject) {
		setTimeout(function() {
			if(Math.random()<0.10) return reject('error');
			resolve(value);
		}, ms);
	});
}

return delay(1000,'taskA')
	.then(function() {
		console.log('Starting B');
		return delay(1000,'taskB');
	})
	.then(function() {
		console.log('Starting C');
		return delay(1000,'taskC');
	})
	.then(function() {
		console.log('Starting D');
		return delay(1000,'taskD');
	})
	.then(function() {
		console.log('All done');
	})
	.catch(function(err) {
		console.log('caught error: ', err);
	});
*/
