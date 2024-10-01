import React from 'react'
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import ProductList from '../components/ProductList';


const RomanceLovePage = () => {

  const navigate = useNavigate();

    const handleShopNowClick = () => {
        navigate('/productlist');  // Navigates to the product page
    };
  return ( 
    
    <div className='RomancePage'>
      
      <Link to='/romance-love' onClick={handleShopNowClick} style={{ cursor: 'pointer' }}></Link>


      <ProductList/>




    </div>
  )
}

export default RomanceLovePage;
