// Array of student objects with an inline array of test scores
var students = [
	{name:'Sergei', tests: [8,9,6,5]},
	{name:'Alice',	tests: [8,3,4,8]},
	{name:'John', 	tests: [3,8,7,4]},
	{name:'Sarah',	tests: [9,9,8,9]}
];

// How to access Sergei's 2nd test score?
// console.log(students[0].tests[1]);

// Loop thru all students and assign them a grade
students.forEach(getStudentGrade);
// Output the students array with all the students
console.log(students);

// Calculate the average of the tests and output
function getStudentGrade(student) {
	// Get the average of the students tests and store in grade variable
	var grade = averageArray(student.tests);
	// Assign grade property to student object
	student.grade = grade;
	return student;
}

// Returns the average of an array of numbers
function averageArray(array) {
	// average = sum / number of elements
	return sumArray(array) / array.length;
}
// console.log(averageArray([10,15,20]));

// Adds all the elements of the passed and array and returns the value.
function sumArray(array) {
	var sum = 0;
	for(var i=0;i<array.length;i++) sum += array[i];
	return sum;
}
