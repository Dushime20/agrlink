import React from 'react';
import { Link } from 'react-router-dom';
import { AiFillDashboard } from "react-icons/ai";
import { FaCar } from "react-icons/fa";
import { FaLuggageCart } from "react-icons/fa";
import { FaUsers } from "react-icons/fa";
import { TbMessageReportFilled } from "react-icons/tb";
import { MdContactSupport } from "react-icons/md";
import { IoIosLogOut } from "react-icons/io";
import { FaProductHunt } from "react-icons/fa6";

const SideBar = () => {
  return (
    <div className="h-screen w-64 text-white bg-[#032d15]
     flex flex-col shadow-2xl">
      <div className="p-4 text-2xl font-bold text-gray-100">
        Dashboard
      </div>
      <nav className="mt-3">
        <ul>
          <li className="">
            <Link to="/dashboard" className="flex items-center p-4 transition-colors duration-200">
            <span><AiFillDashboard/></span>
              <span className="ml-2">Dashboard Home</span>

            </Link>
          </li>
          <li className="">
            <Link to="/dashboard/manage-cars" className="flex items-center p-4 transition-colors duration-200">
            <span><FaProductHunt/></span>
              <span className="ml-2">Manage Product</span>
            </Link>
          </li>
          <li className="mb-2">
            <Link to="/dashboard/view-bookings" className="flex items-center p-4 transition-colors duration-200">
            <span><FaLuggageCart/></span>
              <span className="ml-2">View Ordering</span>
            </Link>
          </li>
          <li className="mb-2">
            <Link to="/dashboard/user-settings" className="flex items-center p-4 transition-colors duration-200">
            <span><FaUsers/></span>
              <span className="ml-2">User Settings</span>
            </Link>
          </li>
          <li className="mb-2">
            <Link to="/dashboard/reports" className="flex items-center p-4 transition-colors duration-200">
            <span><TbMessageReportFilled/></span>
              <span className="ml-2">Reports</span>
            </Link>
          </li>
          <li className="mb-2">
            <Link to="/dashboard/support" className="flex items-center p-4 transition-colors duration-200">
            <span><MdContactSupport/></span>
              <span className="ml-2">Support</span>
            </Link>
          </li>
         
        </ul>
        
      </nav>
      <div className="mt-8 bg-[#97c0a3] p-4 rounded-lg flex items-center">
           <div> <Link to="/" className="flex items-center  transition-colors duration-200">
            <span><IoIosLogOut /></span>
              <span className="ml-2">Logout</span>
            </Link></div>
          </div>
    </div>
  );
};

export default SideBar;
