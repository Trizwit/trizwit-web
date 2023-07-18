import React from "react";

const Services = () => {
  return (
    <div id="services">
      <section className="text-gray-600 body-font md:mt-4   mt-48">
        <div className="container px-5 py-24 mx-auto max-w-[1200px] ">
          <div className="flex flex-wrap w-full mb-20 flex-col items-center text-center">
            <h1 className="sm:text-5xl text-5xl font-bold title-font mb-2 text-indigo-500">
              Our Blockchain Consulting Process{" "}
            </h1>
            <p className=" w-full text-2xl font-medium leading-relaxed text-gray-500">
            We offer comprehensive solutions that cater to your every need, encompassing the entire journey from ideation and 
            development to scaling your business.
            </p>
          </div>
          <div className="flex  flex-wrap m-4">

            <div className="xl:w-1/3 md:w-1/2 p-4 ">
              <div className="h-full border border-gray-200 shadow-xl  p-6 rounded-lg">
              <div className="w-full h-36 inline-flex items-center justify-center align-center text-indigo-500 mb-4">
      
                <img
                src="id.png"
                alt="Image Alt Text"
                className="w-40 h-40 mr-2"
                  />
    
                  
                </div>
                <h2 className="text-lg text-indigo-500 text-center sm:text-left font-medium title-font mb-2">
                  Ideation
                </h2>
                <p className="leading-relaxed text-base text-center sm:text-left">
                  We discuss the feasibility of your blockchain project with our
                  blockchain developers and define the business goals and
                  workflow for your system.
                </p>
              </div>
            </div>

            <div className="xl:w-1/3 md:w-1/2 p-4">
              <div className="h-full border border-gray-200 shadow-xl p-6 rounded-lg">
              <div className="w-full h-36 inline-flex items-center justify-center align-center text-indigo-500 mb-4">
      
              <img
              src="asess.png"
              alt="Image Alt Text"
              className="w-40 h-40 mr-2"
                />

        
              </div>
                <h2 className="text-lg text-indigo-500 text-center sm:text-left font-medium title-font mb-2">
                  Assessment
                </h2>
                <p className="leading-relaxed text-base text-center sm:text-left">
                  We analyze your existing solution and discover if it can be
                  migrated to the blockchain.
                </p>
              </div>
            </div>

            <div className="xl:w-1/3 md:w-1/2 p-4">
              <div className="h-full border border-gray-200 shadow-xl p-6 rounded-lg">
              <div className="w-full h-36 inline-flex items-center justify-center align-center text-indigo-500 mb-4">
      
                <img
                src="techn.png"
                alt="Image Alt Text"
                className="w-40 h-40 mr-2"
                  />


                </div>

                <h2 className="text-lg  text-indigo-500 text-center sm:text-left font-medium title-font mb-2">
                  Technical Component Definition
                </h2>
                <p className="leading-relaxed text-base text-center sm:text-left">
                  Our blockchain consulting team identifies the right blockchain
                  platform based on your business requirements and the type of
                  blockchain.
                </p>
              </div>
            </div>

            <div className="xl:w-1/3 md:w-1/2 p-4">
              <div className="h-full border border-gray-200 shadow-xl p-6 rounded-lg">
              <div className="w-full h-36 inline-flex items-center justify-center align-center text-indigo-500 mb-4">
      
      <img
      src="poc.png"
      alt="Image Alt Text"
      className="w-40 h-40 mr-2"
        />


      </div>

                <h2 className="text-lg text-indigo-500 text-center sm:text-left font-medium title-font mb-2">
                  PoC
                </h2>
                <p className="leading-relaxed text-base text-center sm:text-left">
                  We create a framework and prototype to identify the use cases
                  for the business with minimum viable features.
                </p>
              </div>
            </div>

            <div className="xl:w-1/3 md:w-1/2 p-4">
              <div className="h-full border border-gray-200 shadow-xl p-6 rounded-lg">
              <div className="w-full h-36 inline-flex items-center justify-center align-center text-indigo-500 mb-4">
      
      <img
      src="integration.png"
      alt="Image Alt Text"
      className="w-40 h-40 mr-2"
        />


      </div>

                <h2 className="text-lg text-indigo-500 text-center sm:text-left font-medium title-font mb-2">
                  Integration
                </h2>
                <p className="leading-relaxed text-base text-center sm:text-left">
                  Our Blockchain Consultants help clients identify if the
                  blockchain technology can be integrated into their business
                  operations and environment.
                </p>
              </div>
            </div>

            <div className="xl:w-1/3 md:w-1/2 p-4">
              <div className="h-full border border-gray-200 shadow-xl p-6 rounded-lg">
                <div className="w-full h-36 inline-flex items-center justify-center align-center text-indigo-500 mb-4">
      
              <img
              src="dev.png"
              alt="Image Alt Text"
              className="w-40 h-40 mr-2"
                />

        
              </div>

                <h2 className="text-lg text-indigo-500 text-center sm:text-left font-medium title-font mb-2">
                  Development
                </h2>
                <p className="leading-relaxed text-base text-center sm:text-left">
                  Once you are ready to start blockchain technology development,
                  we help you build the blockchain product, from UI/UX to full
                  front-end and back-end implementation.
                </p>
              </div>
            </div>

          </div>
          {/* <button className="flex mx-auto mt-16 text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">
            Button
          </button> */}
        </div>
      </section>
    </div>
  );
};

export default Services;
