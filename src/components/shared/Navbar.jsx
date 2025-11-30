import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';


const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeItem, setActiveItem] = useState('Home');

  const navigate = useNavigate();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleItemClick = (item) => {
    setActiveItem(item);
    if (item == "Home") {
      navigate("/");
    } else {
      navigate(`/${item.toLowerCase()}`);
    }
    setIsMenuOpen(false);
  };

  return (
    <nav className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <div className="flex items-center">
              <a href="/">
                <img className='h-14 w-auto hover:scale-105' src="logo.png" alt="" />
              </a>
            </div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-10">
            <a
              href="#"
              className={`relative font-medium group ${activeItem === 'Home' ? 'text-primary' : 'text-gray-700'}`}
              onClick={() => handleItemClick('Home')}
            >
              Home
              <span className={`absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full ${activeItem === 'Home' ? 'w-full' : ''}`}></span>
            </a>
            <a
              href="#"
              className={`relative font-medium group ${activeItem === 'Policy' ? 'text-primary' : 'text-gray-700'}`}
              onClick={() => handleItemClick('Policy')}
            >
              Policy
              <span className={`absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full ${activeItem === 'Policy' ? 'w-full' : ''}`}></span>
            </a>
            <a
              href="#"
              className={`relative font-medium group ${activeItem === 'Terms-And-Conditions' ? 'text-primary' : 'text-gray-700'}`}
              onClick={() => handleItemClick('Terms-And-Conditions')}
            >
              Terms & Conditions
              <span className={`absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full ${activeItem === 'Terms' ? 'w-full' : ''}`}></span>
            </a>
            <a
              href="#"
              className={`relative font-medium group ${activeItem === 'Blogs' ? 'text-primary' : 'text-gray-700'}`}
              onClick={() => handleItemClick('Blogs')}
            >
              Blogs
              <span className={`absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full ${activeItem === 'Blogs' ? 'w-full' : ''}`}></span>
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-primary focus:outline-none transition-colors duration-300"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {!isMenuOpen ? (
                <svg className="block h-7 w-7" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              ) : (
                <svg className="block h-7 w-7" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden transition-all duration-500 ease-in-out overflow-hidden ${isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
        <div className="px-2 pt-2 pb-4 space-y-2 sm:px-3 bg-white shadow-lg border-t border-gray-100">
          <a
            href="#"
            className={`block px-4 py-3 rounded-lg text-base font-medium transition-all duration-300 ${activeItem === 'Home' ? 'text-primary bg-teal-50 transform -translate-x-1' : 'text-gray-700 hover:text-primary hover:bg-teal-50'}`}
            onClick={() => handleItemClick('Home')}
          >
            Home
          </a>
          <a
            href="#"
            className={`block px-4 py-3 rounded-lg text-base font-medium transition-all duration-300 ${activeItem === 'Policy' ? 'text-primary bg-teal-50 transform -translate-x-1' : 'text-gray-700 hover:text-primary hover:bg-teal-50'}`}
            onClick={() => handleItemClick('Policy')}
          >
            Policy
          </a>
          <a
            href="#"
            className={`block px-4 py-3 rounded-lg text-base font-medium transition-all duration-300 ${activeItem === 'Terms' ? 'text-primary bg-teal-50 transform -translate-x-1' : 'text-gray-700 hover:text-primary hover:bg-teal-50'}`}
            onClick={() => handleItemClick('Terms')}
          >
            Terms & Conditions
          </a>
          <a
            href="#"
            className={`block px-4 py-3 rounded-lg text-base font-medium transition-all duration-300 ${activeItem === 'Blogs' ? 'text-primary bg-teal-50 transform -translate-x-1' : 'text-gray-700 hover:text-primary hover:bg-teal-50'}`}
            onClick={() => handleItemClick('Blogs')}
          >
            Blogs
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;