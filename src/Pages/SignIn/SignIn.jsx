import React from "react";
import { Link } from "react-router-dom";
import img1 from "../../assets/Images/SignInImg1.png";
import img2 from "../../assets/Images/SignInImg2.png";
import img3 from "../../assets/Images/SignInImg3.png";
import img4 from "../../assets/Images/SignInImg4.png";

const SignIn = () => {
  const cards = [
    {
      img: img1,
      title: "Curated Products",
      subtitle: "Provide Curated Products for all product over $100",
    },
    {
      img: img2,
      title: "Handmade",
      subtitle: "We ensure the product quality that is our main goal",
    },
    {
      img: img3,
      title: "Natural Food",
      subtitle: "Return product within 3 days for any product you buy",
    },
    {
      img: img4,
      title: "Free home Delivery",
      subtitle: "We ensure the product quality that you can trust easily",
    },
  ];

  return (
    <div className="mt-6 md:mt-10 px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col justify-center items-center gap-2 text-center">
        <p className="font-bold text-2xl sm:text-3xl">Sign In</p>
        <p className="font-bold text-2xl sm:text-3xl">To Your Account</p>
        <p className="text-lg sm:text-xl">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit.
        </p>
        <p className="text-lg sm:text-xl">Sit aliquid, Non distinctio vel iste.</p>
      </div>
      <div className="flex flex-col lg:flex-row justify-center gap-8 lg:gap-16 xl:gap-24 mt-12 lg:mt-20">
        <div className="w-full max-w-md lg:max-w-none lg:w-1/2 xl:w-2/5 mx-auto">
          <div className="mb-6">
            <input
              type="text"
              placeholder="Email..."
              className="border-2 border-gray-300 p-3 sm:p-4 w-full text-sm sm:text-base"
            />
          </div>
          <div className="mb-6">
            <input
              type="password"
              placeholder="Password"
              className="border-2 border-gray-300 p-3 sm:p-4 w-full text-sm sm:text-base"
            />
          </div>
          <div className="flex flex-col items-center gap-3">
            <button className="border p-3 px-8 sm:px-12 bg-green-5911 text-white font-semibold hover:bg-black transition-all duration-300 ease-in-out w-full sm:w-auto">
              Sign In
            </button>
            <Link to="">
              <p className="font-semibold hover:text-green-5911 text-sm sm:text-base">
                Forgotten Your Password?
              </p>
            </Link>
          </div>
        </div>
        <div className="flex flex-col items-center text-center w-full max-w-md lg:max-w-none lg:w-1/2 xl:w-2/5 mx-auto">
          <Link to="">
            <h1 className="font-bold text-lg sm:text-xl">DON'T HAVE AN ACCOUNT?</h1>
          </Link>
          <p className="mt-4 sm:mt-5 text-sm sm:text-base">
            Add items to your wishlistget personalised recommendations
          </p>
          <p className="text-sm sm:text-base">
            check out more quickly track your orders register
          </p>
          <Link to="/Register" className="w-full sm:w-auto">
            <button
              className="mt-4 sm:mt-5 border-1 p-3 px-8 bg-green-5911 text-white font-semibold 
                hover:bg-black transition-all duration-300 ease-in-out cursor-pointer w-full sm:w-auto"
            >
              CREATE ACCOUNT
            </button>
          </Link>
        </div>
      </div>
      <div className="flex flex-col sm:flex-row flex-wrap justify-center mt-12 lg:mt-20 shadow-lg sm:shadow-xl p-4 sm:p-6 lg:p-8">
        {cards.map((item, index) => (
          <div 
            key={index}
            className="flex flex-col sm:flex-row items-center text-center sm:text-left gap-4 p-4 sm:p-6 lg:p-8 w-full sm:w-1/2 lg:w-1/4"
          >
            <div className="flex-shrink-0">
              <img 
                className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24" 
                src={item.img} 
                alt={item.title}
              />
            </div>
            <div>
              <p className="font-bold text-lg sm:text-xl mb-2 sm:mb-3">{item.title}</p>
              <p className="text-sm sm:text-base">{item.subtitle}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SignIn;