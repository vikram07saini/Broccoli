import React from 'react'
import { BiSolidMessageRounded } from "react-icons/bi";

const ContactHero2 = () => {
  return (
    <div className='flex justify-center z-400 px-4 sm:px-6 lg:px-8'>
    <div className='border-1 border-gray-300 shadow-2xl p-6 sm:p-8 lg:p-12 xl:p-40 w-full max-w-4xl lg:max-w-6xl'>
      <div>
        <h1 className='text-2xl sm:text-3xl lg:text-4xl font-semibold pb-8 sm:pb-12 lg:pb-15 mt-0'>Get A Quote</h1>
      </div>
      <div className='flex flex-col lg:flex-row gap-4 lg:gap-8'>
        <input className='font-semibold w-full lg:w-[500px] border-2 border-gray-400 p-3' type='text'placeholder='Enter Your Name'/>
        <input className='font-semibold w-full lg:w-[500px] border-2 border-gray-400 p-3' type="text" placeholder='Enter Email Address'/>
      </div>
      <div className='flex flex-col lg:flex-row gap-4 lg:gap-8 mt-4'>
        <select className='font-semibold w-full lg:w-[500px] border-2 border-gray-400 p-3' type='text'placeholder='Service Type'>
          <option className='font-bold'>Select Service Type</option>
        <option className='font-semibold'>Gardening</option>
        <option className='font-semibold'>Landscaping</option>
        <option className='font-semibold'>Vegetables Growing</option>
        <option className='font-semibold'>Land Preparation</option>
        </select>
        <input className='font-semibold w-full lg:w-[500px] border-2 border-gray-400 p-3 mt-0' type="number"placeholder='Enter Phone Number'/>
      </div>
      <div className='flex flex-col'>
      <textarea className='w-full font-semibold border-2 border-gray-400 h-32 sm:h-40 lg:h-[200px] mt-6 p-3' placeholder='Type Something...'/>
      <div className='flex pt-6 items-start'>
      <input type='checkbox' className='mt-1 mr-2'/>
      <h4 className='text-sm sm:text-base'>Save my name, email, and website in this browser for the next time I comment.</h4>
      </div>
      <div>
      <button className='border-1 pl-4 pr-4 pt-3 pb-3 mt-8 text-white text-sm font-b bg-green-5911 w-full sm:w-auto'>GET AN FREE SERVICE</button>
      </div>
      </div>
    </div>
    </div>
  )
}

export default ContactHero2