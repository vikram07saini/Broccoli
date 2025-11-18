import React from 'react'
import HeroSection from './HeroSection/HeroSection'
import HeroSection2 from './HeroSection2/HeroSection2'
import HeroSection3 from './HeroSection3/HeroSection3'

const Home = () => {
  return (
    <>
    <div className=''>
      <HeroSection />
    </div>
    <div>
      <HeroSection2/>
    </div>
    <div>
      <HeroSection3/>
    </div>
    </>
  )
}

export default Home
