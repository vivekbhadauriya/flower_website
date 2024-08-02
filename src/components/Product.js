import React from 'react'
import "./AppCss.css"
const Product = ({ name, price, image, backgroundColor }) => {
    return (
        <div className="product" style={{ backgroundColor }}>
            <div className="product-image-container">
                <div className="product-image" style={{ backgroundImage: `url(${image})` }}></div>
            </div>
            <h3>{name}</h3>
            <p>{price}</p>
        </div>
    )
}

export default Product
