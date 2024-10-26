import Link from 'next/link';
import React from 'react';

const TeamColLarge = () => {
  // Array of image URLs
  const teamImages = [
    "https://pagedone.io/asset/uploads/1696238644.png",
    "https://pagedone.io/asset/uploads/1696238665.png",
    "https://pagedone.io/asset/uploads/1696238684.png",
    "https://pagedone.io/asset/uploads/1696238702.png",
    "https://pagedone.io/asset/uploads/1696238720.png",
    "https://pagedone.io/asset/uploads/1696238737.png",
  ];

  return (
    <section className="py-24 bg-light">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center flex-col lg:flex-row md:mt-20">
          <div className="w-full lg:w-1/2">
            <h2 className="font-manrope text-5xl text-[#02077d] font-bold leading-[4rem] mb-7 text-center lg:text-left">
              Our leading, strong & creative team
            </h2>
            <p className="text-lg text-gray-900 mb-6 text-center lg:text-left">
              These people work on making our product best.
            </p>
            <Link href="/career">
            <button className="relative inline-flex items-center justify-center px-7 py-2 overflow-hidden tracking-tighter text-black bg-white rounded-lg border border-violet-400 group transition-all duration-300 ease-in-out">
              <span className="absolute w-0 h-0 transition-all duration-500 ease-out bg-medium-light rounded-full group-hover:w-56 group-hover:h-56"></span>
              <span className="absolute bottom-0 left-0 h-full -ml-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-auto h-full opacity-100 object-stretch"
                  viewBox="0 0 487 487"
                >
                  <path
                    fillOpacity=".1"
                    fillRule="nonzero"
                    fill="#FFF"
                    d="M0 .3c67 2.1 134.1 4.3 186.3 37 52.2 32.7 89.6 95.8 112.8 150.6 23.2 54.8 32.3 101.4 61.2 149.9 28.9 48.4 77.7 98.8 126.4 149.2H0V.3z"
                  ></path>
                </svg>
              </span>
              <span className="absolute top-0 right-0 w-12 h-full -mr-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="object-cover w-full h-full"
                  viewBox="0 0 487 487"
                >
                  <path
                    fillOpacity=".1"
                    fillRule="nonzero"
                    fill="#FFF"
                    d="M487 486.7c-66.1-3.6-132.3-7.3-186.3-37s-95.9-85.3-126.2-137.2c-30.4-51.8-49.3-99.9-76.5-151.4C70.9 109.6 35.6 54.8.3 0H487v486.7z"
                  ></path>
                </svg>
              </span>
              <span className="absolute inset-0 w-full h-full -mt-1 rounded-lg opacity-30 bg-gradient-to-b from-transparent via-transparent to-gray-200 group-hover:bg-medium-light transition-all duration-300 ease-in-out"></span>
              <span className="relative text-base font-medium group-hover:text-white transition-colors duration-300 ease-in-out">
               Join our team
              </span>
            </button>
          </Link>
          </div>
          <div className="w-full lg:w-1/2 lg:mt-0 md:mt-40 mt-16 max-lg:max-w-2xl">
            <div className="grid grid-cols-3 gap-8">
              {teamImages.map((imageUrl, index) => (
                <img
                  key={index}
                  src={imageUrl}
                  alt={`Team member ${index + 1}`}
                  className="w-44 md:h-52 rounded-2xl object-cover mx-auto"
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamColLarge;