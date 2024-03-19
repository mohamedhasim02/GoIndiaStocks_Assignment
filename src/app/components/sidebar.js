"use client"
import React, { useState } from 'react';
import { FaForumbee, FaUserAlt } from 'react-icons/fa';
import { BiSolidRightArrow, BiDollarCircle } from 'react-icons/bi'
import Low from '../components/low';
import Image from 'next/image';

const LinkItems = [
  { name: 'Hello , Users', icon: FaUserAlt },
  { name: 'Disscussion Fourm', icon: FaForumbee },
  { name: 'Market Stories', icon: BiDollarCircle },
  { name: 'Sentiment' },
  { name: 'Market' },
  { name: 'Sector' },
  { name: 'Watchlist' },
  { name: 'Events' },
  { name: 'News/Interview' },
];

export default function SimpleSidebar({ children }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="min-h-screen bg-gray-100 mt-20">

      {/* Desktop Sidebar */}
      <div className={`bg-blue-900 border-r border-gray-200 w-50 fixed h-full ${isSidebarOpen ? '' : 'hidden'}`}>

        {/* Sidebar navigation items */}
        {LinkItems.map((link) => (
          <NavItem key={link.name} icon={link.icon}>
            {link.name}
          </NavItem>
        ))}
      </div>

      {/* Tablet and Mobile Sidebar */}
      <div className={`fixed left-0 top-1/2 py-10 transform -translate-y-1/2 flex items-center bg-blue-900 text-white ${isSidebarOpen ? "ml-60" : ""}`}>
        <button className="focus:outline-none" onClick={toggleSidebar}>
          <BiSolidRightArrow />
        </button>
      </div>

      {/* Content area */}
      <div className={`ml-0  ${isSidebarOpen ? 'md:ml-60' : ''} p-4 md:px-8 lg:px-16 xl:px-24 w-90 `}>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 text-center ">
          <div className="bg-white p-4 shadow-md rounded-lg">
            <Image width={200} height={200} src="https://s3.ap-south-1.amazonaws.com/goindiaconnect/UPLOADS/20230306ad.jpg" alt="Dummy" className="w-full h-auto" />
            <h3 className="text-lg font-semibold mt-2">Aditya Vision Ltd.</h3>
            <p className="text-gray-500">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
          <div className="bg-white p-4 shadow-md rounded-lg">
            <Image width={200} height={200} src="https://s3.ap-south-1.amazonaws.com/goindiaconnect/UPLOADS/D1edit.jpg" alt="Dummy" className="w-full h-auto" />
            <h3 className="text-lg font-semibold mt-2">Anant Raj Ltd.</h3>
            <p className="text-gray-500">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
          <div className="bg-white p-4 shadow-md rounded-lg">
            <Image width={200} height={200} src="https://s3.ap-south-1.amazonaws.com/goindiaconnect/UPLOADS/20230104maninfraconstruct600.png" alt="Dummy" className="w-full h-auto" />
            <h3 className="text-lg font-semibold mt-2">Man InfraConstruction Ltd.</h3>
            <p className="text-gray-500">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
          <div className="bg-white p-4 shadow-md rounded-lg">
            <Image width={200} height={200} src="https://s3.ap-south-1.amazonaws.com/goindiaconnect/UPLOADS/meghmani.png" alt="Dummy" className="w-full h-auto" />
            <h3 className="text-lg font-semibold mt-2">Meghmani Finechem Ltd</h3>
            <p className="text-gray-500">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
          <div className="bg-white p-4 shadow-md rounded-lg">
            <Image width={200} height={200} src="https://s3.ap-south-1.amazonaws.com/goindiaconnect/UPLOADS/nathbio.jpg" alt="Dummy" className="w-full h-auto" />
            <h3 className="text-lg font-semibold mt-2">Nath Bio-Genes (India) Ltd.</h3>
            <p className="text-gray-500">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
          <div className="bg-white p-4 shadow-md rounded-lg">
            <Image width={200} height={200} src="https://s3.ap-south-1.amazonaws.com/goindiaconnect/UPLOADS/20230110unparts.png" alt="Dummy" className="w-full h-auto" />
            <h3 className="text-lg font-semibold mt-2">Uniparts India Ltd.</h3>
            <p className="text-gray-500">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
          <div className="bg-white p-4 shadow-md rounded-lg">
            <Image width={200} height={200} src="https://s3.ap-south-1.amazonaws.com/goindiaconnect/UPLOADS/dtpatten1.png" alt="Dummy" className="w-full h-auto" />
            <h3 className="text-lg font-semibold mt-2">Data Patterns (India) Ltd.</h3>
            <p className="text-gray-500">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
          <div className="bg-white p-4 shadow-md rounded-lg">
            <Image width={200} height={200} src="https://s3.ap-south-1.amazonaws.com/goindiaconnect/UPLOADS/fino.png" alt="Dummy" className="w-full h-auto" />
            <h3 className="text-lg font-semibold mt-2">Fino Payments Bank Ltd.</h3>
            <p className="text-gray-500">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
          <div className="bg-white p-4 shadow-md rounded-lg">
            <Image width={200} height={200} src="https://s3.ap-south-1.amazonaws.com/goindiaconnect/UPLOADS/infibeamavenues.png" alt="Dummy" className="w-full h-auto" />
            <h3 className="text-lg font-semibold mt-2">Infibeam Avenues Ltd.</h3>
            <p className="text-gray-500">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
          <div className="bg-white p-4 shadow-md rounded-lg">
            <Image width={200} height={200} src="https://s3.ap-south-1.amazonaws.com/goindiaconnect/UPLOADS/godawari.jpg" alt="Dummy" className="w-full h-auto" />
            <h3 className="text-lg font-semibold mt-2">Godawari Power & Ispat Ltd.</h3>
            <p className="text-gray-500">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
          <div className="bg-white p-4 shadow-md rounded-lg">
            <Image width={200} height={200} src="https://s3.ap-south-1.amazonaws.com/goindiaconnect/UPLOADS/lx2.png" alt="Dummy" className="w-full h-auto" />
            <h3 className="text-lg font-semibold mt-2">Laxmi Organic Industries Ltd.</h3>
            <p className="text-gray-500">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
          <div className="bg-white p-4 shadow-md rounded-lg">
            <Image width={200} height={50} src="https://s3.ap-south-1.amazonaws.com/goindiaconnect/UPLOADS/infibeamavenues.png" alt="Dummy" className="w-full h-auto" />
            <h3 className="text-lg font-semibold mt-2">Infibeam Avenues Ltd.</h3>
            <p className="text-gray-500">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
          <div className="bg-white p-4 shadow-md rounded-lg">
            <Image width={200} height={200} src="https://s3.ap-south-1.amazonaws.com/goindiaconnect/UPLOADS/20230306ad.jpg" alt="Dummy" className="w-full h-auto" />
            <h3 className="text-lg font-semibold mt-2">Aditya Vision Ltd.</h3>
            <p className="text-gray-500">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
          <div className="bg-white p-4 shadow-md rounded-lg">
            <Image width={200} height={200} src="https://s3.ap-south-1.amazonaws.com/goindiaconnect/UPLOADS/D1edit.jpg" alt="Dummy" className="w-full h-auto" />
            <h3 className="text-lg font-semibold mt-2">Anant Raj Ltd.</h3>
            <p className="text-gray-500">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
          <div className="bg-white p-4 shadow-md rounded-lg">
            <Image width={200} height={200} src="https://s3.ap-south-1.amazonaws.com/goindiaconnect/UPLOADS/20230104maninfraconstruct600.png" alt="Dummy" className="w-full h-auto" />
            <h3 className="text-lg font-semibold mt-2">Man InfraConstruction Ltd.</h3>
            <p className="text-gray-500">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
          <div className="bg-white p-4 shadow-md rounded-lg">
            <Image width={200} height={200} src="https://s3.ap-south-1.amazonaws.com/goindiaconnect/UPLOADS/meghmani.png" alt="Dummy" className="w-full h-auto" />
            <h3 className="text-lg font-semibold mt-2">Meghmani Finechem Ltd</h3>
            <p className="text-gray-500">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
          <div className="bg-white p-4 shadow-md rounded-lg">
            <Image width={200} height={200} src="https://s3.ap-south-1.amazonaws.com/goindiaconnect/UPLOADS/infibeamavenues.png" alt="Dummy" className="w-full h-auto" />
            <h3 className="text-lg font-semibold mt-2">Infibeam Avenues Ltd.</h3>
            <p className="text-gray-500">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
          <div className="bg-white p-4 shadow-md rounded-lg">
            <Image width={200} height={200} src="https://s3.ap-south-1.amazonaws.com/goindiaconnect/UPLOADS/godawari.jpg" alt="Dummy" className="w-full h-auto" />
            <h3 className="text-lg font-semibold mt-2">Godawari Power & Ispat Ltd.</h3>
            <p className="text-gray-500">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
          <div className="bg-white p-4 shadow-md rounded-lg">
            <Image width={200} height={200} src="https://s3.ap-south-1.amazonaws.com/goindiaconnect/UPLOADS/lx2.png" alt="Dummy" className="w-full h-auto" />
            <h3 className="text-lg font-semibold mt-2">Laxmi Organic Industries Ltd.</h3>
            <p className="text-gray-500">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
          <div className="bg-white p-4 shadow-md rounded-lg">
            <Image width={200} height={50} src="https://s3.ap-south-1.amazonaws.com/goindiaconnect/UPLOADS/infibeamavenues.png" alt="Dummy" className="w-full h-auto" />
            <h3 className="text-lg font-semibold mt-2">Infibeam Avenues Ltd.</h3>
            <p className="text-gray-500">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
        </div>
      </div>
      <Low />
    </div>
  );
}

function NavItem({ icon: Icon, children }) {
  return (
    <a
      href="#"
      className="flex items-center px-4 mx-4 py-4 text-white hover:bg-gray-400 hover:text-white rounded-lg transition-colors duration-200"
    >
      {Icon && <Icon className="w-6 h-6 mr-4" />}
      {children}
    </a>
  );
}

