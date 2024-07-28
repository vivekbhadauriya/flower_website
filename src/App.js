import React, { useState } from 'react';
import { Link, NavLink, Route,Routes } from 'react-router-dom';

import './App.css';
import ProductList from './components/ProductList';
import ProductPage from './components/ProductPage';
import CartPage from './components/CartPage';
import ProductDetails from './components/ProductDetails';
import Birthdaypage  from './Pages/Birthdaypage.js';


// Header Component
const Header = () => (
  <header>
    <div className="logo"></div>
    <nav>
       {/* {['Home', 'Birthday', 'Romance & Love', 'More'].map(item => (
        <a key={item} href="/" className="nav-link">{item}</a>
      ))}  */}
      <Link to='/Birthdaypage' className="">MyBrithday</Link>





    
    </nav>
    <div className="search-bar">
      <input type="text" placeholder="Search here" />
    </div>
    <div className="user-profile">
      <img src="https://via.placeholder.com/30" alt="User" />
      <span>Kasak Raina</span>
    </div>
  </header>
);

// Hero Component
const Hero = () => (
  <section className="hero-container">
    <div className="hero-content">
      <div className="hero-text">
        <h2>Big sale!</h2>
        <h1>Flower for Interior Decoration</h1>
        <button className="start-from" color='black'>Start From 450rs</button>
        <p><a href="/">Shop Now</a></p>
      </div>
      <div className="hero-image">
        <img src="hero.jpg" alt="" />

      </div>
    </div>
    {/* <div className="hero-garland"></div> */}
  </section>
);

// Category Component
const Category = ({ title, image }) => (
  <div className="category">
    <div className="category-image" style={{backgroundImage: `url(${image})`}}></div>
    <div className="category-content">
      <h3>{title}</h3>
      <button className="shop-now">SHOP NOW</button>
    </div>
  </div>
);
// Filter Component
const FilterOptions = () => (
  <div className="filter-options">
    <div className="filter-buttons">
      <button className="filter-button active">All</button>
      <button className="filter-button">Rose</button>
      <button className="filter-button">Lily</button>
      <button className="filter-button">Tulip</button>
      <button className="filter-button">Daisy</button>
    </div>
    <div className="view-options">
      <button className="view-button">
        <img src="/images/grid-view.png" alt="Grid View" />
      </button>
      <button className="view-button">
        <img src="/images/filter-icon.png" alt="Filter" />
      </button>
    </div>
  </div>
);
// Product Component
const Product = ({ name, price, image, backgroundColor }) => (
  <div className="product" style={{ backgroundColor }}>
    <div className="product-image-container">
      <div className="product-image" style={{backgroundImage: `url(${image})`}}></div>
    </div>
    <h3>{name}</h3>
    <p>{price}</p>
  </div>
);
function App() {
  const [activeFilter, setActiveFilter] = useState('All');
  const filters = ['All', 'Rose', 'Lily', 'Tulip', 'Daisy'];
  const products = [
    { name: 'Orchid Flower', price: '450rs', image: 'orchid.jpg', backgroundColor: '#E0F7FA'},
    { name: 'Tulip', price: '400rs', image:'tulip.jpg', backgroundColor: '#FCE4EC' },
    { name: 'Gerbera', price: '350rs', image: 'gerbera.jpg', backgroundColor: '#FFF3E0' }
  ];
  
  return (
    <div className="App">
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
      <Product key={product.name} {...product} />
          ))}
         </section>
      <Routes>

        <Route path="/" element={<ProductList />} />
        <Route path="/product/:productId" element={<ProductDetails />} />
        <Route path='/Birthdaypage' element ={<Birthdaypage/>} />
        




      </Routes>
      </main>
    </div>
    
    
  );
}

export default App;