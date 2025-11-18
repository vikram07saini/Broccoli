import React from 'react'
import img1 from "../../../assets/Images/contactEmail.png";
import img2 from "../../../assets/Images/contactCall.png";
import img3 from "../../../assets/Images/contactAddress.png";
import Contact from '../Contact';

const ContactHero1 = () => {
    const contact=[
        {
            img:img1,
            title:"Email Address",
            Subtitle:"info@webexample.com",
            Subtitle1:"jobs@webExample.com",
        },
        {
            img:img2,
            title:"Phone Number",
            Subtitle:"+0123-456789",
            Subtitle1:"+987-6543210",
        },
        {
            img:img3,
            title:"Office Address",
            Subtitle:"18/A, New Born Town Hall",
            Subtitle1:"New York, US"
        }
    ]
  return (
    <div className='flex flex-col sm:flex-row justify-center items-center gap-6 sm:gap-8 lg:gap-12 xl:gap-16 mt-16 sm:mt-32 lg:mt-40  mb-16 sm:mb-32 lg:mb-50 px-4 sm:px-6 lg:px-8'>
        {contact.map((contact,index)=>(
            <div className='border-1 border-gray-400 p-6 sm:p-7 lg:p-8 pl-8 sm:pl-12 lg:pl-14 pr-8 sm:pr-12 lg:pr-14 bg-white shadow-2xl shadow-green-5911 w-full max-w-xs sm:max-w-sm lg:max-w-md'>
                <div className='flex justify-center'>
                <img src={contact.img} className="w-10 h-10 sm:w-12 sm:h-12 lg:w-[50px] lg:h-[50px]"/>
                </div>
                <div className='flex justify-center text-lg sm:text-xl lg:text-2xl font-bold p-4 sm:p-5 lg:p-6'>
                    <h2>{contact.title}</h2>
                </div>
                <div>
                    <h2 className='flex justify-center p-1 sm:p-2 font-semibold text-sm sm:text-base lg:text-lg'>{contact.Subtitle}</h2>
                    <h2 className='flex justify-center font-semibold text-sm sm:text-base lg:text-lg'>{contact.Subtitle1}</h2>
                </div>
            </div>
        ))}
      
    </div>
  )
}

export default ContactHero1