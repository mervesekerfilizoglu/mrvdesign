import React from 'react';

const FluidPage = () => {
  return (
    <div className="relative h-screen w-full flex">
      {/* Image container - solda */}
      <div
        className="flex-1 h-full bg-white bg-cover bg-center"
        style={{ backgroundImage: "url('/fluid.png')" }}
      >
        {/* Overlay kaldırıldı veya istersen comment yapabilirsin */}
        {/* <div className="h-full w-full bg-black bg-opacity-40"></div> */}
      </div>

      {/* Content container - sağda */}
      <div className="relative flex-1 flex flex-col justify-center items-start px-4 sm:px-8 md:px-16 lg:px-24 xl:px-32">
        {/* Subtitle */}
        <h2 className="text-xl md:text-2xl font-bold mb-4 text-gray-500">
          SUMMER 2020
        </h2>
        
        {/* Main title */}
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 max-w-2xl text-black">
          Part of the Neural Universe
        </h1>
        
        {/* Description */}
        <p className="text-lg md:text-xl mb-8 max-w-2xl text-gray-500">
          We know how large objects will act, but things on a small scale.
        </p>
        
        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4">
          <button className="bg-[#2DC071] text-white px-8 py-3 rounded-md font-bold hover:bg-[#23A6F0] transition-colors">
            BUY NOW
          </button>
          <button className="bg-[#2DC071] border-2 border-white text-white px-8 py-3 rounded-md font-bold hover:bg-[#2DC071] hover:text-black transition-colors">
            READ MORE
          </button>
        </div>
      </div>
    </div>
  );
};

export default FluidPage;
