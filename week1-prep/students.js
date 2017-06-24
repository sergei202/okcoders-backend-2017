var students = [
	{name:'Sergei',	grade:0.9,	age:33},
	{name:'Alice',	grade:0.8,	age:24},
	{name:'John', 	grade:0.94,	age:48},
	{name:'Sarah',	grade:0.73,	age:29}
];

// Pass a student object to have it outputted to the console
function outputStudent(student) {
	console.log(student.name, student.grade*100, student.age);
}

// Method 1 of outputting students: a for loop
for(var i=0;i<students.length;i++) {
	outputStudent(students[i]);
}

// Method 2 of outputting students: Array.forEach
students.forEach(outputStudent);
