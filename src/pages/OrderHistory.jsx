import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import Navbar from '../components/section1/Navbar'
import { motion } from 'framer-motion'
import { useAuth } from '../context/AuthContext'
import { useCart } from '../context/CartContext'

const OrderHistory = () => {
  const [orders, setOrders] = useState([])
  const [loading, setLoading] = useState(true)
  const { user } = useAuth()
  const { addToCart } = useCart()

  useEffect(() => {
    window.scrollTo(0, 0)
    axios.get(`http://localhost:5000/api/orders/user/${user.id}`)
      .then(res => {
        setOrders(res.data)
        setLoading(false)
      })
      .catch(err => {
        console.log(err)
        setLoading(false)
      })
  }, [])

  const formatDate = (dateStr) => {
    return new Date(dateStr).toLocaleDateString('en-IN', {
      day: 'numeric', month: 'long', year: 'numeric'
    })
  }

  const getStatusColor = (status) => {
    switch(status) {
      case 'Pending': return 'bg-yellow-100 text-yellow-700'
      case 'Confirmed': return 'bg-blue-100 text-blue-700'
      case 'Preparing': return 'bg-orange-100 text-orange-700'
      case 'Out for Delivery': return 'bg-purple-100 text-purple-700'
      case 'Delivered': return 'bg-green-100 text-green-700'
      default: return 'bg-gray-100 text-gray-700'
    }
  }

  const handleReorder = (order) => {
    order.items.forEach(item => {
      addToCart(
        { _id: item.productId, name: item.name, price: item.price, image: item.image },
        item.quantity,
        item.selectedOption
      )
    })
    alert('Items added to cart!')
  }

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-pink-50">
        <p className="text-2xl font-mitr text-amber-950">Loading orders...</p>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-pink-50 pb-10">
      <Navbar variant="menu" categoryName="Order History" />

      <div className="max-w-4xl mx-auto p-10">
        <h1 className="font-playball text-5xl text-amber-950 text-center mb-10">Your Orders</h1>

        {orders.length === 0 ? (
          <div className="bg-white rounded-3xl p-10 shadow-xl text-center">
            <p className="text-6xl mb-4">🛍️</p>
            <h2 className="font-playball text-4xl text-amber-950 mb-4">No Orders Yet</h2>
            <p className="font-mitr text-gray-600 mb-8">Looks like you haven't ordered anything yet!</p>
            <Link to="/">
              <motion.button
                className="bg-pink-400 text-white px-10 py-3 rounded-full font-mitr hover:bg-pink-500 border-2 border-amber-950"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Start Shopping
              </motion.button>
            </Link>
          </div>
        ) : (
          <div className="space-y-6">
            {orders.map((order, index) => (
              <motion.div
                key={order._id}
                className="bg-white rounded-3xl p-8 shadow-xl"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                {/* Order Header */}
                <div className="flex justify-between items-center mb-4 border-b-2 border-pink-100 pb-4">
                  <div>
                    <h2 className="font-mitr font-bold text-amber-950 text-xl">#{order.orderId}</h2>
                    <p className="font-mitr text-gray-500 text-sm">{formatDate(order.createdAt)}</p>
                  </div>
                  <span className={`px-4 py-1 rounded-full font-mitr font-bold text-sm ${getStatusColor(order.status)}`}>
                    {order.status}
                  </span>
                </div>

                {/* Order Items Preview */}
                <div className="space-y-2 mb-4">
                  {order.items.map((item, i) => (
                    <div key={i} className="flex justify-between font-mitr text-gray-600 text-sm">
                      <span>{item.name} {item.selectedOption && `(${item.selectedOption})`} × {item.quantity}</span>
                      <span>₹{item.price * item.quantity}</span>
                    </div>
                  ))}
                </div>

                {/* Order Footer */}
                <div className="flex justify-between items-center border-t-2 border-pink-100 pt-4">
                  <div className="font-mitr">
                    <span className="text-gray-500">{order.items.length} items | </span>
                    <span className="font-bold text-amber-950 text-lg">₹{order.total}</span>
                    <span className="text-gray-500 text-sm ml-2">({order.orderType})</span>
                  </div>
                  <div className="flex gap-3">
                    <Link to={`/order-confirmation/${order.orderId}`}>
                      <motion.button
                        className="bg-gray-100 text-amber-950 px-5 py-2 rounded-full font-mitr text-sm hover:bg-gray-200"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        View Details
                      </motion.button>
                    </Link>
                    <motion.button
                      onClick={() => handleReorder(order)}
                      className="bg-pink-400 text-white px-5 py-2 rounded-full font-mitr text-sm hover:bg-pink-500 border-2 border-amber-950"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      Reorder
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

export default OrderHistory