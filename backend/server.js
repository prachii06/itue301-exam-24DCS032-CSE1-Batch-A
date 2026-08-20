const path = require('path');
// Load environment variables from root .env file
require('dotenv').config({ path: path.join(__dirname, '../.env') });

const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

const requestLogger = require('./middleware/requestLogger');
const Member = require('./models/Member');
const Book = require('./models/Book');
const Borrowing = require('./models/Borrowing');

const app = express();
const PORT = process.env.PORT || 5000;
const MONGO_URI = process.env.MONGO_URI || 'mongodb://localhost:27017/library_db';

// Enable JSON body parsing & CORS
app.use(express.json());
app.use(cors());

// Apply custom request logger middleware globally
app.use(requestLogger);

// ----------------------------------------------------
// MongoDB Connection via Mongoose (Task 5)
// ----------------------------------------------------
mongoose.connect(MONGO_URI)
  .then(() => {
    console.log('✅ Connected to MongoDB successfully');
  })
  .catch((err) => {
    console.error('❌ MongoDB Connection Error:', err.message);
  });

// ----------------------------------------------------
// In-Memory Data Storage (Preserved for Tasks 1-4)
// ----------------------------------------------------
const books = [
  {
    id: 1,
    title: 'The Great Gatsby',
    author: 'F. Scott Fitzgerald',
    category: 'Classic Fiction',
    isbn: '978-0743273565',
    available: true
  },
  {
    id: 2,
    title: 'To Kill a Mockingbird',
    author: 'Harper Lee',
    category: 'Classic Fiction',
    isbn: '978-0061120084',
    available: false
  },
  {
    id: 3,
    title: 'Clean Code',
    author: 'Robert C. Martin',
    category: 'Programming',
    isbn: '978-0132350884',
    available: true
  },
  {
    id: 4,
    title: '1984',
    author: 'George Orwell',
    category: 'Dystopian',
    isbn: '978-0451524935',
    available: false
  }
];

const borrowings = [
  {
    id: 1,
    memberId: 'MEM-101',
    bookId: 2,
    borrowDate: '2026-08-01',
    returnDate: '2026-08-15',
    status: 'Borrowed'
  }
];

// ----------------------------------------------------
// Preserved In-Memory REST Endpoints (Tasks 3 & 4)
// ----------------------------------------------------

/**
 * GET /api/v1/books
 * Returns all books from the in-memory store for Task 4 React integration.
 */
app.get('/api/v1/books', (req, res) => {
  res.status(200).json(books);
});

/**
 * GET /api/v1/borrowings
 * Returns all borrowing records from the in-memory store.
 */
app.get('/api/v1/borrowings', (req, res) => {
  res.status(200).json(borrowings);
});

/**
 * POST /api/v1/borrowings
 * Creates a new borrowing record in the in-memory array.
 */
app.post('/api/v1/borrowings', (req, res) => {
  const { memberId, bookId, borrowDate, returnDate, status } = req.body;

  const newBorrowing = {
    id: borrowings.length + 1,
    memberId: memberId || 'MEM-000',
    bookId: bookId || 1,
    borrowDate: borrowDate || new Date().toISOString().split('T')[0],
    returnDate: returnDate || '',
    status: status || 'Borrowed'
  };

  borrowings.push(newBorrowing);
  res.status(201).json(newBorrowing);
});

// ----------------------------------------------------
// MongoDB & Mongoose Endpoint (Task 5 Demonstration)
// ----------------------------------------------------

/**
 * POST /api/v1/members
 * Creates and saves a new Member document in MongoDB using Mongoose.
 * Demonstrates schema validation and Mongoose operations.
 */
app.post('/api/v1/members', async (req, res, next) => {
  try {
    const member = new Member(req.body);
    const savedMember = await member.save();
    res.status(201).json(savedMember);
  } catch (err) {
    next(err); // Pass error to global error handler
  }
});

// ----------------------------------------------------
// Global Error Handling Middleware (MUST BE PLACED LAST)
// ----------------------------------------------------
app.use((err, req, res, next) => {
  // Catch Mongoose Schema Validation Errors (HTTP 400)
  if (err.name === 'ValidationError') {
    const errorMessages = Object.values(err.errors).map((e) => e.message);
    return res.status(400).json({
      success: false,
      message: 'Validation failed',
      errors: errorMessages
    });
  }

  // Catch Mongoose Duplicate Key Errors (e.g. Unique Email / ISBN - HTTP 400)
  if (err.code === 11000) {
    const field = Object.keys(err.keyPattern || {})[0] || 'field';
    return res.status(400).json({
      success: false,
      message: 'Validation failed',
      errors: [`Duplicate value for ${field}. Value must be unique.`]
    });
  }

  // General Unhandled Server Errors (HTTP 500)
  console.error('Unhandled Server Error:', err.message);
  res.status(500).json({
    success: false,
    message: 'Internal Server Error'
  });
});

// Start Express Server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
