const path = require('path');
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

app.use(express.json());
app.use(cors());
app.use(requestLogger);

mongoose.connect(MONGO_URI)
  .then(() => {
    console.log('✅ Connected to MongoDB successfully');
  })
  .catch((err) => {
    console.error('❌ MongoDB Connection Error:', err.message);
  });

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

app.get('/api/v1/books', (req, res) => {
  res.status(200).json(books);
});

app.get('/api/v1/borrowings', (req, res) => {
  res.status(200).json(borrowings);
});

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

app.post('/api/v1/members', async (req, res, next) => {
  try {
    const member = new Member(req.body);
    const savedMember = await member.save();
    res.status(201).json(savedMember);
  } catch (err) {
    next(err);
  }
});

app.use((err, req, res, next) => {
  if (err.name === 'ValidationError') {
    const errorMessages = Object.values(err.errors).map((e) => e.message);
    return res.status(400).json({
      success: false,
      message: 'Validation failed',
      errors: errorMessages
    });
  }

  if (err.code === 11000) {
    const field = Object.keys(err.keyPattern || {})[0] || 'field';
    return res.status(400).json({
      success: false,
      message: 'Validation failed',
      errors: [`Duplicate value for ${field}. Value must be unique.`]
    });
  }

  console.error('Unhandled Server Error:', err.message);
  res.status(500).json({
    success: false,
    message: 'Internal Server Error'
  });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
