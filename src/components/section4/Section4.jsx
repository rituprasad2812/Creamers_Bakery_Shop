import React from 'react'
import Promises from './Promises'
import Reviews from './Reviews'
import FadeInSection from '../FadeInSection'

const Section4 = () => {
  return (
    <FadeInSection class="min-h-screen w-full">
    <div class="min-h-screen w-full bg-pink-200 pb-15">
      <Promises />
      <Reviews />
    </div>
    </FadeInSection>
  )
}

export default Section4