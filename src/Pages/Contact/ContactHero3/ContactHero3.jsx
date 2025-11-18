import React from "react";

const MohaliMap = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 z-[-10px] p-4 sm:p-6 mt-[-180px]">
      <div className="w-full max-w-9xl h-64 sm:h-96 lg:h-120 xl:h-150 shadow-lg rounded-xl overflow-hidden">
        <iframe
          title="Sector 77 Mohali Map"
          src="https://www.google.com/maps?q=Sector%2077%20Mohali&output=embed"
          width="100%"
          height="100%"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
};

export default MohaliMap;