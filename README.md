Feel free to delete this and start from scratch.

### Brief
Welcome to the Build a REST API Hackathon! Over the past week, you've been learning how to build APIs, handle incoming requests and serve a response. It's time to apply what you've learned. Your challenge is to design, develop, and demonstrate a fully functional API around a theme of your choice by Friday.

### Objective
Build a REST API around a resource of your choice.


### Development Rules

Work in pairs or threes, using the Driver-Navigator approach for coding. Make sure to switch roles regularly!
Make frequent, small commits to track and manage changes easily.
Spend time and carefully plan your MVP so you deliver a working application. Write pseudocode as comments in your JavaScript file so it acts as a roadmap when you start to code. Break down each step and think through the logic.

Remember: The goal is to solve the problem before you even start coding in JavaScript. Think of the actual code as simply translating your well-thought-out plan into syntax the computer understands. Working this way will make the development process more organised. Good software development is as much about planning and understanding as it is about writing the code.


### Technical Requirements

Programming Language: JavaScript
Environment: Node.js
UI: None (Postman/API responses)
Data Source: JSON file
Unique Identifier: Each resource entry should have a unique identifier generated using the uuid package.
Response Specification: All JSON responses from your API should adhere to the JSend specification. This specification provides a consistent response structure, making your API more predictable and easier to interact with.


### Milestones

Planning out your API routes and resources. Create and complete your own requirements table first, similar to the one above.
Setting up a basic Express server with a test route, logging middleware and nodemon.
Implementing CRUD operations.
Testing the API using tools like Postman or Thunder Client.



### Stretch Goals

The stretch goals below are optional so feel free to come up with your own too.

Advanced Routing with Query Parameters:
Search: Add a search feature on the /resource endpoint. For instance, /resource?name=ResourceName could return resources with names matching the query.
Sorting: Allow sorting of resources. For instance, /resource?sort=name could return resources sorted alphabetically by name.


Error Handling and Responses
If a resource with a specific ID isn't found, return a 404 Not Found status code and a clear error message.
For other errors, such as server errors or bad request data, return appropriate status codes like 500 Internal Server Error or 400 Bad Request with clarifying error messages.
Implement middleware for error handling in your Express server.

In a separate repository, create a frontend for your API and use a UI and fetch to interact with it.