import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

const ItemCard = ({ product }) => {
  console.log('Product data:', product) 
  console.log('Product ID:', product._id) 
  return (
    <Link to={`/product/${product._id}`}>
      <motion.div 
        className="bg-pink-50 w-75 h-88 m-5 rounded-sm flex flex-col items-center pt-5 text-amber-950 border-2 border-amber-950"
        initial={{ rotateY: 90, opacity: 0 }}
        whileInView={{ rotateY: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        whileHover={{ rotateZ: 2, transition: { duration: 0 } }}
      >
        <div
          className="bg-cover bg-center h-55 w-63 rounded-2xl"
          style={{ backgroundImage: `url(/assets/${product.image})` }}
        />
        
        <p className="text-2xl mt-2 font-medium">{product.name}</p>
        
        <div className="w-70 flex justify-between items-center px-4 py-4">
          <p className="font-bold text-2xl">₹{product.price}/-</p>
          
          <motion.button 
            className="border-2 px-5 py-1 rounded-2xl bg-pink-200"
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0 }}
          >
            Buy Now
          </motion.button>
        </div>
      </motion.div>
    </Link>
  )
}

export default ItemCard