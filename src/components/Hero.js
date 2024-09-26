import React from 'react'
import "./AppCss.css"
import { useNavigate } from 'react-router-dom';

const Hero = () => {
    const navigate = useNavigate();

    const handleShopNowClick = () => {
        navigate('/productlist');  // Navigates to the product page
    };

    return (
        <section className="hero-container">
            <div className="hero-content">
                <div className="hero-text">
                    <h2>Big sale!</h2>
                    <h1>Flower for Interior Decoration</h1>
                    <button className="start-from" color='black'  onClick={handleShopNowClick}>Start From 450rs</button>
                    <p><a onClick={handleShopNowClick} style={{ cursor: 'pointer' }} href="/">Shop Now</a></p>
                </div>
                <div className="hero-image">
                    <img src="./images/hero.jpg" alt="" />

                </div>
            </div>
        </section>
    )
}
 
export default Hero;
