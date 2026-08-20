import React from 'react';
import { FiUser, FiTag, FiCheckCircle, FiXCircle } from 'react-icons/fi';

function BookCard({ title, author, category, available }) {
  return (
    <div className="book-card">
      <div className="book-card-header">
        <h3 className="book-title">{title}</h3>
        <span className={`status-badge ${available ? 'status-available' : 'status-unavailable'}`}>
          {available ? (
            <>
              <FiCheckCircle className="badge-icon" />
              <span>Available</span>
            </>
          ) : (
            <>
              <FiXCircle className="badge-icon" />
              <span>Not Available</span>
            </>
          )}
        </span>
      </div>

      <div className="book-details">
        <p className="book-detail-item">
          <FiUser className="detail-icon" />
          <span className="detail-label">Author:</span>
          <span className="detail-value">{author}</span>
        </p>
        <p className="book-detail-item">
          <FiTag className="detail-icon" />
          <span className="detail-label">Category:</span>
          <span className="detail-value category-tag">{category}</span>
        </p>
      </div>
    </div>
  );
}

export default BookCard;
