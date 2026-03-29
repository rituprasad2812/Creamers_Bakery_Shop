import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import Navbar from '../components/section1/Navbar'
import { motion } from 'framer-motion'
import { useCart } from '../context/CartContext'

const ProductDetail = () => {
  const { id } = useParams()
  const [product, setProduct] = useState(null)
  const [selectedOption, setSelectedOption] = useState('')
  const [quantity, setQuantity] = useState(1)
  const [dropdownOpen, setDropdownOpen] = useState(false)
  const [cakeName, setCakeName] = useState('')
  const { addToCart, cartCount } = useCart()

  // Realistic price modifiers based on category
  const categoryOptions = {
    Cakes: {
      label: "Select Size",
      options: [
        { name: "500g (Half Kg)", priceAdd: 0 },
        { name: "1 Kg", priceAdd: 80 },
        { name: "1.5 Kg", priceAdd: 140 },
        { name: "2 Kg", priceAdd: 180 }
      ]
    },
    Breads: {
      label: "Select Type",
      options: [
        { name: "Regular", priceAdd: 0 },
        { name: "Whole Wheat", priceAdd: 20 },
        { name: "Multigrain", priceAdd: 35 },
        { name: "Gluten Free", priceAdd: 50 }
      ]
    },
    Cookies: {
      label: "Select Pack",
      options: [
        { name: "Pack of 6", priceAdd: 0 },
        { name: "Pack of 12", priceAdd: 40 },
        { name: "Pack of 24", priceAdd: 90 }
      ]
    },
    Pastries: {
      label: "Select Size",
      options: [
        { name: "Small", priceAdd: 0 },
        { name: "Medium", priceAdd: 25 },
        { name: "Large", priceAdd: 50 }
      ]
    }
  }

  useEffect(() => {
    window.scrollTo(0, 0)
    axios.get(`http://localhost:5000/api/products/${id}`)
      .then(res => {
        setProduct(res.data)
        const options = categoryOptions[res.data.category]
        if (options) {
          setSelectedOption(options.options[0].name)
        }
      })
      .catch(err => console.log(err))
  }, [id])

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-pink-50">
        <p className="text-2xl font-mitr text-amber-950">Loading...</p>
      </div>
    )
  }

  const currentOption = categoryOptions[product.category] || null

  const getSelectedPriceAdd = () => {
    if (!currentOption) return 0
    const selected = currentOption.options.find(opt => opt.name === selectedOption)
    return selected ? selected.priceAdd : 0
  }

  const unitPrice = product.price + getSelectedPriceAdd()
  const finalPrice = unitPrice * quantity

  const handleAddToCart = () => {
    // Store the final unit price (base + modifier) in cart
    const cartItem = {
      ...product,
      price: unitPrice,  // This is the key fix - store calculated price
      selectedOption,
      cakeName: product.category === 'Cakes' ? cakeName : null
    }
    addToCart(cartItem, quantity, selectedOption)
    alert(`${product.name} added to cart!`)
  }

  return (
    <div className="min-h-screen bg-pink-50">
      <Navbar variant="menu" categoryName={product.category} cartCount={cartCount} />

      <div className="max-w-6xl mx-auto p-10">
        <div className="flex gap-10">
          
          {/* Left: Product Image */}
          <motion.div 
            className="bg-white rounded-3xl p-6 shadow-xl flex-1"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <img 
              src={`/assets/${product.image}`} 
              alt={product.name}
              className="w-full h-[500px] object-cover rounded-2xl"
            />
          </motion.div>

          {/* Right: Product Details */}
          <motion.div 
            className="bg-white rounded-3xl p-8 shadow-xl flex-1 flex flex-col justify-between"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div>
              {/* Category Badge */}
              <span className="bg-pink-200 text-pink-700 px-4 py-1 rounded-full text-sm font-mitr">
                {product.category}
              </span>

              {/* Product Name */}
              <h1 className="font-playball text-5xl text-amber-950 mt-4 mb-3">
                {product.name}
              </h1>

              {/* Price - Shows updated price */}
              <p className="text-4xl font-bold text-pink-500 mb-4">
                ₹{unitPrice}/-
                {getSelectedPriceAdd() > 0 && (
                  <span className="text-lg text-gray-500 ml-2 line-through">₹{product.price}/-</span>
                )}
              </p>

              {/* Description */}
              <p className="font-mitr text-gray-700 text-lg leading-relaxed mb-6">
                Indulge in our handcrafted {product.name.toLowerCase()}, made fresh daily with premium ingredients. 
                Perfect for any celebration or just treating yourself!
              </p>

              {/* Custom Dropdown */}
              {currentOption && (
                <div className="mb-6 relative">
                  <label className="font-mitr font-bold text-amber-950 block mb-2">
                    {currentOption.label}:
                  </label>
                  
                  <div 
                    className="w-full px-4 py-3 border-2 border-pink-300 rounded-2xl font-mitr bg-pink-50 cursor-pointer flex justify-between items-center"
                    onClick={() => setDropdownOpen(!dropdownOpen)}
                  >
                    <span className="text-amber-950">{selectedOption}</span>
                    <span className={`text-pink-500 transition-transform ${dropdownOpen ? 'rotate-180' : ''}`}>▼</span>
                  </div>
                  
                  {dropdownOpen && (
                    <motion.div 
                      className="absolute w-full mt-2 bg-white border-2 border-pink-300 rounded-2xl shadow-lg z-10 overflow-hidden"
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      {currentOption.options.map((option) => (
                        <div
                          key={option.name}
                          className={`px-4 py-3 font-mitr cursor-pointer transition-all flex justify-between ${
                            selectedOption === option.name 
                              ? 'bg-pink-300 text-amber-950' 
                              : 'hover:bg-pink-100 text-amber-950'
                          }`}
                          onClick={() => {
                            setSelectedOption(option.name)
                            setDropdownOpen(false)
                          }}
                        >
                          <span>{option.name}</span>
                          {option.priceAdd > 0 && (
                            <span className="text-pink-500">+₹{option.priceAdd}</span>
                          )}
                        </div>
                      ))}
                    </motion.div>
                  )}
                </div>
              )}

              {/* Cake Name Input - Only for Cakes */}
              {product.category === 'Cakes' && (
                <div className="mb-6">
                  <label className="font-mitr font-bold text-amber-950 block mb-2">
                    Name on Cake (optional):
                  </label>
                  <input
                    type="text"
                    value={cakeName}
                    onChange={(e) => setCakeName(e.target.value)}
                    placeholder="e.g. Happy Birthday Rahul"
                    maxLength={30}
                    className="w-full px-4 py-3 border-2 border-pink-300 rounded-2xl font-mitr bg-pink-50 focus:outline-none focus:border-pink-500 text-amber-950 placeholder-gray-400"
                  />
                  <p className="text-sm text-gray-500 mt-1 font-mitr">{cakeName.length}/30 characters</p>
                </div>
              )}

              {/* Quantity Selector */}
              <div className="mb-6">
                <label className="font-mitr font-bold text-amber-950 block mb-2">
                  Quantity:
                </label>
                <div className="flex items-center gap-4">
                  <motion.button 
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="bg-pink-200 hover:bg-pink-300 w-12 h-12 rounded-full text-2xl font-bold text-amber-950 border-2 border-amber-950"
                    whileTap={{ scale: 0.9 }}
                  >
                    -
                  </motion.button>
                  <span className="text-2xl font-bold w-12 text-center text-amber-950">{quantity}</span>
                  <motion.button 
                    onClick={() => setQuantity(quantity + 1)}
                    className="bg-pink-200 hover:bg-pink-300 w-12 h-12 rounded-full text-2xl font-bold text-amber-950 border-2 border-amber-950"
                    whileTap={{ scale: 0.9 }}
                  >
                    +
                  </motion.button>
                </div>
              </div>
            </div>

            {/* Add to Cart Button */}
            <motion.button
              onClick={handleAddToCart}
              className="w-full bg-pink-400 text-white py-4 rounded-full font-mitr text-xl hover:bg-pink-500 border-2 border-amber-950"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Add to Cart - ₹{finalPrice}
            </motion.button>

          </motion.div>
        </div>

        {/* Reviews Section */}
        <div className="mt-16 bg-white rounded-3xl p-8 shadow-xl">
          <h2 className="font-playball text-4xl text-amber-950 mb-6">Customer Reviews</h2>
          
          <div className="space-y-4">
            <div className="border-b border-pink-200 pb-4">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-yellow-500">⭐⭐⭐⭐⭐</span>
                <span className="font-bold font-mitr text-amber-950">Sarah M.</span>
              </div>
              <p className="text-gray-700 font-mitr">"Absolutely delicious! Best {product.category.toLowerCase()} I've ever had!"</p>
            </div>

            <div className="border-b border-pink-200 pb-4">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-yellow-500">⭐⭐⭐⭐⭐</span>
                <span className="font-bold font-mitr text-amber-950">Rahul K.</span>
              </div>
              <p className="text-gray-700 font-mitr">"Fresh and perfectly made. Highly recommend!"</p>
            </div>

            <div className="pb-4">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-yellow-500">⭐⭐⭐⭐</span>
                <span className="font-bold font-mitr text-amber-950">Priya S.</span>
              </div>
              <p className="text-gray-700 font-mitr">"Great taste, will order again!"</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default ProductDetail