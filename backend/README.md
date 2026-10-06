# Backend API

This directory contains the Express + MongoDB backend for the todo/notes application. It exposes a simple REST API that the frontend uses to create, read, and delete tasks.

## Features

- Express server with JSON request parsing and CORS enabled
- MongoDB persistence via Mongoose
- CRUD endpoints for task management
- Lightweight API for frontend integration

## Tech Stack

- Node.js
- Express.js
- MongoDB
- Mongoose


## Project Structure

```text
backend/
├── model/
│   └── api.js
├── package.json
├── server.js
└── README.md
```

## Prerequisites

Before running the API, make sure:

- Node.js is installed
- MongoDB is running locally on `mongodb://127.0.0.1:27017`
- The database named `data` exists or can be created automatically by MongoDB



## Run the server

```bash
node server.js
```

For development with auto-reload:

```bash
npx nodemon server.js
```

The API listens on:

```text
http://localhost:5000
```

## API Endpoints

### Get all tasks

```http
GET /api/task
```

Returns all tasks stored in MongoDB.

### Create a task

```http
POST /api/task
```

Request body:

```json
{
  "title": "Finish project report",
  "description": "Review final draft and submit before Friday"
}
```

### Delete a task

```http
DELETE /api/task/:id
```

Deletes a task by MongoDB document id.

### Update task completion status

```http
PATCH /api/task/:id
```

Request body:

```json
{
  "completed": true
}
```
