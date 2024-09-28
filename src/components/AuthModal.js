import React, { useState } from 'react';
import './AppCss.css'; 
import axios from 'axios';

const AuthModal = ({ isOpen, onClose, onLoginSuccess }) => {
  const [isLogin, setIsLogin] = useState(true); // Toggle between login and signup
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState(''); // Needed for signup

  if (!isOpen) return null;

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const url = isLogin ? '/login' : '/signup'; // Adjust for your backend routes
      const payload = isLogin ? { email, password } : { name, email, password };
      const { data } = await axios.post(`backend.com${url}`, payload);
      
      localStorage.setItem('token', data.token); // Save token in localStorage
      onLoginSuccess(data.user); // Callback to set the user in Header and trigger redirection
      onClose(); // Close the modal
    } catch (err) {
      console.error('Error:', err.response.data);
    }
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button onClick={onClose} className="close-button">&times;</button>
        <h2>{isLogin ? 'Login' : 'Sign Up'}</h2>

        <form onSubmit={handleSubmit}>
          {!isLogin && (
            <div className="form-group">
              <label>Name</label>
              <input 
                type="text" 
                value={name} 
                onChange={(e) => setName(e.target.value)} 
                required 
              />
            </div>
          )}

          <div className="form-group">
            <label>Email</label>
            <input 
              type="email" 
              value={email} 
              onChange={(e) => setEmail(e.target.value)} 
              required 
            />
          </div>

          <div className="form-group">
            <label>Password</label>
            <input 
              type="password" 
                value={password} 
                onChange={(e) => setPassword(e.target.value)} 
                required 
              />
          </div>

          <button type="submit" className="submit-btn">
            {isLogin ? 'Login' : 'Sign Up'}
          </button>
        </form>

        <p>
          {isLogin ? "Don't have an account?" : 'Already have an account?'}
          <button 
            onClick={() => setIsLogin(!isLogin)} 
            className="toggle-auth">
            {isLogin ? 'Sign Up' : 'Login'}
          </button>
        </p>
      </div>
    </div>
  );
};

export default AuthModal;
