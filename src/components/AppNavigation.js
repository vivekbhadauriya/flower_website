import React from 'react'
import ProductList from './ProductList'
import HomePage from '../page/HomePage'
import { Route, Routes } from 'react-router-dom'
import "./AppCss.css"
// import ProductDetailsPage from '../ProductDetailsPage'
import Birthdaypage from '../page/Birthdaypage'
import RomanceLovePage from '../page/RomanceLovePage'
import AboutPage from '../page/AboutPage'
import MorePage from '../page/MorePage'



const AppNavigation = () => {
    return (
        <div>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/productlist" element={<ProductList />} />
                {/* <Route path="/product/:productId" element={<ProductDetailsPage />} />  */}
                <Route path='/birthday' element={<Birthdaypage/>} />
                <Route path='/about' element={<AboutPage />} />
                <Route path='/more' element={<MorePage />} />
                <Route path='/romance-love' element={<RomanceLovePage/>} />
            </Routes>
        </div>
    )
}

export default AppNavigation
