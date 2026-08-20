import React from 'react';
import { NavLink } from 'react-router-dom';

/**
 * Navigation Component
 * Header navigation bar using React Router's NavLink for client-side navigation.
 * Prevents full-page reloads when navigating between routes.
 */
function Navigation() {
  return (
    <header className="navbar">
      <div className="nav-container">
        <h1 className="logo">📚 Library Book System</h1>
        <nav className="nav-links">
          {/* NavLink components manage active route styling and client-side routing */}
          <NavLink 
            to="/" 
            className={({ isActive }) => (isActive ? 'nav-item active' : 'nav-item')}
          >
            Home
          </NavLink>
          <NavLink 
            to="/books" 
            className={({ isActive }) => (isActive ? 'nav-item active' : 'nav-item')}
          >
            Books
          </NavLink>
          <NavLink 
            to="/borrow" 
            className={({ isActive }) => (isActive ? 'nav-item active' : 'nav-item')}
          >
            Borrow
          </NavLink>
        </nav>
      </div>
    </header>
  );
}

export default Navigation;
