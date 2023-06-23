import React, { useState, useEffect, useRef } from 'react';
import { AiOutlineCloseCircle } from "react-icons/ai";
import { HiOutlineMenuAlt1 } from "react-icons/hi";
import Link from "next/link";
import { useRouter } from "next/router";
import { FaLinkedinIn, FaTwitter } from "react-icons/fa";




const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsDropdownOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleClickOutside);

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };
  const [nav, setNav] = useState(false);
  const router = useRouter();
  const handleClick = () => setNav(!nav);
  return (
    <div className="text-gray-800 font-semibold md:sticky top-0 z-10 body-font backdrop-filter backdrop-blur-lg bg-opacity-30 border-b border-gray-200 shadow-lg ">
      <div className="flex justify-between items-center">
        <div className="flex items-center">
          <div className="flex items-center">
        <img src="trizwitlogo.png" alt="Logo" className="h-12 w-12 md:h-16 md:w-16 ml-2 md:ml-4" />
        <h2 className="text-3xl font-bold ml-0  px-4 py-4 hover:text-indigo-500 text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600">
          Trizwit.
        </h2>
        </div>
          
        </div>
        <div className="hidden md:flex  md:mr-4 lg:mr-24">
        
          <ul className="hidden md:flex items-center ">
            <li className="text-black hover:text-blue-500 px-4 font-semibold">
              <Link href="/">Home</Link>
            </li>
            <li className="text-black hover:text-blue-500 px-4 font-semibold">
              <Link href="#services">Services</Link>
            </li>

            <button
  className="px-4 relative"
  onMouseEnter={handleToggle}
  onMouseLeave={handleToggle}
>
  <li className="text-black hover:text-blue-500 px-4 font-semibold">
    <Link href="about">Products</Link>
  </li>
  {isOpen && (
    <div className="absolute w-64 justify-items-center left-1/2 transform -translate-x-1/2  bg-white px-2 py-0 rounded-md shadow-lg">
      <a
        target="_blank"
        href="https://pindown.trizwit.com/"
        className="flex  px-4 py-2 text-gray-800 hover:bg-gray-200 hover:text-blue-500"
      >
        {/* <img src="trizwitlogo.png" alt="Logo" className="block h-4 w-4 md:h-8 md:w-8 mr-2" /> */}
        <div className="justify-items-center text-center">
          <span className="block">Pindown</span>
          <span className="block text-sm text-gray-500">
            Tokenise and verify certificates
          </span>
        </div>
      </a>
      <a
        target="_blank"
        href="https://blockiot.trizwit.com/"
        className="flex  px-4 py-2 text-gray-800 hover:bg-gray-200 hover:text-blue-500"
      >
        {/* <img src="trizwitlogo.png" alt="Logo" className="block h-4 w-4 md:h-8 md:w-8 mr-2" /> */}
        <div className="justify-items-center text-center" >
          <span className="block">BlockIoT</span>
          <span className="block text-sm text-gray-500">
            Blockchain-IoT integration simplified
          </span>
        </div>
      </a>

      <a
        target="_blank"
        href="https://fastnui.trizwit.com/"
        className="flex  px-4 py-2 text-gray-800 hover:bg-gray-200 hover:text-blue-500"
      >
        {/* <img src="trizwitlogo.png" alt="Logo" className="block h-4 w-4 md:h-8 md:w-8 mr-2" /> */}
        <div className="justify-items-center text-center" >
          <span className="block">FASTN UI</span>
          <span className="block text-sm text-gray-500">
          FASTN UI Component library
          </span>
        </div>
      </a>

      
    </div>
  )}
</button>


            <li className="text-black hover:text-blue-500 px-4 font-semibold">
              <Link href="about">About</Link>
            </li>

            
            

            <li className="text-black hover:text-blue-500 px-4 font-semibold">
              <Link href="#contact">Contact</Link>
            </li>
          </ul>
         
        </div>
        <div className="md:hidden" onClick={handleClick}>
          {!nav ? (
            <HiOutlineMenuAlt1 className="  mx-4 w-8 h-8 text-gray-800 hover:text-indigo-500 " />
          ) : (
            <AiOutlineCloseCircle className=" w-8 mx-4 h-8 text-gray-800 hover:text-indigo-500" />
          )}
        </div>
      </div>
      <ul ref={dropdownRef} className={nav ? "flex flex-col w-full md:hidden px-8" : "hidden"}>
        <li className="border-b border-zinc-400 py-2 mb-2 hover:text-indigo-500">
          <Link href="/">Home</Link>
        </li>
        <li className="border-b border-zinc-400 py-2 mb-2 hover:text-indigo-500">
           <Link href="#services">Services</Link>
        </li>
        <li className="border-b border-zinc-400 py-2 mb-2 hover:text-indigo-500">
         <Link href="about">About</Link>
        </li>
        <li className="border-b border-zinc-400 py-2 mb-2 hover:text-indigo-500">
      <button onClick={toggleDropdown}>Products</button>
      {isDropdownOpen && (
        <ul  className="absolute bg-white text-gray-800 py-2 px-4 mt-2 shadow">
          {/* Dropdown menu items */}
          <li className="border-b border-zinc-400 py-2 mb-2 hover:text-indigo-500">
            <Link target="_blank" href="https://pindown.trizwit.com/">Pindown</Link>
          </li>
          <li className="border-b border-zinc-400 py-2 mb-2 hover:text-indigo-500">
            <Link target="_blank" href="https://blockiot.trizwit.com/">BlockIoT</Link>
          </li>
          <li className="border-b border-zinc-400 py-2 mb-2 hover:text-indigo-500">
            <Link target="_blank" href="https://fastnui.trizwit.com/">FASTN UI</Link>
          </li>
        </ul>
      )}
    </li>
        <li className="border-b border-zinc-400 py-2 mb-2 hover:text-indigo-500">
         <Link href="#contact">Contact</Link>
        </li>
        <div className="flex flex-row my-3  w-full">
          {/* <a href="https://twitter.com/trizwit?s=20&t=P2u10VMBS-FuDIQClE-m3Q">
            <button className=" border-2 rounded  text-white bg-indigo-500 px-4 py-2 hover:shadow-lg shadow">
              {"Twitter "}
            </button>
          </a> */}
          {/* <a
            href="https://www.linkedin.com/company/trizwit/"
             
            className="mx-4 h-6 w-6 text-blue-700"
          >
            <FaLinkedinIn className="h-6 w-6"/>
          </a>
          <a
            href="https://twitter.com/trizwit?s=20&t=P2u10VMBS-FuDIQClE-m3Q"
             
            className="mx-4 h-6 w-6 text-blue-500"
          >
            <FaTwitter className="h-6 w-6" />
          </a> */}
        </div>
      </ul>
    </div>
  );
};

export default Navbar;
