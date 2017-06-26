ExpressJS
====

Express is a framework which allows us to turn our Node programs into a web server and handle routes.

Read Express's [Hello World](https://expressjs.com/en/starter/hello-world.html) and
[Basic Routing](https://expressjs.com/en/starter/basic-routing.html) first to make sure you understand the basics of Express.

## Setup

First create a new directory for our express programs:

`mkdir express-examples`

Now let's **change** into that **directory**:

`cd express-examples`

We need to install the `express` package before we use it in our program:

`npm install express`

## Hello World

Let's create a very simple Express program.  This will simply output 'Hello World'.

```
// Load our express module
var express = require('express');

// Create a express server
var app = express();

// Listen on port 3000, http://localhost:3000/
app.listen(3000);

// Add a route handler at / and send Hello World
app.get('/', function(req,res) {
	res.send('<h1>Hello World!</h1>');
});
```

Save the code above as `hello.js` and run with `node hello.js`.  Point your web browser to http://localhost:3000/ to see the magic.


## Math Server
Let's create a simple server that can do math for us using routes:

`/add/10/55` with return `65`

`/add/x/y` with return `x`+`y`

In order to do this we need our route to be dynamic, so we can capture any `x` and `y` the user enters.

#### Route Paramaters

Read Express's [Routing Guide section on Route Paramaters](https://expressjs.com/en/guide/routing.html#route-parameters) before we continue.

Now we see that we can define our route as `/add/:x/:y` and access `x` and `y` using `req.params`.

Let's write some code and give this a try!

```
// Load express module and immediately create our express server
var app = require('express')();

// Listen on port 3000, http://localhost:3000/
app.listen(3000);

// Add a route handler at / and send Hello World
app.get('/add/:x/:y', function(req,res) {
	var x = req.params.x;
	var y = req.params.y;
	var result = x + y;
	res.send('You sent <b>' + x + '</b> and <b>' + y + '</b>.  Those added together is: <b>' + result + '</b>.');
});
```

Save and run our program!  Visit http://localhost:3000/add/100/500 to test it.

Wait, something doesn't seem right.  We should have gotten `600` but instead we got `100500`.  What's going on??

It looks like express is giving our params as strings, not numbers.  Let's convert them to numbers, we can do this a couple of different ways:

- Add a `+` before a string to (attempt to) convert it into a number: `+'555' === 555`

- Pass the string into `Number()`: `Number('555') === 555`

Our route handler looks like this now:

```
app.get('/add/:x/:y', function(req,res) {
	var x = Number(req.params.x);
	var y = Number(req.params.y);
	var result = x + y;
	res.send('You sent <b>' + x + '</b> and <b>' + y + '</b>.  Those added together is: <b>' + result + '</b>.');
});
```

Now give our program another try!
