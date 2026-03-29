import React from 'react'

const ReviewItem = ({ name, review, rating, createdAt }) => {
  const getTimeAgo = (date) => {
    const days = Math.floor((Date.now() - new Date(date)) / (1000 * 60 * 60 * 24))
    if (days === 0) return 'Today'
    if (days === 1) return '1 day ago'
    if (days < 7) return `${days} days ago`
    if (days < 30) return `${Math.floor(days / 7)} weeks ago`
    return `${Math.floor(days / 30)} months ago`
  }

  return (
    <div className="bg-white rounded-2xl shadow-md p-7 border-l-4 border-pink-400 hover:shadow-lg transition-shadow w-80 h-43 m-2">
      <div className="flex justify-between items-center mb-3">
        <h3 className="font-mitr font-bold text-lg text-amber-950">{name}</h3>
        <div className="text-yellow-400 text-lg">
          {'★'.repeat(rating)}{'☆'.repeat(5 - rating)}
        </div>
      </div>
      
      <p className="text-gray-600 font-mitr text-sm leading-relaxed mb-3 line-clamp-3 overflow-hidden">
        "{review}"
      </p>
      
      <p className="text-xs text-gray-400 font-mitr">{getTimeAgo(createdAt)}</p>
    </div>
  )
}

export default ReviewItem