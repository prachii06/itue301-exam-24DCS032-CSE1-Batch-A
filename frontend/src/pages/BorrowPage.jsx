import React, { useState } from 'react';

/**
 * BorrowPage Component
 * Demonstrates React useState hook for controlled form management.
 * State updates dynamically as the user types into input fields.
 */
function BorrowPage() {
  // Individual state variables for borrowing form inputs
  const [memberName, setMemberName] = useState('');
  const [bookTitle, setBookTitle] = useState('');
  const [borrowDate, setBorrowDate] = useState('');
  const [returnDate, setReturnDate] = useState('');

  return (
    <section className="page-section borrow-section">
      <h2>Book Borrowing Form</h2>
      <p className="section-description">
        Fill out the details below to request a book loan. Inputs are managed via React <code>useState</code>.
      </p>

      {/* Controlled Form */}
      <form className="borrow-form" onSubmit={(e) => e.preventDefault()}>
        <div className="form-group">
          <label htmlFor="memberName">Member Name:</label>
          <input
            type="text"
            id="memberName"
            placeholder="e.g. John Doe"
            value={memberName}
            onChange={(e) => setMemberName(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label htmlFor="bookTitle">Book Title:</label>
          <input
            type="text"
            id="bookTitle"
            placeholder="e.g. The Great Gatsby"
            value={bookTitle}
            onChange={(e) => setBookTitle(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label htmlFor="borrowDate">Borrow Date:</label>
          <input
            type="date"
            id="borrowDate"
            value={borrowDate}
            onChange={(e) => setBorrowDate(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label htmlFor="returnDate">Return Date:</label>
          <input
            type="date"
            id="returnDate"
            value={returnDate}
            onChange={(e) => setReturnDate(e.target.value)}
          />
        </div>
      </form>

      {/* Dynamic Live Summary displaying state values in real-time */}
      <div className="live-summary">
        <h3>📋 Live Borrowing Preview</h3>
        {memberName || bookTitle ? (
          <p className="summary-text">
            Borrowing book: <strong>"{bookTitle || '...'}"</strong> for <strong>{memberName || '...'}</strong>
            {borrowDate && <span> from {borrowDate}</span>}
            {returnDate && <span> to {returnDate}</span>}
          </p>
        ) : (
          <p className="summary-placeholder">Start typing member name or book title above to see real-time preview...</p>
        )}
      </div>

      <div className="guidelines-box">
        <h4>General Library Rules</h4>
        <ul className="guidelines-list">
          <li>Members can borrow up to 3 books at a time.</li>
          <li>Standard loan period is 14 days.</li>
        </ul>
      </div>
    </section>
  );
}

export default BorrowPage;
