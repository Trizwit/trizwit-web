import React from "react";

import { FaLinkedinIn, FaGithub, FaTwitter, FaLink } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="w-full mt-24 bg-slate-900 text-gray-300 py-y px-2">
      <div className="max-w-[1240px] mx-auto grid grid-cols-2 md:grid-cols-6 border-b-2 border-gray-600 py-8">
        <div>
          <h6 className="font-bold uppercase pt-2">Solutions</h6>
          <ul>
            <li className="py-1">Web3</li>
            <li className="py-1">Blockchain</li>
            <li className="py-1">AI</li>
            <li className="py-1">Metaverse</li>
            <li className="py-1">IoT</li>
          </ul>
        </div>
        <div>
          <h6 className="font-bold uppercase pt-2">Support</h6>
          <ul>
            <li className="py-1">Pricing</li>
            <li className="py-1">Technical</li>
            <li className="py-1">Get a Quote</li>
          </ul>
        </div>
        <div>
          <h6 className="font-bold uppercase pt-2">Company</h6>
          <ul>
            <li className="py-1">About</li>
            <li className="py-1">Blog</li>
            <li className="py-1">Careers</li>
          </ul>
        </div>
        <div>
          <h6 className="font-bold uppercase pt-2">Legal</h6>
          <ul>
            <li className="py-1">Privacy</li>
            <li className="py-1">Terms</li>
            <li className="py-1">Policies</li>
            <li className="py-1">Conditions</li>
          </ul>
        </div>
        <div className="col-span-2 pt-8 md:pt-2">
          <p className="font-bold uppercase">Our 24/7 Support</p>
          <p className="py-4">
            Contact us to design custom solutions or know more
          </p>
          <form className="flex flex-col sm:flex-row">
            <input
              className="w-full p-2 mr-4 rounded-md mb-4"
              type="email"
              placeholder="Enter email.."
            />
            <button className="p-2 mb-4 rounded bg-indigo-500 text-white">
              Contact
            </button>
          </form>
        </div>
      </div>

      <div className="flex flex-col max-w-[1240px] px-2 py-4 mx-auto justify-between sm:flex-row text-center text-gray-500">
        <p className="py-4">2022 Trizwit. All rights reserved</p>
        <div className="flex justify-between sm:w-[300px] pt-4 text-2xl">
          <a href="https://www.linkedin.com/company/trizwit/">
            <FaLinkedinIn />
          </a>
          <a href="https://twitter.com/trizwit?s=20&t=P2u10VMBS-FuDIQClE-m3Q">
            <FaTwitter />
          </a>
          <a href="https://github.com/Trizwit">
            <FaGithub />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
