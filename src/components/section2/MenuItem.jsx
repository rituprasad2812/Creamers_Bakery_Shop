import React from 'react'
import { motion } from 'framer-motion'

const MenuItem = () => {
  return (
    <motion.div 
      className="bg-amber-200 h-120 w-80 rounded-3xl m-7 flex flex-col justify-center items-center cursor-pointer"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 1.3 }}
      whileHover={{ 
        scale: 1.05, 
        y: -10,
        boxShadow: "0px 20px 40px rgba(0,0,0,0.15)"
      }}
      whileTap={{ scale: 0.98 }}
    >
      <motion.div 
        className="bg-[url('assets/herocake2.jpg')] h-76 w-50 rounded-sm bg-cover"
        whileHover={{ scale: 1.1 }}
        transition={{ duration: 0.3 }}
      />
      
      <p className="mt-5 text-3xl">Breads</p>
    </motion.div>
  )
}

export default MenuItem