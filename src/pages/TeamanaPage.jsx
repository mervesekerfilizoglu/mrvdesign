import React from "react";
import { Twitter, Facebook, Instagram, Linkedin } from "lucide-react";
 const teamMembers = [
    { id: 1, image: "/team2photo1.png" },
    { id: 2, image: "/team2photo2.png"},
    { id: 3, image: "/team2photo3.png"},
    { id: 4, image: "/team2photo4.png"},
    { id: 5, image: "/team2photo5.png"}
  ];//2








  
   const ourTeam = [
    { image: "/images/person1.png", name: "Username", profession: "Profession" },
    { image: "/images/person2.png", name: "Username", profession: "Profession" },
    { image: "/images/person3.png", name: "Username", profession: "Profession" },
    {  image: "/images/person4.png", name: "Username", profession: "Profession" },
    {  image: "/images/person5.png", name: "Username", profession: "Profession" },
    {  image: "/images/person6.png", name: "Username", profession: "Profession"  },
    {  image: "/images/person7.png", name: "Username", profession: "Profession" },
    {  image: "/images/person8.png", name: "Username", profession: "Profession" },
    {  image: "/images/person9.png", name: "Username", profession: "Profession" },
 
  ];//3




const TeamanaPage = () => {
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
        <a href="#" className="text-blue-700 font-medium">Login</a>
      </nav>

      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-8 py-10 text-center">
        <h2 className="text-gray-500 text-lg mb-4">WHAT WE DO</h2>
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          Innovation tailored for you
        </h1>
        <div className="text-center text-base">
          <span className="text-black font-medium">Home</span>
          <span className="text-gray-500 mx-2">{">"}</span>
          <span className="text-gray-500 font-medium">Team</span>
        </div>
      </div>








     <div className="max-w-7xl mx-auto px-8">
  <div className="grid grid-cols-1 lg:grid-cols-2 gap-3">
    {/* Soldaki büyük resim (id=1) */}
    {teamMembers
      .filter(member => member.id === 1)
      .map(member => (
        <div key={member.id} className="w-full h-full">
          <img
            src={member.image}
            alt={member.name}
            className="w-full h-full object-cover  shadow-lg"
            style={{ minHeight: "500px" }}
          />
        </div>
      ))}

    {/* Sağdaki küçük 4 resim */}
    <div className="grid grid-cols-2 gap-x-3 gap-y-0 ">
      {teamMembers
        .filter(member => member.id !== 1)
        .map(member => (
          <div
            key={member.id}
            className="bg-white  overflow-hidden  transition-transform duration-300 hover:scale-105  "
          >
            <img
              src={member.image}
              alt={member.name}
              className="w-full h-48 object-cover  "
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold text-gray-800  ">
                {member.name}
              </h3>
              <p className="text-gray-600 mt-1 ">{member.role}</p>
            </div>
          </div>
        ))}
    </div>
  </div>
</div>








{/* OurTeam Section */}
<div className="max-w-7xl mx-auto px-8 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Meet Our Team</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {ourTeam.map((member, index) => (
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











      {/* Previous sections... */}

      {/* CTA Section */}
      
      <div className="max-w-4xl mx-auto px-8 text-center text-black -mt-10">
  <h2 className="text-4xl md:text-4xl font-bold mb-4"> Start your 14 days free trial </h2>
  <h3 className="text-xl font-medium mb-8 text-gray-600">
  Met minim Mollie non desert Alamo est sit cliquey dolor <br />
  do met sent.RELIT official consequent.
</h3>
  <button className="bg-blue-700 text-white hover:bg-blue-800 px-8 py-3 rounded-md font-bold text-lg transition-colors duration-300">
    Try it free now
  </button>
  {/* Sosyal Medya İkonları */}
  <div className="flex justify-center space-x-4 mt-6">
    <a href="#" aria-label="Twitter" className="text-blue-700">
      <Twitter className="w-6 h-6" />
    </a>
    <a href="#" aria-label="Facebook" className="text-blue-700">
      <Facebook className="w-6 h-6" />
    </a>
    <a href="#" aria-label="Instagram" className="text-black">
      <Instagram className="w-6 h-6" />
    </a>
    <a href="#" aria-label="LinkedIn" className="text-blue-700">
      <Linkedin className="w-6 h-6" />
    </a>
  </div>
</div>



  </div>




  );
};


export default TeamanaPage;


//Altına footer gelecek app.jsxde footerı tekrar ekledim.