import React from 'react';
// import { Link } from 'react-router-dom';
import Footer from '../components/Footer';
import Header from '../components/Header';

const MorePage = () => {
  return (
    <div className="more-page">
      <section className="hero">
        <div className="hero-content">
          <h1>"Where dreams meet design, and love is celebrated in every detail."</h1>
          <button className="cta-button">Get in Touch</button>
        </div>
        <div className="hero-image">
          <img src="/path/to/wedding-image.jpg" alt="Wedding ceremony" />
        </div>
      </section>

      <section className="services">
        <div className="service-category">
          <h2>Haldi & Mehndi Ceremony</h2>
          <div className="service-images">
            <img src="/path/to/haldi1.jpg" alt="Haldi ceremony" />
            <img src="/path/to/haldi2.jpg" alt="Mehndi ceremony" />
          </div>
        </div>
        <div className="service-category">
          <h2>Flower jewelery</h2>
          <div className="service-images">
            <img src="/path/to/flower-jewelry1.jpg" alt="Flower necklace" />
            <img src="/path/to/flower-jewelry2.jpg" alt="Flower earrings" />
          </div>
        </div>
        <div className="service-category">
          <h2>Mandap decoration</h2>
          <div className="service-images">
            <img src="/path/to/mandap1.jpg" alt="Mandap decoration" />
            <img src="/path/to/mandap2.jpg" alt="Wedding venue" />
          </div>
        </div>
      </section>

      <section className="cta-banner">
        <h2>Are you ready to plan a special day.</h2>
        <button className="cta-button">Get in touch</button>
      </section>
      <Footer/>
      <Header/>
    </div>
  );
};

export default MorePage;