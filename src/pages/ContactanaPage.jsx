import React from "react";
import { Twitter, Facebook, Instagram, Linkedin } from "lucide-react";

const ContactanaPage = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation Bar */}
      <nav className="flex justify-between items-center px-8 py-4">
        <div className="text-2xl font-bold">Bandage</div>
        <div className="flex space-x-8">
          <a href="#" className="text-gray-900 font-medium">Home</a>
          <a href="#" className="text-gray-900 font-medium">Product</a>
          <a href="#" className="text-gray-900 font-medium">Pricing</a>
          <a href="#" className="text-gray-900 font-medium">Contact</a>
        </div>
        <div className="flex items-center space-x-4">
          <a href="#" className="text-blue-700 font-medium">Login</a>
          <button className="bg-blue-700 text-white px-4 py-2 rounded-md font-medium">
            Become a member
          </button>
        </div>
      </nav>

      {/* Contact Section */}
      <div className="bg-white ">
        <div className="max-w-7xl mx-auto px-8 flex items-center justify-between gap-12">

          {/* Sol içerik */}
          <div className="w-1/2">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">CONTACT US</h2>
            <h1 className="text-5xl font-bold text-gray-900 mb-6">Get in touch today!</h1>
            <p className="text-xl text-gray-700 mb-8">
              We know how large objects will act, but things on a small scale
            </p>

            <div className="space-y-4 text-gray-800">
              <div className="font-medium">Phone : +451 215 215</div>
              <div className="font-medium">Fax : +451 215 215</div>
{/* Sosyal Medya İkonları */}
<div className="flex space-x-4 mt-4 text-black">
  <a href="#" aria-label="Twitter" className="text-black">
    <Twitter className="w-6 h-6" />
  </a>
  <a href="#" aria-label="Facebook" className="text-black">
    <Facebook className="w-6 h-6" />
  </a>
  <a href="#" aria-label="Instagram" className="text-black">
    <Instagram className="w-6 h-6" />
  </a>
  <a href="#" aria-label="LinkedIn" className="text-black">
    <Linkedin className="w-6 h-6" />
  </a>
</div>
            </div>
          </div>

          {/* Sağ görsel */}
          <div className="w-1/2 flex justify-center">
            <img
              src="/contact1.svg"
              alt="Contact Illustration"
              className="w-full h-auto object-contain"
            />
          </div>
        </div>
      </div>







       {/* Previous sections... */}

      {/* Visit Our Office Section */}
      <div className="max-w-7xl mx-auto px-8 py-20">
        <div className="text-center mb-16">
          <h2 className="text-l  text-gray-600 mb-4">VISIT OUR OFFICE</h2>
          <h3 className="text-3xl font-bold text-black-600">
            We help small businesses<br />
            with big ideas
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Contact Card 1 */}
          <div className="rounded-lg p-8 text-center hover:shadow-lg transition-shadow">
            <div className="flex justify-center mb-4">
              <img src="/phone2.svg" alt="Phone" className="w-12 h-12" />
            </div>
            <p className="text-gray-600 mb-2">georgia.young@example.com</p>
            <p className="text-gray-600 mb-2">georgia.young@example.com</p>
            <p className="text-gray-900 font-bold mb-3">Get Support</p>
            <button className="text-blue-700 font-bold border-blue-700">Submit Request</button>
          </div>

          {/* Contact Card 2 */}
          <div className="rounded-lg p-8 text-center hover:shadow-lg transition-shadow">
            <div className="flex justify-center mb-4">
              <img src="/location2.svg" alt="Location" className="w-12 h-12" />
            </div>
            <p className="text-gray-600 mb-2">georgia.young@example.com</p>
            <p className="text-gray-600 mb-2">georgia.young@example.com</p>
            <p className="text-gray-900 font-bold mb-3">Get Support</p>
            <button className="text-blue-700 font-bold border-blue-700">Submit Request</button>
          </div>

          {/* Contact Card 3 */}
         <div className="rounded-lg p-8 text-center hover:shadow-lg transition-shadow">
            <div className="flex justify-center mb-4">
              <img src="/mail2.svg" alt="Mail" className="w-12 h-12" />
            </div>
            <p className="text-gray-600 mb-2">georgia.young@example.com</p>
            <p className="text-gray-600 mb-2">georgia.young@example.com</p>
            <p className="text-gray-900 font-bold mb-3">Get Support</p>
            <button className="text-blue-700 font-bold border-blue-700">Submit Request</button>
          </div>
        </div>
    </div>





 {/* Previous sections... */}

      {/* CTA Section */}
      
      <div className="max-w-4xl mx-auto px-8 text-center text-black -mt-10">
  <div className="flex justify-center mb-6">
    <img src="/ok3.svg" alt="Checkmark" className="w-16 h-16" />
  </div>
  <h2 className="text-sm md:text-base font-bold mb-4">WE CAN'T WAIT TO MEET YOU</h2>
  <h3 className="text-5xl font-medium mb-8">Let's Talk</h3>
  <button className="bg-blue-700 text-white hover:bg-blue-800 px-8 py-3 rounded-md font-bold text-lg transition-colors duration-300">
    Try it free now
  </button>
</div>


      



    </div>

    
  );
};

export default ContactanaPage;



//Altına footer gelecek app.jsxde footerı tekrar ekledim.