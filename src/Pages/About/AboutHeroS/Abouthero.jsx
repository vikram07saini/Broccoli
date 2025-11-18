import React from 'react'
import aboutheroimg from "../../../assets/Images/aboutimg1.png";

const Abouthero = () => {
  return (
    <div className='flex flex-col lg:flex-row items-center justify-between gap-8 sm:gap-12 lg:gap-16 xl:gap-40 px-4 sm:px-6 lg:px-8 xl:px-12 py-8 sm:py-12 lg:py-16 xl:py-20'>
      <div className='w-full lg:w-1/2 flex justify-center mt-20'>
        <img 
          src={aboutheroimg} 
          alt="About our organic food store"
          className='w-full max-w-md sm:max-w-lg lg:max-w-full h-auto object-cover rounded-lg shadow-lg'
        />
      </div>
      <div className='w-full lg:w-1/2 max-w-2xl'>
        <span className='text-base sm:text-lg font-bold text-gray-700 block mb-2 sm:mb-3'>
          Know More <span className='text-green-5911'>About</span> Shop
        </span>
        
        <h3 className='text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-4 sm:mb-6'>
          Trusted <span className='text-green-5911'>Organic</span> Food Store
        </h3>
        
        <p className='text-sm sm:text-base md:text-lg lg:text-xl text-gray-600 leading-relaxed mb-6 sm:mb-8 lg:mb-9'>
          Sellers who aspire to be good, do good, and spread goodness. We democratic, self-sustaining, two-sided marketplace which thrives on trust and is built on community and quality content.
        </p>
        
        <span className='text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold text-gray-800 block'>
          Jerry Henson
        </span>
      </div>
    </div>
  )
}

export default Abouthero