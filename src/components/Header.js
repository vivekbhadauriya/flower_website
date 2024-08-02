import React from 'react'
import {Link} from "react-router-dom"
import "./AppCss.css"

const Header = () => {
  return (
    <div>
        <header>
    <div className="logo"></div>
    <nav>
      <Link to='/birthday' className="">Brithday</Link>
      <Link to='/about' className="">About us</Link>
      <Link to='/romance-love' className="">Romance & Love</Link>
      <Link to='/more' className="">More</Link>
    </nav>
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
