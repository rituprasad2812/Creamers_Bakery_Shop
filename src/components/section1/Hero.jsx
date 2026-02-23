import React from 'react'
import { motion } from 'motion/react'

const Hero = () => {
  const text = "Creamers";

  return (
    <div className="font-mitr w-full h-full bg-[url('assets/herocake.jpg')] bg-cover bg-center bg-no-repeat flex flex-col justify-center pl-40  text-amber-950">

      <div className="font-playball text-9xl">
        {text.split("").map((char, index) => (
          <motion.span
            key={index}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              duration: 0.2,
              delay: index * 0.2  // Each letter appears 0.1s after previous
            }}
          >
            {char}
          </motion.span>
        ))}
      </div>
      <pre className="pl-2 max-w-lg whitespace-normal leading-relaxed font-mitr">Discover the perfect balance of texture and flavor with our wide selection of artisan breads and pastries, made daily using only the finest local ingredients.</pre>
      <button className="mt-3 bg-pink-300 text-amber-950 px-10 py-3 rounded-full text-xl w-50 border-2 border-amber-950">Order Now</button>
    </div>
  )
}

export default Hero