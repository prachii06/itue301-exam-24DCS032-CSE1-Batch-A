const express = require('express');
const cors = require('cors');
const requestLogger = require('./middleware/requestLogger');

const app = express();
const PORT = process.env.PORT || 5000;

// Enable JSON body parsing & CORS
app.use(express.json());
app.use(cors());

// Apply custom request logger middleware globally
app.use(requestLogger);

// In-Memory Data Storage for Task 3
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

// REST Endpoints

/**
 * GET /api/v1/books
 * Returns all books from the in-memory store.
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
 * Creates a new borrowing record and stores it in the in-memory array.
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

// Global Error Handling Middleware (MUST BE PLACED LAST)
app.use((err, req, res, next) => {
  console.error('Unhandled Server Error:', err.message);
  res.status(500).json({
    success: false,
    message: 'Internal Server Error'
  });
});

// Start Express Server
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
