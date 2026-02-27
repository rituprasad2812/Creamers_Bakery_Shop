import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft, faShoppingCart } from '@fortawesome/free-solid-svg-icons'

const Navbar = ({ variant = "home", categoryName = "", cartCount = 0 }) => {
  
  // HOME VERSION (your current one)
  if (variant === "home") {
    return (
      <div className="flex items-center border-b-2 border-t-2 border-amber-950">
        <div className="font-playball text-5xl text-amber-950 font-bold px-4">Creamers</div>
        <div className="flex w-full h-15 justify-end gap-10 pr-10 font-mitr text-1.5xl items-center text-amber-950">
          <span>Menu</span>
          <span>Gallery</span>
          <span>About Us</span>
          <span>Reviews</span>
          <span>Contact Us</span>
          <Link to="/login">
            <motion.button 
              className="bg-pink-300 px-6 py-2 rounded-3xl text-amber-950 border-2 border-amber-950 cursor-pointer"
              whileHover={{ scale: 1.06, backgroundColor: "white" }}
              whileTap={{ scale: 1 }}
              transition={{ duration: 0 }}
            >
              Login
            </motion.button>
          </Link>
        </div>
      </div>
    )
  }

  // MENU PAGE VERSION (simplified with back button + cart)
  if (variant === "menu") {
    return (
      <div className="flex justify-between items-center px-10 py-5 border-b-2 border-amber-950">
        
        {/* Back Button */}
        <Link to="/">
          <FontAwesomeIcon icon={faArrowLeft} className="text-2xl text-amber-950 cursor-pointer" />
        </Link>

        {/* Category Name */}
        <h1 className="font-playball text-4xl text-amber-950">{categoryName}</h1>

        {/* Cart Icon */}
        <Link to="/cart" className="relative">
          <FontAwesomeIcon icon={faShoppingCart} className="text-2xl text-amber-950" />
          {cartCount > 0 && (
            <span className="absolute -top-2 -right-2 bg-pink-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
              {cartCount}
            </span>
          )}
        </Link>
      </div>
    )
  }
}

export default Navbar