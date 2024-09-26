import React from 'react';
import Product from './Product'; // Assuming Product component exists
import Footer from "../components/Footer";

const ProductList = () => {
  const products = [
    { id: 1, name: 'Flower Basket', price: '300Rs', image: 'flower-basket.jpg', backgroundColor: '#f5f5f5' },
    { id: 2, name: 'Chocolate Bouquet', price: '600Rs', image: 'chocolate-bouquet.jpg', backgroundColor: '#f5f5f5' },
    { id: 3, name: 'Flower Bouquet', price: '450Rs', image: 'flower-bouquet.jpg', backgroundColor: '#f5f5f5' },
    { id: 4, name: 'Rose Bouquet', price: '300Rs', image: 'rose-bouquet.jpg', backgroundColor: '#f5f5f5' }
  ];

  return (
    <div className="product-page">
      {/* Quote Section */}
      <div className="quote-section">
        <p className="quote">
          "Like flowers in the sun, our love blossoms and grows, filling each moment with beauty and grace."
        </p>
      </div>

      {/* Featured Products Section */}
      <div className="featured-products-section">
        <h2 className="section-title">Featured Product's</h2>
        <div className="product-list">
          {products.map((product) => (
            <Product
              key={product.id}
              name={product.name}
              price={product.price}
              image={product.image}
              backgroundColor={product.backgroundColor}
            />
          ))}
        </div>
      </div>

      {/* Sale Section */}
      <div className="sale-section">
        <div className="sale-message">
          <img src="sale-image.jpg" alt="Sale" className="sale-image" />
          <div className="sale-text">
            <h2>Hurry Up</h2>
            <p>Hot deal | Sale upto 20% Off</p>
            <a href="/shop-now" className="shop-now-button">Shop Now</a>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default ProductList;
