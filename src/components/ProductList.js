import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';  
import Product from './Product';
import Footer from "../components/Footer";
import Header from '../components/Header';


const ProductList = () => {
  const [cart, setCart] = useState([]);
  const navigate = useNavigate();  // Initialize useNavigate for navigation

  const addToCart = (product) => {
    console.log('Adding product to cart:', product);

    setCart([...cart, product]);
    console.log('Product added to cart:', product); // For debugging

    // Navigate to CartPage after adding the product
    navigate('/cart', { state: { cart } });
  };

  const products = [
    { id: 1, name: 'Flower Basket', price: '300Rs', image: 'flower-basket.jpg', backgroundColor: '#f5f5f5' },
    { id: 2, name: 'Chocolate Bouquet', price: '600Rs', image: 'chocolate-bouquet.jpg', backgroundColor: '#f5f5f5' },
    { id: 3, name: 'Flower Bouquet', price: '450Rs', image: 'flower-bouquet.jpg', backgroundColor: '#f5f5f5' },
    { id: 4, name: 'Rose Bouquet', price: '300Rs', image: 'rose-bouquet.jpg', backgroundColor: '#f5f5f5' },
    { name: 'Orchid Flower', price: '450rs', image: 'orchid.jpg', backgroundColor: '#E0F7FA' },
    { name: 'Tulip', price: '400rs', image: 'tulip.jpg', backgroundColor: '#FCE4EC' },
    { name: 'Gerbera', price: '350rs', image: 'gerbera.jpg', backgroundColor: '#FFF3E0' },
  ];

  return (
    <div className="product-page">
      <Header/>
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
              addToCart={addToCart}  /* Pass addToCart function as a prop */
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
            <p>Hot deal | Sale up to 20% Off</p>
            <a href="/shop-now" className="shop-now-button">Shop Now</a>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default ProductList;
