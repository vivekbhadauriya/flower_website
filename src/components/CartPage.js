import { useState } from 'react';
import "./AppCss.css"

const HomePage = () => {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  // ...
};
const CartPage = () => {
    // ... display cart items
  };
  