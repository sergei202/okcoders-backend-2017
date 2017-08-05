Week 7
====

This week we will learn how to host our applications on Heroku and our MongoDB databases on mLab.

### Heroku

Sign up for a free Heroku account at https://www.heroku.com/.

Once your account is created, please read this [Heroku tutorial](https://devcenter.heroku.com/articles/getting-started-with-nodejs#introduction) on how to install and setup Heroku.

- Create a new Heroku application from the Heroku dashboard
- We're going to follow the Heroku Git deployment method
- If you haven't already, run `heroku login` from the command line
- Create a new directory
- `git init`
- `heroku git:remote -a your-heroku-app` (replace with your app's name)
- Once you are ready to deploy:
	- Add your code: `git add *.js`
	- Commit your code: `git commit -m "My commit mesage"`
	- Push to Heroku: `git push heroku master`

One pitfall is when running express, we need need to use the port that Heroku tells us:

`var port = process.env.PORT || 3000;`

Once it's deployed, Click the `Open App` button on the Heroku dashboard to view your app!


### mLab

mLab is a MongoDB DaaS (Database-as-a-Service) that has a free tier, up to a 500MB database.

- Create a new account at https://mlab.com
- Create a new MongoDB Deployment
- Select AWS (Amazon Web Services)
- Select Sandbox plan type
- Select the US region
- Give your database a name (`okcoders`)
- Once it's created, add a database user
- Add a Robomongo connection to it using the details shown
