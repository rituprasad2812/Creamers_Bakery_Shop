import React, { createContext, useState, useContext } from 'react'

const CartContext = createContext()

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([])

  const addToCart = (product, quantity = 1, selectedOption = '') => {
    setCartItems(prev => {
      const exists = prev.find(item => item._id === product._id && item.selectedOption === selectedOption)
      if (exists) {
        return prev.map(item =>
          item._id === product._id && item.selectedOption === selectedOption
            ? { ...item, quantity: item.quantity + quantity }
            : item
        )
      }
      return [...prev, { ...product, quantity, selectedOption }]
    })
  }

  const removeFromCart = (id, selectedOption) => {
    setCartItems(prev => prev.filter(item => !(item._id === id && item.selectedOption === selectedOption)))
  }

  const updateQuantity = (id, selectedOption, newQuantity) => {
    if (newQuantity < 1) return
    setCartItems(prev =>
      prev.map(item =>
        item._id === id && item.selectedOption === selectedOption
          ? { ...item, quantity: newQuantity }
          : item
      )
    )
  }

  const cartCount = cartItems.reduce((sum, item) => sum + item.quantity, 0)
  const cartTotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0)

  return (
    <CartContext.Provider value={{ 
      cartItems, 
      addToCart, 
      removeFromCart, 
      updateQuantity, 
      cartCount, 
      cartTotal 
    }}>
      {children}
    </CartContext.Provider>
  )
}

export const useCart = () => useContext(CartContext)