import React from "react";
import bgImg from "../assets/images/hero_bg.png";
import Image from "next/image";
import { SiHiveBlockchain } from "react-icons/si";
import { BiNetworkChart } from "react-icons/bi";
import { TbAugmentedReality } from "react-icons/tb";
import { MdApps } from "react-icons/md";

const Hero = () => {
  return (
    <div
  id="hero"
  name="home"
  className="w-full h-screen flex flex-col justify-between"
>
  <div className="grid md:grid-cols-2 max-w-[1240px] mx-auto mt-6 px-4">
    <div className="flex flex-col justify-center md:items-start w-full px-2 py-8">
      {/* <p className="text-2xl">The WEB3 COMPANY</p> */}
      <h1 className="py-3 text-5xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600">
        WEB 3.0 Development And Consultancy
      </h1>
      <p className="text-2xl text-slate-800">
        Blockchain | DeFi | Web3 Gaming | NFTs | DAOs | Tooling
      </p>
      <a href="#services">
        <button className="py-3 px-6 bg-indigo-600 rounded text-2xl text-white my-4">
          Our Services
        </button>
      </a>
    </div>
    <div>
      <Image className="w-full" src={bgImg} alt="/" />
    </div>
  </div>

  <div className="flex justify-center items-center flex-col pt-4 pb-6 md:min-w-[480px] bottom-[2%] mx-auto bg-white border border-slate-300 rounded-xl text-center shadow-xl mt-24">
    <p className="text-3xl font-semibold text-indigo-600 mb-4">Our Domains</p>
    <div className="grid grid-cols-2 lg:grid-cols-2 justify-items-center px-2">
      <p className="flex px-4 py-2 text-slate-500 text-lg">
        <SiHiveBlockchain className="mr-2 h-7 w-7 text-indigo-600" />
        Blockchain
      </p>

      <p className="flex px-4 py-2 text-slate-500 text-lg">
        <BiNetworkChart className="mr-2 h-8 w-8 text-indigo-600" /> IoT
      </p>
    </div>
  </div>
</div>

  );
};

export default Hero;
