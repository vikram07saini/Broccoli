import React from 'react'
import newsimg1 from "../../../assets/Images/Newsimg1.jpg"
import newsimg2 from "../../../assets/Images/newsimg2.jpg"
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import popular1 from "../../../assets/Images/popular1.jpg";
import popular2 from "../../../assets/Images/popular2.jpg";
import popular3 from "../../../assets/Images/popular3.jpg";
import { MdLinearScale } from "react-icons/md"; 

const NewsHero1 = () => {
    const PopularFeed = [
        {
            img:popular1,
            description:"Lorem ipsum dolor sit cing elit, sed do.",
            Date:"June 22,2020"
        },
        {
            img:popular2,
            description:"Lorem ipsum dolor sit cing elit, sed do.",
            Date:"June 22,2022"
        },
        {
            img:popular3,
            description:"Lorem ipsum dolor sit cing elit, sed do.",
            Date:"June 22, 2025"
        }
    ];
  return (
    <div className='flex flex-col lg:flex-row mt-8 sm:mt-20 lg:mt-10 justify-center px-4 sm:px-6 lg:px-0'>
      <div className='w-full lg:w-[700px] p-4 sm:p-6 lg:p-7'>
        <img src={newsimg1} className='w-full'/>
        <div className='border-2 p-6 sm:p-8 lg:p-9 border-gray-300 mt-4 sm:mt-6'>
        <button className='bg-green-5911 text-white p-2 font-bold m-4 sm:m-6 lg:m-7 hover:bg-black'>Business</button>
        <p className='text-2xl sm:text-3xl lg:text-4xl font-bold'>Lorem ipsum dolor sit amet, consecte cing elit, sed do eiusmod tempor.</p>
        <p className='p-4 sm:p-6 lg:p-8'><span>232 views</span><span className='ml-2 sm:ml-4'> 35 comments</span><span className='ml-2 sm:ml-4'>June2025</span></p>
        <p className='text-lg sm:text-xl'>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore</p>
        <div className='flex flex-col sm:flex-row justify-between font-bold text-lg sm:text-xl pt-4 sm:pt-6 gap-4 sm:gap-0'>
      <h2>By:Ethan</h2>
      <button className='bg-green-5911 p-3 text-white hover:bg-black w-full sm:w-auto'>Read More</button>
      </div>
      </div>
      <div className=' mt-8 sm:mt-12 lg:mt-20'>
        <img src={newsimg2} className='w-full'/>
        <div className='border-gray-300 border-2 p-6 sm:p-8 lg:p-9 mt-4 sm:mt-6'>
            <button className='bg-green-5911 text-white p-2 m-4 sm:m-6 lg:m-7 font-bold hover:bg-black'>Business</button>
            <p className='text-2xl sm:text-3xl lg:text-4xl font-bold'>Lorem ipsum dolor sit amet, consecte cing elit, sed do eiusmod tempor.</p>
            <p className='p-4 sm:p-6 lg:p-8'><span>232 views</span><span className='ml-2 sm:ml-4'>35 comments</span><span className='ml-2 sm:ml-4'>June2025</span></p>
            <p className='text-lg sm:text-xl'>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore</p>
            <div className='flex flex-col sm:flex-row justify-between font-bold text-lg sm:text-xl pt-4 sm:pt-6 gap-4 sm:gap-0'>
                <h2>By:Ethan</h2>
                <button className='bg-green-5911 text-white p-3 hover:bg-black w-full sm:w-auto'>Read More</button>
            </div>
        </div>
      </div>
      </div>
      <div className='w-full lg:w-auto mt-8 lg:mt-0 lg:ml-8'>
      <div className='bg-white border-gray-300 border-2 h-auto lg:h-[400px] p-6 sm:p-8 flex flex-col items-center'>
        <h2 className='text-xl sm:text-2xl font-bold mb-8 sm:mb-12 lg:mb-16 flex gap-2'> <span className='text-green-5911 text-3xl sm:text-4xl'>< MdLinearScale /></span>About Me</h2>
        <div className='w-full max-w-[300px] flex flex-col justify-center items-center'>
            <img className='rounded-full w-16 h-16 sm:w-20 sm:h-20 lg:w-[100px] lg:h-[100px]' src={newsimg1}/>
            <h3 className='font-bold text-lg sm:text-xl mt-2'>Rasolina D.Williasom</h3>
            <p className='pt-2 sm:pt-3 text-sm sm:text-base text-center'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis distinctio, odio, eligendi suscipit reprehenderit atque.</p>
        </div>
        <div className='flex justify-center gap-4 sm:gap-5 pt-4 sm:pt-6 text-lg sm:text-xl'>
            <i><FaFacebookF /></i>
            <i><FaInstagram /></i>
            <i><FaTwitter /></i>
        </div>
      </div>
      <div className="mt-8 sm:mt-12 lg:mt-20 p-6 sm:p-8 flex flex-col items-center justify-center border-2 border-gray-300">
  <h2 className="text-lg sm:text-xl font-bold p-3 sm:p-5">Search Objects</h2>

  <div className="flex items-center justify-center w-full max-w-xs sm:max-w-sm">
    <input
      type="search"
      placeholder="Search Your Keyword..."
      className="border border-gray-400 p-3 bg-offWhite-5911 outline-none w-full rounded-l-md hover:border-green-5911"
    />
    <button className=" bg-green-5911 border-1 border-gray-500 text-white text-xl sm:text-2xl p-3 rounded-r-md flex items-center justify-center hover:bg-black hover:text-white">
      <FaSearch />
    </button>
  </div>
</div>
<div className='border-1 p-4 sm:p-6 mt-4 sm:mt-6 border-gray-300'>
    <h1 className='font-bold text-lg sm:text-xl p-3 flex gap-4 sm:gap-5'>  <span className='text-green-5911 text-3xl sm:text-4xl'>< MdLinearScale /></span>Popular Feeds</h1>
    <hr className='border-gray-300'/>
    {PopularFeed.map((feed,index)=>(
        <div className='flex gap-3 sm:gap-4 items-center p-4 sm:p-5 '>
            <img className='h-12 w-12 sm:h-16 sm:w-16 lg:h-[100px] lg:w-[100px] rounded-full ' src={feed.img}/>
            <div className='flex-1'>
                <h2 className='font-bold text-sm sm:text-base hover:text-green-5911'>{feed.description}</h2>
                <p className='text-green-5911 font-semibold text-xs sm:text-sm'>{feed.Date}</p>
                <hr className='border-gray-300 mt-2 sm:mt-3'/>
            </div>
        </div>
    ))}
</div>
<div className='mt-8 sm:mt-12 lg:mt-15 border-2 p-4 sm:p-6 lg:p-5 lg:pl-8 xl:pl-15 border-gray-300'>
    <p className='font-bold text-lg sm:text-xl flex items-center gap-4 sm:gap-5'> <span className='text-green-5911 text-3xl sm:text-4xl'>< MdLinearScale /></span>Popular Tags</p>
    <hr className='border-gray-300'/>
    <div className='flex flex-wrap gap-2 sm:gap-3 lg:gap-5 mt-3 sm:mt-4'>
        <button className='bg-offWhite-5911 p-2 text-black font-bold hover:bg-green-5911 hover:text-white text-xs sm:text-sm'>POPULAR</button>
        <button className='bg-offWhite-5911 p-2 text-black font-bold hover:bg-green-5911 hover:text-white text-xs sm:text-sm'>DESIGN</button>
        <button className='bg-offWhite-5911 p-2 text-black font-bold hover:bg-green-5911 hover:text-white text-xs sm:text-sm'>UX</button>
        <button className='bg-offWhite-5911 p-2 text-black font-bold hover:bg-green-5911 hover:text-white text-xs sm:text-sm'>USABILITY</button>
        <button className='bg-offWhite-5911 p-2 text-black font-bold hover:bg-green-5911 hover:text-white text-xs sm:text-sm'>DEVELOP</button>
        <button className='bg-offWhite-5911 p-2 text-black font-bold hover:bg-green-5911 hover:text-white text-xs sm:text-sm'>ICON</button>
        <button className='bg-offWhite-5911 p-2 text-black font-bold hover:bg-green-5911 hover:text-white text-xs sm:text-sm'>CAR</button>
        <button className='bg-offWhite-5911 p-2 text-black font-bold hover:bg-green-5911 hover:text-white text-xs sm:text-sm'>SERVICE</button>
        <button className='bg-offWhite-5911 p-2 text-black font-bold hover:bg-green-5911 hover:text-white text-xs sm:text-sm'>REPAIRS</button>
        <button className='bg-offWhite-5911 p-2 text-black font-bold hover:bg-green-5911 hover:text-white text-xs sm:text-sm'>AUTO PARTS</button>
        <button className='bg-offWhite-5911 p-2 text-black font-bold hover:bg-green-5911 hover:text-white text-xs sm:text-sm'>OIL</button>
        <button className='bg-offWhite-5911 p-2 text-black font-bold hover:bg-green-5911 hover:text-white text-xs sm:text-sm'>DEALER</button>
        <button className='bg-offWhite-5911 p-2 text-black font-bold hover:bg-green-5911 hover:text-white text-xs sm:text-sm'>OIL CHANGE</button>
        <button className='bg-offWhite-5911 p-2 text-black font-bold hover:bg-green-5911 hover:text-white text-xs sm:text-sm'>BODY COLOR</button>
    </div>
</div>

      </div>
    </div>
  )
}

export default NewsHero1