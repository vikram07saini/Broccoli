import React from "react";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div className="mt-10 flex flex-col items-center ">
      <div className="flex flex-col gap-2 items-center">
        <p className="font-bold text-5xl">Register</p>
        <p className="font-bold text-5xl">Your Account</p>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
        <p>Sit aliquid, Non distinctio vel iste.</p>
      </div>
      <div className="mt-10">
        <input
          type="text"
          placeholder="First Name"
          className="border-2 border-gray-300 p-3  w-[400px] 
  focus:border-green-5911 focus:ring-2 focus:ring-green-5911 
  transition-all duration-300 ease-in-out "
        />
        <br />
        <input
          type="text"
          placeholder="Last Name"
          className="border-2 border-gray-300 p-3 my-4  w-[400px]
  focus:border-green-5911 focus:ring-2 focus:ring-green-5911 
  transition-all duration-300 ease-in-out"
        />
        <br />
        <input
          type="Email"
          placeholder="Email"
          className="border-2 border-gray-300 p-3  w-[400px]
  focus:border-green-5911 focus:ring-2 focus:ring-green-5911 
  transition-all duration-300 ease-in-out"
        />
        <br />
        <input
          type="password"
          placeholder="Password*"
          className="border-2 border-gray-300 p-3 mt-4  w-[400px]
  focus:border-green-5911 focus:ring-2 focus:ring-green-5911 
  transition-all duration-300 ease-in-out"
        />
        <br />
        <input
          type="password"
          placeholder="Confirm Password*"
          className="border-2 border-gray-300 p-3 mt-4 mb-4 w-[400px]
  focus:border-green-5911 focus:ring-2 focus:ring-green-5911 
  transition-all duration-300 ease-in-out"
        />
      </div>
      <div className="w-[400px]">
        <label className="flex items-center gap-2 cursor-pointer">
          <input
            type="checkbox"
            className="w-5 h-5 accent-green-5911 cursor-pointer"
          />
          <span className="text-gray-700 font-medium">
            I consent to Herboil processing my personal data in order to send
            personalized marketing material in accordance with the consent form
            and the privacy policy.
          </span>
        </label>

        <label className="flex items-center gap-2 cursor-pointer">
          <input
            type="checkbox"
            className="w-3 h-5 accent-green-5911 cursor-pointer"
          />
          <span className="text-gray-700 font-medium">
            By clicking "create account", I consent to the privacy policy.
          </span>
        </label>
      </div>
      <div className="mb-8">
        <button className="p-4 pl-8 pr-8 border bg-green-5911 font-bold text-white hover:bg-black transition-all duration-300 ease-in-out">
          Create Account
        </button>
      </div>
      <div className="flex flex-col gap-4 font-bold ">
        <p>By creating an account,you agree to our:</p>
        <p>TERMS OF CONDITIONS | PRIVACY POLICY</p>
      </div>
      <div className="p-9">
        <Link to="/SignIn">
          <p className="hover:text-green-5911">ALREADY HAVE AN ACCOUNT?</p>
        </Link>
      </div>
    </div>
  );
};

export default Register;
