import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="w-full bg-[#0B111E] text-[#E8D5C4] sticky top-0 z-50 shadow-md border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          
          {/* Logo */}
          <div className="flex-shrink-0 font-bold text-xl tracking-wider uppercase transition-colors duration-300 hover:text-white">
            <Link to="/">My Journey</Link>
          </div>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex space-x-8">
            <Link 
              to="/journey" 
              className="relative text-md font-medium px-3 py-2 transition-colors duration-300 group hover:text-white"
            >
              Travel Journey
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#E8D5C4] transition-all duration-300 group-hover:w-full"></span>
            </Link>
            
            <Link 
              to="/professional-journey" 
              className="relative text-md font-medium px-3 py-2 transition-colors duration-300 group hover:text-white"
            >
              Professional Journey
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#E8D5C4] transition-all duration-300 group-hover:w-full"></span>
            </Link>

            <Link 
              to="/stories" 
              className="relative text-md font-medium px-3 py-2 transition-colors duration-300 group hover:text-white"
            >
              Stories
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#E8D5C4] transition-all duration-300 group-hover:w-full"></span>
            </Link>

           

            <Link 
              to="/profile" 
              className="relative text-md font-medium px-3 py-2 transition-colors duration-300 group hover:text-white"
            >
              Profile
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#E8D5C4] transition-all duration-300 group-hover:w-full"></span>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-[#E8D5C4] hover:text-white hover:bg-gray-800 focus:outline-none transition-colors duration-300"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className={`h-6 w-6 transform transition-transform duration-300 ${isOpen ? 'rotate-90' : ''}`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown Menu (Now correctly using Link components) */}
      <div
        className={`md:hidden transition-all duration-300 ease-in-out ${
          isOpen ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'
        }`}
      >
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-[#0F172A] border-t border-gray-800">
          <Link
            to="/journey"
            onClick={() => setIsOpen(false)}
            className="block px-3 py-2 rounded-md text-base font-medium transition-all duration-300 hover:bg-gray-800 hover:text-white"
          >
            Travel Journey
          </Link>
          
          <Link
            to="/professional-journey"
            onClick={() => setIsOpen(false)}
            className="block px-3 py-2 rounded-md text-base font-medium transition-all duration-300 hover:bg-gray-800 hover:text-white"
          >
            Professional Journey
          </Link>

          <Link
            to="/professional-journey"
            onClick={() => setIsOpen(false)}
            className="block px-3 py-2 rounded-md text-base font-medium transition-all duration-300 hover:bg-gray-800 hover:text-white"
          >
            Profile
          </Link>

          
        </div>
      </div>
    </nav>
  );
};

export default Navbar;