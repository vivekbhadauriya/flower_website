
import Footer from '../components/Footer';
import React from 'react';
import "../components/AppCss.css"
import Header from '../components/Header';

const AboutPage = () => {
  return (
    <div className="about-page-container">
      <Header/>
      
      {/* Beautiful Quote Section */}
      <section className="quote-section">
        <blockquote>
          "Flowers are the music of the ground. From earth's lips they speak."
        </blockquote>
        <cite>- Karan Singh </cite>
      </section>

      {/* About Fresh Bloom & CEO Section */}
      <section className="about-ceo-section">
        <div className="about-text">
          <h2>About Fresh Bloom</h2>
          <p>
            Fresh Bloom is dedicated to delivering the freshest and most beautiful flowers right to your doorstep. Whether you're celebrating a special occasion or simply want to brighten someone's day, we have the perfect arrangement for you. Our passion for flowers drives us to maintain the highest quality standards and exceptional customer service.
          </p>
        </div>
        <div className="ceo-photo">
          <img src="image" alt="Name of owner" />
          <h3>John Doe</h3>
          <p>Founder & CEO</p>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="why-choose-us-section">
        <h2>Why Choose Us?</h2>
        <div className="features">
          <div className="feature">
            <i className="fas fa-seedling"></i>
            <h3>Freshness Guaranteed</h3>
            <p>We ensure that every flower is fresh and vibrant, straight from the growers to your hands.</p>
          </div>
          <div className="feature">
            <i className="fas fa-gem"></i>
            <h3>Unique Arrangements</h3>
            <p>Our expert florists create stunning and unique designs tailored to your preferences.</p>
          </div>
          <div className="feature">
            <i className="fas fa-shipping-fast"></i>
            <h3>Fast Delivery</h3>
            <p>Reliable and prompt delivery services to ensure your flowers arrive on time.</p>
          </div>
          <div className="feature">
            <i className="fas fa-heart"></i>
            <h3>Customer-Centric</h3>
            <p>Our customers are our top priority. We strive to provide exceptional service every step of the way.</p>
          </div>
        </div>
      </section>
      <Footer/>

    </div>
  );
};

export default AboutPage;
