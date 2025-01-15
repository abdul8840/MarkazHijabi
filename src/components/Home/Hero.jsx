import React from 'react'

const Hero = () => {
  return (
    <section className="herobg py-40">
      <div className="max-w-[1170px] mx-auto">
        <div className="w-full md:w-1/2 flex flex-col md:flex-row justify-between items-center">
          <div className="flex flex-col gap-5 text-center md:text-start">
          <h2 className='text-5xl text-white font-bold'>
          Summer Clearance Events Extra</h2>
          <p className="text-2xl md:text-5xl text-primary">30% OFF</p>
          <p className="text-lg md:text-2xl text-white">Up to 80% off sitewide with items as low as ₹399. While items last.</p>
          <button className='w-[200px] font-bold bg-primary py-4 px-6 rounded-2xl block mx-auto md:mx-0 text-white'>Shop now</button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
