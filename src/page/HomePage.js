import React, { useState } from 'react'
import Category from '../components/Category';
import Hero from '../components/Hero';
import FilterOptions from '../components/FilterOptions';
import Product from '../components/Product';
import Header from '../components/Header';
import "../components/AppCss.css"

const HomePage = () => {
    const [activeFilter, setActiveFilter] = useState('All');
    const filters = ['All', 'Rose', 'Lily', 'Tulip', 'Daisy'];
    const products = [
        { name: 'Orchid Flower', price: '450rs', image: 'orchid.jpg', backgroundColor: '#E0F7FA' },
        { name: 'Tulip', price: '400rs', image: 'tulip.jpg', backgroundColor: '#FCE4EC' },
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
            </main>
        </div>
    )
    
}

export default HomePage
