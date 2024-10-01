import React from 'react'
import AppNavigation from './components/AppNavigation'
import { CartProvider } from './components/CartContext'

const App = () => {
  return (
    <div>
      <CartProvider>
      <AppNavigation/>
      </CartProvider>
       
     
    </div>
  )
}

export default App
