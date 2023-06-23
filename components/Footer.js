import React from "react";

import { FaLinkedinIn, FaGithub, FaTwitter, FaMedium } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="w-full mt-24 bg-gray-100 drop-shadow-lg text-gray-300 py-y px-2">
      

      <div className="flex flex-col max-w-[1240px] px-2 py-4 mx-auto justify-between sm:flex-row text-center text-gray-500">
      <div className="flex items-center">
      <img src="trizwitlogo.png" alt="Logo" className="h-8 w-8 md:h-12 md:w-12 ml-2 md:ml-4" />
        <p className="ml-2 md:ml-4 py-4">2022 Trizwit Labs Pvt. Ltd. All rights reserved</p>
        </div>
        <div className="flex justify-between sm:w-[300px] pt-4 text-2xl">
          <a href="https://www.linkedin.com/company/trizwit/" className="hover:text-[#0277B5]" >
            <FaLinkedinIn />
          </a>
          <a href="https://twitter.com/trizwit?s=20&t=P2u10VMBS-FuDIQClE-m3Q" className="hover:text-[#1B9DF0]"  >
            <FaTwitter />
          </a>
          <a href="https://github.com/Trizwit" className="hover:text-black" >
            <FaGithub />
          </a>
          <a href="https://medium.com/@trizwit" className="hover:text-black" >
            <FaMedium />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
