import React, { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import FadeInSection from '../FadeInSection'
import { Link } from 'react-router-dom'

const menuItems = [
  { name: "Cakes", image: "/assets/cake.avif", color: "bg-purple-100" },
  { name: "Breads", image: "/assets/breads.avif", color: "bg-amber-100" },
  { name: "Cookies", image: "/assets/cookies.webp", color: "bg-yellow-100" },
  { name: "Pastries", image: "/assets/pastry.webp", color: "bg-orange-100" },
  { name: "Custom Orders", image: "/assets/customs.avif", color: "bg-rose-100" },
]

const MenuCard = ({ item, index, scrollYProgress, total }) => {
  const start = index * 0.18
  const end = start + 0.18

  const x = useTransform(scrollYProgress, [start, end], [0, -1000])
  const rotate = useTransform(scrollYProgress, [start, end], [0, -30])
  const opacity = useTransform(scrollYProgress, [start, end - 0.05], [1, 0])

  return (
    <motion.div
      className={`absolute inset-0 rounded-3xl shadow-2xl flex flex-col items-center justify-end pb-10 cursor-pointer overflow-hidden ${item.color}`}
      style={{
        x,
        rotate,
        opacity,
        zIndex: total - index,
      }}
    >
      <img 
        src={item.image} 
        alt={item.name}
        className="absolute inset-0 w-full h-full object-cover rounded-3xl border-2 border-amber-950"
      />
      <div className="absolute inset-0 bg-black/20 rounded-3xl"></div>
      <div className="relative z-10 text-center">
        <h3 className="font-playball text-5xl text-white drop-shadow-lg mb-4">
          {item.name}
        </h3>
        <Link to={`/menu/${item.name.toLowerCase().replace(' ', '-')}`}>
          <button className="bg-white/90 text-amber-950 font-mitr px-8 py-3 rounded-full hover:bg-white transition-all">
            View All
          </button>
        </Link>
      </div>
    </motion.div>
  )
}

const Section2 = () => {
  const containerRef = useRef(null)

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  })

  return (
    <div ref={containerRef} className="h-[500vh] relative">
      <div className="sticky top-0 h-screen w-full flex flex-col items-center justify-center overflow-hidden bg-pink-200">
        
        <h2 className="font-playball text-7xl text-amber-950 mb-2 font-semibold">Taste of Creamers</h2>
        <p className="font-mitr text-amber-950 mb-10">Something Sweet for Every Craving</p>

        <div className="relative w-[500px] h-[500px]">
          {menuItems.map((item, index) => (
            <MenuCard
              key={index}
              item={item}
              index={index}
              scrollYProgress={scrollYProgress}
              total={menuItems.length}
            />
          ))}
        </div>

        <p className="mt-10 text-amber-950 font-mitr animate-bounce">↓ Scroll to explore</p>
      </div>
    </div>
  )
}

export default Section2