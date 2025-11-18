import React from "react";
import expert1 from "../../assets/Images/popular1.jpg";
import expert2 from "../../assets/Images/popular2.jpg";
import expert3 from "../../assets/Images/popular3.jpg";
import expert4 from "../../assets/Images/expert1.jpg";
import expert5 from "../../assets/Images/expert2.jpg";
import expert6 from "../../assets/Images/expert3.jpg";
import expert7 from "../../assets/Images/expert4.jpg";
import expert8 from "../../assets/Images/expert8.jpg";
import { IoSearch } from "react-icons/io5";
import querycontact from "../../assets/Images/heroimg2.jpg";

const Gallery = () => {
  const gallery = [
    { img: expert1 },
    { img: expert2 },
    { img: expert3 },
    { img: expert4 },
    { img: expert5 },
    { img: expert6 },
    { img: expert7 },
    { img: expert8 },
    { img: expert2 },
    { img: expert6 },
    { img: expert1 },
    { img: expert8 },
    { img: expert3 },
    { img: expert7 },
    { img: expert5 },
    { img: expert2 },
  ];

  return (
    <>
      <div className="mt-16 lg:mt-20 mb-4 lg:mb-6 flex justify-center px-4">
        <p className="font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-center">
          Our Gallery
        </p>
      </div>
      
      <hr className="mx-4 lg:mx-8 border-gray-300" />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 p-4 sm:p-6 lg:p-8">
        {gallery.map((item, index) => (
          <div
            key={index}
            className="relative overflow-hidden group rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 aspect-square"
          >
            <img
              className="w-full h-full object-cover transition-all duration-500 group-hover:scale-110"
              src={item.img}
              alt={`gallery image ${index + 1}`}
            />
            <div className="absolute inset-0 bg-black/30 group-hover:bg-black/60 transition-all duration-500"></div>
            <div className="absolute inset-0 flex justify-center items-center opacity-0 group-hover:opacity-100 transition-all duration-500">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-white rounded-full flex justify-center items-center shadow-lg text-lg sm:text-xl">
                <IoSearch />
              </div>
            </div>
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-center opacity-0 group-hover:opacity-100 transition-all duration-500 w-full px-2">
              <h3 className="text-white font-bold text-sm sm:text-base md:text-lg">Portfolio Link</h3>
              <p className="text-white text-xs sm:text-sm">Photography, Branding</p>
            </div>
          </div>
        ))}
      </div>
      <div className="flex items-center justify-center px-4 py-8 sm:py-12">
        <button className="cursor-pointer border border-gray-300 font-bold px-6 py-3 bg-green-5911 text-white hover:bg-black transition-all duration-300 ease-in-out text-sm sm:text-base md:text-lg rounded-lg">
          Load More +
        </button>
      </div>
      <div className="pt-12 lg:pt-20 relative">
        <img 
          className="w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] object-cover" 
          src={querycontact} 
          alt="Contact banner"
        />
        <div className="absolute top-8 sm:top-12 md:top-16 lg:top-24 left-1/2 transform -translate-x-1/2 w-full px-4 text-center">
          <p className="font-bold text-lg sm:text-xl md:text-2xl lg:text-3xl text-green-5911 bg-white px-4 py-2 sm:px-6 sm:py-3 animate-bounce inline-block rounded-lg shadow-lg">
            //Any Question You Have//
          </p>
        </div>
        <div className="absolute top-24 sm:top-32 md:top-40 lg:top-48 left-1/2 transform -translate-x-1/2 w-full px-4 text-center">
          <p className="font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-white drop-shadow-lg">
            897-876-987-90
          </p>
        </div>
        <div className="absolute bottom-8 sm:bottom-12 md:bottom-16 lg:bottom-24 left-1/2 transform -translate-x-1/2 w-full px-4">
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 md:gap-5 justify-center items-center">
            <button className="w-full sm:w-auto text-black bg-white px-6 py-3 sm:px-8 sm:py-4 font-bold cursor-pointer hover:bg-green-5911 hover:text-white transition-all duration-300 ease-in-out rounded-lg text-sm sm:text-base md:text-lg shadow-lg">
              Make a call
            </button>
            <button className="w-full sm:w-auto text-white bg-green-5911 px-6 py-3 sm:px-8 sm:py-4 font-bold hover:bg-black hover:text-white transition-all duration-300 ease-in-out rounded-lg text-sm sm:text-base md:text-lg shadow-lg">
              Contact us
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Gallery;