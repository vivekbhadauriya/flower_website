import React from 'react';
import "./AppCss.css"

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>Fresh Bloom </h3>
            <p className="footer-description">
            At Fresh Bloom, we believe in spreading joy through the beauty of nature.
            Our handpicked, vibrant flowers are carefully selected to brighten your day and elevate any occasion. 
            Experience the essence of nature with every petal at Fresh Bloom.


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
              <li>Akshardham ,New Delhi</li>
              <li>Phone: (123) 456-7890</li>
              <li>Email: info@freshbloom.com</li>
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