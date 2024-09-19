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
      <Link to='/birthday' className="">Birthday</Link>
      <Link to='/romance-love' className="">Romance & Love</Link>
      <Link to='/about' className="">About us</Link>
      <Link to='/more' className="">More</Link>
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
