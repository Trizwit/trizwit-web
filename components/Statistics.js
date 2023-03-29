import React from "react";

const Statistics = () => {
  return (
    <div name="about" className="w-full my-32">
      <div className="max-w-[1240px] mx-auto">
        <div className="text-center">
          <h2 className="text-5xl font-bold">
            Trusted by companies across the world
          </h2>
          <p className="text-3xl py-6 text-gray-500">
            The best in class solutions designed to meet your requirements.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-1 px-2 text-center">
          <div className="border py-8 rounded-xl shadow-xl">
            <p className="text-6xl font-bold text-indigo-600">12</p>
            <p className="text-gray-400 mt-2">Project</p>
          </div>
          <div className="border py-8 rounded-xl shadow-xl">
            <p className="text-6xl font-bold text-indigo-600">3</p>
            <p className="text-gray-400 mt-2">Partner Companies</p>
          </div>
          <div className="border py-8 rounded-xl shadow-xl">
            <p className="text-6xl font-bold text-indigo-600">20+</p>
            <p className="text-gray-400 mt-2">Smart Contracts On-Chain</p>
          </div>
        </div>
        <div className="text-center mt-14">
          <h2 className="text-5xl font-bold">
            Our clients
          </h2>
          
        </div>

      </div>
    </div>
  );
};

export default Statistics;
