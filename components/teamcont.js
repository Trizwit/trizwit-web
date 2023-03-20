import React, { useState } from "react";
import man1 from "../assets/images/man.png";
import man2 from "../assets/images/man2.png";
import man3 from "../assets/images/man3.png";
import man4 from "../assets/images/man4.png";
import { FaLinkedinIn, FaGithub, FaTwitter, FaMedium } from "react-icons/fa";
import Image from "next/image";


const Teamcont = () => {
   return  <section className="text-gray-600 body-font">
    <div className="container px-5 py-24 mx-auto">
      <div className="flex flex-col text-center w-full mb-20">
        <h1 className="py-3 text-5xl  md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-500  to-purple-600">OUR TEAM</h1>
        {/* <p className="lg:w-2/3 mx-auto leading-relaxed text-base  text-slate-800">Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical gentrify, subway tile poke farm-to-table. Franzen you probably haven't heard of them.</p> */}
      </div>
      <div className="flex flex-wrap -m-4">
        <div className="px-32 py-12 lg:w-1/2 ">
          <div className="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
          <Image className="w-full" src={man1} alt="/" />
            <div className="flex-grow sm:pl-8">
              <h2 className="title-font font-medium text-lg text-gray-900">Able Varghese</h2>
              <h3 className="text-gray-500 mb-1">Co-founder</h3> 
              <h3 className="text-gray-500 mb-3">Devops Engineer</h3> 
              {/* <p className="mb-4">DIY tote bag drinking vinegar cronut adaptogen squid fanny pack vaporware.</p> */}
              <span className="inline-flex ">
                <a className="text-gray-500 sm:text-2xl"href="https://www.linkedin.com/in/ablevargheseme/" target="_blank">
                <FaLinkedinIn />
                </a>
                <a className="ml-3 text-gray-500 sm:text-2xl" href="https://twitter.com/ablevargheseme" target="_blank">
                <FaTwitter/>
                </a>
                <a className="ml-3 text-gray-500 sm:text-2xl" href="https://github.com/ablevargheseme" target="_blank">
                <FaGithub/>
                </a>
              </span>
            </div>
          </div>
        </div>

        <div className="px-32 py-12 lg:w-1/2">
          <div className="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
            <Image alt="team" className="flex-shrink-0 rounded-lg w-48 h-48 object-cover object-center sm:mb-0 mb-4" src={man3} />
            <div className="flex-grow sm:pl-8">
              <h2 className="title-font font-medium text-lg text-gray-900">AswinRaj K</h2>
              <h3 className="text-gray-500 mb-1">Co-founder</h3> 
              <h3 className="text-gray-500 mb-3">Full Stack Developer</h3>
              {/* <p className="mb-4">DIY tote bag drinking vinegar cronut adaptogen squid fanny pack vaporware.</p> */}
              <span className="inline-flex ">
                <a className="text-gray-500 sm:text-2xl" href="https://www.linkedin.com/in/aswinrajkailath/" target="_blank">
                <FaLinkedinIn />
                </a>
                <a className="ml-3 text-gray-500 sm:text-2xl" href="https://twitter.com/aswinrajkailath" target="_blank">
                <FaTwitter/>
                </a>
                <a className="ml-3 text-gray-500 sm:text-2xl" href="https://github.com/ARK-ASWINRAJ/" target="_blank">
                <FaGithub/>
                </a>
              </span>
            </div>
          </div>
        </div>

        <div className="px-32 py-12 lg:w-1/2">
          <div className="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
          <Image className="w-full" src={man2} alt="/" />
            <div className="flex-grow sm:pl-8">
              <h2 className="title-font font-medium text-lg text-gray-900">Athul A Kumar</h2>
              <h3 className="text-gray-500 mb-1">Co-founder</h3> 
              <h3 className="text-gray-500 mb-3">Front-End Developer</h3>
              {/* <p className="mb-4">DIY tote bag drinking vinegar cronut adaptogen squid fanny pack vaporware.</p> */}
              <span className="inline-flex ">
                <a href="https://www.linkedin.com/in/athulakumar/" className="text-gray-500 sm:text-2xl " target="_blank">
                <FaLinkedinIn />
                </a>
                <a className="ml-3 text-gray-500 sm:text-2xl" href="https://twitter.com/AthulAKumar8" target="_blank">
                <FaTwitter/>    
                </a>
                <a className="ml-3 text-gray-500 sm:text-2xl" href="https://github.com/AthulA10" target="_blank">
                <FaGithub/>  
                </a>
              </span>
            </div>
          </div>
        </div>

        <div className="px-32 py-12 lg:w-1/2">
          <div className="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
          <Image className="w-full" src={man4} alt="/" /> 
            <div className="flex-grow sm:pl-8">
              <h2 className="title-font font-medium text-lg text-gray-900">Binil V Jacob</h2>
              <h3 className="text-gray-500 mb-1">Co-founder</h3> 
              <h3 className="text-gray-500 mb-3">Smart Contract Developer</h3>
              {/* <p className="mb-4">DIY tote bag drinking vinegar cronut adaptogen squid fanny pack vaporware.</p> */}
              <span className="inline-flex ">
                <a className="text-gray-500 sm:text-2xl" href="https://www.linkedin.com/in/binilvjacob" target="_blank">
                <FaLinkedinIn />
                </a>
                <a className="ml-3 text-gray-500 sm:text-2xl" href="https://twitter.com/the_bvj" target="_blank">
                <FaTwitter/>
                </a>
                <a className="ml-3 text-gray-500 sm:text-2xl" href="https://github.com/binilvjacob" target="_blank">
                <FaGithub/>
                </a>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>


};


export default Teamcont;