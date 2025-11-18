import React from "react";
import img1 from "../../../assets/Images/vegetable.png";
import { useState } from "react";
import img2 from "../../../assets/Images/vegetable2.png";
import { GrNext } from "react-icons/gr";
import { GrFormPrevious } from "react-icons/gr";
import { Link } from "react-router-dom";

const HeroSection = () => {
  const slides = [
    {
      img: img1,
      subtitle: "100% genuine products",
      title: "Our Garden's Most Fav Food",
      btn1: "Explore Products",
      btn2: "Learn More",
    },
    {
      img: img2,
      subtitle: "Fresh and Organic Vegetables",
      title: "From Farm to your Table",
      btn1: "Shop Now",
      btn2: "About us",
    },
  ];

  const [current, setcurrent] = useState(0);
  const nextslide = () => setcurrent((prev) => (prev + 1) % slides.length);
  const prevslide = () =>
    setcurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1));

  return (
    <>
      <div
        className={`relative w-full h-[650px]  flex flex-col lg:flex-row justify-between items-center bg-offWhite-5911 px-4 sm:px-6 md:px-10 overflow-hidden transition-all duration-700 ${slides[current].bg}`}
      >
        <div className="flex justify-center items-center flex-2 pt-6 lg:pt-0">
          <img
            src={slides[current].img}
            alt="veggies"
            className="w-[280px] h-[350px] sm:w-[350px] sm:h-[420px] md:w-[420px] md:h-[500px] lg:w-[500px] lg:h-[600px] object-contain drop-shadow-lg pt-10 lg:pt-30"
          />
        </div>
        <div className="px-4 sm:px-6 md:px-10 flex-1 pt-6 lg:pt-20 text-center lg:text-left">
          <p className="flex items-center gap-2 font-semibold text-black justify-center lg:justify-start">
            {slides[current].subtitle}
          </p>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-black mt-3 leading-tight">
            {slides[current].title}
          </h1>

          <div className="flex justify-center lg:justify-start">
            <Link to="/Shop">
              <button className="border-none cursor-pointer font-bold text-lg sm:text-xl bg-green-5911 shadow-xl/20 text-white p-2 sm:p-3 mr-2 sm:mr-4 mt-6 sm:mt-9 animate-bounce bg-buttonanimation-to-r from-black via-white to-green-5911 bg-[length:200%_200%] animate-buttonanimation">
                {slides[current].btn1}
              </button>
            </Link>

            <Link to="/About">
              <button className="border-black cursor-pointer border-1 font-bold text-lg sm:text-xl bg-white text-black shadow-xl/15 p-2 sm:p-3 ml-2 sm:ml-4">
                {slides[current].btn2}
              </button>
            </Link>
          </div>
        </div>
        <button
          className="absolute left-2 sm:left-5 top-1/2 -translate-y-1/2 bg-black/20 hover:bg-green-5911 text-white p-2 sm:p-3 rounded-full"
          onClick={prevslide}
        >
          <GrFormPrevious />
        </button>

        <button
          className="absolute right-2 sm:right-5 top-1/2 -translate-y-1/2 bg-black/20 hover:bg-green-5911 text-white p-2 sm:p-3 rounded-full"
          onClick={nextslide}
        >
          <GrNext />
        </button>
      </div>
    </>
  );
};

export default HeroSection;
