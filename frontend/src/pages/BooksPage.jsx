import React from 'react';
import BookCard from '../components/BookCard';

/**
 * BooksPage Component
 * Demonstrates component composition and passing props to BookCard.
 * Uses a hardcoded array of sample books for Task 1.
 */
function BooksPage() {
  // Hardcoded array of sample books for Step 1 props demonstration
  const sampleBooks = [
    {
      id: 1,
      title: 'The Great Gatsby',
      author: 'F. Scott Fitzgerald',
      category: 'Classic Fiction',
      available: true
    },
    {
      id: 2,
      title: 'To Kill a Mockingbird',
      author: 'Harper Lee',
      category: 'Classic Fiction',
      available: false
    },
    {
      id: 3,
      title: 'Clean Code',
      author: 'Robert C. Martin',
      category: 'Programming',
      available: true
    },
    {
      id: 4,
      title: '1984',
      author: 'George Orwell',
      category: 'Dystopian',
      available: false
    }
  ];

  return (
    <section className="page-section books-section">
      <h2>Books Catalog</h2>
      <p className="section-description">
        Demonstrating parent-to-child prop passing using the reusable <code>BookCard</code> component.
      </p>

      {/* Grid rendering BookCard for each sample book */}
      <div className="books-grid">
        {sampleBooks.map((book) => (
          <BookCard
            key={book.id}
            title={book.title}
            author={book.author}
            category={book.category}
            available={book.available}
          />
        ))}
      </div>
    </section>
  );
}

export default BooksPage;
