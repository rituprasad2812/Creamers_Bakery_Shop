import { scale } from 'motion/react'
import React from 'react'
import {motion} from 'motion/react'
import { Link } from 'react-router-dom'


const Navbar = () => {
  return (
    <div class="flex items-center border-b-2 border-t-2 border-amber-950">
      <div class="font-playball text-5xl text-amber-950 font-bold px-4" >Creamers</div>
      <div class="flex w-full h-15 justify-end gap-10 pr-10 font-mitr text-1.5xl items-center text-amber-950">
        <span>Menu</span>
        <span>Gallery</span>
        <span>About Us</span>
        <span>Reviews</span>
        <span>Contact Us</span>
        <Link to="/login">
          <motion.button className="bg-pink-300 px-6 py-2 rounded-3xl text-amber-950 border-2 border-amber-950 cursor-pointer"
            whileHover={{ scale: 1.06, backgroundColor: "white"}}
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

export default Navbar