import React from 'react'
import {motion} from 'motion/react'
import ItemCard from './ItemCard'
import FadeInSection from '../FadeInSection'

const Section3 = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
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
    <FadeInSection class="min-h-screen w-full">
    <div class="min-h-screen w-full bg-pink-200 font-mitr p-10">
        <h1 class="font-playball font-bold text-7xl text-center text-amber-950 pt-8">Most Loved</h1>
        <p class=" text-center pb-6 pt-1">The Ones That Keep You Coming Back</p>
         <motion.div 
        className="flex justify-evenly flex-wrap"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <motion.div variants={cardVariants}><ItemCard /></motion.div>
        <motion.div variants={cardVariants}><ItemCard /></motion.div>
        <motion.div variants={cardVariants}><ItemCard /></motion.div>
        <motion.div variants={cardVariants}><ItemCard /></motion.div>
        <motion.div variants={cardVariants}><ItemCard /></motion.div>
        <motion.div variants={cardVariants}><ItemCard /></motion.div>
        <motion.div variants={cardVariants}><ItemCard /></motion.div>
        <motion.div variants={cardVariants}><ItemCard /></motion.div>
      </motion.div>
    </div>
    </FadeInSection>
  )
}

export default Section3