import React from 'react';
import { NavLink } from 'react-router-dom';
import { FiBookOpen, FiHome, FiBook, FiRepeat } from 'react-icons/fi';

/**
 * Navigation Component
 * Modern floating pill navbar with glassmorphism backdrop blur and responsive layout.
 * Uses react-icons and NavLink for zero-reload client-side routing.
 */
function Navigation() {
  return (
    <header className="navbar">
      <div className="nav-container">
        {/* Left: Brand / Logo */}
        <NavLink to="/" className="brand-logo">
          <FiBookOpen className="brand-icon" />
          <span>LibraryHub</span>
        </NavLink>

        {/* Right: Navigation Links */}
        <nav className="nav-links">
          <NavLink 
            to="/" 
            className={({ isActive }) => (isActive ? 'nav-item active' : 'nav-item')}
          >
            <FiHome className="nav-icon" />
            <span>Home</span>
          </NavLink>
          <NavLink 
            to="/books" 
            className={({ isActive }) => (isActive ? 'nav-item active' : 'nav-item')}
          >
            <FiBook className="nav-icon" />
            <span>Books</span>
          </NavLink>
          <NavLink 
            to="/borrow" 
            className={({ isActive }) => (isActive ? 'nav-item active' : 'nav-item')}
          >
            <FiRepeat className="nav-icon" />
            <span>Borrow</span>
          </NavLink>
        </nav>
      </div>
    </header>
  );
}

export default Navigation;
