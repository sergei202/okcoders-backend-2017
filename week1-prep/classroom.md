Javascipt and NodeJS Basics
====
We reviewed some Javascript basics and explored the NodeJS environment.
Here are some of the programs we created and brief descriptions of them.

#### [**hello.js**](https://github.com/sergei202/okcoders-backend-2017/blob/master/week1-prep/classroom/hello.js)

Probably the simplest NodeJS program possible.  Just prints `Hello World` to the console.

Remember that after saving our file (as `hello.js` in this example), we need to open a Terminal and go the the directory with that file in it.  Once there, run with `node hello.js`.

#### [**loops.js**](https://github.com/sergei202/okcoders-backend-2017/blob/master/week1-prep/classroom/loops.js)

Various types of loops: `for`, `while`, and `Array.forEach`.  Most of the examples are commented out, you will need to remove the comment (`//`) in order to run that line.


#### [**sum.js**](https://github.com/sergei202/okcoders-backend-2017/blob/master/week1-prep/classroom/sum.js)

Here we wrote a simple function to sum an array of numbers.


#### [**shapes.js**](https://github.com/sergei202/okcoders-backend-2017/blob/master/week1-prep/classroom/shapes.js) and [**shapesMain.js**](https://github.com/sergei202/okcoders-backend-2017/blob/master/week1-prep/classroom/shapesMain.js)


In `shapes.js` we created two functions to compute the area of a rectangle and a circle and we exported them so we could use them from a different program, `shapesMain.js`.

If `exports` and `require` still seem confusing, read this
[SitePoint Module Tutorial](https://www.sitepoint.com/understanding-module-exports-exports-node-js/).


#### [**random.js**](https://github.com/sergei202/okcoders-backend-2017/blob/master/week1-prep/classroom/random.js)

Here we explored how to generate random numbers using `Math.random()`, and how we can round them using `Math.round()`.  We used both of those to create a `randomRange()` function that will return a random integer between any two numbers.

We also exported our function using `exports` so it could be used in `dice.js`.

#### [**dice.js**](https://github.com/sergei202/okcoders-backend-2017/blob/master/week1-prep/classroom/dice.js)

Here we use `random.js` to simulate throwing a die 600 times and counting up the results to see how random they truly are.

#### [**students.js**](https://github.com/sergei202/okcoders-backend-2017/blob/master/week1-prep/classroom/students.js)

Here we explore objects and arrays of objects.  We define an array of students and use different methods to output each student object.

#### [**students2.js**](https://github.com/sergei202/okcoders-backend-2017/blob/master/week1-prep/classroom/students2.js)

Here we extend our student example and assign each student an array of test scores.  We want to find the average of those test scores and assign it to the student object.

We first created a `sumArray()` function, then we used that to create an `averageArray()` function.

We then created a `getStudentGrade()` function to take in a `student` object and assign a `grade` property.  We finally iterate over all of the students using `forEach` and output the results.

#### [**webserver.js**](https://github.com/sergei202/okcoders-backend-2017/blob/master/week1-prep/classroom/webserver.js)

Here we dived into `express` and created a very simple web server!

After you save, you will need to install the `express` package with `npm install express`.
Then run `webserver.js` and open a browser and go to http://localhost:3000/ to see the `/` route handler.

We also created routes to echo your name: http://localhost:3000/hello/david

And even a simple visitor counter: http://localhost:3000/counter

See [**express**](https://github.com/sergei202/okcoders-backend-2017/blob/master/week1-prep/express.md) for an overview of ExpressJS.
