import React from 'react'

const ItemCard = () => {
  return (
    <div class="bg-pink-50 w-75 h-88 m-5 rounded-sm flex flex-col items-center pt-5 text-amber-950">
        <div class="bg-[url('assets/pinkcake.jpg')] bg-cover h-55 w-63 rounded-2xl"></div>
        <p class="text-2xl mr-16 mt-2 font-medium ">Raspberry Cake</p>
        <div class="w-70 flex justify-between items-center px-4 py-4">
        <p class="font-bold text-2xl "> ₹ 300/-</p>
        <button class="border-2 px-5 py-1 rounded-2xl">Buy Now</button>
        </div>
    </div>
  )
}

export default ItemCard