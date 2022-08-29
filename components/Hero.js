import React from "react";
import bgImg from "../assets/images/hero_mushroom.png";
import Image from "next/image";
import { SiHiveBlockchain } from "react-icons/si";
import { BiNetworkChart } from "react-icons/bi";
import { TbAugmentedReality } from "react-icons/tb";
import { GiBrain } from "react-icons/gi";

const Hero = () => {
  return (
    <div name="home" className="w-full h-screen  flex flex-col justify-between">
      <div className="grid md:grid-cols-2 max-w-[1240px] mx-auto mt-6">
        <div className="flex flex-col justify-center md:items-start w-full px-2 py-8">
          {/* <p className="text-2xl">The WEB3 COMPANY</p> */}
          <h1 className="py-3 text-5xl text-indigo-400 md:text-6xl font-bold">
            WEB 3 Development and Consulting
          </h1>
          <p className="text-2xl">
            Blockchain | DeFi | Metaverse | Web3 Gaming | NFTs | DAOs | Tooling
          </p>
          <button className="py-3 px-6 bg-indigo-600 rounded text-white sm:w-[60%] my-4 ">
            Our Services
          </button>
        </div>
        <div>
          <Image className="w-full" src={bgImg} alt="/" />
        </div>
        <div
          className="absolute flex flex-col pt-4 pb-6 md:min-w-[760px] bottom-[2%]
            mx-1 md:left-1/2 transform md:-translate-x-1/2 bg-white
            border border-slate-300 rounded-xl text-center shadow-xl"
        >
          <p className="text-3xl font-semibold text-indigo-600 mb-4">
            Our Domains
          </p>
          <div className="flex justify-between flex-wrap px-4">
            <p className="flex px-4 py-2 text-slate-500 text-lg">
              <SiHiveBlockchain className="mr-2 h-7 w-7 text-indigo-600" /> Web
              3.0
            </p>
            <p className="flex px-4 py-2 text-slate-500 text-lg">
              <TbAugmentedReality className="mr-2 h-8 w-8 text-indigo-600" />{" "}
              Metaverse
            </p>
            <p className="flex px-4 py-2 text-slate-500">
              <GiBrain className="mr-2 h-8 w-8 text-indigo-600" /> AI
            </p>
            <p className="flex px-4 py-2 text-slate-500">
              <BiNetworkChart className="mr-2 h-8 w-8 text-indigo-600" /> IoT
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
