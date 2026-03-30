import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import Navbar from '../components/section1/Navbar'
import { motion } from 'framer-motion'
import axios from 'axios'

const CustomOrders = () => {
    const [formData, setFormData] = useState({
        orderType: 'pickup',
        date: '',
        time: '',
        name: '',
        phone: '',
        address: '',
        size: '1 Kg',
        flavor: 'Vanilla',
        floors: '1',
        addOns: [],
        doNotInclude: '',
        theme: '',
        colors: ''
    })

    const [showPayment, setShowPayment] = useState(false)
    const navigate = useNavigate()

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    const handleAddOnChange = (addOn) => {
        if (formData.addOns.includes(addOn)) {
            setFormData({ ...formData, addOns: formData.addOns.filter(item => item !== addOn) })
        } else {
            setFormData({ ...formData, addOns: [...formData.addOns, addOn] })
        }
    }

    const calculatePrice = () => {
        let basePrice = 0

        if (formData.size === '1 Kg') basePrice = 800
        else if (formData.size === '2 Kg') basePrice = 1500
        else if (formData.size === '3 Kg') basePrice = 2200

        const floors = parseInt(formData.floors)
        if (floors === 2) basePrice += 300
        else if (floors === 3) basePrice += 600

        const addOnPrices = {
            'Candles': 50,
            'Photo Print': 150,
            'Cake Topper': 100,
            'Sparklers': 80,
            'Chocolate Decorations': 120,
            'Fresh Fruits': 200
        }
        formData.addOns.forEach(addOn => {
            basePrice += addOnPrices[addOn] || 0
        })

        const total = basePrice
        const downPayment = Math.round(total * 0.5)
        const balance = total - downPayment

        return { total, downPayment, balance }
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        setShowPayment(true)
    }

    const prices = calculatePrice()

    // Backend integrated function
    const handleConfirmOrder = async () => {
        try {
            const orderData = {
                ...formData,
                total: prices.total,
                downPayment: prices.downPayment,
                balance: prices.balance
            }

            await axios.post('http://localhost:5000/api/custom-orders', orderData)
            alert('Custom order submitted successfully! We will contact you soon.')
            navigate('/')
        } catch (err) {
            console.log(err)
            alert('Failed to submit order. Please try again.')
        }
    }

    return (
        <div className="min-h-screen bg-pink-50 pb-10">
            <Navbar variant="menu" categoryName="Custom Orders" />

            {/* Header */}
            <div className="text-center py-10">
                <h1 className="font-playball text-6xl text-amber-950 mb-2">Custom Cake Order</h1>
                <p className="font-mitr text-gray-600">Create your dream cake with us!</p>
            </div>

            <form onSubmit={handleSubmit}>
                <div className="max-w-7xl mx-auto px-10">

                    {/* Main Grid - 3 Columns */}
                    <div className="grid grid-cols-3 gap-8">

                        {/* Column 1: Delivery Details */}
                        <div className="bg-white rounded-3xl p-8 shadow-xl">
                            <h2 className="font-playball text-3xl text-amber-950 mb-6 border-b-2 border-pink-200 pb-2">
                                Delivery Details
                            </h2>

                            <div className="mb-5">
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
                                        <span className="font-mitr text-amber-950">Delivery</span>
                                    </label>
                                </div>
                            </div>

                            <div className="mb-5">
                                <label className="font-mitr font-bold text-amber-950 block mb-2">
                                    {formData.orderType === 'pickup' ? 'Pickup Date:' : 'Delivery Date:'}
                                </label>
                                <input
                                    type="date"
                                    name="date"
                                    value={formData.date}
                                    onChange={handleChange}
                                    required
                                    min={new Date().toISOString().split('T')[0]}
                                    className="w-full px-4 py-3 border-2 border-pink-300 rounded-2xl font-mitr bg-pink-50 focus:outline-none focus:border-pink-500"
                                />
                            </div>

                            <div className="mb-5">
                                <label className="font-mitr font-bold text-amber-950 block mb-2">
                                    {formData.orderType === 'pickup' ? 'Pickup Time:' : 'Delivery Time:'}
                                </label>
                                <input
                                    type="time"
                                    name="time"
                                    value={formData.time}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-3 border-2 border-pink-300 rounded-2xl font-mitr bg-pink-50 focus:outline-none focus:border-pink-500"
                                />
                            </div>

                            <div className="mb-5">
                                <label className="font-mitr font-bold text-amber-950 block mb-2">Your Name:</label>
                                <input
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    placeholder="Full Name"
                                    required
                                    className="w-full px-4 py-3 border-2 border-pink-300 rounded-2xl font-mitr bg-pink-50 focus:outline-none focus:border-pink-500"
                                />
                            </div>

                            <div className="mb-5">
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

                            {formData.orderType === 'delivery' && (
                                <div className="mb-5">
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
                        </div>

                        {/* Column 2: Order Details */}
                        <div className="bg-white rounded-3xl p-8 shadow-xl">
                            <h2 className="font-playball text-3xl text-amber-950 mb-6 border-b-2 border-pink-200 pb-2">
                                Order Details
                            </h2>

                            <div className="mb-5">
                                <label className="font-mitr font-bold text-amber-950 block mb-2">Cake Size:</label>
                                <select
                                    name="size"
                                    value={formData.size}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 border-2 border-pink-300 rounded-2xl font-mitr bg-pink-50 focus:outline-none focus:border-pink-500"
                                >
                                    <option>1 Kg</option>
                                    <option>2 Kg</option>
                                    <option>3 Kg</option>
                                </select>
                            </div>

                            <div className="mb-5">
                                <label className="font-mitr font-bold text-amber-950 block mb-2">Flavor:</label>
                                <select
                                    name="flavor"
                                    value={formData.flavor}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 border-2 border-pink-300 rounded-2xl font-mitr bg-pink-50 focus:outline-none focus:border-pink-500"
                                >
                                    <option>Vanilla</option>
                                    <option>Chocolate</option>
                                    <option>Strawberry</option>
                                    <option>Red Velvet</option>
                                    <option>Butterscotch</option>
                                    <option>Black Forest</option>
                                    <option>Pineapple</option>
                                </select>
                            </div>

                            <div className="mb-5">
                                <label className="font-mitr font-bold text-amber-950 block mb-2">Number of Floors:</label>
                                <select
                                    name="floors"
                                    value={formData.floors}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 border-2 border-pink-300 rounded-2xl font-mitr bg-pink-50 focus:outline-none focus:border-pink-500"
                                >
                                    <option value="1">1 Floor (Standard)</option>
                                    <option value="2">2 Floors (+₹300)</option>
                                    <option value="3">3 Floors (+₹600)</option>
                                </select>
                            </div>

                            <div className="mb-5">
                                <label className="font-mitr font-bold text-amber-950 block mb-2">Add-ons:</label>
                                <div className="grid grid-cols-2 gap-2">
                                    {['Candles', 'Photo Print', 'Cake Topper', 'Sparklers', 'Chocolate Decorations', 'Fresh Fruits'].map((addOn) => (
                                        <label key={addOn} className="flex items-center gap-2 cursor-pointer bg-pink-50 p-2 rounded-xl border border-pink-200 hover:border-pink-400">
                                            <input
                                                type="checkbox"
                                                checked={formData.addOns.includes(addOn)}
                                                onChange={() => handleAddOnChange(addOn)}
                                                className="w-4 h-4 accent-pink-500"
                                            />
                                            <span className="font-mitr text-amber-950 text-sm">{addOn}</span>
                                        </label>
                                    ))}
                                </div>
                            </div>

                            <div className="mb-5">
                                <label className="font-mitr font-bold text-amber-950 block mb-2">Do Not Include:</label>
                                <input
                                    type="text"
                                    name="doNotInclude"
                                    value={formData.doNotInclude}
                                    onChange={handleChange}
                                    placeholder="e.g., Nuts, Eggs, Gluten..."
                                    className="w-full px-4 py-3 border-2 border-pink-300 rounded-2xl font-mitr bg-pink-50 focus:outline-none focus:border-pink-500"
                                />
                            </div>
                        </div>

                        {/* Column 3: Design Details + Payment */}
                        <div className="space-y-8">
                            <div className="bg-white rounded-3xl p-8 shadow-xl">
                                <h2 className="font-playball text-3xl text-amber-950 mb-6 border-b-2 border-pink-200 pb-2">
                                    Design Details
                                </h2>

                                <div className="mb-5">
                                    <label className="font-mitr font-bold text-amber-950 block mb-2">Theme:</label>
                                    <input
                                        type="text"
                                        name="theme"
                                        value={formData.theme}
                                        onChange={handleChange}
                                        placeholder="e.g., Princess, Superhero, Floral..."
                                        required
                                        className="w-full px-4 py-3 border-2 border-pink-300 rounded-2xl font-mitr bg-pink-50 focus:outline-none focus:border-pink-500"
                                    />
                                </div>

                                <div className="mb-5">
                                    <label className="font-mitr font-bold text-amber-950 block mb-2">Preferred Colors:</label>
                                    <input
                                        type="text"
                                        name="colors"
                                        value={formData.colors}
                                        onChange={handleChange}
                                        placeholder="e.g., Pink and Gold, Blue..."
                                        required
                                        className="w-full px-4 py-3 border-2 border-pink-300 rounded-2xl font-mitr bg-pink-50 focus:outline-none focus:border-pink-500"
                                    />
                                </div>

                                {!showPayment && (
                                    <motion.button
                                        type="submit"
                                        className="w-full bg-pink-400 text-white py-4 rounded-full font-mitr text-xl hover:bg-pink-500 border-2 border-amber-950 mt-4"
                                        whileHover={{ scale: 1.02 }}
                                        whileTap={{ scale: 0.98 }}
                                    >
                                        Calculate Price
                                    </motion.button>
                                )}
                            </div>

                            {showPayment && (
                                <div className="bg-white rounded-3xl p-8 shadow-xl">
                                    <h2 className="font-playball text-3xl text-amber-950 mb-6 border-b-2 border-pink-200 pb-2">
                                        Payment Details
                                    </h2>

                                    <div className="bg-pink-50 rounded-2xl p-6 space-y-3">

                                        {/* Price Breakdown */}
                                        <p className="font-mitr font-bold text-amber-950 border-b border-pink-200 pb-2">Price Breakdown:</p>

                                        {/* Base Price */}
                                        <div className="flex justify-between font-mitr text-sm">
                                            <span className="text-gray-600">Cake ({formData.size}):</span>
                                            <span className="text-amber-950">₹{formData.size === '1 Kg' ? 800 : formData.size === '2 Kg' ? 1500 : 2200}</span>
                                        </div>

                                        {/* Floors */}
                                        {parseInt(formData.floors) > 1 && (
                                            <div className="flex justify-between font-mitr text-sm">
                                                <span className="text-gray-600">{formData.floors} Floors:</span>
                                                <span className="text-amber-950">+₹{parseInt(formData.floors) === 2 ? 300 : 600}</span>
                                            </div>
                                        )}

                                        {/* Add-ons */}
                                        {formData.addOns.length > 0 && formData.addOns.map((addOn) => {
                                            const addOnPrices = {
                                                'Candles': 50,
                                                'Photo Print': 150,
                                                'Cake Topper': 100,
                                                'Sparklers': 80,
                                                'Chocolate Decorations': 120,
                                                'Fresh Fruits': 200
                                            }
                                            return (
                                                <div key={addOn} className="flex justify-between font-mitr text-sm">
                                                    <span className="text-gray-600">{addOn}:</span>
                                                    <span className="text-amber-950">+₹{addOnPrices[addOn]}</span>
                                                </div>
                                            )
                                        })}

                                        {/* Divider */}
                                        <div className="border-t-2 border-pink-300 my-3"></div>

                                        {/* Total */}
                                        <div className="flex justify-between font-mitr text-xl font-bold">
                                            <span className="text-amber-950">Total:</span>
                                            <span className="text-amber-950">₹{prices.total}</span>
                                        </div>

                                        {/* Down Payment */}
                                        <div className="flex justify-between font-mitr text-lg">
                                            <span className="text-amber-950">Down Payment (50%):</span>
                                            <span className="font-bold text-pink-500">₹{prices.downPayment}</span>
                                        </div>

                                        {/* Balance */}
                                        <div className="flex justify-between font-mitr text-lg">
                                            <span className="text-amber-950">Balance (on {formData.orderType}):</span>
                                            <span className="font-bold text-amber-950">₹{prices.balance}</span>
                                        </div>

                                        {/* Due Date */}
                                        <div className="flex justify-between font-mitr text-sm border-t border-pink-200 pt-3 mt-3">
                                            <span className="text-gray-600">Due Date:</span>
                                            <span className="font-bold text-amber-950">{formData.date || '-'}</span>
                                        </div>
                                    </div>

                                    <div className="flex gap-4 mt-6">
                                        <motion.button
                                            type="button"
                                            onClick={() => setShowPayment(false)}
                                            className="flex-1 bg-gray-200 text-amber-950 py-3 rounded-full font-mitr hover:bg-gray-300"
                                            whileHover={{ scale: 1.02 }}
                                            whileTap={{ scale: 0.98 }}
                                        >
                                            Edit
                                        </motion.button>
                                        <motion.button
                                            type="button"
                                            onClick={handleConfirmOrder}
                                            className="flex-1 bg-pink-400 text-white py-3 rounded-full font-mitr hover:bg-pink-500 border-2 border-amber-950"
                                            whileHover={{ scale: 1.02 }}
                                            whileTap={{ scale: 0.98 }}
                                        >
                                            Confirm
                                        </motion.button>
                                    </div>
                                </div>
                            )}
                        </div>

                    </div>
                </div>
            </form>
        </div>
    )
}

export default CustomOrders