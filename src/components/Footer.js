import React from 'react';
import "./AppCss.css"

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>FloralDream</h3>
            <p className="footer-description">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <div className="social-icons">
              {/* Add social media icons here */}
            </div>
          </div>
          <div className="footer-section">
            <h3>Quick Links</h3>
            <ul className="footer-list">
              <li><a href="/">Home</a></li>
              <li><a href="/about">About Us</a></li>
              <li><a href="/products">Products</a></li>
              <li><a href="/contact">Contact</a></li>
            </ul>
          </div>
          <div className="footer-section">
            <h3>Contact Info</h3>
            <ul className="footer-list">
              <li>123 Flower Street, Garden City</li>
              <li>Phone: (123) 456-7890</li>
              <li>Email: info@floraldream.com</li>
            </ul>
          </div>
          <div className="footer-section">
            <h3>Newsletter</h3>
            <p>Subscribe to our newsletter for updates</p>
            <form className="newsletter-form">
              <input type="email" placeholder="Your email" className="newsletter-input" />
              <button type="submit" className="newsletter-button">Subscribe</button>
            </form>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2024 FloralDream. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;