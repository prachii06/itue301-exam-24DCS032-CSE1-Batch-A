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
├── .env.example       # Environment variables template
├── .env               # Local environment variables
├── .gitignore         # Git ignore configuration
└── README.md          # Project documentation
```

## Environment Variables

Copy `.env.example` to create `.env` in the root project folder:

```env
PORT=5000
MONGO_URI=mongodb://localhost:27017/library_db
```

---

## Detailed Setup & Execution Guide

### 1. MongoDB Setup & Startup

1. Ensure MongoDB Community Server is installed locally on your system.
2. Start the MongoDB service:
   - **Windows (Service)**: Ensure MongoDB service is running, or start via Command Prompt / PowerShell:
     ```cmd
     net start MongoDB
     ```
   - **Manual / Standalone**:
     ```cmd
     mongod --dbpath "C:\data\db"
     ```
3. Default MongoDB connection string: `mongodb://localhost:27017/library_db`.

---

### 2. Backend Setup & Startup Steps

Follow these steps to initialize and start the Express REST API backend server:

1. Open a terminal and navigate to the `backend` folder:
   ```bash
   cd backend
   ```

2. Install backend Node.js dependencies (`express`, `cors`, `mongoose`, `dotenv`):
   ```bash
   npm install
   ```

3. Start the Express backend server:
   ```bash
   npm start
   ```
   *(Alternatively, run: `node server.js`)*

4. Verify server output in the terminal:
   ```text
   Server running on http://localhost:5000
   ✅ Connected to MongoDB successfully
   ```

#### Backend REST API Endpoints

- `GET  /api/v1/books` — Retrieve books catalog
- `GET  /api/v1/borrowings` — Retrieve borrowing records
- `POST /api/v1/borrowings` — Create new borrowing record
- `POST /api/v1/members` — Create Mongoose Member document with validation

---

### 3. Frontend Setup & Startup Steps

Follow these steps to start the React web application:

1. Open a **new terminal window** and navigate to the `frontend` folder:
   ```bash
   cd frontend
   ```

2. Install frontend Node.js dependencies (`react`, `react-dom`, `react-router-dom`, `react-icons`, `vite`):
   ```bash
   npm install
   ```

3. Start the Vite development server:
   ```bash
   npm run dev
   ```

4. Open the application link printed in the terminal:
   `http://localhost:5173`
