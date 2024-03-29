
import Image from 'next/image';
import React from 'react';



const Main = () => {
  return (
    <div className="container mx-auto px-6 md:flex md:items-center">
            <div className="md:w-1/2 md:mr-10 text-black">
              {" "}
              {/* Text color changed to black */}
              <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
                Welcome to MedSync
              </h1>
              <p className="text-lg md:text-xl mb-8">
              Your personalized medication manager for a healthier life.
            Easily manage your medication routines, find information on all types of medicines,
            and get access to emergency medical services.
              </p>
              <div className="flex flex-col space-y-4 md:flex-row md:space-x-4 md:space-y-0">
                <button className="bg-white text-[#2E6A47] hover:bg-[#A6D71C] hover:text-black py-2 px-6 rounded-full shadow-md transition duration-300">
                  Search Medicines
                </button>
                <button className="bg-white text-[#2E6A47] hover:bg-[#A6D71C] hover:text-black py-2 px-6 rounded-full shadow-md transition duration-300">
                  Call Emergency
                </button>
              </div>
            </div>
            <div className="md:w-1/2 mt-8 md:mt-0">
              <div className="relative">

                <Image
                  src="/meds.gif"
                  alt="Medicine Hero Image"
                  width={500}
                  height={500}
            className="rounded-lg shadow-xl"
            unoptimized
                />
              </div>
            </div>
          </div>
  );
}

export default Main;
