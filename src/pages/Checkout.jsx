import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import Navbar from '../components/section1/Navbar'
import { motion } from 'framer-motion'
import { useCart } from '../context/CartContext'
import axios from 'axios'

const Checkout = () => {
  const { cartItems, cartTotal, cartCount } = useCart()
  const navigate = useNavigate()
  const deliveryFee = 50

  const [formData, setFormData] = useState({
    customerName: '',
    phone: '',
    email: '',
    orderType: 'delivery',
    address: '',
    deliveryDate: '',
    deliveryTime: '',
    paymentMethod: 'cod'
  })

  useEffect(() => {
    window.scrollTo(0, 0)
    if (cartItems.length === 0) {
      navigate('/cart')
    }
  }, [])

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handlePlaceOrder = async (e) => {
    e.preventDefault()

    try {
      const orderData = {
        items: cartItems.map(item => ({
          productId: item._id,
          name: item.name,
          price: item.price,
          quantity: item.quantity,
          selectedOption: item.selectedOption,
          cakeName: item.cakeName || null
        })),
        subtotal: cartTotal,
        deliveryFee: formData.orderType === 'delivery' ? deliveryFee : 0,
        total: cartTotal + (formData.orderType === 'delivery' ? deliveryFee : 0),
        ...formData
      }

      await axios.post('http://localhost:5000/api/orders', orderData)
      navigate('/order-success')
    } catch (err) {
      console.log(err)
      alert('Failed to place order. Please try again.')
    }
  }

  return (
    <div className="min-h-screen bg-pink-50 pb-10">
      <Navbar variant="menu" categoryName="Checkout" />

      <div className="max-w-6xl mx-auto p-10">
        <div className="grid grid-cols-2 gap-10">

          {/* Left: Customer & Delivery Details */}
          <div className="space-y-8">
            
            {/* Customer Details */}
            <div className="bg-white rounded-3xl p-8 shadow-xl">
              <h2 className="font-playball text-3xl text-amber-950 mb-6 border-b-2 border-pink-200 pb-2">
                Customer Details
              </h2>

              <div className="space-y-4">
                <div>
                  <label className="font-mitr font-bold text-amber-950 block mb-2">Full Name:</label>
                  <input
                    type="text"
                    name="customerName"
                    value={formData.customerName}
                    onChange={handleChange}
                    placeholder="Your Name"
                    required
                    className="w-full px-4 py-3 border-2 border-pink-300 rounded-2xl font-mitr bg-pink-50 focus:outline-none focus:border-pink-500"
                  />
                </div>

                <div>
                  <label className="font-mitr font-bold text-amber-950 block mb-2">Phone Number:</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="10-digit mobile number"
                    required
                    className="w-full px-4 py-3 border-2 border-pink-300 rounded-2xl font-mitr bg-pink-50 focus:outline-none focus:border-pink-500"
                  />
                </div>

                <div>
                  <label className="font-mitr font-bold text-amber-950 block mb-2">Email:</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your.email@example.com"
                    required
                    className="w-full px-4 py-3 border-2 border-pink-300 rounded-2xl font-mitr bg-pink-50 focus:outline-none focus:border-pink-500"
                  />
                </div>
              </div>
            </div>

            {/* Delivery Details */}
            <div className="bg-white rounded-3xl p-8 shadow-xl">
              <h2 className="font-playball text-3xl text-amber-950 mb-6 border-b-2 border-pink-200 pb-2">
                Delivery Details
              </h2>

              <div className="space-y-4">
                <div>
                  <label className="font-mitr font-bold text-amber-950 block mb-3">Order Type:</label>
                  <div className="flex gap-6">
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="radio"
                        name="orderType"
                        value="pickup"
                        checked={formData.orderType === 'pickup'}
                        onChange={handleChange}
                        className="w-5 h-5 accent-pink-500"
                      />
                      <span className="font-mitr text-amber-950">Pickup</span>
                    </label>
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="radio"
                        name="orderType"
                        value="delivery"
                        checked={formData.orderType === 'delivery'}
                        onChange={handleChange}
                        className="w-5 h-5 accent-pink-500"
                      />
                      <span className="font-mitr text-amber-950">Delivery (+₹{deliveryFee})</span>
                    </label>
                  </div>
                </div>

                {formData.orderType === 'delivery' && (
                  <div>
                    <label className="font-mitr font-bold text-amber-950 block mb-2">Delivery Address:</label>
                    <textarea
                      name="address"
                      value={formData.address}
                      onChange={handleChange}
                      placeholder="Enter your full delivery address"
                      required
                      rows={3}
                      className="w-full px-4 py-3 border-2 border-pink-300 rounded-2xl font-mitr bg-pink-50 focus:outline-none focus:border-pink-500 resize-none"
                    />
                  </div>
                )}

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="font-mitr font-bold text-amber-950 block mb-2">
                      {formData.orderType === 'pickup' ? 'Pickup Date:' : 'Delivery Date:'}
                    </label>
                    <input
                      type="date"
                      name="deliveryDate"
                      value={formData.deliveryDate}
                      onChange={handleChange}
                      required
                      min={new Date().toISOString().split('T')[0]}
                      className="w-full px-4 py-3 border-2 border-pink-300 rounded-2xl font-mitr bg-pink-50 focus:outline-none focus:border-pink-500"
                    />
                  </div>
                  <div>
                    <label className="font-mitr font-bold text-amber-950 block mb-2">
                      {formData.orderType === 'pickup' ? 'Pickup Time:' : 'Delivery Time:'}
                    </label>
                    <input
                      type="time"
                      name="deliveryTime"
                      value={formData.deliveryTime}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border-2 border-pink-300 rounded-2xl font-mitr bg-pink-50 focus:outline-none focus:border-pink-500"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Payment Method */}
            <div className="bg-white rounded-3xl p-8 shadow-xl">
              <h2 className="font-playball text-3xl text-amber-950 mb-6 border-b-2 border-pink-200 pb-2">
                Payment Method
              </h2>

              <div className="space-y-3">
                <label className="flex items-center gap-3 cursor-pointer bg-pink-50 p-4 rounded-2xl border-2 border-pink-200 hover:border-pink-400">
                  <input
                    type="radio"
                    name="paymentMethod"
                    value="cod"
                    checked={formData.paymentMethod === 'cod'}
                    onChange={handleChange}
                    className="w-5 h-5 accent-pink-500"
                  />
                  <span className="font-mitr text-amber-950">Cash on Delivery / Pickup</span>
                </label>

                <label className="flex items-center gap-3 cursor-pointer bg-pink-50 p-4 rounded-2xl border-2 border-pink-200 hover:border-pink-400">
                  <input
                    type="radio"
                    name="paymentMethod"
                    value="online"
                    checked={formData.paymentMethod === 'online'}
                    onChange={handleChange}
                    className="w-5 h-5 accent-pink-500"
                  />
                  <span className="font-mitr text-amber-950">Pay Online (UPI / Card)</span>
                </label>
              </div>
            </div>
          </div>

          {/* Right: Order Summary */}
          <div className="bg-white rounded-3xl p-8 shadow-xl h-fit sticky top-10">
            <h2 className="font-playball text-3xl text-amber-950 mb-6 border-b-2 border-pink-200 pb-2">
              Order Summary
            </h2>

            {/* Items */}
            <div className="space-y-4 max-h-80 overflow-y-auto mb-6">
              {cartItems.map((item, index) => (
                <div key={index} className="flex gap-4 border-b border-pink-100 pb-4">
                  <div 
                    className="w-16 h-16 rounded-xl bg-cover bg-center flex-shrink-0"
                    style={{ backgroundImage: `url(/assets/${item.image})` }}
                  />
                  <div className="flex-1">
                    <h3 className="font-mitr font-bold text-amber-950">{item.name}</h3>
                    <p className="text-gray-600 text-sm font-mitr">{item.selectedOption}</p>
                    {item.cakeName && (
                      <p className="text-pink-500 text-sm font-mitr">"{item.cakeName}"</p>
                    )}
                    <p className="font-mitr text-amber-950">₹{item.price} × {item.quantity}</p>
                  </div>
                  <p className="font-bold text-amber-950 font-mitr">₹{item.price * item.quantity}</p>
                </div>
              ))}
            </div>

            {/* Totals */}
            <div className="space-y-3 border-t-2 border-pink-200 pt-4">
              <div className="flex justify-between font-mitr">
                <span className="text-gray-600">Subtotal ({cartCount} items):</span>
                <span className="text-amber-950">₹{cartTotal}</span>
              </div>
              <div className="flex justify-between font-mitr">
                <span className="text-gray-600">Delivery Fee:</span>
                <span className="text-amber-950">
                  {formData.orderType === 'delivery' ? `₹${deliveryFee}` : 'FREE'}
                </span>
              </div>
              <div className="flex justify-between font-mitr text-xl font-bold border-t-2 border-pink-200 pt-3">
                <span className="text-amber-950">Total:</span>
                <span className="text-pink-500">
                  ₹{cartTotal + (formData.orderType === 'delivery' ? deliveryFee : 0)}
                </span>
              </div>
            </div>

            {/* Place Order Button */}
            <motion.button
              onClick={handlePlaceOrder}
              className="w-full bg-pink-400 text-white py-4 rounded-full font-mitr text-xl hover:bg-pink-500 border-2 border-amber-950 mt-6"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Place Order
            </motion.button>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Checkout