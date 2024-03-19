"use client"
import React from 'react';
import { BiUserCircle } from "react-icons/bi";


const Navbar = () => {

  return (
    <nav className="bg-white fixed top-0 left-0  w-full z-50 w-100" >
      <div className="mx-auto px-8 py-4 flex items-center justify-between">
        {/* Navbar Logo */}
        <div className="flex items-center">
          <img className="h-12 w-15 p-2" src="https://www.goindiastocks.com/Content/assets/images/logewithname.png" alt="Logo" />
        </div>

        <input
          className="border border-gray-300 rounded-md w-80 py-2 px-4 focus:outline-none focus:border-blue-400"
          type="text"
          placeholder="Search"
        />

        <div className="hidden md:flex md:items-center">
          <button className="text-black ml-4">
            Contact us
          </button>

          <button className="text-black ml-4 border border-black py-2 px-2">
            Sign Up
          </button>
          <button className="text-black ml-4 border border-black py-2 px-2">Login</button>
        </div>

        <div className="md:hidden">
          <BiUserCircle className='w-8 h-8' />
        </div>
      </div>
    </nav>

  );
};

export default Navbar;
