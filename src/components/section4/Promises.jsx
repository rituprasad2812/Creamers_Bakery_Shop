import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBreadSlice, faCakeCandles, faGift, faTruck } from '@fortawesome/free-solid-svg-icons'

const Promises = () => {
  return (
    <div class="font-mitr">
        <h1 class = "font-playball text-7xl text-amber-950 text-center pt-8 font-semibold">Our Promises</h1>
        <p class = "text-center pb-5">From Our Kitchen to Your Heart, Always Fresh</p>
        <div class="min-h-50 w-full bg-pink-100 flex justify-center gap-15">
          <div class="p-6 text-center"><FontAwesomeIcon icon={faTruck} className="text-9xl text-pink-400"/>
          <p class="text-amber-950 font-bold text-2xl">On-Time Delivery</p>
          <p>Your Treats, Right on Schedule</p></div>
          <div class="p-6 text-center"><FontAwesomeIcon icon={faCakeCandles} className="text-9xl text-pink-400"/>
          <p class="text-amber-950 font-bold text-2xl">100+ Designs</p>
          <p>Endless Options to Choose From</p></div>
          <div class="p-6 text-center"><FontAwesomeIcon icon={faGift} className="text-9xl text-pink-400"/>
          <p class="text-amber-950 font-bold text-2xl">2cr+ Orders</p>
          <p>Trusted by Millions Nationwide</p></div>
          <div class="p-6 text-center"><FontAwesomeIcon icon={faBreadSlice} className="text-9xl text-pink-400"/>
          <p class="text-amber-950 font-bold text-2xl">Baked Thent</p>
          <p>Straight From Oven to You</p></div>
        </div>
    </div> 
  )
}

export default Promises