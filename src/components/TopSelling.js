import React from 'react';
import "./AppCss.css"

const TopSelling = () => {
  const topSellingProducts = [
    { id: 1, name: 'Yellow Rose Bouquet', price: 3000, image: '/images/yellow-rose.jpg' },
    { id: 2, name: 'Lavender Vase', price: 2000, image: '/images/lavender.jpg' },
    { id: 3, name: 'Artificial Flower', price: 2500, image: '/images/artificial-flower.jpg' },
  ];

  return (
    <section className="top-selling">
      <div className="container">
        <h2>Our Top Selling</h2>
        <div className="product-grid">
          {topSellingProducts.map((product) => (
            <div key={product.id} className="product-card">
              <img src={product.image} alt={product.name} className="product-image" />
              <h3 className="product-name">{product.name}</h3>
              <p className="product-price">Rs. {product.price}</p>
              <button className="add-to-cart">Add to Cart</button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default TopSelling;