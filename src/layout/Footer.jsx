import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-white pt-16 pb-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Logo and Social Icons */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 md:mb-0">Bandage</h2>
          <div className="flex space-x-4">
            <a href="#" className="text-gray-500 hover:text-blue-600">
              <FaFacebookF size={20} />
            </a>
            <a href="#" className="text-gray-500 hover:text-blue-400">
              <FaTwitter size={20} />
            </a>
            <a href="#" className="text-gray-500 hover:text-pink-600">
              <FaInstagram size={20} />
            </a>
            <a href="#" className="text-gray-500 hover:text-blue-700">
              <FaLinkedinIn size={20} />
            </a>
          </div>
        </div>

        {/* Footer columns */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-12">
          {/* Company Info */}
          <div>
            <h3 className="text-lg font-bold text-gray-900 mb-6">Company Info</h3>
            <ul className="space-y-4">
              <li><a href="#" className="text-gray-600 hover:text-gray-900">About Us</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-900">Carrier</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-900">We are hiring</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-900">Blog</a></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-lg font-bold text-gray-900 mb-6">Legal</h3>
            <ul className="space-y-4">
              <li><a href="#" className="text-gray-600 hover:text-gray-900">About Us</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-900">Carrier</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-900">We are hiring</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-900">Blog</a></li>
            </ul>
          </div>

          {/* Features */}
          <div>
            <h3 className="text-lg font-bold text-gray-900 mb-6">Features</h3>
            <ul className="space-y-4">
              <li><a href="#" className="text-gray-600 hover:text-gray-900">Business Marketing</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-900">User Analytic</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-900">Live Chat</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-900">Unlimited Support</a></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-lg font-bold text-gray-900 mb-6">Resources</h3>
            <ul className="space-y-4">
              <li><a href="#" className="text-gray-600 hover:text-gray-900">iOS & Android</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-900">Watch a Demo</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-900">Customers</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-900">API</a></li>
            </ul>
          </div>

          {/* Get In Touch */}
          <div>
            <h3 className="text-lg font-bold text-gray-900 mb-6">Get In Touch</h3>
            <div className="space-y-4">
              <div className="relative">
                <input 
                  type="email" 
                  placeholder="Your Email" 
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <button className="absolute right-0 top-0 h-full px-4 bg-blue-500 text-white rounded-r-md hover:bg-blue-600 transition-colors">
                  Subscribe
                </button>
              </div>
              <p className="text-gray-600 text-sm">Love Imp sum dolor Amit</p>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-200 pt-8">
          <p className="text-center text-gray-600">
            Made With Love By Finland All Right Reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;