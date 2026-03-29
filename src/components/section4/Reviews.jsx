import React, { useState, useEffect } from 'react'
import axios from 'axios'
import ReviewItem from './ReviewItem'

const Reviews = () => {
  const [reviews, setReviews] = useState([])

  useEffect(() => {
    axios.get('http://localhost:5000/api/reviews/all')
      .then(res => setReviews(res.data))
      .catch(err => console.log(err))
  }, [])

  return (
    <div className="font-mitr bg-pink py-5">
      <h1 className="font-playball text-amber-950 text-center text-7xl pt-15 font-semibold">Sweet Words</h1>
      <p className="text-center mb-10">Smiles We've Baked Along the Way</p>

      <div className="flex justify-evenly flex-wrap gap-7 px-7">
        {reviews.length === 0 ? (
          <p className="text-center text-gray-500">Loading reviews...</p>
        ) : (
          reviews.map((review) => (
            <ReviewItem 
              key={review._id}
              name={review.name}
              review={review.review}
              rating={review.rating}
              createdAt={review.createdAt}
            />
          ))
        )}
      </div>
    </div>
  )
}

export default Reviews