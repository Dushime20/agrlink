import React from 'react';
import boy from "../../assets/boy.png"
const Header = () => {
  return (
    <header className="text-gray-800 bg-white  py-2 px-6 flex items-center justify-between w-full shadow-2xl">
      {/* Logo or Title */}
      <div className="text-xl font-bold text-green-600 flex-shrink-0">
      AGRILINK Rwanda
      </div>

      {/* Search Bar */}
      <div className="flex-grow mx-4">
        <input
          type="text"
          placeholder="Search..."
          className="w-full px-4 py-2 rounded-full bg-[#7bc28e] text-white focus:outline-none focus:ring-2 focus:ring-green-500"
        />
      </div>

      {/* User Actions */}
      <div className="flex items-center space-x-4 ">
        {/* Notifications Icon */}
        <button className="relative p-2 rounded-full focus:outline-none bg-[#0a9728]">
          <span className="sr-only">View notifications</span>
          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.157V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C8.67 6.165 7 8.388 7 11v3.157c0 .448-.18.882-.595 1.438L5 17h5m5 0v1a3 3 0 11-6 0v-1m6 0H9"></path>
          </svg>
          <span className="absolute top-0 right-0 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-red-100 bg-red-600 rounded-full">3</span>
        </button>

        {/* User Profile */}
        <div className="relative">
          <button className="flex items-center p-2 rounded-full hover:bg-[#033b0f] focus:outline-none">
            <span className="sr-only">Open user menu</span>
            <img
              className="w-8 h-8 rounded-full"
              src={boy}
              alt="User Avatar"
            />
          </button>
          
        </div>
      </div>
    </header>
  );
};

export default Header;
