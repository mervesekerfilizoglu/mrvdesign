import React from "react";
//En başa header gelecek app.jsxde headerı tekrar ekledim.
const ShopanaPage = () => {
  const categories = [
    { name: "CLOTHS", items: 5, image: "cloths1.svg" },
    { name: "CLOTHS", items: 6, image: "cloths2.svg" },
    { name: "CLOTHS", items: 7, image: "cloths3.svg" },
    { name: "CLOTHS", items: 8, image: "cloths4.svg" },
    { name: "CLOTHS", items: 9, image: "cloths5.svg" },
  ];




  const products = [
    { id: 1, image: "1.png", title: "Graphic Design", department: "English Department", originalPrice: "$16.48", discountedPrice: "$6.48" },
    { id: 2, image: "2.png", title: "Graphic Design", department: "English Department", originalPrice: "$16.48", discountedPrice: "$6.48" },
    { id: 3, image: "3.png", title: "Graphic Design", department: "English Department", originalPrice: "$16.48", discountedPrice: "$6.48" },
    { id: 4, image: "1.png", title: "Graphic Design", department: "English Department", originalPrice: "$16.48", discountedPrice: "$6.48" },
      { id: 5, image: "5.png", title: "Graphic Design", department: "English Department", originalPrice: "$16.48", discountedPrice: "$6.48" },
    { id: 6, image: "6.png", title: "Graphic Design", department: "English Department", originalPrice: "$16.48", discountedPrice: "$6.48" },
    { id: 7, image: "7.png", title: "Graphic Design", department: "English Department", originalPrice: "$16.48", discountedPrice: "$6.48" },
    { id: 8, image: "8.png", title: "Graphic Design", department: "English Department", originalPrice: "$16.48", discountedPrice: "$6.48" },
    { id: 9, image: "9.png", title: "Graphic Design", department: "English Department", originalPrice: "$16.48", discountedPrice: "$6.48" },
    { id: 10, image: "10.png", title: "Graphic Design", department: "English Department", originalPrice: "$16.48", discountedPrice: "$6.48" },
    { id: 11, image: "11.png", title: "Graphic Design", department: "English Department", originalPrice: "$16.48", discountedPrice: "$6.48" },
    { id: 12, image: "12.png", title: "Graphic Design", department: "English Department", originalPrice: "$16.48", discountedPrice: "$6.48" }
  ];




const brandImages = [
    "fa-brands-1.svg",
    "fa-brands-2.svg",
    "fa-brands-3.svg",
    "fa-brands-4.svg",
    "fa-brands-5.svg",
    "fa-brands-6.svg"
  ];


  
  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto">
        {/* Breadcrumb */}
        <div className="text-sm text-gray-600 mb-8">
          <span>Home</span>
          <span className="mx-2">&#62;</span>
          <span className="font-semibold">Shop</span>
        </div>

        {/* Page Title */}
        <h1 className="text-3xl font-bold text-gray-900 mb-12">Shop</h1>

        {/* 5'li sabit grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {categories.map((category, index) => (
            <div
              key={index}
              className="relative rounded-lg overflow-hidden aspect-square group"
              style={{
                backgroundImage: `url(/${category.image})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <div className="absolute inset-0 bg-black bg-opacity-30 group-hover:bg-opacity-40 transition-all duration-300"></div>
              <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
                <h2 className="text-xl font-bold mb-1">{category.name}</h2>
                <p className="text-base">{category.items} items</p>
              </div>
            </div>
          ))}
        </div>



          {/* Results and Filter Header */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4">
          <div className="text-gray-700">
            Showing all <span className="font-semibold">12</span> results
          </div>
          
          <div className="flex items-center gap-4">
            {/* Views with Icons */}
            <div className="flex items-center gap-2">
              <span className="text-gray-700">Views:</span>
              <div className="flex gap-1">
                <img src="/views1.svg" alt="View 1" className="w-5 h-5 cursor-pointer" />
                <img src="/views2.svg" alt="View 2" className="w-5 h-5 cursor-pointer" />
              </div>
            </div>

            {/* Sort Dropdown */}
            <div className="relative">
              <select className="appearance-none bg-white border border-gray-300 rounded-md px-4 py-2 pr-8 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500">
                <option>Popularity ▼</option>
                <option>Price: Low to High</option>
                <option>Price: High to Low</option>
                <option>Newest</option>
                <option>Rating</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </div>
            </div>
            
            {/* Blue Filter Button */}
            <button className="flex items-center gap-2 bg-blue-600 text-white rounded-md px-4 py-2 hover:bg-blue-700 transition-colors">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />
              </svg>
              Filter
            </button>
          </div>
        </div>

        {/* Product Grid would go here */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {/* Product items would be rendered here */}
        </div>





{/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {products.map((product) => (
            <div key={product.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <div className="p-4 flex flex-col items-center">
                <img 
                  src={`/${product.image}`} 
                  alt={product.title} 
                  className="w-full h-48 object-contain mb-4"
                />
                <div className="text-center">
                  <h3 className="text-lg font-semibold text-gray-800">{product.title}</h3>
                  <p className="text-gray-600 text-sm mb-2">{product.department}</p>
                  <div className="flex justify-center gap-2">
                    <span className="text-gray-400 line-through">{product.originalPrice}</span>
                    <span className="text-blue-600 font-bold">{product.discountedPrice}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination */}
        <div className="flex justify-center items-center gap-2">
          <button className="px-3 py-1 border border-gray-300 rounded text-gray-700 hover:bg-gray-100">First</button>
          <button className="w-8 h-8 flex items-center justify-center border border-blue-500 bg-blue-500 text-white rounded">1</button>
          <button className="w-8 h-8 flex items-center justify-center border border-gray-300 rounded text-gray-700 hover:bg-gray-100">2</button>
          <button className="w-8 h-8 flex items-center justify-center border border-gray-300 rounded text-gray-700 hover:bg-gray-100">3</button>
          <button className="px-3 py-1 border border-gray-300 rounded text-gray-700 hover:bg-gray-100">Next</button>
        </div>





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
    </div>
  );
};

export default ShopanaPage;
//Altına footer gelecek app.jsxde footerı tekrar ekledim.