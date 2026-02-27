import React, { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import FadeInSection from '../FadeInSection'
import cakes from '../../assets/cake.avif'
import breads from '../../assets/breads.avif'
import cookies from '../../assets/cookies.webp'
import pastry from '../../assets/pastry.webp'
import customs from '../../assets/customs.avif'
import { Link } from 'react-router-dom'



const Section2 = () => {
  const containerRef = useRef(null)

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  })

  const menuItems = [
    { name: "Cakes", image: cakes, color: "bg-purple-100" },
    { name: "Breads", image: breads, color: "bg-amber-100" },
    { name: "Cookies", image: cookies, color: "bg-yellow-100" },
    { name: "Pastries", image: pastry, color: "bg-orange-100" },
    { name: "Custom Orders", image: customs, color: "bg-rose-100" },
  ]

  return (
    <div ref={containerRef} className="h-[500vh] relative">
      {/* Sticky container - stays on screen while scrolling */}
      <div className="sticky top-0 h-screen w-full flex flex-col items-center justify-center overflow-hidden bg-pink-200">

        {/* Heading */}
        <h2 className="font-playball text-7xl text-amber-950 mb-2 font-semibold">Taste of Creamers</h2>
        <p className="font-mitr text-amber-950 mb-10">Something Sweet for Every Craving</p>

        {/* Cards Stack */}
        <div className="relative w-125 h-125">
          {menuItems.map((item, index) => {

            // Each card animates at different scroll points
            const start = index * 0.18
            const end = start + 0.18

            const x = useTransform(scrollYProgress, [start, end], [0, -1000])
            const rotate = useTransform(scrollYProgress, [start, end], [0, -30])
            const opacity = useTransform(scrollYProgress, [start, end - 0.05], [1, 0])

            return (
              <motion.div
                key={index}
                className={`absolute inset-0 rounded-3xl border-2 border-amber-950 shadow-2xl flex flex-col items-center justify-end pb-10 cursor-pointer ${item.color}`}
                style={{
                  x,
                  rotate,
                  opacity,
                  zIndex: menuItems.length - index,
                  backgroundImage: `url(${item.image})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center'
                }}
              >
                {/* Dark overlay for text readability */}
                <div className="absolute inset-0 bg-black/20 rounded-3xl"></div>

                {/* Content */}
                <div className="relative z-10 text-center">
                  <h3 className="font-playball text-5xl text-white drop-shadow-lg mb-4">
                    {item.name}
                  </h3>
                  <Link to={'/menu/${item.name.toLowerCase()}'}>
                    <motion.button className="bg-white/90 text-amber-950 font-mitr px-8 py-3 rounded-full hover:bg-white transition-all"
                      whileHover={{ scale: 1.07, backgroundColor: "black", color: "white" }}
                      whileTap={{ scale: 0.7 }}>
                      View All
                    </motion.button>
                  </Link>
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* Scroll indicator */}
        <p className="mt-10 text-amber-950 font-mitr animate-bounce">↓ Scroll to explore</p>

      </div>
    </div>
  )
}

export default Section2