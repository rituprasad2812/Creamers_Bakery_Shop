import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import FadeInSection from '../FadeInSection'
import axios from 'axios'

const Section3 = () => {
  const [products, setProducts] = useState([])

  useEffect(() => {
    axios.get('http://localhost:5000/api/products/bestsellers')
      .then(res => setProducts(res.data))
      .catch(err => console.log(err))
  }, [])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  }

  const cardVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  }

  return (
    <FadeInSection className="min-h-screen w-full">
      <div className="min-h-screen w-full bg-pink-200 font-mitr p-10">
        <h1 className="font-playball font-bold text-7xl text-center text-amber-950 pt-8">Most Loved</h1>
        <p className="text-center pb-6 pt-1">The Ones That Keep You Coming Back</p>
        
        <motion.div 
          className="flex justify-evenly flex-wrap"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {products.map((product) => (
            <motion.div 
              key={product._id} 
              variants={cardVariants}
              className="bg-pink-50 w-75 h-88 m-5 rounded-sm flex flex-col items-center pt-5 text-amber-950 border-2 border-amber-950"
              initial={{ rotateY: 90, opacity: 0 }}
              whileInView={{ rotateY: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              whileHover={{ rotateZ: 2 }}
            >
              <div 
                className="bg-cover bg-center h-55 w-63 rounded-2xl"
                style={{ backgroundImage: `url(/assets/${product.image})` }}
              />
              <p className="text-2xl mt-2 font-medium">{product.name}</p>
              <div className="w-70 flex justify-between items-center px-4 py-4">
                <p className="font-bold text-2xl">₹{product.price}/-</p>
                <motion.button 
                  className="border-2 px-5 py-1 rounded-2xl"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0 }}
                >
                  Buy Now
                </motion.button>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </FadeInSection>
  )
}

export default Section3