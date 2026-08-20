import React, { useState, useEffect } from 'react';
import BookCard from '../components/BookCard';

/**
 * BooksPage Component
 * Fetches book catalog data dynamically from Express REST API (GET /api/v1/books).
 * Demonstrates useEffect lifecycle hook, async/await fetch, and state management (data, loading, error).
 */
function BooksPage() {
  // State variables for managing API request state
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // useEffect runs when component mounts
  useEffect(() => {
    // Asynchronous function to fetch books from backend
    const fetchBooks = async () => {
      try {
        setLoading(true);
        setError(null);
        
        // Fetch books from Express API
        const response = await fetch('http://localhost:5000/api/v1/books');

        if (!response.ok) {
          throw new Error(`Server returned HTTP status ${response.status}`);
        }

        const booksData = await response.json();
        setData(booksData); // Update data state with fetched books
      } catch (err) {
        console.error('API Fetch Error:', err);
        setError('Failed to load books from Express backend server. Make sure backend is running on port 5000.');
      } finally {
        setLoading(false); // Stop loading indicator regardless of outcome
      }
    };

    fetchBooks();
  }, []); // Empty dependency array ensures fetch executes once on component mount

  return (
    <section className="page-section books-section">
      <h2>Books Catalog</h2>
      <p className="section-description">
        Displaying real-time book data fetched from Express REST API (<code>GET /api/v1/books</code>).
      </p>

      {/* 1. Loading State UI */}
      {loading && (
        <div className="status-box loading-box">
          <p>⌛ Loading books from backend API...</p>
        </div>
      )}

      {/* 2. Error State UI */}
      {error && (
        <div className="status-box error-box">
          <p>⚠️ {error}</p>
        </div>
      )}

      {/* 3. Successful Data Render using BookCard composition */}
      {!loading && !error && (
        <div className="books-grid">
          {data.length > 0 ? (
            data.map((book) => (
              <BookCard
                key={book.id}
                title={book.title}
                author={book.author}
                category={book.category}
                available={book.available}
              />
            ))
          ) : (
            <p>No books available in the catalog.</p>
          )}
        </div>
      )}
    </section>
  );
}

export default BooksPage;
