import React from 'react'
import Hero from '../components/Home/Hero'
import NewProducts from '../components/Home/NewProducts'
import Banner from '../components/Home/Banner'
import VideoReels from '../components/VideoReels'
import BestSeller from '../components/Home/BestSeller'

const Home = () => {
  return (
    <div>
      
      <Hero />
      <VideoReels />
      <NewProducts />
      <Banner />
      <BestSeller />
      
    </div>
  )
}

export default Home
