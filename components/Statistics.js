import React from "react";

const Statistics = () => {
  return (
    <div name="about" className="my-32 mx-2">
      <div className="max-w-[1240px] mx-auto">
        <div className="text-center">
          <h3 className="text-5xl text-indigo-500 font-bold">
            Trusted by companies across the world
          </h3>
          <p className="text-xl md:text-3xl py-6 text-gray-500">
          Working with best companies in Web3
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-1 px-2 text-center">
          <div className="border py-8 rounded-xl shadow-xl">
            <p className="text-6xl font-bold text-indigo-600">18</p>
            <p className="text-gray-400 mt-2">Project</p>
          </div>
          <div className="border py-8 rounded-xl shadow-xl">
            <p className="text-6xl font-bold text-indigo-600">6</p>
            <p className="text-gray-400 mt-2">Partner Companies</p>
          </div>
          <div className="border py-8 rounded-xl shadow-xl">
            <p className="text-6xl font-bold text-indigo-600">50+</p>
            <p className="text-gray-400 mt-2">Smart Contracts On-Chain</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Statistics;
