# Todo Website

This project is a small full-stack notes/todo application made of two main parts:

- [backend/](./backend) — Express + MongoDB API for task storage and CRUD operations
- [notes-app/](./notes-app) — React + Vite frontend for managing notes in the browser

## Quick start

1. Start MongoDB locally.
2. In the backend folder, install dependencies and run the server:

```bash
cd backend
npm install
node server.js
```

3. In the frontend folder, install dependencies and start the app:

```bash
cd notes-app
npm install
npm run dev
```

4. Open the frontend URL shown by Vite, usually `http://localhost:5173`.

## Project behavior

- The frontend communicates with the backend via `http://localhost:5000`
- Notes are stored in a MongoDB database named `data`
- The API supports listing, creating, updating, and deleting notes/tasks

## Documentation

- See [backend/README.md](./backend/README.md) for API details
- See [notes-app/README.md](./notes-app/README.md) for frontend setup and usage
