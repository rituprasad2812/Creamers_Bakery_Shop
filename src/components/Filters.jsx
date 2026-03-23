import React from 'react'

const Filters = () => {
  return (
    <div class="flex justify-center py-8">
        <div class="bg-pink-300 h-16 w-360 rounded-4xl border-2 border-amber-950 flex justify-center gap-40 font-medium font-mitr text-amber-950 text-2xl items-center">
            <span class="bg-amber-950 text-white px-10 py-1.5 rounded-3xl">All</span>
            <span>Birthdays</span>
            <span>Weddings</span>
            <span>Farewell</span>
        </div>
    </div>
  )
}

export default Filters