import { useState } from "react";
import {IoLogoDesignernews} from "react-icons/io5";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gradient-to-r from-purple-500 to-white shadow-lg">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between md:justify-center">
          <div className="flex space-x-4">
            <div>
              <a href="/" className="flex items-center py-5 px-2 text-slate-600 mr-20">
                <span className="text-3xl font-bold"><IoLogoDesignernews /></span>
              </a>
            </div>
          </div>
          <div className="hidden text-lg font-bold md:flex items-center space-x-1">
            <a href="#" className="py-5 px-3 text-slate-600">
              Home
            </a>
            <a href="#" className="py-5 px-3 text-slate-600">
              How It Works
            </a>
            <a href="#" className="py-5 px-3 text-slate-600">
              What We Do
            </a>
            <a href="#" className="py-5 px-3 text-slate-600">
              Features & Services
            </a>
            <a href="#" className="py-5 px-3 text-slate-600">
              Contact
            </a>
          </div>
          <div className="md:hidden flex items-center">
            <button
              className="mobile-menu-button"
              onClick={() => setIsOpen(!isOpen)}
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden">
          <a href="#" className="block py-2 px-4 text-sm hover:bg-gray-200">
            Home
          </a>
          <a
            href="#"
            className="block py-2 px-4 text-sm hover:bg-gray-200"
          >
            How It Works
          </a>
          <a
            href="#"
            className="block py-2 px-4 text-sm hover:bg-gray-200"
          >
            What We Do
          </a>
          <a
            href="#"
            className="block py-2 px-4 text-sm hover:bg-gray-200"
          >
            Features & Services
          </a>
          <a
            href="#"
            className="block py-2 px-4 text-sm hover:bg-gray-200"
          >
            Contact
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
