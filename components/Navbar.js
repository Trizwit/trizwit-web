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
          Trizwit
        </h2>
        </div>
          
        </div>
        <div className="hidden md:flex  md:mr-2 lg:mr-4">
        
          <ul className="hidden md:flex items-center ">
            <li className="text-black hover:text-blue-500 px-4 font-semibold">
              <Link href="/">Home</Link>
            </li>
            <li className="text-black hover:text-blue-500 px-4 font-semibold">
              <Link href="/#services">Services</Link>
            </li>

            <button
  className="px-4 relative"
  onMouseEnter={handleToggle}
  onMouseLeave={handleToggle}
>
  <li className="text-black hover:text-blue-500 px-4 font-semibold">
    <Link href="/">Products</Link>
  </li>
  {isOpen && (
    <div className="absolute w-72 justify-items-center left-1/2 transform -translate-x-1/2  bg-white px-2 py-0 rounded-md shadow-lg">
      <a
        rel="noopener noreferrer"
        target="_blank"
        href="https://pindown.trizwit.com/"
        className="flex  px-4 py-2 text-gray-800 hover:bg-gray-200 hover:text-blue-500"
      >
        {/* <img src="trizwitlogo.png" alt="Logo" className="block h-4 w-4 md:h-8 md:w-8 mr-2" /> */}
        <div className="flex items-top text-left">
      <img
        src="pinicon.png"
        alt="Image Alt Text"
        className="w-12 h-12 mr-2"
      />
      <div>
      <span>Pindown</span>
      <span className="block text-gray-400">Tokenise and verify certificates</span>
    </div>
    </div>
      </a>


      <a
        rel="noopener noreferrer"
        target="_blank"
        href="https://blockiot.trizwit.com/"
        className="flex  px-4 py-2 text-gray-800 hover:bg-gray-200 hover:text-blue-500"
      >
        <div className="flex items-top text-left">
      <img
        src="blockicon.png"
        alt="Image Alt Text"
        className="w-12 h-12 mr-2"
      />
      <div>
      <span>BlockIoT</span>
      <span className="block text-gray-400">Blockchain-IoT integration simplified</span>
    </div>
    </div>
      </a>
        
      <a
        rel="noopener noreferrer"
        target="_blank"
        href="https://fastnui.trizwit.com/"
        className="flex  px-4 py-2 text-gray-800 hover:bg-gray-200 hover:text-blue-500"
      >
        <div className="flex items-top text-left">
      <img
        src="fastnicon.png"
        alt="Image Alt Text"
        className="w-12 h-12 mr-2"
      />
      <div>
      <span>FASTN UI</span>
      <span className="block text-gray-400">FASTN UI Component library</span>
    </div>
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
      <Link className="block border-b border-zinc-400 py-2 mb-2 hover:text-indigo-500" href="/">
      <span className="block">Home</span>
        </Link>
        </li>

        <li className="border-b border-zinc-400 py-2 mb-2 hover:text-indigo-500 ">
  <Link className="block border-b border-zinc-400 py-2 mb-2 hover:text-indigo-500" href="/#services">
    <span className="block">Services</span>
  </Link>
</li>

        <li className="border-b border-zinc-400 py-2 mb-2 hover:text-indigo-500">
         <Link className="block border-b border-zinc-400 py-2 mb-2 hover:text-indigo-500" href="about">
         <span className="block">About</span>
         </Link>
        </li>

        <li className="border-b border-zinc-400 py-2 mb-2 hover:text-indigo-500">
      <button className='w-full text-left' onClick={toggleDropdown}>Products</button>
      {isDropdownOpen && (
        <ul  className="absolute bg-gray-100 w- text-gray-800 py-2 px-4 mt-2 shadow">
          {/* Dropdown menu items */}
          <li className="border-b w-64  border-zinc-400 py-2 mb-2 hover:text-indigo-500">
          <Link target="_blank" rel="noopener noreferrer" href="https://pindown.trizwit.com/">
    <div className="flex items-center">
      <img
        src="pinicon.png"
        alt="Image Alt Text"
        className="w-6 h-6 mr-2"
      />
      <div>
      <span>Pindown</span>
      <span className="block text-gray-400">Tokenise and verify certificates</span>
    </div>
    </div>
  </Link>
          </li>
          <li className="border-b border-zinc-400 py-2 mb-2 hover:text-indigo-500">
            <Link target="_blank" rel="noopener noreferrer" href="https://blockiot.trizwit.com/">
            <div className="flex items-center">
      <img
        src="blockicon.png"
        alt="Image Alt Text"
        className="w-6 h-6 mr-2"
      />
      <div>
      <span>BlockIoT</span>
      <span className="block text-gray-400">Blockchain-IoT integration simplified</span>
    </div>
    </div>
            </Link>
          </li>
          <li className="border-b border-zinc-400 py-2 mb-2 hover:text-indigo-500">
            <Link target="_blank" rel="noopener noreferrer" href="https://fastnui.trizwit.com/">
            <div className="flex items-center">
      <img
        src="fastnicon.png"
        alt="Image Alt Text"
        className="w-6 h-6 mr-2"
      />
      <div>
      <span>FASTN UI</span>
      <span className="block text-gray-400">FASTN UI Component library</span>
    </div>
    </div>
            </Link>
          </li>
        </ul>
      )}
    </li>
        <li className="border-b border-zinc-400 py-2 mb-2 hover:text-indigo-500">
         <Link href="#contact">Contact</Link>
        </li>
        <div className="flex flex-row my-3  w-full">
          
        </div>
      </ul>
    </div>
  );
};

export default Navbar;
