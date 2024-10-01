import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
// import { Link } from 'react-router-dom';


import Category from '../components/Category';
import Hero from '../components/Hero';
import FilterOptions from '../components/FilterOptions';
import Product from '../components/Product';
import Header from '../components/Header';
import TopSelling from "../components/TopSelling";
import CustomerReviews from '../components/CustomerReviews';
import Footer from '../components/Footer';
import "../components/AppCss.css"

const HomePage = () => {

//     const navigate = useNavigate();

//  const handlehomeclick = () => {
//         navigate('../homepage');  //
//     };

const [cart, setCart] = useState([]);
  const navigate = useNavigate();  // Initialize useNavigate for navigation

  const addToCart = (product) => {
    setCart([...cart, product]);
    console.log('Product added to cart:', product); // For debugging

    // Navigate to CartPage after adding the product
    navigate('/cart', { state: { cart } });
  };

    const [activeFilter, setActiveFilter] = useState('All');
    const filters = ['All', 'Rose', 'Lily', 'Tulip', 'Daisy'];
    const products = [
        { name: 'Orchid Flower', price: '450rs', image: 'orchid.jpg', backgroundColor: '#E0F7FA' },
        { name: 'Tulip', price: '400rs', image: 'tulip.jpg', backgroundColor: '#FCE4EC' },
        { name: 'Gerbera', price: '350rs', image: 'gerbera.jpg', backgroundColor: '#FFF3E0' }
    ];

    return(
        <div className="App">
              {/* /* <Link to='/home' onClick={handlehomeclick} style={{ cursor: 'pointer' }}></Link> */}
            <Header />
            <main>
                <Hero />
                <section className="categories">
                    <Category title="Gifting" image="gifting.jpg" />
                    <Category title="Gardening" image="gardening.jpg" />
                </section>
                <filters
                    filters={filters}
                    activeFilter={activeFilter}
                    setActiveFilter={setActiveFilter}
                />
                <FilterOptions />
                <section className="products">
                    {products.map(product => (
                        <Product 
                        key={product.id}
                        name={product.name}
                        price={product.price}
                        image={product.image}
                        backgroundColor={product.backgroundColor}
                        addToCart={addToCart} /* Pass addToCart function as a prop */ />
                    ))}
                </section>
                <TopSelling />
                <CustomerReviews />
                <Footer />
                
            </main>
        </div>
    )
    
}

export default HomePage;
