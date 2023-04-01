import React, { useState } from "react";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { HiOutlineMenuAlt1 } from "react-icons/hi";
import Link from "next/link";
import { useRouter } from "next/router";
import { FaLinkedinIn, FaTwitter } from "react-icons/fa";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const router = useRouter();
  const handleClick = () => setNav(!nav);
  return (
    <div className="text-gray-800 font-semibold md:sticky top-0 z-10 body-font backdrop-filter backdrop-blur-lg bg-opacity-30 border-b border-gray-200 shadow-lg ">
      <div className="flex justify-between items-center">
        <div className="flex items-center">
          <h2 className="text-3xl  font-bold ml-4 px-4 py-4 hover:text-indigo-500 text-transparent bg-clip-text bg-gradient-to-r  from-blue-500 to-purple-600">
            Trizwit.
          </h2>
          <ul className="hidden md:flex items-center pl-6">
            <li className="text-black px-4 font-semibold">
              <Link href="/">Home</Link>
            </li>
            <li className="text-black px-4 font-semibold">
              <a href="#services">Services</a>
            </li>
            <li className="text-black px-4 font-semibold">
              <a href="about">About</a>
            </li>
            {/* <li className="text-black px-4 font-semibold">
            <Link href='team' >Team</Link>
            </li> */}
            <li className="text-black px-4 font-semibold">
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </div>
        <div className="hidden md:flex">
          {/* <button className="mx-2 border-2 rounded-full border-indigo-500 text-indigo-500 px-4 py-2 hover:shadow-2xl">
            {"Sign In"}
          </button> */}
          {/* <a href="#contact">
            <button className="mx-2 border-2 rounded-lg  text-white bg-indigo-500 px-4 py-2 hover:shadow-2xl">
              {"Get in Touch"}
            </button>
          </a> */}
          <a href="https://www.linkedin.com/company/trizwit/"  >
            <FaLinkedinIn className="h-8 w-8 mx-4 text-blue-700" />
          </a>
          <a
            href="https://twitter.com/trizwit?s=20&t=P2u10VMBS-FuDIQClE-m3Q"
             
          >
            <FaTwitter className="h-8 w-8 ml-4 mr-6 text-blue-500" />
          </a>
        </div>
        <div className="md:hidden" onClick={handleClick}>
          {!nav ? (
            <HiOutlineMenuAlt1 className="  mx-4 w-8 h-8 text-gray-800 hover:text-indigo-500 " />
          ) : (
            <AiOutlineCloseCircle className=" w-8 mx-4 h-8 text-gray-800 hover:text-indigo-500" />
          )}
        </div>
      </div>
      <ul className={nav ? "flex flex-col w-full md:hidden px-8" : "hidden"}>
        <li className="border-b border-zinc-400 py-2 mb-2 hover:text-indigo-500">
          Home
        </li>
        <li className="border-b border-zinc-400 py-2 mb-2 hover:text-indigo-500">
          Services
        </li>
        <li className="border-b border-zinc-400 py-2 mb-2 hover:text-indigo-500">
          About
        </li>
        <li className="border-b border-zinc-400 py-2 mb-2 hover:text-indigo-500">
          Team
        </li>
        <li className="border-b border-zinc-400 py-2 mb-2 hover:text-indigo-500">
          Contact
        </li>
        <div className="flex flex-row my-3  w-full">
          {/* <a href="https://twitter.com/trizwit?s=20&t=P2u10VMBS-FuDIQClE-m3Q">
            <button className=" border-2 rounded  text-white bg-indigo-500 px-4 py-2 hover:shadow-lg shadow">
              {"Twitter "}
            </button>
          </a> */}
          <a
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
          </a>
        </div>
      </ul>
    </div>
  );
};

export default Navbar;
