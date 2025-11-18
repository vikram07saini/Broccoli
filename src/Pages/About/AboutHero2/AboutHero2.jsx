import React from "react";
import { FaHandHoldingHeart } from "react-icons/fa";
import { FaCarrot } from "react-icons/fa6";
import { MdOutlineCrueltyFree } from "react-icons/md";

import img1 from '../../../assets/Images/aboutUs1.png'
import img2 from '../../../assets/Images/AboutUs2.png'
import img3 from '../../../assets/Images/AboutUs3.png'

const AboutHero2 = () => {
  const Cards = [
    {
      id: "1",
      img: img1,
      Subtitle: "All Kind Brand",
      title:
        "Lorem ipsum dolor sit ame it, consectetur adipisicing elit, sed do eiusmod te mp or incididunt ut labore.",
    },
    {
      id: 2,
      img: img2,
      Subtitle: "Curated Products",
      title:
        "Lorem ipsum dolor sit ame it, consectetur adipisicing elit, sed do eiusmod te mp or incididunt ut labore.",
    },
    {
      id: 3,
      img: img3,
      Subtitle: "Pesticide Free Goods",
      title:
        "Lorem ipsum dolor sit ame it, consectetur adipisicing elit, sed do eiusmod te mp or incididunt ut labore.",
    },
  ];

  return (
    <div className="bg-offWhite-5911 pb-8 sm:pb-12 lg:pb-16 xl:pb-45 border-2">
      <div className="flex justify-center font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl mb-8 sm:mb-12 lg:mb-16 xl:mb-22 pt-8 sm:pt-12 lg:pt-16 xl:pt-30 px-4">
        <h2 className="text-center">
          Why Choose Us<span className="text-green-5911">.</span>
        </h2>
      </div>
      
      <div className="">
        <div className="flex flex-col md:flex-row justify-center items-center gap-6 sm:gap-8 lg:gap-12 xl:gap-8 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {Cards.map((place, index) => (
            <div 
              key={index} 
              className="flex flex-col gap-4 sm:gap-5 lg:gap-6 w-full max-w-sm sm:max-w-md lg:max-w-lg xl:max-w-full border-1 bg-white p-6 sm:p-7 lg:p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="flex gap-4 sm:gap-5 lg:gap-6 items-center">
                <img 
                  src={place.img} 
                  alt={place.Subtitle} 
                  className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 object-contain"
                />
                <h1 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-800">
                  {place.Subtitle}
                </h1>
              </div>

              <p className="font-semibold text-sm sm:text-base lg:text-lg text-gray-600 leading-relaxed">
                {place.title}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutHero2;