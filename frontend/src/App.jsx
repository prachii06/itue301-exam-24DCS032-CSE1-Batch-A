import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import HomePage from './pages/HomePage';
import BooksPage from './pages/BooksPage';
import BorrowPage from './pages/BorrowPage';
import './App.css';

/**
 * App Component
 * Configures React Router Routes for client-side view switching.
 */
function App() {
  return (
    <div className="app-container">
      {/* Persistent Navigation Header */}
      <Navigation />

      {/* Main Content Rendered via Client-side Routing */}
      <main className="main-content">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/books" element={<BooksPage />} />
          <Route path="/borrow" element={<BorrowPage />} />
        </Routes>
      </main>

      {/* Footer */}
      <footer className="footer">
        <p>© 2026 Library Book Management System</p>
      </footer>
    </div>
  );
}

export default App;
