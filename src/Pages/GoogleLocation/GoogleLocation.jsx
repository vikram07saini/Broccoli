import React from "react";
import { FaAddressBook } from "react-icons/fa";
import { IoCall } from "react-icons/io5";

const GoogleLocation = () => {
  const locations = [
    {
      title: "Boston, New York",
      address: "5816 S. Coulter Street Amarillo, Tx 79119",
      number: "012345678",
      button1: "Get an Appointment",
      button2: "View Website",
    },
    {
      title: "California, Canada",
      address: "5232 D Street Court, 8990",
      number: "012345678",
      button1: "Get an Appointment",
      button2: "View Website",
    },
    {
      title: "Romania, Italy",
      address: "5816 Street Amarillo, Tx 79119",
      number: "012345678",
      button1: "Get an Appointment",
      button2: "View Website",
    },
    {
      title: "London, UK",
      address: "123 Main Street, London, UK",
      number: "012345678",
      button1: "Get an Appointment",
      button2: "View Website",
    },
    {
      title: "Tokyo, Japan",
      address: "456 Sakura Avenue, Tokyo, Japan",
      number: "012345678",
      button1: "Get an Appointment",
      button2: "View Website",
    },
    {
      title: "Sydney, Australia",
      address: "789 Ocean Drive, Sydney, Australia",
      number: "012345678",
      button1: "Get an Appointment",
      button2: "View Website",
    },
  ];

  const placeQuery = "Sector 70 Mohali";
  const mapSrc = `https://www.google.com/maps?q=${encodeURIComponent(
    placeQuery
  )}&output=embed`;

  return (
    <div className="mt-20 lg:mt-24 px-4 sm:px-6 lg:px-8">
      <section className="max-w-7xl mx-auto">
        <div className="bg-white rounded-xl sm:rounded-2xl shadow-lg overflow-hidden">
          <div className="p-4 sm:p-6 lg:p-8">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-2 text-center text-gray-800 mt-20">
              Sector 70, Mohali
            </h2>
            <p className="text-sm sm:text-base text-gray-500 mb-4 sm:mb-6 text-center">
              Embedded Google Map — tap "Open in Google Maps" to open the full map.
            </p>
            <div className="w-full h-[300px] sm:h-[400px] md:h-[450px] lg:h-[500px] xl:h-[550px] rounded-lg sm:rounded-xl overflow-hidden border border-gray-200">
              <iframe
                title="Sector 70 Mohali — Google Maps"
                src={mapSrc}
                width="100%"
                height="100%"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="block"
                allowFullScreen
              />
            </div>
            <div className="mt-4 sm:mt-6 flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
                  placeQuery
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-4 sm:px-6 py-2 sm:py-3 rounded-lg border border-gray-300 font-medium hover:bg-gray-100 transition-all duration-300 text-sm sm:text-base text-center"
              >
                Open in Google Maps
              </a>

              <button
                onClick={() =>
                  alert(
                    "If you need a marker, directions, or custom controls you'll need the Google Maps JavaScript API with an API key — I can show that next."
                  )
                }
                className="inline-block px-4 sm:px-6 py-2 sm:py-3 rounded-lg bg-slate-900 text-white font-medium hover:opacity-90 transition-all duration-300 text-sm sm:text-base"
              >
                About map
              </button>
            </div>
          </div>
        </div>
      </section>
      <div className="max-w-7xl mx-auto mt-8 sm:mt-12 lg:mt-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 px-2 sm:px-0">
          {locations.map((item, index) => (
            <div
              key={index}
              className="bg-white shadow-md hover:shadow-xl rounded-lg sm:rounded-xl p-4 sm:p-6 border border-gray-100 hover:border-green-5911 transition-all duration-300 flex flex-col gap-3 sm:gap-4"
            >
              <h1 className="text-lg sm:text-xl lg:text-2xl font-semibold text-gray-800">
                {item.title}
              </h1>
              <div className="flex items-start gap-3">
                <FaAddressBook className="text-green-5911 text-xl sm:text-2xl flex-shrink-0 mt-1" />
                <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                  {item.address}
                </p>
              </div>
              <div className="flex items-start gap-3">
                <IoCall className="text-green-5911 text-xl sm:text-2xl flex-shrink-0 mt-1" />
                <p className="text-gray-800 font-medium text-sm sm:text-base">
                  {item.number}
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 pt-2 sm:pt-4">
                <button className="flex-1 px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 font-medium hover:bg-green-5911 hover:text-white hover:border-green-5911 transition-all duration-300 ease-in-out rounded-lg text-sm sm:text-base text-center">
                  {item.button1}
                </button>
                <button className="flex-1 px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 font-medium hover:bg-black hover:text-white hover:border-black transition-all duration-300 ease-in-out rounded-lg text-sm sm:text-base text-center">
                  {item.button2}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default GoogleLocation;