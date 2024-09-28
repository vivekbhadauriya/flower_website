import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom'; // Import useNavigate
import './AppCss.css';
import AuthModal from './AuthModal';

const Header = () => {
  const [user, setUser] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigate = useNavigate(); // Use navigate for redirection

  const handleLoginClick = () => {
    setIsModalOpen(true);
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('token');
    navigate('/home'); // Redirect user to home on logout
  };

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      fetchUser(token);
    }
  }, []);

  const fetchUser = async (token) => {
    try {
      const res = await fetch('https://backend.com/user', {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${token}`,
        },
      });
      const data = await res.json();
      setUser(data.user);
    } catch (err) {
      console.error('Failed to fetch user data');
    }
  };

  return (
    <header>
      <div className="logo">
        <img src="logo.jpg" alt="Logo" />
      </div>

      <div className="Pagesname">
        <Link to='/home' className='Home'>Home</Link>
        {/* <Link to='/birthday' className='Birthday'>Birthday</Link> */}
        <Link to='/romance-love'>Romance & Love</Link>
        <Link to='/about'>About us</Link>
        <Link to='/more'>More</Link>
      </div>

      <div className="search-bar">
        <input type="text" placeholder="Search here" />
      </div>

      <div className="user-profile">
        {user ? (
          <>
            <img src="https://via.placeholder.com/30" alt="User" />
            <span>{user.name}</span>
            <button onClick={logout}>Logout</button>
          </>
        ) : (
          <>
            <button onClick={handleLoginClick}>Login</button>
          </>
        )}
      </div>

      {/* Modal for login/signup */}
      <AuthModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        onLoginSuccess={(user) => {
          setUser(user);
          navigate('/home'); // Redirect to home after login/signup
        }} 
      />
    </header>
  );
};

export default Header;
