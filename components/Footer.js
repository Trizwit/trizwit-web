import React from "react";

import { FaLinkedinIn, FaGithub, FaTwitter, FaMedium } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="w-full mt-24 bg-slate-900 text-gray-300 py-y px-2">
      

      <div className="flex flex-col max-w-[1240px] px-2 py-4 mx-auto justify-between sm:flex-row text-center text-gray-500">
      <div className="flex items-center">
      <img src="trizlogo.png" alt="Logo" className="h-8 w-8 md:h-12 md:w-12 ml-2 md:ml-4" />
        <p className="ml-2 md:ml-4 py-4">2022 Trizwit Labs Pvt Ltd. All rights reserved</p>
        </div>
        <div className="flex justify-between sm:w-[300px] pt-4 text-2xl">
          <a href="https://www.linkedin.com/company/trizwit/"  >
            <FaLinkedinIn />
          </a>
          <a href="https://twitter.com/trizwit?s=20&t=P2u10VMBS-FuDIQClE-m3Q"  >
            <FaTwitter />
          </a>
          <a href="https://github.com/Trizwit"  >
            <FaGithub />
          </a>
          <a href="https://medium.com/@trizwit"  >
            <FaMedium />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
