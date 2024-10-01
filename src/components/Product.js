import React from 'react'
import "./AppCss.css"
// import { useCart } from './cartcontext';


const Product = ({ name, price, image, backgroundColor,addToCart }) => {

    return (
        <div className="product" style={{ backgroundColor }}>
            <div className="product-image-container">
                <div className="product-image" style={{ backgroundImage: `url(${image})` }}></div>
            </div>
            <h3>{name}</h3>
            <p>{price}</p>
            <button className="add-to-cart-button" onClick={() => addToCart({ name, price, image })}>
                                 Add to Cart
      </button>
        </div>
    )
}

export default Product;
