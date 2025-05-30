import React, { useState } from "react";

const ProductDetailanaPage = () => {


const [activeTab, setActiveTab] = useState('description');


const bestsellers = [
    { id: 1, image: 'bs1.png', title: 'Graphic Design', department: 'English Department', originalPrice: '$16.48', discountedPrice: '$6.48' },
    { id: 2, image: 'bs2.png', title: 'Graphic Design', department: 'English Department', originalPrice: '$16.48', discountedPrice: '$6.48' },
    { id: 3, image: 'bs3.png', title: 'Graphic Design', department: 'English Department', originalPrice: '$16.48', discountedPrice: '$6.48' },
    { id: 4, image: 'bs4.png', title: 'Graphic Design', department: 'English Department', originalPrice: '$16.48', discountedPrice: '$6.48' },
     { id:5, image: 'bs5.png', title: 'Graphic Design', department: 'English Department', originalPrice: '$16.48', discountedPrice: '$6.48' },
    { id: 6, image: 'bs6.png', title: 'Graphic Design', department: 'English Department', originalPrice: '$16.48', discountedPrice: '$6.48' },
    { id: 7, image: 'bs7.png', title: 'Graphic Design', department: 'English Department', originalPrice: '$16.48', discountedPrice: '$6.48' },
    { id: 8, image: 'bs8.png', title: 'Graphic Design', department: 'English Department', originalPrice: '$16.48', discountedPrice: '$6.48' }
  ]; //4


  const brandImages = [
    "fa-brands-1.svg",
    "fa-brands-2.svg",
    "fa-brands-3.svg",
    "fa-brands-4.svg",
    "fa-brands-5.svg",
    "fa-brands-6.svg"
  ]; //5





  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-6xl mx-auto">
        {/* Breadcrumb */}
        <div className="text-sm text-gray-600 mb-8">
          <span className="hover:text-blue-600 cursor-pointer">Home</span>
          <span className="mx-2">&#62;</span>
          <span className="font-semibold">Shop</span>
        </div>

        {/* Product Detail Section */}
        <div className="flex flex-col md:flex-row gap-8">
          {/* Product Image */}
          <div className="w-full md:w-1/2 bg-white p-6 rounded-lg shadow-md">
            <img 
              src="/yellowchair.png" 
              alt="Floating Phone" 
              className="w-full h-auto object-contain max-h-96 mx-auto"
            />
          </div>

          {/* Product Info */}
          <div className="w-full md:w-1/2">
            <h1 className="text-3xl font-bold text-gray-800 mb-2">Floating Phone</h1>
            
            {/* Rating */}
            <div className="flex items-center mb-4">
              <div className="flex text-yellow-400">
                {[...Array(4)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
                <svg className="w-5 h-5 fill-current text-gray-300" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              </div>
              <span className="text-gray-600 ml-2">10 Reviews</span>
            </div>

            {/* Price */}
            <div className="text-3xl font-bold text-gray-800 mb-4">$1,139.33</div>

            {/* Availability */}
            <div className="text-gray-600 mb-6">
              Availability : <span className="text-blue-600 font-medium">In Stock</span>
            </div>

            {/* Description with Underline */}
            <div className="border-b border-gray-200 pb-6 mb-6">
              <p className="text-gray-600">
                Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent door ENIM RELIT Mollie. Excitation venial consequent sent nostrum met.
              </p>
            </div>

            {/* Color Options - çizginin altına, butonların üstüne taşındı */}
            <div className="flex gap-3 mb-6">
              <div className="w-8 h-8 rounded-full bg-blue-600 border-2 border-blue-700 cursor-pointer"></div>
              <div className="w-8 h-8 rounded-full bg-green-500 border-2 border-transparent cursor-pointer"></div>
              <div className="w-8 h-8 rounded-full bg-orange-500 border-2 border-transparent cursor-pointer"></div>
              <div className="w-8 h-8 rounded-full bg-black border-2 border-transparent cursor-pointer"></div>
            </div>

            {/* Options Button with Icons */}
            <div className="flex gap-4">
              <button className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-md transition duration-300">
                Select Options
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                </svg>
              </button>
              
              <button className="p-3 border border-gray-300 rounded-md hover:bg-gray-100">
                <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </button>
              
              <button className="p-3 border border-gray-300 rounded-md hover:bg-gray-100">
                <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>








        {/* Tab Navigation */}
   <div className="border-b border-gray-200 pb-2">
        <nav className="flex justify-center gap-x-12 -mb-px">
          <button
            onClick={() => setActiveTab('description')}
            className={`py-4 px-1 font-medium text-sm border-b-2 ${
              activeTab === 'description'
                ? 'border-blue-500 text-blue-600'
                : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
            }`}
          >
            Description
          </button>

          <button
            onClick={() => setActiveTab('additional')}
            className={`py-4 px-1 font-medium text-sm border-b-2 ${
              activeTab === 'additional'
                ? 'border-blue-500 text-blue-600'
                : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
            }`}
          >
            Additional Information
          </button>

          <button
  onClick={() => setActiveTab('reviews')}
  className={`py-4 px-1 font-medium text-sm border-b-2 ${
    activeTab === 'reviews'
      ? 'border-blue-500 text-blue-600'
      : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
  }`}
>
  Reviews <span className="text-green-600">(0)</span>
</button>
        </nav>
      </div>

      {/* Tab Content */}
      <div className="py-6">
        {activeTab === 'description' && (
          <div className="text-gray-600">
          </div>
        )}

        {activeTab === 'additional' && (
          <div className="text-gray-600">
          </div>
        )}

        {activeTab === 'reviews' && (
          <div className="text-gray-600">
          </div>
        )}
      </div>





   {/* Text Content Section */}
  <div className="max-w-6xl mx-auto">
     
         {/* Görsel + Metin blokları aynı satırda */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 bg-white">
          
          {/* Görsel - 1. sütun */}
          <div className="bg-white p-6 rounded-lg shadow-sm flex items-center justify-center">
            <img 
              src="/brwnchair.png" 
              alt="Brown Chair" 
              className="w-full h-auto max-h-96 object-contain"
            />
          </div>
            {/* 2. sütun -  metinler */}
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">the quick fox jumps over</h2>
            <div className="space-y-3 text-gray-600">
              <p>Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent door ENİM RELIT Mollie. Excitation venial consequent sent nostrum met.</p>
              <p>Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent door ENİM RELIT Mollie. Excitation venial consequent sent nostrum met.</p>
              <p>Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent door ENİM RELIT Mollie. Excitation venial consequent sent nostrum met.</p>
            </div>
          </div>

          {/* 3. sütun - özel içerik */}
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">the quick fox jumps over</h2>
            <div className="space-y-3 text-gray-600">
              <p>the quick fox jumps over the lazy dog</p>
              <p>the quick fox jumps over the lazy dog</p>
              <p>the quick fox jumps over the lazy dog</p>
              <p>the quick fox jumps over the lazy dog</p>
            </div>
            <h2 className="text-xl font-semibold text-gray-800 mt-6 mb-4">the quick fox jumps over</h2>
            <div className="space-y-3 text-gray-600">
              <p>the quick fox jumps over the lazy dog</p>
              <p>the quick fox jumps over the lazy dog</p>
              <p>the quick fox jumps over the lazy dog</p>
            </div>
          </div>

        
        </div>
      </div>






 {/* Bestseller Products Header 4 */}
        <h2 className="text-2xl font-bold text-center mb-10">BESTSELLER PRODUCTS</h2>
        
        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {bestsellers.map((product) => (
            <div key={product.id} className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow">
              {/* Product Image */}
              <div className="p-4">
                <img 
                  src={`/${product.image}`} 
                  alt={product.title} 
                  className="w-full h-48 object-contain mx-auto"
                />
              </div>
              
              {/* Product Info */}
              <div className="p-4 border-t border-gray-100">
                <h3 className="font-semibold text-gray-800 mb-1">{product.title}</h3>
                <p className="text-sm text-gray-500 mb-2">{product.department}</p>
                <div className="flex gap-2">
                  <span className="text-gray-400 line-through text-sm">{product.originalPrice}</span>
                  <span className="text-blue-600 font-semibold">{product.discountedPrice}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      




{/* 5*/}
   <div className="max-w-6xl mx-auto flex justify-between items-center mt-8">
        {brandImages.map((image, index) => (
          <img 
            key={index}
            src={`/${image}`}
            alt={`Brand ${index + 1}`}
            className="w-16 h-16 object-contain flex-shrink-0"
          />
        ))}
      </div>










    </div>
  );
};

export default ProductDetailanaPage;
//Altına footer gelecek app.jsxde footerı tekrar ekledim.