import React from 'react'
import BannerImg from '../../assets/images/bannerbg.png'

const Banner = () => {
  return (
    <section className="mt-[100px] ">
      <div className="flex flex-col md:flex-row">
        <div className=" pl-10 md:pl-20 flex flex-col items-center md:w-full h-[550px] bg-[#38332c] gap-5 pt-20 pr-8">
          <div className="flex flex-col gap-6">
            <p className="text-xl text-primary">
              drive into style with</p>
            <h2 className='text-2xl md:text-5xl text-white font-bold'>

              Markaz Hijab Collections</h2>

            <p className="text-lg md:text-2xl text-white">Lorem ipsum dolor sit amet consectetur. Montes quisque urna molestie tincidunt aliquet quam. Imperdiet at pellent esque vitae aliquet tempor eget rutrum tellus. Leo a luctus vitae.</p>
            <button className='w-[200px] font-bold bg-primary py-3 md:py-5 rounded-2xl block text-white mt-8'>Shop now</button>
          </div>
        </div>
        <div className="w-full">
          <img src={BannerImg} alt="" className='w-full h-[550px] object-cover' />
        </div>
      </div>
    </section>
  )
}

export default Banner
