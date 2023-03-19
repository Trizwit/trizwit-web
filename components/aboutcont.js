import React, { useState } from "react";
import Image from "next/image";

const Aboutcont = () =>{

 return <section className="text-gray-600 body-font overflow-hidden">
  <div className="container px-5 py-24 mx-auto">
    <div className="-my-8 divide-y-2 divide-gray-100">
      <div className="py-8 flex flex-wrap md:flex-nowrap">
        <div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
          
        
        </div>
        <div className="md:flex-grow">
        <h2 className="py-3 text-3xl  md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-500  to-purple-600 ">VISION</h2>
          {/* <h2 className="text-2xl font-medium text-gray-900 title-font mb-2">Bitters hashtag waistcoat fashion axe chia unicorn</h2> */}
          <p className="text-xl font-medium text-gray-900 title-font mb-2">To become a leading Web3 consultancy company that empowers individuals, businesses, and organizations to harness the full potential of decentralized technologies and build a more open, secure, and equitable internet.</p>
          {/* <a className="text-indigo-500 inline-flex items-center mt-4">Learn More */}
            {/* <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
              <path d="M5 12h14"></path>
              <path d="M12 5l7 7-7 7"></path>
            </svg>
          </a> */}
        </div>
      </div>

      <div className="py-8 flex flex-wrap md:flex-nowrap">
        <div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
      
        </div>
        <div className="md:flex-grow">
        <h1 className="py-3 text-3xl  md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-500  to-purple-600">MISSION</h1>
          <ol  className="text-xl font-medium text-gray-900 title-font mb-2 list-decimal">
            <li>
            To provide expert advice, guidance, and support to clients seeking to integrate Web3 technologies into their operations, products, and services. 
            </li>
            <li>
            To foster the development of innovative and impactful Web3 solutions that address real-world challenges and opportunities. 
            </li>
            <li>
            To contribute to the growth and evolution of the Web3 ecosystem by collaborating with other stakeholders and sharing knowledge and resources.  
            </li>
            <li>
            To educate and raise awareness about the benefits and implications of decentralized technologies and promote their adoption and responsible use.   
            </li>
            <li>
            To uphold ethical and transparent practices and help build a more decentralized, democratic, and inclusive digital economy.    
            </li>
          </ol>
          
        </div>
      </div>
     
    </div>
  </div>
</section>
}

export default Aboutcont;