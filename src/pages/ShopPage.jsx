import React from 'react';

const ItemCard = ({ item }) => (
  <div className="relative group overflow-hidden rounded-lg">
    <div className="h-80 overflow-hidden">
      <img
        src={item.image}
        alt={item.title}
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
      />
    </div>

    <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col items-center justify-center p-4 text-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
      <h3 className="text-xl font-bold mb-2">{item.title}</h3>
      <p className="text-sm">{item.subtitle}</p>
      <button className="mt-4 px-6 py-2 bg-white text-gray-900 font-medium rounded-md hover:bg-gray-100 transition-colors">
        Shop Now
      </button>
    </div>

    <div className="absolute bottom-0 left-0 right-0 bg-white bg-opacity-90 p-4 text-center">
      <h3 className="text-lg font-bold text-gray-900">{item.title}</h3>
    </div>
  </div>
);

const ShopPage = () => {
  const editorPicks = [
    {
      id: 1,
      title: 'MEN',
      subtitle: 'Problems trying to resolve the conflict between',
      image: '/editor1.jpeg'
    },
    {
      id: 2,
      title: 'WOMEN',
      subtitle: 'Problems trying to resolve the conflict between',
      image: '/editor2.jpeg'
    },
    {
      id: 3,
      title: 'ACCESSORIES',
      subtitle: 'Problems trying to resolve the conflict between',
      image: '/editor3.jpeg'
    },
    {
      id: 4,
      title: 'KIDS',
      subtitle: 'Problems trying to resolve the conflict between',
      image: '/editor4.jpeg'
    }
  ];

  return (
    <div className="container mx-auto px-4 py-12">
      {/* Section Title */}
      <div className="text-center mb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">EDITOR'S PICK</h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Problems trying to resolve the conflict between
        </p>
      </div>

      {/* Editor's Picks Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* 1 ve 2 id'li itemlar yan yana */}
        <div className="md:col-span-2 grid grid-cols-2 gap-6">
          {editorPicks
            .filter(item => item.id === 1 || item.id === 2)
            .map(item => (
              <ItemCard key={item.id} item={item} />
            ))}
        </div>

        {/* 3 ve 4 id'li itemlar alt alta */}
        <div className="flex flex-col gap-6">
          {editorPicks
            .filter(item => item.id === 3 || item.id === 4)
            .map(item => (
              <ItemCard key={item.id} item={item} />
            ))}
        </div>
      </div>
    </div>
  );
};

export default ShopPage;
