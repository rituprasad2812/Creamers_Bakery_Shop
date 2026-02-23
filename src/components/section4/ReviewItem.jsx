import React from 'react'

const ReviewItem = () => {
  return (
    <div class="flex flex-col items-center mt-14">
         <div class="w-20 h-20 rounded-full bg-pink-300 border-4 border-white shadow-lg z-10 overflow-hidden">
        <img src="assets/profile1.jpg" class="w-full h-full object-cover" />
      </div>
      
      <div className="bg-pink-50 w-72 rounded-2xl shadow-md px-6 pt-12 pb-6 -mt-10 text-center">
        <h3 className="font-bold text-lg text-amber-950">Sarah Johnson</h3>
        <p className="text-gray-600 text-sm mt-2">
          "The best cakes in town! Absolutely loved the raspberry cake. Will order again!"
        </p>
        <div className="text-pink-400 mt-3">★★★★★</div>
      </div>
    </div>
  )
}

export default ReviewItem