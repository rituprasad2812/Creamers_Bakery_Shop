import React from 'react'
import { motion } from 'framer-motion'

const ItemCard = () => {
  return (
    <motion.div 
      className="bg-pink-50 w-75 h-88 m-5 rounded-sm flex flex-col items-center pt-5 text-amber-950"
      initial={{ rotateY: 90, opacity: 0 }}
      whileInView={{ rotateY: 0, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1.2, ease: "easeOut" }}
      whileHover={{ rotateZ: 2 , transition: {duration: 0}}}
    >
      <div className="bg-[url('assets/pinkcake.jpg')] bg-cover h-55 w-63 rounded-2xl" />
      
      <p className="text-2xl mr-16 mt-2 font-medium">Raspberry Cake</p>
      
      <div className="w-70 flex justify-between items-center px-4 py-4">
        <p className="font-bold text-2xl">₹ 300/-</p>
        
        <motion.button 
          className="border-2 px-5 py-1 rounded-2xl"
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0 }}
        >
          Buy Now
        </motion.button>
      </div>
    </motion.div>
  )
}

export default ItemCard