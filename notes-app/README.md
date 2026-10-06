# Notes App Frontend

This directory contains the React + Vite frontend for the notes application. It lets users add notes, view saved notes, mark tasks as complete, and delete them.

## Features

- Create notes with a title and details
- Fetch notes from the backend API
- Mark notes as complete or incomplete
- Delete notes from the list
- Responsive UI styled with Tailwind CSS

## Tech Stack

- React
- Vite
- Tailwind CSS
- Axios

## Project Structure

```text
notes-app/
├── public/
├── src/
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── package.json
├── vite.config.js
├── eslint.config.js
├── index.html
└── README.md
```

## Prerequisites

- Node.js installed
- The backend API running at `http://localhost:5000`

## Installation

```bash
cd notes-app
npm install
```

## Run the app

```bash
npm run dev
```

Then open the local URL shown in the terminal, usually:

```text
http://localhost:5173
```

## How it works

The frontend makes requests to the backend using Axios:

- `GET /api/task` to load notes
- `POST /api/task` to create a new note
- `PATCH /api/task/:id` to toggle completion status
- `DELETE /api/task/:id` to remove a note

## Notes

- The app is configured to call the backend at `http://localhost:5000`.
- If the backend is not running, notes will not load or save correctly.
- The code is intentionally simple and is designed for local development.

## Production build

```bash
npm run build
```

To preview the production build:

```bash
npm run preview
```
