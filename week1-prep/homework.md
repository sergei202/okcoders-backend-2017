ExpressJS Homework
====

Let's make sure everyone is comfortable creating and working with express route handlers.  We'll start by adding to our Express Math Server.

### Subtract, Multiply and Divide

Take the `math.js` example from **[express](https://github.com/sergei202/okcoders-backend-2017/blob/master/week1-prep/express.md)** and add routes for us to be able to do subtraction, multiplication and division.

### Dice

Add another route `/dice` that will return a random number between 1 and 6.

We'll use the `randomRange()` function we wrote in [**random.js**](https://github.com/sergei202/okcoders-backend-2017/blob/master/week1-prep/classroom/random.js).

First simply copy the function into our program and get it working.

After that is successful, remove the function and then  try using `require()` to include our random module and reference our function that way.

### Counter

Finally, create a new program called `counter.js`.

Create three routes:

- `/` will return the current counter (starts at zero)
- `/increase` will increase the counter by 1
- `/decrease` will decrease the counter by 1

#### Counter Bonus
As a bonus, add routes to allow you to increase and decrease the counter by any number the user passes:

- `/increase/50` will increase the counter by 50
- `/decrease/35` will decrease it by 35
