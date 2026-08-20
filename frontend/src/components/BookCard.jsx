import React from 'react';

/**
 * BookCard Component
 * Reusable component to display information about a single book.
 * 
 * Props received from parent component:
 * - title (string): Title of the book
 * - author (string): Author of the book
 * - category (string): Category or genre of the book
 * - available (boolean): Availability status (true = Available, false = Not Available)
 */
function BookCard({ title, author, category, available }) {
  return (
    <div className="book-card">
      <div className="book-header">
        <h3 className="book-title">{title}</h3>
        {/* Visually distinct availability badge based on 'available' prop */}
        <span className={`status-badge ${available ? 'status-available' : 'status-unavailable'}`}>
          {available ? 'Available' : 'Not Available'}
        </span>
      </div>
      <p className="book-info"><strong>Author:</strong> {author}</p>
      <p className="book-info"><strong>Category:</strong> {category}</p>
    </div>
  );
}

export default BookCard;
