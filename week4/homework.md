Week 4: Homework
====

We will create a simple chat application for the homework this week.  These are the things I would like to see:

- An area to display all the chats/messages (using `ng-repeat`)
- An input field for the user's name
- An input field for the message
- A Send button that is disabled if the name or message is blank


Here some pointers/hints that I suggest:

- Have a `messages` array on the backend to store all the current messages
- Each message will be an object with the message and the name of sending user: `{name:'Sergei', message:'Hi there'}`
- Have two routes: one to get all the messages, one to send a message (`/messages` and `/send`)
- Don't forget that one of those routes will be a `get()` and the other will be a `post()`
- Your frontend will have a `getMessages()` function that will get the messages from the backend and attach them to `$scope`
- That function will be called once every second using `$interval` (don't forget to inject it into your controller function)
