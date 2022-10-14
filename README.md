# LAB 26- Component Based UI

## Phase 1 Requirements

- Today, we begin the first of a 4-Phase build of the RESTy application, written in React. In this first phase, our goal is to setup the basic scaffolding of the application, with intent being to add more functionality to the system as we go. This initial build sets up the file structure so that we can progressively build this application in a scalable manner.

## Refactor

- Refactor the RESTy application as follows:

1. Convert all child components of `App.js` from classes to functions
    - The `App` component serves as the container for all sub-components of this application.
    - Leave this component as a Class.
    - Make sure all base styles for `App` are included in a `.scss` imported within `App.js`.
    - Ensure that the `Header`, `Footer`, `Results` and `Form` components are imported using ES6 import syntax.
2. Use `.scss` files to style each component
    - Each of the components use their own `.scss` file for styling.
3. Core application functionality should remain unchanged:
    - The `<Form>` component should:
        - Call a function on submit that updates the `<App/>` component via a function sent down as a prop so that the app can process the form values.
        - The `<Results/>` component should show mock API results.

## Lab 27 - useState() Hook

- In phase 2, we will be receiving user input in preparation of connecting to live APIs, using the useState() hook in our functional components. In order to properly manage state with the useState hook, we will now convert `App.js` to a functional component.

  - As a user, I want to enter the REST Method and URL to an API
  - As a user, I want to see a summary of my request as well as results returned from an API request in my browser in a readable format

### Application FLow

- User enters an API URL
- Chooses a REST Method
- Clicks the “Go” button
- Application fetches data from the URL given, with the method specified
- Displays the response headers and results separately
- Both headers and results should be “pretty printed” JSON

## Lab 28

- In phase 3, we will be connecting RESTy to live APIs, fetching and displaying remote data. Our primary focus will be to service GET requests

The following user stories detail the major functionality for this phase of the project.

- As a user, I want to enter the URL to an API and issue a GET request so that I can retrieve it’s data
- As a user, I want to see the results returned from an API request in my browser in a readable format

### Application Flow:

- User enters an API URL
- Chooses a REST Method
- Clicks the “Go” button
- Application fetches data from the URL given, with the method specified
- Displays the response headers and results separately
- Both headers and results should be “pretty printed” JSON

## Lab 29
