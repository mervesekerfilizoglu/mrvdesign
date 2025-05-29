import React from 'react';

const Blog = () => {
  const blogPosts = [
    {
      id: 1,
      image: '/blog1.svg',
      tag: 'NEW',
      category: 'Google Trending New',
      title: 'Loudest a la Madison #1',
      subtitle: '(L\'integral)',
      description: 'We focus on ergonomics and meeting you where you work. It\'s only a keystroke away.',
      date: '22 April 2021',
      comments: '10 comments'
    },
    {
      id: 2,
      image: '/blog2.svg',
      tag: 'NEW',
      category: 'Google Trending New',
      title: 'Loudest a la Madison #1',
      subtitle: '(L\'integral)',
      description: 'We focus on ergonomics and meeting you where you work. It\'s only a keystroke away.',
      date: '22 April 2021',
      comments: '10 comments'
    },
    {
      id: 3,
      image: '/blog3.svg',
      tag: 'NEW',
      category: 'Google Trending New',
      title: 'Loudest a la Madison #1',
      subtitle: '(L\'integral)',
      description: 'We focus on ergonomics and meeting you where you work. It\'s only a keystroke away.',
      date: '22 April 2021',
      comments: '10 comments'
    }
  ];

  return (
    <div className="bg-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h3 className="text-sm font-bold text-[#23A6F0] mb-2">Practice Advice</h3>
          <h2 className="text-2xl font-bold text-[#252B42] mb-4">Featured Posts</h2>
          <p className="text-sm text-[#737373] max-w-2xl mx-auto">
            Problems trying to resolve the conflict between the two major realms of Classical physics: Newtonian mechanics
          </p>
        </div>

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogPosts.map((post) => (
            <div key={post.id} className="bg-white border border-gray-100 rounded-md overflow-hidden shadow-sm">
              {/* Blog Image with Tag */}
              <div className="relative">
                <img src={post.image} alt={post.title} className="w-full h-48 object-cover" />
                <div className="absolute top-4 left-4 bg-[#E74040] text-white text-xs font-bold px-2 py-1 rounded-full">
                  {post.tag}
                </div>
              </div>

              {/* Blog Content */}
              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-3">
                  <span className="text-xs text-[#8EC2F2]">{post.category}</span>
                </div>
                <h3 className="text-xl font-bold text-[#252B42] mb-2">{post.title}</h3>
                <p className="text-sm text-[#737373] mb-4">{post.subtitle}</p>
                <p className="text-sm text-[#737373] mb-4">{post.description}</p>
                
                {/* Date and Comments */}
                <div className="flex justify-between items-center mb-4">
                  <span className="text-xs text-[#8EC2F2]">{post.date}</span>
                  <span className="text-xs text-[#8EC2F2]">{post.comments}</span>
                </div>
                
                {/* Learn More Link */}
                <a href="#" className="text-sm font-bold text-[#737373] hover:text-[#23A6F0] flex items-center">
                  Learn More
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;