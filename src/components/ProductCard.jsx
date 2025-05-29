import React from 'react';

const FluidPage = () => {
  return (
    <div className="bg-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Başlık Bölümü */}
        <div className="text-center mb-16">
          <h3 className="text-sm font-bold text-[#23A6F0] mb-2">Featured Products</h3>
          <h2 className="text-2xl font-bold text-[#252B42] mb-4">BESTSELLER PRODUCTS</h2>
          <p className="text-sm text-[#737373] max-w-2xl mx-auto">
            Problems trying to resolve the conflict between
          </p>
        </div>

        {/* Ürün Kartları Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {/* Mevcut 4 Ürün */}
          {['img1.png', 'img2.png', 'img3.png', 'img4.png'].map((img, index) => (
            <div key={index} className="bg-white border border-gray-100 rounded-md overflow-hidden shadow-sm">
              <div className="p-4 relative">
                <img src={`/${img}`} alt="Graphic Design" className="w-full h-48 object-contain" />
                <div className="absolute top-4 left-4 bg-[#E74040] text-white text-xs font-bold px-2 py-1 rounded-full">
                  YENİ
                </div>
              </div>
              <div className="p-4">
                <h3 className="text-base font-bold text-[#252B42] mb-1">Graphic Design</h3>
                <p className="text-xs text-[#737373] mb-2">English Department</p>
                <div className="flex gap-2 mb-2">
                  <span className="text-sm font-bold text-[#BDBDBD]">$16.48</span>
                  <span className="text-sm font-bold text-[#23856D]">$6.48</span>
                </div>
                {/* Renk Göstergeleri */}
                <div className="flex gap-2 mt-3">
                  <div className="w-4 h-4 rounded-full bg-[#23A6F0]"></div>
                  <div className="w-4 h-4 rounded-full bg-[#23856D]"></div>
                  <div className="w-4 h-4 rounded-full bg-[#E77C40]"></div>
                  <div className="w-4 h-4 rounded-full bg-[#252B42]"></div>
                </div>
              </div>
            </div>
          ))}

          {/* Yeni 4 Ürün */}
          {['img5.png', 'img6.png', 'img7.png', 'img8.png'].map((img, index) => (
            <div key={index + 4} className="bg-white border border-gray-100 rounded-md overflow-hidden shadow-sm">
              <div className="p-4 relative">
                <img src={`/${img}`} alt="Graphic Design" className="w-full h-48 object-contain" />
                <div className="absolute top-4 left-4 bg-[#E74040] text-white text-xs font-bold px-2 py-1 rounded-full">
                  YENİ
                </div>
              </div>
              <div className="p-4">
                <h3 className="text-base font-bold text-[#252B42] mb-1">Graphic Design</h3>
                <p className="text-xs text-[#737373] mb-2">English Department</p>
                <div className="flex gap-2 mb-2">
                  <span className="text-sm font-bold text-[#BDBDBD]">$16.48</span>
                  <span className="text-sm font-bold text-[#23856D]">$6.48</span>
                </div>
                {/* Renk Göstergeleri */}
                <div className="flex gap-2 mt-3">
                  <div className="w-4 h-4 rounded-full bg-[#23A6F0]"></div>
                  <div className="w-4 h-4 rounded-full bg-[#23856D]"></div>
                  <div className="w-4 h-4 rounded-full bg-[#E77C40]"></div>
                  <div className="w-4 h-4 rounded-full bg-[#252B42]"></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FluidPage;