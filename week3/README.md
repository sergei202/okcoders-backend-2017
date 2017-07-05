Week 2
====

So far we have learned how to use express routes and how to create simple API's with them.

This week we're going to learn how to integrate a front-end website with a back-end server.  We'll use `express.static()` for that.

We will also introduce _AngularJS_, a full front-end framework.


## Express Static Middleware


`express.static(path)` allows us to serve static content from a specific path (directory/folder).  It is an *express middleware*, so we have to tell express where we want our static content to show up, this is called the *mount point*. It is just another route, usually `'/'`.

`app.use(mountPath, express.static(filePath))`

`mountPath` is _where_ it will be served.
`filePath` is _what_ is being served

Here is a simple app that will serve whatever files are in the current directory:
```js
var express = require('express');         // Don't forget to install the express module

var app = express();                      // Create our express app

app.use('/', express.static('./'));       // Tell express to mount whatever files are in the current directory at /

app.listen(3000);                         // Start our server

console.log('Listening at http://localhost:3000/');

```

If you saved the file as `static.js`, you can go to `http://localhost:3000/static.js` to view it.

Create a new file called `index.html` and add some html code: `<h1>Hello World</h2>`.  You can access it at `http://localhost:3000/index.html`.  You can also access it at `http://localhost:3000/`, how can this be?  The file name `index.html` is special.  If you don't specify a filename, express will automatically try to serve `index.html`.

You add files to that directory and you can access them from the browser. Try adding some images.  You just made a web server!


### Express Static Organization and Security

As we demonstrated above, serving the current directory also exposes your server-side code (node js files). For our simple/demo projects, it's not a big deal.  But in the real world you might have API keys and other sensitive information inside your code.  We don't people to have access to it.

Our directory will also get messy as we start adding more static files to our project.

We solve both problems with the same solution: We store our static files in a separate directory from our code and only expose that directory to `express.static()`.

If we put all of our static files inside a child directory called `public`, we can serve only it's contents:
```js
app.use('/', express.static('./public'));
```

Remember, `/` is the *mount point* for this static content in our express app.  `./public` is the relative path to the *public* folder from our node program.


## AngularJS

We will start also AngularJS this week.  AngularJS is a huge framework, so I'd like everyone to spend a little time getting familiar with the concepts.  Here are some great resources:

- [TutorialsPoint](http://www.tutorialspoint.com/angularjs/index.htm)
- [w3schools AngularJS Tutorial](http://www.w3schools.com/angular/)
- [Official AngularJS Tutorial](https://docs.angularjs.org/tutorial)
- [Code School AngularJS Tutorial](https://www.codecademy.com/learn/learn-angularjs)


## Bootstrap

We will start using Bootstrap in our front-end code.  If you are not familiar with Bootstrap, please read up on it.  Here are a few resources:

- [w3schools](http://www.w3schools.com/bootstrap/bootstrap_get_started.asp)
- [Bootstrap Examples](http://getbootstrap.com/getting-started/#examples)
- [Bootstrap CSS Docs](http://getbootstrap.com/css/)
- [Bootstrap Component Docs](http://getbootstrap.com/components/)

Bootstrap is also a huge framework, you don't need to know all of it.  Here are the areas you will need to know:

- Grid System (rows/columns)
- Panels
- Form Controls
