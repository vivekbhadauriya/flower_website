import React from 'react'
import "./AppCss.css"

const Category = ({ title, image }) => {
    return (
        <div className="category">
            <div className="category-image" style={{ backgroundImage: `url(${image})` }}></div>
            <div className="category-content">
                <h3>{title}</h3>
                <button className="shop-now">SHOP NOW</button>
            </div>
        </div>
    )
}

export default Category
