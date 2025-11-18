import React from 'react'
import { Link } from 'react-router-dom'
import { MdOutlineWifiCalling3 } from "react-icons/md";
import { IoLocationSharp } from "react-icons/io5";
import { IoIosMail } from "react-icons/io";
import { BsFillSendFill } from "react-icons/bs";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa6";
import { FaSquareXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 sm:gap-8 lg:gap-5 p-6 sm:p-8 lg:p-10 bg-offWhite-5911'>
        <div className='lg:col-span-1'>
          <p className='text-2xl sm:text-3xl font-bold text-green-5911'>Broccoli</p>
          <p className='pt-3 pb-3 text-sm sm:text-base text-gray-600'>
            Lorem Ipsum is simply dummy text of the and typesetting industry. Lorem Ipsum is dummy text of the printing.
          </p>
          <p className='pb-3 text-base sm:text-lg flex flex-row gap-2 items-start sm:items-center'>
            <span className='text-green-5911 mt-1 sm:mt-0'><IoLocationSharp /></span>
            Brooklyn, New York, United States
          </p>
          <p className='pb-3 text-base sm:text-lg hover:text-green-5911 flex flex-row items-start sm:items-center gap-2'>
            <span className='text-green-5911 mt-1 sm:mt-0'><MdOutlineWifiCalling3 /></span>
            +0123-456789
          </p>
          <p className='pb-3 text-base sm:text-lg hover:text-green-5911 flex flex-row gap-2 items-start sm:items-center'>
            <span className='text-green-5911 mt-1 sm:mt-0'><IoIosMail /></span>
            example@example.com
          </p>
          <div className='flex gap-4 sm:gap-5 text-lg sm:text-xl pt-3 sm:p-5'>
            <Link to="">
              <i className='hover:text-green-5911 transition-colors duration-300'><FaInstagram /></i>
            </Link>
            <Link to="">
              <i className='hover:text-green-5911 transition-colors duration-300'><FaFacebook /></i>
            </Link>
            <Link to="">
              <i className='hover:text-green-5911 transition-colors duration-300'><FaSquareXTwitter /></i>
            </Link>
          </div>
        </div>
        <div className='lg:col-span-1'>
          <h1 className='text-lg sm:text-xl font-bold pb-3'>Company</h1>
          <div className='space-y-2'>
            <Link to="/About">
              <p className='hover:text-green-5911 transition-colors duration-300 text-sm sm:text-base'>About</p>
            </Link>
            <Link to="">
              <p className='hover:text-green-5911 transition-colors duration-300 text-sm sm:text-base'>Blog</p>
            </Link>
            <Link to="">
              <p className='hover:text-green-5911 transition-colors duration-300 text-sm sm:text-base'>All Products</p>
            </Link>
            <Link to="/GoogleLocation">
              <p className='hover:text-green-5911 transition-colors duration-300 text-sm sm:text-base'>Locations Map</p>
            </Link>
            <Link to="">
              <p className='hover:text-green-5911 transition-colors duration-300 text-sm sm:text-base'>FAQ</p>
            </Link>
            <Link to="/Contact">
              <p className='hover:text-green-5911 transition-colors duration-300 text-sm sm:text-base'>Contact Us</p>
            </Link>
          </div>
        </div>
        <div className='lg:col-span-1'>
          <h1 className='text-lg sm:text-xl font-bold pb-3'>Services</h1>
          <div className='space-y-2'>
            <Link to="">
              <p className='hover:text-green-5911 transition-colors duration-300 text-sm sm:text-base'>Order Tracking</p>
            </Link>
            <Link to="">
              <p className='hover:text-green-5911 transition-colors duration-300 text-sm sm:text-base'>Wish List</p>
            </Link>
            <Link to="/SignIn">
              <p className='hover:text-green-5911 transition-colors duration-300 text-sm sm:text-base'>Login</p>
            </Link>
            <Link to="/MyAccount">
              <p className='hover:text-green-5911 transition-colors duration-300 text-sm sm:text-base'>My Account</p>
            </Link>
            <Link to="">
              <p className='hover:text-green-5911 transition-colors duration-300 text-sm sm:text-base'>Terms & Conditions</p>
            </Link>
            <Link to="">
              <p className='hover:text-green-5911 transition-colors duration-300 text-sm sm:text-base'>Promotional offers</p>
            </Link>
          </div>
        </div>
        <div className='lg:col-span-1'>
          <h1 className='text-lg sm:text-xl font-bold pb-3'>Customer Care</h1>
          <div className='space-y-2'>
            <Link to="/SignIn">
              <p className='hover:text-green-5911 transition-colors duration-300 text-sm sm:text-base'>Login</p>
            </Link>
            <Link to="/MyAccount">
              <p className='hover:text-green-5911 transition-colors duration-300 text-sm sm:text-base'>My Account</p>
            </Link>
            <Link to="">
              <p className='hover:text-green-5911 transition-colors duration-300 text-sm sm:text-base'>Wish List</p>
            </Link>
            <Link to="">
              <p className='hover:text-green-5911 transition-colors duration-300 text-sm sm:text-base'>Order Tracking</p>
            </Link>
            <Link to="">
              <p className='hover:text-green-5911 transition-colors duration-300 text-sm sm:text-base'>FAQ</p>
            </Link>
            <Link to="/Contact">
              <p className='hover:text-green-5911 transition-colors duration-300 text-sm sm:text-base'>Contact Us</p>
            </Link>
          </div>
        </div>
        <div className='lg:col-span-1'>
          <h1 className='text-lg sm:text-xl font-bold pb-3'>Newsletter</h1>
          <p className='pb-4 text-sm sm:text-base text-gray-600'>
            Subscribe to our weekly Newsletter and receive updates via email.
          </p>
          <div className='flex flex-row max-w-md'>
            <input 
              className='w-full h-12 sm:h-14 px-4 border border-gray-300 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-green-5911 focus:border-transparent text-sm sm:text-base'
              type='email' 
              placeholder='Email*'
            />
            <button className='bg-green-5911 hover:bg-green-700 text-white px-4 sm:px-5 rounded-r-lg transition-colors duration-300 flex items-center justify-center'>
              <BsFillSendFill className='text-lg sm:text-xl' />
            </button>
          </div>
        </div>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 p-6 sm:p-8 lg:p-10 bg-black text-white'>
        <div className='flex justify-center md:justify-start'>
          <p className='text-sm sm:text-base text-center md:text-left'>
            All Rights Reserved @ Company 2025
          </p>
        </div>
        <div className='flex flex-wrap justify-center md:justify-end gap-3 sm:gap-4 lg:gap-6'>
          <Link to="">
            <p className='hover:text-green-5911 transition-colors duration-300 text-sm sm:text-base font-semibold whitespace-nowrap'>
              Terms & Conditions
            </p>
          </Link>
          <Link to="">
            <p className='hover:text-green-5911 transition-colors duration-300 text-sm sm:text-base font-semibold whitespace-nowrap'>
              Claim
            </p>
          </Link>
          <Link to="">
            <p className='hover:text-green-5911 transition-colors duration-300 text-sm sm:text-base font-semibold whitespace-nowrap'>
              Privacy & Policy
            </p>
          </Link>
        </div>
      </div>
    </>
  )
}

export default Footer