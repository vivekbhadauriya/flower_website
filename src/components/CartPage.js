import { useState } from 'react';

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
  