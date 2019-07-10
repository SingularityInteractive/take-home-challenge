# Singularity Interactive take home code challenge
***
# Code Challenge Submission : Overview
***
## Getting Started

- clone the repo
- run npm install
- run npm start

## Technologies Used

- I decided to build this demo using React JS because its what Singularity uses. Other than a handful of practice projects, this is my first time using React for development after a few months of studying it, but hey - it's called a code *challenge* for a reason, right? That said, I'd appreciate any feedback on features of React I didn't tap into that could have streamlined any portion of this application.

- I used create-react-app to get started, but ejected the tools for access to the config files/toolchain. 

- I used SASS as my CSS pre-processor and set up a base-styles folder to define global styles, variables, and mixins. Of course, for this demo project there's not a whole lot of need for any elaborate mixins and the like. So I approached this scenario as if this was going to eventually be a much larger application.

- This application uses WebPack which I'm new to and didn't really modify from the create-react-app boilerplate. I've often preferred Gulp as a task runner that can handle bundling as well, but WebPack seems to be the ideal option when it comes to React. 

## Functionality & UX

The overall functionality of this demo app ensures the following:

- Users can add a new Role to the list by using the tools on the left.
- The list update is client side only and does not persist on refresh.
- The Add new role button is disabled unless there is a role name entered AND at least one checkbox checked.
- The Add new role button is also disabled if the Role name already exists to prevent duplicate records
- The ID of added records increment to prevent any issues in React or our hypothetical database.

## Styles

Since pixel-perfection was not required, I took a few small liberties in theming this app. The structure and general design has been followed. 

- **Modular CSS** I used modular CSS for any component specific styles. While some may argue that a preprocessor is not necessary with modular CSS, I personally enjoy the nested syntax of SASS, and find its variables, mixins, and function features invaluable. 

- **Class Naming** In the components, I chose to declare style properties using bracket notation. This is for two reasons: First, it allows for hyphenated class names which are commonly preferred to keep class names visually distinct in the code; Secondly (and on a related note), this syntax stands out from the rest of the code making it much easier to quickly pick out class name references at a glance.

- **Tables** I generally prefer not to use tables due to their clunky non-responsive behaviors. For the RolesListView table, I used table tags but styled them to be a CSS grid which is both more modern and flexible. This way, we still get the semantics of the table structure in the tag names but with the added flexibilty of grid for display. 

- **Responsiveness** This demo is moderately responsive. Though not completely optimized, the layout adapts to collapse content where necessary to make data fit. This is most notable in the outermost layout and the RolesListView table.


## Component Structure

I have the main App component broken into an AppHeader and RolesAdmin. Again, considering my approach as if this were a larger project, I imagined different dashboard tools with different functionality could hypothetically be loaded inside the .main-app container. If I had time, I would have provided a visual graphic here to show component structure, but I'm sure this is simple enough to see from reviewing the code. 

- The RolesAdmin Component handles the highest level functionality of retrieving data and managing the state of that data. 
- The nested AddRoleTools component handles the creation of the newRoleObject that gets sent back to RolesAdmin. It's child components handle the selection of permissions, the input field and button states, etc.
- The RolesListView displays a RolesListItem component which is re-used for the th and tr instances. I personally feel that this portion could be optimized a bit further.

For functional components, I used arrow function syntax, which I personally prefer just for how it looks. 


## Leftover features / Things I'd add or change 

The following are things I'd considered doing if time permitted, but were not specifically requested in the requirements:

- Reset all fields after submit
- Add sorting features to the roles list
- Style the checkboxes in the roles list
- Add select-all functionality to the roles list
- In sidebar permissions options, ensure that if list gets past a certain height that overflow is handled appropriately while keeping the Add New Role button securely in place. 
- Add full validation features to input field, including error messages
- Add tooltip to Permissions header in sidebar (indicated in design but not specified in requirements)
- Add animated CSS loaders in place of a static "loading..." message

***
# Original Requirements
***

This challenge should take approximately 8 - 12 hours of time and should demonstrate how you would 
approach architecting a web application. You may use the framework or library of your choice but you should not adopt any
additional libraries for specific functionality as we would like to see how you organize your application components. Utility libraries like moment, axios, lodash etc are fine this is more speaking to component solutions that would handle rendering more complex components like tables, modals or sliders.
To begin you should clone this repo then when ready to submit your work open a pull request on github outlining your 
decisions and outcomes. 

## Goals

- Build the layout as depicted in the attached screenshot ( pixel perfection is not expected and some sections of the design have been commented out for simplicity ).
- All needed data should be consumed from the linked endpoints
- The application should support loading the existing role and permission data preferably with Promises or Async Await and rendering it 
- The application should demonstrate the ability to add a new role with permissions and render it into the table of loaded records ( the data updates on the client are not expected to persist on refresh )

## Bonus Goals

- Building the layout to be responsive
- Demonstrating CSS architecture and organization
- Providing some minimal level of test coverage
- Providing some build tooling to show optimization paths for production


### Comp
![Admin roles interface](take-home-challenge-comp.png)

### Endpoints

https://code-challenge-api.github59.now.sh/api/roles.json

https://code-challenge-api.github59.now.sh/api/permissions.json
