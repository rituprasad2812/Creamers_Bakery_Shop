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
import Checkout from './pages/Checkout'
import CustomOrders from './pages/CustomOrders'
import OrderConfirmation from './pages/OrderConfirmation'
import OrderHistory from './pages/OrderHistory'
import ProtectedRoute from './components/ProtectedRoute'

function App() {
  return (
    <AuthProvider>
      <CartProvider>
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/menu/custom-orders" element={<ProtectedRoute><CustomOrders /></ProtectedRoute>} />
            <Route path="/menu/:category" element={<MenuPage />} />
            <Route path="/product/:id" element={<ProductDetail />} />
            <Route path="/cart" element={<ProtectedRoute><Cart /></ProtectedRoute>} />
            <Route path="/checkout" element={<ProtectedRoute><Checkout /></ProtectedRoute>} />
            <Route path="/order-confirmation/:orderId" element={<ProtectedRoute><OrderConfirmation /></ProtectedRoute>} />
            <Route path="/orders" element={<ProtectedRoute><OrderHistory /></ProtectedRoute>} />
          </Routes>
        </Router>
      </CartProvider>
    </AuthProvider>
  )
}

export default App