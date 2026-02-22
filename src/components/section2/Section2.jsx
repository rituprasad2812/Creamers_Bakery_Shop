import React from 'react'
import MenuItem from './menuitem'

const Section2 = () => {
  return (
    <div class="h-screen w-full bg-[url('assets/bgimg.svg')] bg-amber-100 font-mitr bg-no-repeat bg-cover">
      <h1 class="font-playball text-7xl text-center pt-10 font-bold text-amber-950 ">Taste of Creamers</h1>
      <p class=" text-center pb-10 pt-2">Something Sweet for Every Craving</p>
      <div class="flex justify-evenly items-center">
      <MenuItem />
      <MenuItem />
      <MenuItem />
      <MenuItem />
      <MenuItem />
      </div>
    </div>
  )
}

export default Section2