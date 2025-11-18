import React from 'react'
import img1 from '../../../assets/Images/teamMember1.jpg';
import img2 from"../../../assets/Images/teamMember2.jpg";
import img3 from "../../../assets/Images/teamMember3.jpg";
import img4 from "../../../assets/Images/teamMember4.jpg";

const AboutHero3 = () => {
    const TeamMember =[
        {
            img:img1,
            Designation:"Founder",
            Name:"Rosalina FD.William",
        },
        {
            img:img2,
            Designation:"Founder",
            Name:"DW.William",
        },
        {
            img:img3,
            Designation:"Co-Founder",
            Name:"Reckwerg Aulitum",
        },
        {
            img:img4,
            Designation:"Manager",
            Name:"Austin Peeker",
        }
    ]
  return (
    <>
      <div className='flex justify-center pt-8 sm:pt-12 lg:pt-16 xl:pt-20 px-4'>
        <h2 className='text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-center'>
          Team Member
        </h2>
      </div>
      
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 lg:gap-10 xl:gap-12 mt-8 sm:mt-12 lg:mt-16 xl:mt-20 mb-8 sm:mb-16 lg:mb-30 xl:mb-50 px-4 sm:px-6 lg:px-8 xl:px-12 max-w-7xl mx-auto'>
        {TeamMember.map((member,index)=>(
            <div 
              key={index}
              className='border border-gray-200 shadow-lg hover:shadow-2xl transform transition-all duration-500 hover:scale-105 rounded-lg overflow-hidden bg-white'
            >
                <div className='w-full aspect-w-1 aspect-h-1'>
                    <img 
                      className='w-full h-64 sm:h-72 md:h-80 lg:h-96 object-cover object-center hover:scale-110 transition-transform duration-700' 
                      src={member.img} 
                      alt={member.Name}
                    /> 
                </div>
                <div className='flex justify-center text-center p-4 sm:p-6'>
                    <div>
                     <h1 className='text-sm sm:text-base lg:text-lg xl:text-xl text-green-5911 font-semibold'>
                       //{member.Designation}//
                     </h1>
                    <h3 className='text-lg sm:text-xl lg:text-2xl font-bold p-4 sm:p-6 lg:p-8 text-gray-800'>
                      {member.Name}
                    </h3>
                    </div>
                </div>
            </div>
        ))}
      </div>
    </>
  )
}

export default AboutHero3