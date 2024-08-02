import React from 'react'
import ProductList from './ProductList'
import HomePage from '../page/HomePage'
import { Route, Routes } from 'react-router-dom'
import "./AppCss.css"
import Mainpage from '../page/Mainpage'
import ProductDetailsPage from '../page/ProductDetailsPage'
import AboutPage from '../page/AboutPage'
import MorePage from '../page/MorePage'
// import RomanceLovePage from '../page/RomanceLovePage'

const AppNavigation = () => {
    return (
        <div>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/productlist" element={<ProductList />} />
                <Route path="/product/:productId" element={<ProductDetailsPage />} />
                <Route path='/birthday' element={<Mainpage/>} />
                <Route path='/about' element={<AboutPage />} />
                <Route path='/more' element={<MorePage />} />
                <Route path='/romance-love' element={<Mainpage/>} />
            </Routes>
        </div>
    )
}

export default AppNavigation
