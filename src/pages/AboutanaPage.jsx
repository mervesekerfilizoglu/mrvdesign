import React from "react";

const AboutanaPage = () => {

     const teamMembers = [
    { image: "/team1.png", name: "Username", profession: "Profession" },
    { image: "/team2.png", name: "Username", profession: "Profession" },
    { image: "/team3.png", name: "Username", profession: "Profession" }
  ]; //5




  const companies = [
    { name: "Stooli", logo: "/fa-brands-1.svg" },
    { name: "Lyn", logo: "/fa-brands-2.svg" },
    { name: "stripe", logo: "/fa-brands-3.svg" },
    { name: "aws", logo: "/fa-brands-4.svg" },
    { name: "Company 5", logo: "/fa-brands-5.svg" },
    { name: "Company 6", logo: "/fa-brands-6.svg" }
  ];//6
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation Bar */}
      <nav className="flex justify-between items-center px-8 py-4">
        <div className="text-2xl font-bold">Bandage</div>
        <div className="hidden md:flex space-x-8">
          <a href="#" className="text-gray-900 font-medium">Home</a>
          <a href="#" className="text-gray-900 font-medium">Product</a>
          <a href="#" className="text-gray-900 font-medium">Pricing</a>
          <a href="#" className="text-gray-900 font-medium">Contact</a>
        </div>
        <div className="flex items-center space-x-4">
          <a href="#" className="text-blue-700 font-medium">Login</a>
          <button className="bg-blue-700 text-white px-4 py-2 rounded-md font-medium">
            Become a member → 
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="relative">
        <div className="absolute inset-0"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-8 py-32">
          <div className="max-w-2xl">
            <p className="text-black font-bold mb-4">ABOUT COMPANY</p>
            <h1 className="text-5xl font-bold text-gray mb-6">ABOUT US</h1>
            <p className="text-xl text-gray mb-8">
              We know how large objects will act, but things on a small scale
            </p>
            <button className="bg-blue-700 text-white px-6 py-3 rounded-md font-medium">
              Get Quote Now
            </button>
          </div>
        </div>
        <img 
          src="/abt1.svg" 
          alt="Background" 
          className="w-full h-full object-cover absolute inset-0"
        />
      </div>





     {/* Problems Section with updated layout */}
<div className="max-w-6xl mx-auto px-8 py-20">
  <div className="text-center md:text-left mb-5">
    <p className="text-red-600 font-bold text-base">Problems trying</p>
  </div>

  <div className="flex flex-col md:flex-row justify-between ">
    {/* Sol paragraf */}
    <div className="md:w-1/2">
      <p className="text-black font-bold text-base leading-relaxed">
        Met minim Mollie non desert Alamo est<br />
        sit cliquey dolor do met sent.
      </p>
    </div>

    {/* Sağ paragraf */}
    <div className="md:w-1/2">
      <p className="text-gray-500 text-base font-normal leading-relaxed">
        Problems trying to resolve the conflict between
        the two major realms of<br />
        Classical physics: Newtonian mechanics
      </p>
    </div>
  </div>
</div>







  {/* Previous sections... */}

      {/* Stats Section */}
      <div className="max-w-7xl mx-auto px-8 ">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {/* Stat 1 */}
          <div className="p-6">
            <h3 className="text-4xl font-bold text-gray-900 mb-2">15K</h3>
            <p className="text-gray-600 font-medium">Happy Customers</p>
          </div>
          
          {/* Stat 2 */}
          <div className="p-6">
            <h3 className="text-4xl font-bold text-gray-900 mb-2">150K</h3>
            <p className="text-gray-600 font-medium">Monthly Visitors</p>
          </div>
          
          {/* Stat 3 */}
          <div className="p-6">
            <h3 className="text-4xl font-bold text-gray-900 mb-2">15</h3>
            <p className="text-gray-600 font-medium">Countries Worldwide</p>
          </div>
          
          {/* Stat 4 */}
          <div className="p-6">
            <h3 className="text-4xl font-bold text-gray-900 mb-2">100+</h3>
            <p className="text-gray-600 font-medium">Top Partners</p>
          </div>
        </div>






        
      {/* Video Section */}
      <div className="relative w-full py-20">
        {/* Background Image Container */}
        <div className="relative flex justify-center items-center w-full h-[500px]">
          {/* Background SVG */}
          <img 
            src="/videobg4.svg" 
            alt="Video Background" 
            className="w-full h-full object-cover absolute inset-0 rounded-2xl "
          />
          
          {/* Centered Play Button */}
          <div className="relative z-10 flex justify-center items-center">
            <img 
              src="/videobutton4.svg" 
              alt="Play Button" 
              className="w-20 h-20 cursor-pointer hover:scale-110 transition-transform duration-300"
            />
          </div>
        </div>
      </div>
      </div>






  {/* Team Section */}
      <div className="max-w-7xl mx-auto px-8 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Meet Our Team</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Problems trying to resolve the conflict between<br />
            the two major realms of Classical physics: Newtonian mechanics
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <div key={index} className="text-center">
              <div className="mb-6 flex justify-center">
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="w-full max-w-xs h-auto "
                />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">{member.name}</h3>
              <p className="text-gray-600">{member.profession}</p>
               {/* Sosyal Medya İkonları */}
        <div className="flex justify-center space-x-4">
          {/* Facebook */}
          <a href="#" aria-label="Facebook" className=" hover:text-blue-600 transition">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M22 12a10 10 0 10-11.5 9.9v-7H8v-3h2.5V9a3.5 3.5 0 013.8-3.5h2.2v3h-1.6a1 1 0 00-1 1v2.5h2.8l-.4 3h-2.4v7A10 10 0 0022 12z" />
            </svg>
          </a>

          {/* Instagram */}
          <a href="#" aria-label="Instagram" className=" hover:text-pink-500 transition">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M7 2C4.2 2 2 4.2 2 7v10c0 2.8 2.2 5 5 5h10c2.8 0 5-2.2 5-5V7c0-2.8-2.2-5-5-5H7zm10 2a3 3 0 013 3v10a3 3 0 01-3 3H7a3 3 0 01-3-3V7a3 3 0 013-3h10zm-5 3a5 5 0 100 10 5 5 0 000-10zm0 2a3 3 0 110 6 3 3 0 010-6zm4.5-.8a1.1 1.1 0 11-2.2 0 1.1 1.1 0 012.2 0z"/>
            </svg>
          </a>

          {/* Twitter */}
          <a href="#" aria-label="Twitter" className=" hover:text-sky-400 transition">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M22.46 6c-.77.35-1.6.58-2.46.69a4.3 4.3 0 001.88-2.37 8.6 8.6 0 01-2.72 1.03 4.28 4.28 0 00-7.3 3.9A12.14 12.14 0 013 4.9a4.28 4.28 0 001.33 5.71 4.24 4.24 0 01-1.94-.54v.05a4.28 4.28 0 003.44 4.19 4.28 4.28 0 01-1.93.07 4.28 4.28 0 004 2.98A8.6 8.6 0 012 19.54a12.14 12.14 0 006.56 1.92c7.88 0 12.2-6.53 12.2-12.2 0-.19 0-.39-.01-.58A8.72 8.72 0 0022.46 6z"/>
            </svg>
          </a>
        </div>
            </div>
            
          ))}
        </div>
      </div>





 {/* Companies Section */}
      <div className="max-w-7xl mx-auto px-8 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Big Companies Are Here</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Problems trying to resolve the conflict between<br />
            the two major realms of Classical physics: Newtonian mechanics
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-8 items-center">
          {companies.map((company, index) => (
            <div key={index} className="flex justify-center">
              <img 
                src={company.logo} 
                alt={company.name} 
                className="h-12 object-contain grayscale hover:grayscale-0 transition-all duration-300"
              />
            </div>
          ))}
        </div>
      </div>





{/* Work With Us Section */}
      <div className="relative py-24">
        {/* Background Image */}
        <div className="absolute inset-0 bg-blue-700 z-0">
          <img 
            src="/background7.svg" 
            alt="Background" 
            className="w-full h-full object-cover"
          />
        </div>
        
      {/* Content */}
<div className="relative z-10 max-w-4xl px-8 text-left text-white">
  <h3 className="text-lg font-bold mb-4">WORK WITH US</h3>
  <h2 className="text-4xl md:text-5xl font-bold mb-6">Now Let's grow Yours</h2>
  <p className="text-lg mb-8 max-w-2xl">
    The gradual accumulation of information about atomic and<br />
    small-scale behavior during the first quarter of the 20th
  </p>
  <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-md font-medium transition-colors duration-300">
    Button
  </button>
</div>
      </div>



      




    </div>
  );
};

export default AboutanaPage;
//Altına footer gelecek app.jsxde footerı tekrar ekledim.