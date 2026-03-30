import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { CartProvider } from './context/CartContext'
import { AuthProvider } from './context/AuthContext'
import Home from './pages/Home'
import Login from './pages/Login'
import Signup from './pages/Signup'
import MenuPage from './pages/MenuPage'
import ProductDetail from './pages/ProductDetail'
import Cart from './pages/Cart'
import CustomOrders from './pages/CustomOrders'

function App() {
  return (
    <AuthProvider>
      <CartProvider>
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path='/menu/custom-orders' element = {<CustomOrders/>} />
            <Route path="/menu/:category" element={<MenuPage />} />
            <Route path="/product/:id" element={<ProductDetail />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </Router>
      </CartProvider>
    </AuthProvider>
  )
}

export default App