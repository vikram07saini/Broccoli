import React from "react";

const MyAccount = () => {
  return (
    <div className="mt-16 sm:mt-32 lg:mt-10 px-4 sm:px-6 lg:px-8">
      <div className="flex justify-center pb-3 sm:pb-5 text-green-5911">
        <p className="text-sm font-semibold">Welcome To Our Company</p>
      </div>
      <div className="flex justify-center font-semibold text-2xl sm:text-3xl">
        <p>Account Details</p>
      </div>
      <div className="flex justify-center p-3 sm:p-5">
        <p className="bg-offWhite-5911 p-3 sm:p-5 font-semibold text-sm sm:text-base text-center">
          The following addresses will be used on the checkout page by default.
        </p>
      </div>
      <div className="flex flex-col lg:flex-row gap-4 sm:gap-5 justify-center mt-4 sm:mt-5">
        <div className="w-full lg:w-auto">
        <label htmlFor="firstName" className="font-semibold text-sm sm:text-base">
          First Name:
        </label>
        <br/>    
        <input
          id="firstName"
          type="text"
          className="border border-gray-400 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-green-5911 w-full lg:w-[500px] h-[50px] sm:h-[60px]"
          placeholder="vikii"
        />
        </div>
        <div className="w-full lg:w-auto">
        <label htmlFor="lastname" className="font-semibold text-sm sm:text-base">
            Last Name:
        </label>
        <br/>
        <input
        id="lastname"
        type="text"
        className="border border-gray-400 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-green-5911 w-full lg:w-[500px] h-[50px] sm:h-[60px]"
        placeholder="saini"
        />
        </div>
        </div>
        <div className="flex flex-col lg:flex-row gap-4 sm:gap-5 justify-center mt-4 sm:mt-5">
        <div className="w-full lg:w-auto">
            <label htmlFor="displayname" className="font-semibold text-sm sm:text-base">
            Display Name:
        </label>
        <br/>
        <input
        id="lastname"
        type="text"
        className="border border-gray-400 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-green-5911 w-full lg:w-[500px] h-[50px] sm:h-[60px]"
        placeholder="vSaini"
        />

        </div>
        <div className="w-full lg:w-auto">
            <label htmlFor="email" className="font-semibold text-sm sm:text-base">
            Display Email:
        </label>
        <br/>
        <input
        id="lastname"
        type="email"
        className="border border-gray-400 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-green-5911 w-full lg:w-[500px] h-[50px] sm:h-[60px]"
        placeholder="vs@gmail.com"
        />
        </div>
      </div>
      <div className="p-4 sm:p-8 lg:p-30">
        <div className="p-4 sm:p-8 lg:p-20 flex flex-col items-center border-1 border-gray-300">
        <p className="font-semibold text-lg sm:text-xl">PASSWORD CHANGE</p>
            <label htmlFor="email" className="font-semibold text-sm sm:text-base mt-4">
            Current Password(leave blank to leave unchanged):
        </label>
        <br/>
        <input
        id="currentpassword"
        type="password"
        className="border border-gray-400 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-green-5911 w-full lg:w-[500px] h-[50px] sm:h-[60px] mt-2"
        placeholder="********"
        />
        <br/>
           <label htmlFor="email" className="font-semibold text-sm sm:text-base mt-4">
            New Password(leave blank to leave unchanged):
        </label>
        <br/>
        <input
        id="currentpassword"
        type="password"
        className="border border-gray-400 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-green-5911 w-full lg:w-[500px] h-[50px] sm:h-[60px] mt-2"
        placeholder="********"
        />
         <br/>
           <label htmlFor="email" className="font-semibold text-sm sm:text-base mt-4">
            Confirm New Password:
        </label>
        <br/>
        <input
        id="currentpassword"
        type="password"
        className="border border-gray-400 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-green-5911 w-full lg:w-[500px] h-[50px] sm:h-[60px] mt-2"
        placeholder="********"
        />
        <button className="mt-6 sm:mt-10 p-3 sm:p-4 text-white font-bold bg-green-5911 hover:bg-black transition-all duration-300 ease-in-out hover:rounded-4xl w-full sm:w-auto">SAVE CHANGES</button>
</div>
      </div>
      <div className="flex flex-col lg:flex-row gap-6 sm:gap-8 lg:gap-12 justify-center pb-4 sm:pb-8 lg:pb-12 px-4 sm:px-0">
        <div className="border-1 p-6 sm:p-8 lg:p-10 shadow-2xl bg-green-5911 text-white w-full lg:w-auto">
            <p className="font-bold text-lg sm:text-xl p-4 sm:p-6 lg:p-10">Billing Address <button className="hover:text-white shadow-black transition-all duration-300 ease-in-out border-1 shadow-2xl rounded-4xl p-2 sm:p-3 hover:bg-black cursor-pointer text-sm sm:text-base">Edit</button></p>
            <p className="font-semibold text-sm sm:text-base">Alex Tuntuni</p>
            <p className="text-sm sm:text-base">1355 Market St, Suite 900 San Francisco, CA 94103</p>
            <p className="text-sm sm:text-base">Mobile: (123) 456-7890</p>
        </div>
        <div className="border-1 p-6 sm:p-8 lg:p-10 shadow-2xl bg-green-5911 text-white w-full lg:w-auto">
            <p className="font-bold text-lg sm:text-xl p-4 sm:p-6 lg:p-10">Shipping Address <button className="hover:text-white transition-all shadow-2xl shadow-black duration-300 ease-in-out border-1 rounded-4xl p-2 sm:p-3 hover:bg-black cursor-pointer text-sm sm:text-base">Edit</button></p>
            <p className="font-semibold text-sm sm:text-base">Alex Tuntuni</p>
            <p className="text-sm sm:text-base">1355 Market St, Suite 900 San Francisco, CA 94103</p>
            <p className="text-sm sm:text-base">Mobile: (123) 456-7890</p>
        </div>
      </div>
    </div>
  );
};

export default MyAccount;