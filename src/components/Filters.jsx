import React, { useState } from 'react'

const Filters = ({ filters, onFilterChange }) => {
  const [activeFilter, setActiveFilter] = useState('All')

  const handleClick = (filter) => {
    setActiveFilter(filter)
    onFilterChange(filter)
  }

  return (
    <div className="flex justify-center py-8">
      <div className="bg-pink-300 h-16 w-360 rounded-4xl border-2 border-amber-950 flex justify-center gap-20 font-medium font-mitr text-amber-950 text-2xl items-center px-10">
        {filters.map((filter) => (
          <span 
            key={filter}
            onClick={() => handleClick(filter)}
            className={`cursor-pointer px-10 py-1.5 rounded-3xl transition-all ${
              activeFilter === filter 
                ? 'bg-amber-950 text-white' 
                : 'hover:bg-pink-400'
            }`}
          >
            {filter}
          </span>
        ))}
      </div>
    </div>
  )
}

export default Filters