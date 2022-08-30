import React, { useState } from "react";
import { SiHiveBlockchain } from "react-icons/si";
// import { MenuIcon, XIcon } from "@heroicons/react/20/solid";

const MenuIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="w-6 h-6"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
      />
    </svg>
  );
};
const XIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="w-6 h-6"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M4.5 19.5l15-15m-15 0l15 15"
      />
    </svg>
  );
};
const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);
  return (
    <div className="text-gray-800 font-semibold md:sticky top-0 z-10 body-font backdrop-filter backdrop-blur-lg bg-opacity-30 border-b border-gray-200 shadow-lg ">
      <div className="flex justify-between items-center">
        <div className="flex items-center ">
          <h2 className="text-3xl  font-bold ml-4 px-4 py-4 hover:text-indigo-500 text-transparent bg-clip-text bg-gradient-to-r  from-blue-500 to-purple-600">
            Trizwit.
          </h2>
          <ul className="hidden md:flex items-center pl-6">
            <li className="text-black px-4 font-semibold">Home</li>
            <li className="text-black px-4 font-semibold">Services</li>
            <li className="text-black px-4 font-semibold">About</li>
            <li className="text-black px-4 font-semibold">Team</li>
            <li className="text-black px-4 font-semibold">Contact</li>
          </ul>
        </div>
        <div className="hidden md:flex">
          {/* <button className="mx-2 border-2 rounded-full border-indigo-500 text-indigo-500 px-4 py-2 hover:shadow-2xl">
            {"Sign In"}
          </button> */}
          <button className="mx-2 border-2 rounded-lg  text-white bg-indigo-500 px-4 py-2 hover:shadow-2xl">
            {"Talk with Us"}
          </button>
        </div>
        <div className="md:hidden" onClick={handleClick}>
          {!nav ? (
            <MenuIcon className=" w-8 mx-4 text-gray-800 hover:indigo-500 " />
          ) : (
            <XIcon className=" w-8 mx-4 text-gray-800 hover:text-indigo-500" />
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
        <div className="flex flex-col my-3  w-full">
          {/* <button className=" border-2 rounded border-indigo-500 text-indigo-500 px-4 py-2 mb-4 hover:shadow-lg">
            {"Sign In"}
          </button> */}
          <button className=" border-2 rounded  text-white bg-indigo-500 px-4 py-2 hover:shadow-lg shadow">
            {"Talk with Us "}
          </button>
        </div>
      </ul>
    </div>
  );
};

export default Navbar;
