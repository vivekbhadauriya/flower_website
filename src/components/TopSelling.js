import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import "./AppCss.css"
import Product from './Product';

const TopSelling = () => {
  const products = [
    { id: 1, name: 'Yellow Rose Bouquet', price: 3000, image: '/images/yellow-rose.jpg' },
    { id: 2, name: 'Lavender Vase', price: 2000, image: '/images/lavender.jpg' },
    { id: 3, name: 'Artificial Flower', price: 2500, image: '/images/artificial-flower.jpg' },
  ];
  const [cart, setCart] = useState([]);
  const navigate = useNavigate();  // Initialize useNavigate for navigation

  const addToCart = (product) => {
    setCart([...cart, product]);
    console.log('Product added to cart:', product); // For debugging

    // Navigate to CartPage after adding the product
    navigate('/cart', { state: { cart } });
  };

  return (
    <section className="top-selling">
      <div className="top-selling-ccontainer">
        <h2>Our Top Selling</h2>
        <div className="product-grid">
          {products.map((product) => (
            <Product key={product.id}
            name={product.name}
            price={product.price}
            image={product.image}
            backgroundColor={product.backgroundColor}
            addToCart={addToCart} /* Pass addToCart function as a prop */ />
           
          ))}
          </div>
        </div>
    </section>
  );
};
export default TopSelling;