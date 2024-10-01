import React from 'react'
import "./AppCss.css"
import { useNavigate } from 'react-router-dom';


const Category = ({ title, image }) => {
    const navigate = useNavigate();

    const handleShopNowClick = () => {
        navigate('/productlist');  // Navigates to the product page
    };
    return (
        <div className="category">
            <div className="category-image" style={{ backgroundImage: `url(${image})` }}></div>
            <div className="category-content">
                <h3>{title}</h3>
                <button className="shop-now" onClick={handleShopNowClick} style={{ cursor: 'pointer' }}>SHOP NOW</button>
            </div>
        </div>
    )
}

export default Category
