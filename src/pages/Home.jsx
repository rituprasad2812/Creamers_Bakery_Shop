import React from 'react'
import Section1 from '../components/section1/Section1'
import Section2 from '../components/section2/Section2'
import Section3 from '../components/section3/Section3'
import Section4 from '../components/section4/Section4'
import Section5 from '../components/section5/Section5'

const Home = () => {

  return (
    <div class="bg-pink-200">
      <div><Section1 /></div>
      <div id="menu-section"><Section2 /></div>
      <div id="gallery-section"><Section3 /></div>
      <div id="review-section"><Section4 /></div>
      <div id="contact-section"><Section5 /></div>
    </div>
  )
}

export default Home