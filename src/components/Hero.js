import React from 'react'
import "./AppCss.css"

const Hero = () => {
    return (
        <section className="hero-container">
            <div className="hero-content">
                <div className="hero-text">
                    <h2>Big sale!</h2>
                    <h1>Flower for Interior Decoration</h1>
                    <button className="start-from" color='black'>Start From 450rs</button>
                    <p><a href="/">Shop Now</a></p>
                </div>
                <div className="hero-image">
                    <img src="./images/hero.jpg" alt="" />

                </div>
            </div>
            {/* <div className="hero-garland"></div> */}
        </section>
    )
}

export default Hero
