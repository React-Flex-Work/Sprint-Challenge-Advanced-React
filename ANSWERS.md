- [ ] Why would you use class component over function components (removing hooks from the question)?

For one thing there is a lot of legacy code that will continue to use class components because they predate functional components, so it is good to know how to use them when working with old and large codebases. Using class components also gives you access to lifecycle hooks.

- [ ] Name three lifecycle methods and their purposes.

Constructor - called before anything else, when the component is initiated, it is the natural place to set up the initial state and other values
Render - a required method, that actually outputs HTML to the DOM
componentDidMount - called after the component is rendered, this is where you run statements that requires that the component is already placed in the DOM

- [ ] What is the purpose of a custom hook?

The purpose of a custom hook is to share logic between two JavaScript functions, by extracting it to a third function.

- [ ] Why is it important to test our apps?

To make sure they do what we expect them to do. Testing helps us to find and eliminate bugs. It gives us confidence in our code.