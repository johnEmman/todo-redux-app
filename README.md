# TODO Web Application

This is a simple TODO Application which talks to backend API, renders ToDo-list and has basic TODO CRUD operations.

It uses [Redux-toolkit](https://redux-toolkit.js.org/) for state management, [Material UI](https://mui.com/) as UI/UX library and [json-server](https://github.com/typicode/json-server) for mocking the API

You task is to find all the places with `// TODO:` comments in the code and fill it with an appropriate code.

## Starting the Application

In order to start the application you should first start the API server by executing `npm run server` in the terminal

You can verify that it's working by visiting http://localhost:3000/todos

It should respond with JSON-list of objects (todos) 

Next in another terminal you should start the frontend by executing `npm run dev`

You can open the frontend by visiting http://localhost:5173/

## TODO API

Below is a description of API, using which, you can complete the missing parts of the Application. 

### Create a todo
> POST /todos
>
> body (JSON): {"title": "New todo", "text": "todo text", "state": "new" / "in progress" / "done"}

### READ
> GET /todos

### UPDATE
> PUT /todos/:id
>
> body (JSON): {"title": "New title", "text": "new text", "state": "new" / "in progress" / "done"}

### DELETE
> GET /todos/:id