# MERN Stack Project

This is a basic MERN stack project with:

- React for the frontend
- Node.js and Express for the backend
- MongoDB for the database

Project structure:

```text
MERN-STACK/
|-- client/
|-- SERVER/
|-- README.md
```

## Tech Stack

### Frontend

- React
- Axios
- Bootstrap

### Backend

- Node.js
- Express
- Mongoose
- dotenv
- cors

### Database

- MongoDB

## Prerequisites

Install these tools before running the project:

### 1. Node.js

Download and install Node.js from the official website:

`https://nodejs.org/`

Recommended:

- Install the LTS version
- Verify installation with:

```bash
node -v
npm -v
```

### 2. MongoDB

Install MongoDB Community Edition from:

`https://www.mongodb.com/try/download/community`

After installation:

- Start the MongoDB service
- Default local connection used in this project:

```text
mongodb://localhost:27017/mern
```

You can also use MongoDB Compass if you want a GUI to inspect the database.

## Installation

Clone the repository:

```bash
git clone https://github.com/<your-username>/<your-repo-name>.git
cd MERN-STACK
```

### Install frontend dependencies

```bash
cd client
npm install
```

### Install backend dependencies

```bash
cd ../SERVER
npm install
```

## Environment Setup

Create a `.env` file inside the `SERVER` folder.

Example:

```env
PORT=5000
MONGO_URL=mongodb://localhost:27017/mern
```

You can copy the values from `SERVER/.envexample`.

## How to Run the Project

Open two terminals.

### 1. Run the backend

From the `SERVER` folder:

```bash
node index.js
```

Or if you want auto-restart during development:

```bash
npx nodemon index.js
```

The backend runs on:

```text
http://localhost:5000
```

### 2. Run the frontend

From the `client` folder:

```bash
npm start
```

The frontend usually runs on:

```text
http://localhost:3000
```

## Project Workflow

1. Start MongoDB.
2. Start the backend server from the `SERVER` folder.
3. Start the React app from the `client` folder.
4. Open the React app in the browser.
5. The frontend sends API requests to the backend.
6. The backend reads and writes data in MongoDB.

## API Base URL

The frontend fetches user data from the backend API.

Base API URL:

```text
http://localhost:5000/api
```

Example route:

```text
GET /api/users
```

## Available Folders

### `client/`

Contains the React frontend application.

### `SERVER/`

Contains the Node.js, Express, and MongoDB backend.

## Common Commands

Frontend:

```bash
cd client
npm start
```

Backend:

```bash
cd SERVER
node index.js
```

Backend with nodemon:

```bash
cd SERVER
npx nodemon index.js
```

## Notes

- Make sure MongoDB is running before starting the backend.
- Do not upload the `SERVER/.env` file to GitHub.
- `node_modules` should not be committed.

## Future Improvements

- Add create, edit, and delete user UI
- Add form validation
- Add better error handling
- Add deployment instructions
