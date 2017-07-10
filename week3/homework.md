Week 3: Homework
====

The homework will be divided into 3 smaller assignments.

## Thermostat
Create a simple Angular web app that functions like a thermostat:
- Display the current temperature (default to 70)
- A Down/Decrease button that will reduce the temp by 1 degree (limit to 60)
- A Up/Increase button that will increase the temp by 1 degree (limit to 80)
- This will be client-side only, no `$http` or express routes

#### Bonus
- Add an express back-end so the temperature doesn't reset on refresh

## Voting Site
Create an Angular web app that will allow users to vote for their favorite thing: A or B.
- A and B can be whatever you want (brands of cars, Windows vs Mac, beer vs beer, etc)
- Be creative, feel free to add images of what you are voting for
- The web app will contain two counters, one for A and B
- You will have two buttons: 'Vote for A' and 'Vote for B'
- Allow the user to vote only ONCE per visit.  After you vote, both buttons will become disabled
- This will need an express back-end and you will have to use `$http`

#### Bonus
- Visually show which side is winning


## Weather Lookup
Create a web app that allows the user to type in a zip code and get the weather
- Show the current temp and weather summary
- Use the code from [weather.js](https://github.com/sergei202/okcoders-backend-2017/blob/master/week2/classroom/weather.js) that we did in Week 2

#### Bonus
- Show not only the weather, but also the city and state information
- Use `weather.currently.icon` to display a graphical icon of the weather (use `ng-if` or `ng-class`)
