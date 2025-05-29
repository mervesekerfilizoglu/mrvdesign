import React from 'react';

const Carousel = () => {
  return (
    <div 
      className="relative bg-cover bg-center py-24 px-4 sm:px-6 lg:px-8"
      style={{ backgroundImage: "url('/blog.png')" }}
    >
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="max-w-md p-8">
          <span className="text-sm font-bold text-[#23A6F0] drop-shadow-md">SUMMER 2020</span>
          <h1 className="text-3xl md:text-4xl font-bold text-white mt-2 drop-shadow-md">Vita Classic</h1>
          <span className="inline-block text-sm text-white mt-1 drop-shadow-md">Product</span>
          
          <div className="space-y-4 mt-4">
            <p className="text-sm text-white drop-shadow-md">
              We know how large objects will act. We know how are objects will act. We know
            </p>
          </div>

          {/* Fiyat ve buton yan yana */}
          <div className="flex items-center gap-4 mt-6">
            <span className="text-2xl font-bold text-white drop-shadow-md">$16.48</span>
            <button className="bg-[#23A6F0] hover:bg-[#1e8fd9] text-white font-bold py-3 px-8 rounded-md transition duration-300 drop-shadow-md">
              ADD TO CART
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
