import React from 'react'
import {Link} from "react-router-dom"
import "./AppCss.css"

const Header = () => {
  return (
    <div>
     <header>
     <div className="logo">
     <img src="logo.jpg" alt="" />
     </div>
                            
      <div className='Pagesname'>
      <Link to= '/home' className='Home'>Home</Link>
      <Link to='/birthday' className='Birthday'>Birthday</Link>
      <Link to='/romance-love'>Romance & Love</Link>
      <Link to='/about'>About us</Link>
      <Link to='/more'>More</Link>
      </div>
  
    <div className="search-bar">
      <input type="text" placeholder="Search here" />
    </div>
    <div className="user-profile">
      <img src="https://via.placeholder.com/30" alt="User" />
      <span>Kasak Raina</span>
    </div>
  </header>
    </div>
  )
}

export default Header
