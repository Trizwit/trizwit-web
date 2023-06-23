import React from "react";
const Clients = () => {
    return  <section className="text-gray-600 body-font">
     <div className="container px-5 mx-auto max-w-[1240px]">
       <div className="flex flex-col text-center w-full mb-20">
         {/* <h1 className="py-3 text-5xl  md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-500  to-purple-600">Our Clients</h1>
         <p className="lg:w-2/3 mx-auto leading-relaxed text-base  text-slate-800">Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical gentrify, subway tile poke farm-to-table. Franzen you probably haven't heard of them.</p> */}
        
    <div className="bg-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/*<h2 className="text-center text-lg font-semibold leading-8 text-gray-900">
          Trusted by the world’s most innovative teams
        </h2>*/}
        <div className="mx-auto mt-10 grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-5">
          <img
            className="col-span-2 max-h-48 max-w-48 w-full object-contain lg:col-span-1"
            src="zindot.png"
            alt="Transistor"
            
           
          />
          <img
            className="col-span-2 max-h-48 max-w-48 w-full object-contain lg:col-span-1"
            src="fastn-logo.png"
            alt="Reform"
            width={158}
            height={48}
          />
          <img
            className="col-span-2 max-h-48 max-w-48 w-full object-contain lg:col-span-1"
            src="zerowatt.png"
            alt="Tuple"
            width={158}
            height={48}
          />
          <img
            className="col-span-2 max-h-12 w-full object-contain sm:col-start-2 lg:col-span-1"
            src="https://tailwindui.com/img/logos/158x48/savvycal-logo-gray-900.svg"
            alt="SavvyCal"
            width={158}
            height={48}
          />
          <img
            className="col-span-2 col-start-2 max-h-12 w-full object-contain sm:col-start-auto lg:col-span-1"
            src="https://tailwindui.com/img/logos/158x48/statamic-logo-gray-900.svg"
            alt="Statamic"
            width={158}
            height={48}
          />
        </div>
      </div>
    </div>

       </div>
       
     </div>
   </section>
 
 
 };
 
 
 export default Clients;
