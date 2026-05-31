import React, { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import axios from 'axios'
import Navbar from '../components/section1/Navbar'
import { motion } from 'framer-motion'

const OrderConfirmation = () => {
  const { orderId } = useParams()
  const [order, setOrder] = useState(null)

  useEffect(() => {
    window.scrollTo(0, 0)
    axios.get(`https://creamers-bakery-shop.onrender.com/api/orders/${orderId}`)
      .then(res => setOrder(res.data))
      .catch(err => console.log(err))
  }, [orderId])

  if (!order) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-pink-50">
        <p className="text-2xl font-mitr text-amber-950">Loading...</p>
      </div>
    )
  }

  const formatDate = (dateStr) => {
    if (!dateStr) return '-'
    return new Date(dateStr).toLocaleDateString('en-IN', {
      day: 'numeric', month: 'long', year: 'numeric'
    })
  }

  const formatOrderDate = (dateStr) => {
    return new Date(dateStr).toLocaleDateString('en-IN', {
      day: 'numeric', month: 'long', year: 'numeric',
      hour: '2-digit', minute: '2-digit'
    })
  }

  return (
    <div className="min-h-screen bg-pink-50 pb-10">
      <Navbar variant="menu" categoryName="Order Confirmation" />

      <div className="max-w-3xl mx-auto p-10">

        {/* Success Header */}
        <motion.div
          className="bg-white rounded-3xl p-10 shadow-xl text-center mb-8"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", duration: 0.5, delay: 0.2 }}
            className="text-8xl mb-4"
          >
            🎉
          </motion.div>
          <h1 className="font-playball text-5xl text-amber-950 mb-2">Order Confirmed!</h1>
          <p className="font-mitr text-gray-600">Thank you for ordering from Creamers!</p>
          
          <div className="flex justify-center gap-10 mt-6">
            <div>
              <p className="font-mitr text-gray-500 text-sm">Order ID</p>
              <p className="font-mitr font-bold text-amber-950 text-xl">#{order.orderId}</p>
            </div>
            <div>
              <p className="font-mitr text-gray-500 text-sm">Date</p>
              <p className="font-mitr font-bold text-amber-950">{formatOrderDate(order.createdAt)}</p>
            </div>
            <div>
              <p className="font-mitr text-gray-500 text-sm">Status</p>
              <span className="bg-yellow-100 text-yellow-700 px-4 py-1 rounded-full font-mitr font-bold">
                {order.status}
              </span>
            </div>
          </div>
        </motion.div>

        {/* Order Items */}
        <motion.div
          className="bg-white rounded-3xl p-8 shadow-xl mb-8"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h2 className="font-playball text-3xl text-amber-950 mb-6 border-b-2 border-pink-200 pb-2">
            Order Items
          </h2>

          <div className="space-y-4">
            {order.items.map((item, index) => (
              <div key={index} className="flex items-center gap-4 border-b border-pink-100 pb-4">
                <div
                  className="w-16 h-16 rounded-xl bg-cover bg-center flex-shrink-0"
                  style={{ backgroundImage: `url(/assets/${item.image})` }}
                />
                <div className="flex-1">
                  <h3 className="font-mitr font-bold text-amber-950">{item.name}</h3>
                  {item.selectedOption && (
                    <p className="text-gray-500 text-sm font-mitr">{item.selectedOption}</p>
                  )}
                  {item.cakeName && (
                    <p className="text-pink-500 text-sm font-mitr">Name: "{item.cakeName}"</p>
                  )}
                  <p className="font-mitr text-gray-600">₹{item.price} × {item.quantity}</p>
                </div>
                <p className="font-bold text-amber-950 font-mitr text-lg">
                  ₹{item.price * item.quantity}
                </p>
              </div>
            ))}
          </div>

          {/* Price Summary */}
          <div className="mt-6 space-y-2">
            <div className="flex justify-between font-mitr text-gray-600">
              <span>Subtotal:</span>
              <span>₹{order.subtotal}</span>
            </div>
            <div className="flex justify-between font-mitr text-gray-600">
              <span>Delivery Fee:</span>
              <span>{order.deliveryFee > 0 ? `₹${order.deliveryFee}` : 'FREE'}</span>
            </div>
            <div className="flex justify-between font-mitr text-xl font-bold border-t-2 border-pink-200 pt-3">
              <span className="text-amber-950">Total:</span>
              <span className="text-pink-500">₹{order.total}</span>
            </div>
            <div className="flex justify-between font-mitr text-gray-600">
              <span>Payment Method:</span>
              <span className="font-bold capitalize">
                {order.paymentMethod === 'cod' ? 'Cash on Delivery' : 'Online Payment'}
              </span>
            </div>
          </div>
        </motion.div>

        {/* Delivery Details */}
        <motion.div
          className="bg-white rounded-3xl p-8 shadow-xl mb-8"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h2 className="font-playball text-3xl text-amber-950 mb-6 border-b-2 border-pink-200 pb-2">
            {order.orderType === 'delivery' ? 'Delivery Details' : 'Pickup Details'}
          </h2>

          <div className="grid grid-cols-2 gap-4 font-mitr">
            <div>
              <p className="text-gray-500 text-sm">Name</p>
              <p className="text-amber-950 font-bold">{order.customerName}</p>
            </div>
            <div>
              <p className="text-gray-500 text-sm">Phone</p>
              <p className="text-amber-950 font-bold">{order.phone}</p>
            </div>
            {order.address && (
              <div className="col-span-2">
                <p className="text-gray-500 text-sm">Address</p>
                <p className="text-amber-950 font-bold">{order.address}</p>
              </div>
            )}
            <div>
              <p className="text-gray-500 text-sm">
                {order.orderType === 'delivery' ? 'Delivery Date' : 'Pickup Date'}
              </p>
              <p className="text-amber-950 font-bold">{formatDate(order.deliveryDate)}</p>
            </div>
            <div>
              <p className="text-gray-500 text-sm">
                {order.orderType === 'delivery' ? 'Delivery Time' : 'Pickup Time'}
              </p>
              <p className="text-amber-950 font-bold">{order.deliveryTime}</p>
            </div>
          </div>
        </motion.div>

        {/* Action Buttons */}
        <motion.div
          className="flex gap-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <Link to="/" className="flex-1">
            <motion.button
              className="w-full bg-gray-200 text-amber-950 py-4 rounded-full font-mitr text-lg hover:bg-gray-300"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Continue Shopping
            </motion.button>
          </Link>
          <Link to="/orders" className="flex-1">
            <motion.button
              className="w-full bg-pink-400 text-white py-4 rounded-full font-mitr text-lg hover:bg-pink-500 border-2 border-amber-950"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              View All Orders
            </motion.button>
          </Link>
        </motion.div>

      </div>
    </div>
  )
}

export default OrderConfirmation