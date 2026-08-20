# Library Book Management System

An open-book practical examination project for a full-stack Library Book Management System built with React, Express, and MongoDB/Mongoose.

## Project Structure

```
itue301-exam-24DCS032-CSE1-Batch-A/
├── frontend/          # React Frontend application (Vite, React Router, useState)
├── backend/           # Express.js REST API & Mongoose models
│   ├── models/        # Mongoose Schemas (Book.js, Member.js, Borrowing.js)
│   ├── middleware/    # Custom requestLogger middleware
│   └── server.js      # Main Express application
├── .env.example       # Environment template (MONGO_URI, PORT)
├── .gitignore         # Git ignore configuration
└── README.md          # Project overview & documentation
```

## Environment Variables

Copy `.env.example` to create `.env` in the root folder:

```env
PORT=5000
MONGO_URI=mongodb://localhost:27017/library_db
```

## Setup & Execution Commands

### 1. Backend Setup & Run

Navigate to the `backend` directory and install dependencies:
```bash
cd backend
npm install
```

Start the backend server:
```bash
npm start
```
*(Server runs on `http://localhost:5000`)*

### 2. Frontend Setup & Run

Navigate to the `frontend` directory and install dependencies:
```bash
cd frontend
npm install
```

Start the frontend development server:
```bash
npm run dev
```
*(App runs on `http://localhost:5173`)*

## MongoDB Setup

- Ensure MongoDB is installed and running locally on `mongodb://localhost:27017` or provide a valid connection URI in `MONGO_URI`.
- The Express server connects to MongoDB automatically via Mongoose on startup.
