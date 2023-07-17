import React from "react";

const Clients = () => {
  return (
    <section className="text-gray-600 body-font">
      <div className="container text-center px-5 mx-auto max-w-[1240px]">
        <h2 className="text-5xl font-bold text-indigo-500">Trusted By</h2>
        <div className="flex flex-wrap justify-center mt-12">
          <div className="w-48 h-48 bg-white rounded-full flex items-center justify-center">
            <img
              className="max-h-48 max-w-48 object-contain"
              src="zind.png"
              alt="Zindot"
            />
          </div>
          <div className="w-48 h-48 bg-white rounded-full flex items-center justify-center ml-12">
            <img
              className="max-h-48 max-w-48 object-contain"
              src="fastn.png"
              alt="Fastn"
            />
          </div>
          <div className="w-48 h-48 bg-white rounded-full flex items-center justify-center ml-12">
            <img
              className="max-h-48 max-w-48 object-contain"
              src="zerow.png"
              alt="Zerowatt"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Clients;
