import React from 'react'
import ReviewItem from './ReviewItem'

const Reviews = () => {
  return (
    <div class="font-mitr">
        <h1 class= "font-playball text-amber-950 text-center text-7xl pt-8 font-semibold">Sweet words</h1>
        <p class="text-center">Smiles We've Baked Along the Way</p>
        <div class="flex justify-around flex-wrap">
        <ReviewItem />
        <ReviewItem />
        <ReviewItem />
        <ReviewItem />
        <ReviewItem />
        </div>
    </div>
  )
}

export default Reviews