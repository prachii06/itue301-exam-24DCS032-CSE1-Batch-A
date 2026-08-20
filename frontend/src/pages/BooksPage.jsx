import React, { useState, useEffect } from 'react';
import BookCard from '../components/BookCard';
import { FiLoader, FiAlertCircle, FiBookOpen } from 'react-icons/fi';

function BooksPage() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        setLoading(true);
        setError(null);
        
        const response = await fetch('http://localhost:5000/api/v1/books');

        if (!response.ok) {
          throw new Error(`Server returned HTTP status ${response.status}`);
        }

        const booksData = await response.json();
        setData(booksData);
      } catch (err) {
        console.error('API Fetch Error:', err);
        setError('Failed to load books from Express backend server. Make sure backend is running on port 5000.');
      } finally {
        setLoading(false);
      }
    };

    fetchBooks();
  }, []);

  return (
    <section className="page-section books-page-section">
      <div className="page-header">
        <h2>Explore Our Books</h2>
        <p className="section-description">
          Browse and explore available titles fetched in real-time from our Express REST API.
        </p>
      </div>

      {loading && (
        <div className="status-box loading-box">
          <FiLoader className="spin-icon status-box-icon" />
          <span>Loading books...</span>
        </div>
      )}

      {error && (
        <div className="status-box error-box">
          <FiAlertCircle className="status-box-icon" />
          <span>{error}</span>
        </div>
      )}

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
            <div className="empty-state">
              <FiBookOpen className="empty-icon" />
              <p>No books currently available in the catalog.</p>
            </div>
          )}
        </div>
      )}
    </section>
  );
}

export default BooksPage;
