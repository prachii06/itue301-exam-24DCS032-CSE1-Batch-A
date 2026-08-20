import React from 'react';
import { Link } from 'react-router-dom';
import { FiBookOpen, FiRepeat, FiLayers, FiArrowRight, FiCheck } from 'react-icons/fi';

/**
 * HomePage Component
 * Modern landing page introducing LibraryHub with Hero section, Feature highlights,
 * How It Works step guide, and Call-To-Action banners.
 */
function HomePage() {
  return (
    <div className="home-container">
      {/* 1. HERO SECTION */}
      <section className="hero-section">
        <div className="hero-content">
          <span className="hero-badge">Library Management Simplified</span>
          <h1 className="hero-title">Manage Your Library, Simply.</h1>
          <p className="hero-description">
            LibraryHub helps you explore our collection of books and manage borrowing information in one streamlined platform.
          </p>
          <div className="hero-cta-group">
            <Link to="/books" className="btn btn-primary">
              <span>Explore Books</span>
              <FiArrowRight className="btn-icon" />
            </Link>
            <Link to="/borrow" className="btn btn-secondary">
              <FiRepeat className="btn-icon-left" />
              <span>Borrow a Book</span>
            </Link>
          </div>
        </div>

        {/* Hero Visual Area (CSS & Icon Composition) */}
        <div className="hero-visual">
          <div className="hero-card-preview">
            <div className="preview-header">
              <FiBookOpen className="preview-icon" />
              <div className="preview-lines">
                <div className="line line-short"></div>
                <div className="line line-long"></div>
              </div>
            </div>
            <div className="preview-body">
              <div className="badge-pill">Available</div>
              <h4>Featured Collection</h4>
              <p>Explore titles across Classic Fiction, Programming, and Dystopian literature.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 2. FEATURES SECTION */}
      <section className="features-section">
        <div className="section-header text-center">
          <h2>Core Features</h2>
          <p>Everything you need for effortless book exploration and management.</p>
        </div>

        <div className="features-grid">
          {/* Feature 1 */}
          <div className="feature-card">
            <div className="feature-icon-wrapper">
              <FiBookOpen className="feature-icon" />
            </div>
            <h3>Book Collection</h3>
            <p>Browse and explore books available in the library with real-time status updates.</p>
          </div>

          {/* Feature 2 */}
          <div className="feature-card">
            <div className="feature-icon-wrapper">
              <FiRepeat className="feature-icon" />
            </div>
            <h3>Easy Borrowing</h3>
            <p>Manage borrowing details through a simple and organized controlled form process.</p>
          </div>

          {/* Feature 3 */}
          <div className="feature-card">
            <div className="feature-icon-wrapper">
              <FiLayers className="feature-icon" />
            </div>
            <h3>Simple Management</h3>
            <p>Keep essential library information organized in one clean, responsive interface.</p>
          </div>
        </div>
      </section>

      {/* 3. HOW IT WORKS SECTION */}
      <section className="how-it-works-section">
        <div className="section-header text-center">
          <h2>How It Works</h2>
          <p>Three simple steps to borrow your favorite books.</p>
        </div>

        <div className="steps-grid">
          <div className="step-card">
            <div className="step-number">1</div>
            <h3>Explore Books</h3>
            <p>Browse through our catalog of available books across various genres and categories.</p>
          </div>

          <div className="step-card">
            <div className="step-number">2</div>
            <h3>Choose a Book</h3>
            <p>Select the book you wish to borrow and check its availability status in real time.</p>
          </div>

          <div className="step-card">
            <div className="step-number">3</div>
            <h3>Submit Borrowing Details</h3>
            <p>Fill out the simple borrowing form with member details and loan dates.</p>
          </div>
        </div>
      </section>

      {/* 4. FINAL CALL TO ACTION */}
      <section className="final-cta-section">
        <div className="final-cta-content">
          <h2>Ready to Explore the Library?</h2>
          <p>Discover your next read or request a book loan in seconds.</p>
          <Link to="/books" className="btn btn-primary btn-large">
            <span>Browse Books</span>
            <FiArrowRight className="btn-icon" />
          </Link>
        </div>
      </section>
    </div>
  );
}

export default HomePage;
