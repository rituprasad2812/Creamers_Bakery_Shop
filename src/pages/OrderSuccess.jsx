import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { useCart } from '../context/CartContext'

const OrderSuccess = () => {
  const { clearCart } = useCart()

  useEffect(() => {
    clearCart()
  }, [])

  return (
    <div className="min-h-screen bg-pink-50 flex items-center justify-center">
      <div className="bg-white rounded-3xl p-10 shadow-xl text-center max-w-md">
        
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", duration: 0.5 }}
          className="text-8xl mb-6"
        >
          🎉
        </motion.div>

        <h1 className="font-playball text-5xl text-amber-950 mb-4">Order Placed!</h1>
        <p className="font-mitr text-gray-600 mb-8">
          Thank you for your order! We will contact you shortly to confirm.
        </p>

        <Link to="/">
          <motion.button
            className="bg-pink-400 text-white px-10 py-4 rounded-full font-mitr text-xl hover:bg-pink-500 border-2 border-amber-950"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Continue Shopping
          </motion.button>
        </Link>
      </div>
    </div>
  )
}

export default OrderSuccess