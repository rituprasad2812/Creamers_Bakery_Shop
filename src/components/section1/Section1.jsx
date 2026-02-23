import React from 'react'
import Navbar from './navbar'
import Hero from './hero'
import FadeInSection from '../FadeInSection'

const Section1 = () => {
  return (
    <FadeInSection class=" h-screen w-full">
    <div class="h-screen w-full bg-pink-200">
        <Navbar />
        <Hero />
    </div>
    </FadeInSection>
  )
}

export default Section1