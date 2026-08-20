import React, { useState } from 'react';
import { FiUser, FiBook, FiCalendar, FiCheckSquare, FiInfo } from 'react-icons/fi';

/**
 * BorrowPage Component
 * Demonstrates React useState hook for controlled form management.
 * State updates dynamically as the user types into input fields.
 */
function BorrowPage() {
  const [memberName, setMemberName] = useState('');
  const [bookTitle, setBookTitle] = useState('');
  const [borrowDate, setBorrowDate] = useState('');
  const [returnDate, setReturnDate] = useState('');

  return (
    <section className="page-section borrow-page-section">
      <div className="page-header">
        <h2>Borrow a Book</h2>
        <p className="section-description">
          Fill out the borrowing details below to request a library book loan.
        </p>
      </div>

      <div className="borrow-layout">
        {/* Form Container */}
        <div className="form-card">
          <form className="borrow-form" onSubmit={(e) => e.preventDefault()}>
            <div className="form-group">
              <label htmlFor="memberName">
                <FiUser className="input-icon" />
                <span>Member Name</span>
              </label>
              <input
                type="text"
                id="memberName"
                placeholder="e.g. John Doe"
                value={memberName}
                onChange={(e) => setMemberName(e.target.value)}
              />
            </div>

            <div className="form-group">
              <label htmlFor="bookTitle">
                <FiBook className="input-icon" />
                <span>Book Title</span>
              </label>
              <input
                type="text"
                id="bookTitle"
                placeholder="e.g. The Great Gatsby"
                value={bookTitle}
                onChange={(e) => setBookTitle(e.target.value)}
              />
            </div>

            <div className="form-group">
              <label htmlFor="borrowDate">
                <FiCalendar className="input-icon" />
                <span>Borrow Date</span>
              </label>
              <input
                type="date"
                id="borrowDate"
                value={borrowDate}
                onChange={(e) => setBorrowDate(e.target.value)}
              />
            </div>

            <div className="form-group">
              <label htmlFor="returnDate">
                <FiCalendar className="input-icon" />
                <span>Return Date</span>
              </label>
              <input
                type="date"
                id="returnDate"
                value={returnDate}
                onChange={(e) => setReturnDate(e.target.value)}
              />
            </div>
          </form>
        </div>

        {/* Dynamic Live Summary (Demonstrates controlled components) */}
        <div className="live-summary">
          <div className="summary-header">
            <FiCheckSquare className="summary-title-icon" />
            <h3>Live Borrowing Preview</h3>
          </div>
          {memberName || bookTitle ? (
            <p className="summary-text">
              Borrowing book: <strong>"{bookTitle || '...'}"</strong> for <strong>{memberName || '...'}</strong>
              {borrowDate && <span> from <strong>{borrowDate}</strong></span>}
              {returnDate && <span> to <strong>{returnDate}</strong></span>}
            </p>
          ) : (
            <p className="summary-placeholder">
              Start typing member name or book title above to see real-time preview...
            </p>
          )}
        </div>

        {/* Guidelines Box */}
        <div className="guidelines-box">
          <h4>
            <FiInfo className="guidelines-icon" />
            <span>Library Rules</span>
          </h4>
          <ul className="guidelines-list">
            <li>Members can borrow up to 3 books at a time.</li>
            <li>Standard loan period is 14 days.</li>
            <li>Books marked as "Not Available" cannot be issued immediately.</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default BorrowPage;
