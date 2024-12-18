# Project Management Dashboard

This is a simple Project Management Dashboard application built with React, Express.js, and MongoDB.

## Features

- Add new projects
- View list of projects
- Edit existing projects
- Delete projects
- Basic authentication

## Prerequisites

- Node.js
- MongoDB

## Installation

1. Clone the repository
2. Install dependencies for both client and server:

```
  cd client
  npm install
```

```
  cd ../server
  npm install
```

3. Create a `.env` file in the server directory with the following content:

```
  MONGODB_URI=your_mongodb_connection_string
  PORT=5000
  AUTH_TOKEN=your_secret_token
```

4. Create a `.env` file in the client directory with the following content:

```
  REACT_APP_API_URL=[http://localhost:5000/api](http://localhost:5000/api)
  REACT_APP_AUTH_TOKEN=your_secret_token
```


## Running the Application

1. Start the server:

```
  cd server
  npm start
```

2. Start the client:

```
  cd client
  npm start
```

3. Open your browser and navigate to `http://localhost:3000`

## Assumptions and Limitations

- Basic authentication is simulated using a hardcoded token.
- Error handling is basic and can be improved for production use.
- The application is not optimized for large-scale use.

## Future Improvements

- Implement user authentication and authorization
- Add pagination for the project list
- Implement more advanced filtering and sorting options
- Add unit and integration tests
