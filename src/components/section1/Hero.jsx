import React from 'react'

const Hero = () => {
  return (
    <div class="font-mitr w-full h-full bg-[url('assets/herocake.jpg')] bg-cover bg-center bg-no-repeat flex flex-col justify-center pl-40  text-amber-950">
        <h1 class="font-playball text-8xl">Creamers</h1>
        <pre class="pl-2 max-w-lg whitespace-normal leading-relaxed font-mitr">Discover the perfect balance of texture and flavor with our wide selection of artisan breads and pastries, made daily using only the finest local ingredients.</pre>
        <button className="mt-3 bg-pink-300 text-amber-950 px-10 py-3 rounded-full text-xl w-50">Order Now</button>
    </div>
  )
}

export default Hero