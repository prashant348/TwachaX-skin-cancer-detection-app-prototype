
import React, { useState } from 'react';
import { Menu, X, Shield } from 'lucide-react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Shield className="h-8 w-8 text-blue-600 mr-2" />
            <span className="text-2xl font-bold text-gray-800">TwachaX</span>
          </div>

          {/* Desktop Buttons */}
          <div className="hidden md:flex space-x-4">
            <NavLink to={"/signin"} className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-medium transition duration-300 transform hover:scale-105">
              Sign In
            </NavLink>
            <NavLink to={"/signup"} className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-6 py-2 rounded-lg font-medium transition duration-300 transform hover:scale-105">
              Sign Up
            </NavLink>
            <NavLink to={"/about"} className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-6 py-2 rounded-lg font-medium transition duration-300 transform hover:scale-105">
              About
            </NavLink>

          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-600 hover:text-gray-800"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t">
              <NavLink to={"/signin"} className="block w-full text-left bg-blue-600 hover:bg-blue-700 text-white px-3 py-2 rounded-md font-medium">
                Sign In
              </NavLink>
              <NavLink to={"/signup"} className="block w-full text-left bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-3 py-2 rounded-md font-medium">
                Sign Up
              </NavLink>
              <NavLink to={"/about"} className="block w-full text-left bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-3 py-2 rounded-md font-medium">
                About
              </NavLink>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;