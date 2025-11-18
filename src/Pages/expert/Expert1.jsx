import React from "react";
import expert1 from "../../assets/Images/popular1.jpg";
import expert2 from "../../assets/Images/popular2.jpg";
import expert3 from "../../assets/Images/popular3.jpg";
import expert4 from "../../assets/Images/expert1.jpg";
import expert5 from "../../assets/Images/expert2.jpg";
import expert6 from "../../assets/Images/expert3.jpg";
import expert7 from "../../assets/Images/expert4.jpg";
import { FaFacebookF } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaPinterestP } from "react-icons/fa";

const Expert = () => {
  const skills = [
    { name: "Gardening", percent: 72 },
    { name: "Landscaping", percent: 74 },
    { name: "Vegetable Growing", percent: 81 },
  ];
  
  const experts = [
    {
      img: expert1,
      designation: "Founder",
      name: "Rosalina D.William",
    },
    {
      img: expert2,
      designation: "Co-Founder",
      name: "Kelian Anderson",
    },
    {
      img: expert3,
      designation: "Organic Farmer",
      name: "Miranda H.Hillam",
    },
    {
      img: expert4,
      designation: "Organic Farmer",
      name: "Damble D Brownie",
    },
    {
      img: expert5,
      designation: "Organic Farmer",
      name: "Aiden benjiman",
    },
    {
      img: expert6,
      designation: "Organic Farmer",
      name: "James Carter",
    },
    {
      img: expert7,
      designation: "Organic Farmer",
      name: "William Gabriel",
    },
    {
      img: expert4,
      designation: "Organic Farmer",
      name: "Adam Joseph",
    },
  ];

  const socialIcons = [
    { icon: <FaFacebookF /> },
    { icon: <FaSquareXTwitter /> },
    { icon: <FaPinterestP /> },
  ];

  return (
    <>
      <div className="mt-16 lg:mt-20 px-4 sm:px-6 lg:px-8 py-8 lg:py-12">
        <div className="flex justify-center mb-6 sm:mb-8 mt-10">
          <h1 className="font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-gray-800 text-center">
            Our Experts
          </h1>
        </div>
        <hr className="border-gray-300 mx-4 lg:mx-20 mb-8 sm:mb-12" />
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 sm:gap-8 lg:gap-10 px-2 sm:px-4">
          {experts.map((item, index) => (
            <div 
              key={index}
              className="flex flex-col justify-center items-center border border-gray-300 rounded-lg shadow-lg hover:shadow-xl transform transition-all duration-500 hover:scale-105 p-4 sm:p-6 bg-white"
            >
              <img 
                className="w-32 h-32 sm:w-36 sm:h-36 lg:w-40 lg:h-40 object-cover rounded-full mb-4 border-4 border-green-5911" 
                src={item.img} 
                alt={item.name}
              />
              <div className="flex flex-col justify-center items-center gap-2 text-center">
                <h1 className="font-bold text-green-5911 text-base sm:text-lg">
                  {item.designation}
                </h1>
                <h1 className="font-semibold text-xl sm:text-2xl text-gray-800">
                  {item.name}
                </h1>
                <div className="flex gap-4 sm:gap-5 mt-3">
                  {socialIcons.map((social, socialIndex) => (
                    <i 
                      key={socialIndex}
                      className="hover:text-green-5911 text-2xl sm:text-2xl cursor-pointer transition-colors duration-300 text-gray-600"
                    >
                      {social.icon}
                    </i>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <hr className="mt-12 sm:mt-16 lg:mt-20 border-gray-300" />
        <div className="flex flex-col lg:flex-row justify-between items-center lg:items-start gap-10 sm:gap-12 lg:gap-16 pt-12 sm:pt-16 lg:pt-20">
          <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start text-center lg:text-left">
            <h1 className="font-bold text-2xl sm:text-3xl lg:text-4xl text-gray-800">Skills</h1>
            <p className="font-bold text-3xl sm:text-4xl lg:text-5xl w-full max-w-md pt-5 sm:pt-6 lg:pt-8 text-gray-800 leading-tight">
              We Have The Most Skilled Team Ever<span className="text-green-5911">.</span>
            </p>
            <p className="text-lg sm:text-xl lg:text-xl w-full max-w-2xl pt-5 sm:pt-6 lg:pt-8 text-gray-600 leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <div className="w-full max-w-2xl space-y-6 sm:space-y-8 pt-8 sm:pt-10">
              {skills.map((skill) => (
                <div key={skill.name}>
                  <div className="flex justify-between font-semibold mb-3 text-base sm:text-lg">
                    <h3 className="text-gray-800">{skill.name}</h3>
                    <span className="text-green-5911 font-bold">
                      {skill.percent}%
                    </span>
                  </div>
                  <div className="h-3 sm:h-4 bg-gray-200 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-green-5911 rounded-full transition-all duration-1000 ease-out"
                      style={{ width: `${skill.percent}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="w-full lg:w-1/2 flex justify-center lg:justify-end mt-8 lg:mt-0">
            <img 
              className="w-full max-w-md sm:max-w-lg lg:max-w-xl rounded-2xl shadow-xl object-cover" 
              src={expert2} 
              alt="Our skilled team"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Expert;