import React from 'react'
import FadeInSection from '../FadeInSection'


const Section5 = () => {
    return (
        <FadeInSection class="h-screen w-full">
        <div class="font-mitr text-amber-950 bg-pink-200 h-screen flex flex-col items-center">
            <h1 class="text-7xl font-playball font-semibold p-8 text-center">Contact Us</h1>
            <div class="h-145 w-200 flex flex-wrap justify-center gap-5 bg-transparent">
                <div class="bg-pink-400 h-70 w-80 rounded-2xl border-2 border-amber-950"></div>
                <div class="bg-pink-400 h-70 w-80 rounded-2xl border-2 border-amber-950"></div>
                <div class="bg-pink-400 h-70 w-80 rounded-2xl border-2 border-amber-950"></div>
                <div class="bg-pink-400 h-70 w-80 rounded-2xl border-2 border-amber-950"></div>
            </div>
        </div>
        </FadeInSection>
    )
}

export default Section5