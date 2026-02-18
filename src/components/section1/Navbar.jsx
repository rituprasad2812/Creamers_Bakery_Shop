import React from 'react'

const Navbar = () => {
  return (
    <div class="flex items-center">
        <div class="font-playball text-5xl text-amber-950 font-bold px-4" >Creamers</div>
        <div class="flex w-full h-12 justify-end gap-10 pr-10 font-mitr text-1.5xl items-center  text-amber-950">
        <span>Menu</span>
        <span>Gallery</span>
        <span>About Us</span>
        <span>Reviews</span>
        <span>Contact Us</span>
        <button class="bg-pink-300 px-6 py-2 rounded-3xl text-black">Login</button>
        </div>
    </div>
  )
}

export default Navbar