import React from 'react'
import organic1 from "../../../assets/Images/organic1.png";
import organic2 from "../../../assets/Images/organic2.png";
import organic3 from "../../../assets/Images/organic3.png";
import { Link } from 'react-router-dom'

const HeroSection2 = () => {
  return (
    <div className='flex flex-col lg:flex-row justify-center pt-10 lg:pt-20 pb-10 gap-5 lg:gap-10 items-center'>
      <div>
        <Link to="/Shop">
          <img className="hover:scale-105 transition-transform duration-1000 w-[90%] sm:w-[70%] md:w-[60%] lg:w-full mx-auto" src={organic1} />
        </Link>
      </div>
      <div className='flex flex-col gap-5'>
        <Link to="/Shop">
          <img className='hover:scale-105 transition-transform duration-1000 w-[90%] sm:w-[70%] md:w-[60%] lg:w-full mx-auto' src={organic2} />
        </Link>
        <Link to="">
          <img className='hover:scale-105 transition-transform duration-1000 w-[90%] sm:w-[70%] md:w-[60%] lg:w-full mx-auto' src={organic3} />
        </Link>
      </div>
    </div>
  )
}

export default HeroSection2
