var numbers1 = [1,44,44,33,918];
var numbers2 = [1,5,202,608];

function getTotal(array) {
	var total = 0;
	for(var i=0;i<array.length;i++) {
		total += array[i];
	}
	return total;
}

console.log('numbers1 total: ', getTotal(numbers1));
console.log('numbers2 total: ', getTotal(numbers2));
