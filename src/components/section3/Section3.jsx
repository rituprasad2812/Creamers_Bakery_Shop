import React from 'react'
import ItemCard from './ItemCard'

const Section3 = () => {
  return (
    <div class="min-h-screen w-full bg-pink-200 font-mitr">
        <h1 class="font-playball font-bold text-7xl text-center text-amber-950 pt-8">Most Loved</h1>
        <p class=" text-center pb-6 pt-1">The Ones That Keep You Coming Back</p>
        <div class="flex flex-wrap justify-around">
            <ItemCard />
            <ItemCard />
            <ItemCard />
            <ItemCard />
            <ItemCard />
            <ItemCard />
            <ItemCard />
            <ItemCard />
        </div>
    </div>
  )
}

export default Section3