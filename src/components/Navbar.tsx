import React, { useState } from 'react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="p-8 md:p-12">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <span className="text-gray-200 text-xl font-bold">Nick Martin</span>
        </div>
        <div className="hidden md:block">
          <ul className="flex space-x-4">
            <li><a href="#" className="text-gray-200 hover:text-gray-300">Home</a></li>
            <li><a href="#" className="text-gray-200 hover:text-gray-300">About</a></li>
            <li><a href="#" className="text-gray-200 hover:text-gray-300">Services</a></li>
            <li><a href="#" className="text-gray-200 hover:text-gray-300">Contact</a></li>
          </ul>
        </div>
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-gray-200 hover:text-gray-300 focus:outline-none focus:text-gray-300"
          >
            <svg viewBox="0 0 20 20" fill="currentColor" className="menu w-6 h-6">
              <path
                fillRule="evenodd"
                d="M2 4.5C2 4.22386 2.22386 4 2.5 4H17.5C17.7761 4 18 4.22386 18 4.5C18 4.77614 17.7761 5 17.5 5H2.5C2.22386 5 2 4.77614 2 4.5ZM2 9.5C2 9.22386 2.22386 9 2.5 9H17.5C17.7761 9 18 9.22386 18 9.5C18 9.77614 17.7761 10 17.5 10H2.5C2.22386 10 2 9.77614 2 9.5ZM2.5 14C2.22386 14 2 14.2239 2 14.5C2 14.7761 2.22386 15 2.5 15H17.5C17.7761 15 18 14.7761 18 14.5C18 14.2239 17.7761 14 17.5 14H2.5Z"
                clipRule="evenodd"
              ></path>
            </svg>
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden mt-2">
          <ul className="flex flex-col space-y-2">
            <li><a href="#" className="text-gray-200 hover:text-gray-300">Home</a></li>
            <li><a href="#" className="text-gray-200 hover:text-gray-300">About</a></li>
            <li><a href="#" className="text-gray-200 hover:text-gray-300">Services</a></li>
            <li><a href="#" className="text-gray-200 hover:text-gray-300">Contact</a></li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
