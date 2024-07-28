import React from 'react';

const ProductDetails = ({ product }) => {
  return (
    <div className="product-details">
      <h2>{product.name}</h2>
      <img src={product.image} alt={product.name} />
      <p>Price: {product.price}</p>
      <p>Description: {product.description}</p>
      {/* Add more product details here */}
    </div>
  );
};

export default ProductDetails;
