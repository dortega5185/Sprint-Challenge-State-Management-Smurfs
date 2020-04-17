1. What problem does the context API help solve?

It helps solve the problem we know as 'prop drilling'.

1. In your own words, describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

Actions are payloads of information that send data from your app to your store. So when a user clicks on a button an action is attached to that onClick that will send a dispatch with a payload to the store which will then use that information to trigger a series of events depending on what you set up in your reducer. A reducer is a function that determines changes to an application's state. We also attach an action to previous state in order to update and execute the next statein here as well. Redux store is a state container and its what redux is all about. It stores the whole state of the app in an immutable object tree.

1. What is the difference between Application state and Component state? When would be a good time to use one over the other?

Application state is the 'global' state that all components in the component tree can access, through cursors. Component state is local. I personally use Application state for bigger projects with a ton of components that need state passed. Component state is good for smaller apps that dont have much state to work with and is easy to manage via props and passing state down as usual.

1. Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?

It allows us to write action creators that return a function instead of an action. The thunk can be used to delay the dispatch of an action, or to dispatch only if a certain condition is met.

1. What is your favorite state management system you've learned and this sprint? Please explain why!

My favorite state management right now has got to be context api, but I won't be using it for this sprint. I think context api is set up much faster and kind of effortlessly while redux takes a while to set up and very tedious.
