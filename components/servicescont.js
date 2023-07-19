import React, { useState } from "react";
import Image from "next/image";

const Servicescont = () =>{
   return <section className="text-gray-600 body-font">
    <div className="grid grid-cols-1 md:grid-cols-2 mx-auto md:mx-12">
    <div class="flex  items-center justify-center h-screen">
  <div class="w-[550px] h-[550px] p-8 py-4 bg-gray-200 opacity-80  rounded-full text-center">

  <p className="text-4xl md:text-7xl text-gray-700 font-extrabold px-8  mt-6 py-5">
    Innvoation <span className="font-bold text-gray-700 m-2 text-xl md:text-2xl">Ethical</span>
  </p>
  <p className="text-lg md:text-xl text-gray-600 font-extrabold py-2">
    Flexibility{" "}
    <span className="font-bold text-gray-700 m-4 text-3xl md:text-4xl">Adaptability</span>{" "}
    <span className="font-bold text-gray-500 m-4 text-2xl md:text-3xl">Integrity</span>
  </p>
  <p className="text-3xl md:text-5xl text-gray-400 font-bold py-4">
    Client-Centric<span className="font-extrabold text-gray-600 m-4 text-sm md:text-2xl">Expertise</span>
  </p>
  <p className="text-sm md:text-2xl text-lg text-gray-600 font-extrabold ">
    Creativity{" "}
    <span className="font-bold text-gray-500 m-4 text-base text-4xl md:text-7xl">Quality</span>
  </p>
</div>
</div>

  <div className=" p-2 md:p-8  py-16 ml-auto md:ml-32 hidden md:block">
  <img
        // src="ideation.png"
        src="desktop.png"
        alt="Image Alt Text"
        className="w-full h-96 object-cover mx-auto mt-32"
      />
  </div>
</div>
   

   <div className="container mx-auto flex px-5 py-16 items-center justify-center flex-col">
   <h2 className="text-5xl font-bold text-center pb-4 text-indigo-500">Smart Contract Development</h2>
   <img
        src="smartcontra.png"
        alt="Image Alt Text"
        className="w-96 h-96 mr-2"
      />
    <div className="sm:text-left text-center lg:w-2/3 w-full">
      
      
     
       <p className="mb-6 leading-relaxed text-2xl">
       We specialize in creating robust and secure smart contracts on various blockchain platforms. Our experienced 
       developers craft custom smart contracts tailored to your specific needs, ensuring transparency, 
       autonomy, and efficiency in your business processes.
       </p>
     </div>
     
   </div>


    <div className="container mx-auto flex px-5 py-16 items-center justify-center flex-col">
   <h2 className="text-5xl font-bold text-center pb-4 text-indigo-500">Decentralized Application (dApp) Development</h2>
   <img
        src="dapp.png"
        alt="Image Alt Text"
        className="w-96 h-96 mr-2"
      />
    <div className="text-centersm:text-left lg:w-2/3 w-full">
      
      
     
       <p className="mb-6 leading-relaxed text-center md:text-left text-2xl">
       Unlock the full potential of decentralized applications with our expert development team. We 
       build decentralized applications that leverage blockchain technology, enabling you to create trustless, 
       transparent, and highly scalable solutions for your users.
       </p>
     </div>
     
   </div>

   <div className="container mx-auto flex px-5 py-16 items-center justify-center flex-col">
   <h2 className="text-5xl font-bold text-center pb-4 text-indigo-500">Blockchain Integration</h2>
   <img
        src="blockchain integration.png"
        alt="Image Alt Text"
        className="w-96 h-96 mr-2"
      />
    <div className="text-center lg:w-2/3 w-full">
      
      
     
       <p className="mb-6 leading-relaxed text-center sm:text-left text-2xl">
       Integrate blockchain technology seamlessly into your existing systems or applications. 
       Our team will help you identify the most suitable blockchain platform for your requirements 
       and ensure smooth integration, enhancing security and data integrity.
       </p>
     </div>
     
   </div>

   <div className="container mx-auto flex px-5 py-16 items-center justify-center flex-col">
   <h2 className="text-5xl font-bold text-center pb-4 text-indigo-500">Decentralized Finance (DeFi) Solutions</h2>
   <img
        src="defi.png"
        alt="Image Alt Text"
        className="w-96 h-96 mr-2"
      />
    <div className="text-center lg:w-2/3 w-full">
      
      
     
       <p className="mb-6 leading-relaxed text-center sm:text-left text-2xl">
       Explore the revolutionary world of DeFi with our custom DeFi development services. 
       We create decentralized finance platforms, including decentralized exchanges (DEX), 
       lending protocols, and yield farming applications, enabling secure and transparent 
       financial services.
       </p>
     </div>
     
   </div>

   <div className="container mx-auto flex px-5 py-16 items-center justify-center flex-col">
   <h2 className="text-5xl font-bold text-center pb-4 text-indigo-500">Web3 Gaming Development</h2>
   <img
        src="gaming.png"
        alt="Image Alt Text"
        className="w-96 h-96 mr-2"
      />
    <div className="text-center lg:w-2/3 w-full">
      
      
     
       <p className="mb-6 leading-relaxed text-center sm:text-left text-2xl">
       Elevate your gaming experience with blockchain-powered games. Our team develops 
       blockchain-based gaming solutions that offer true ownership of in-game assets, 
       provably fair gameplay, and enhanced user interactions.
       </p>
     </div>
     
   </div>


   <div className="container mx-auto flex px-5 py-16 items-center justify-center flex-col">
   <h2 className="text-5xl font-bold text-center pb-4 text-indigo-500">DAO Development</h2>
   <img
        src="DAO.png"
        alt="Image Alt Text"
        className="w-96 h-96 mr-2"
      />
    <div className="text-center lg:w-2/3 w-full">
      
      
     
       <p className="mb-6 leading-relaxed  text-center sm:text-left text-2xl">
       Embrace decentralization and community governance with our DAO development expertise. 
       We create decentralized autonomous organizations that empower stakeholders to 
       participate in decision-making processes, fostering a more inclusive and democratic ecosystem
       </p>
     </div>
     
   </div>

   <div className="container mx-auto flex px-5 py-16 items-center justify-center flex-col">
   <h2 className="text-5xl font-bold text-center pb-4 text-indigo-500">Tooling and Infrastructure</h2>
   <img
        src="tooling.png"
        alt="Image Alt Text"
        className="w-96 h-96 mr-2"
      />
    <div className="text-center lg:w-2/3 w-full">
      
      
     
       <p className="mb-6 leading-relaxed  text-center sm:text-left text-2xl">
       We offer comprehensive tooling and infrastructure solutions to support your blockchain 
       development journey. From blockchain explorers to custom wallets and APIs, our team 
       ensures a robust foundation for your blockchain projects.
       </p>
     </div>
     
   </div>

   <div className="container mx-auto flex px-5 py-16 items-center justify-center flex-col">
   <h2 className="text-5xl font-bold text-center pb-4 text-indigo-500">IoT Firmware Development</h2>
   <img
        src="iot firmware.png"
        alt="Image Alt Text"
        className="w-96 h-96 mr-2"
      />
    <div className="text-center lg:w-2/3 w-full">
      
      
     
       <p className="mb-6 leading-relaxed  text-center sm:text-left text-2xl">
       We are dedicated to providing cutting-edge firmware solutions that power and enhance 
       the performance of IoT devices. Our expert team of firmware developers works 
       diligently to create robust and efficient firmware that ensures seamless connectivity,
       data processing, and security for your IoT ecosystem.
       </p>
     </div>
     
   </div>

   

   {/* <div className="container mx-auto flex px-5 py-15 items-center justify-center flex-col">
    <div className="text-center lg:w-2/3 w-full">
     <h2 className="text-5xl font-bold text-center pb-8 text-indigo-500">MISSION</h2>
     <p className="mb-6 leading-relaxed text-2xl">
    To provide comprehensive Web3 consultancy services, enabling our clients to navigate 
      the ever-evolving landscape of decentralized technologies with confidence and 
      empower individuals, businesses, and organizations to embrace the transformative power of
       Web3, fostering innovation, trust, and inclusivity in the digital realm. 
       </p>
     </div>
   </div> */}
   
   {/* <div className="bg-white py-6 sm:py-8 lg:py-12">
  <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
    
    

    <div className="grid gap-4 sm:grid-cols-2 md:gap-8 xl:grid-cols-4 max-w-[1240px] mx-auto">
   
      <div className="flex divide-x rounded-lg border bg-gray-50 transition duration-500 ease-in-out 
                       hover:bg-white transform 
                       hover:-translate-y-1 hover:scale-110 hover:border-2
                       rounded-lg p-4 border border-indigo-600">
        <div className="flex items-center p-2 text-indigo-500 md:p-4">
        <img src="https://img.icons8.com/color/240/null/request-service.png"/>
        </div>

        <div className="p-4 md:p-6">
          <h3 className="mb-2 text-lg font-semibold md:text-xl text-indigo-500">Guidance</h3>
          <p className="text-gray-500">To provide expert advice, guidance, and support to clients seeking to integrate Web3 technologies into their operations, products, and services.</p>
        </div>
      </div>
    
      <div className="flex divide-x rounded-lg border bg-gray-50 transition duration-500 ease-in-out 
                       hover:bg-white transform 
                       hover:-translate-y-1 hover:scale-110 hover:border-2
                       rounded-lg p-4 border border-indigo-600">
        <div className="flex items-center p-2 text-indigo-500 md:p-4">
        <img src="https://img.icons8.com/external-filled-color-icons-papa-vector/320/null/external-Brain-Of-Highly-Intelligent-Individual-emotional-manipulations-filled-color-icons-papa-vector.png"/>
        </div>

        <div className="p-4 md:p-6">
          <h3 className="mb-2 text-lg font-semibold md:text-xl text-indigo-500">Innovation</h3>
          <p className="text-gray-500"> To foster  development of innovative and impactful Web3 solutions that address real-world challenges and opportunities.</p>
        </div>
      </div>
   
      <div className="flex divide-x rounded-lg border bg-gray-50 transition duration-500 ease-in-out 
                       hover:bg-white transform 
                       hover:-translate-y-1 hover:scale-110 hover:border-2
                       rounded-lg p-4 border border-indigo-600">
        <div className="flex items-center p-2 text-indigo-500 md:p-4">
        <img src="https://img.icons8.com/office/240/null/positive-dynamic.png"/>
        </div>

        <div className="p-4 md:p-6">
          <h3 className="mb-2 text-lg font-semibold md:text-xl text-indigo-500">Growth</h3>
          <p className="text-gray-500">To contribute to the growth and evolution of the Web3 ecosystem by collaborating with other stakeholders and sharing knowledge and resources.</p>
        </div>
      </div>
     
      <div className="flex divide-x rounded-lg border bg-gray-50 transition duration-500 ease-in-out 
                       hover:bg-white transform 
                       hover:-translate-y-1 hover:scale-110 hover:border-2
                       rounded-lg p-4 border border-indigo-600">
        <div className="flex items-center p-2 text-indigo-500 md:p-4">
        <img src="https://img.icons8.com/color/240/null/teaching.png"/>
        </div>

        <div className="p-4 md:p-6">
          <h3 className="mb-2 text-lg font-semibold md:text-xl text-indigo-500">Educate</h3>
          <p className="text-gray-500">To educate and raise awareness about the benefits and implications of decentralized technologies and promote their adoption and responsible use.</p>
        </div>
      </div>
     

    
      
      

    
    
    </div>
  </div>
</div> */}







 </section>













}

//  return <section className="text-gray-600 body-font overflow-hidden">
//   <div className="container px-5 py-24 mx-auto">
//     <div className="-my-8 divide-y-2 divide-gray-100">
//       <div className="py-8 flex flex-wrap md:flex-nowrap">
//         <div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
          
        
//         </div>
//         <div className="md:flex-grow ">
       
//         <h2 className="text-5xl font-bold text-center pb-8 text-indigo-500">VISION</h2>
//           {/* <h2 className="text-2xl font-medium text-gray-900 title-font mb-2">Bitters hashtag waistcoat fashion axe chia unicorn</h2> */}
//           <p className="text-xl font-medium text-gray-900 title-font mb-2">To become a leading Web3 consultancy company that empowers individuals, businesses, and organizations to harness the full potential of decentralized technologies and build a more open, secure, and equitable internet.</p>
//           {/* <a className="text-indigo-500 inline-flex items-center mt-4">Learn More */}
//             {/* <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
//               <path d="M5 12h14"></path>
//               <path d="M12 5l7 7-7 7"></path>
//             </svg>
//           </a> */}
//         </div>
//       </div>

//       <div className="py-8 flex flex-wrap md:flex-nowrap">
//         <div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
      
//         </div>
//         <div className="md:flex-grow">
//         <h1 className="py-3 text-3xl  md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-500  to-purple-600">MISSION</h1>
//           <ol  className="text-xl font-medium text-gray-900 title-font mb-2 list-decimal">
//             <li>
//             To provide expert advice, guidance, and support to clients seeking to integrate Web3 technologies into their operations, products, and services. 
//             </li>
//             <li>
//             To foster the development of innovative and impactful Web3 solutions that address real-world challenges and opportunities. 
//             </li>
//             <li>
//             To contribute to the growth and evolution of the Web3 ecosystem by collaborating with other stakeholders and sharing knowledge and resources.  
//             </li>
//             <li>
//             To educate and raise awareness about the benefits and implications of decentralized technologies and promote their adoption and responsible use.   
//             </li>
//             <li>
//             To uphold ethical and transparent practices and help build a more decentralized, democratic, and inclusive digital economy.    
//             </li>
//           </ol>
          
//         </div>
//       </div>
     
//     </div>
//   </div>
// </section>




// }

export default Servicescont;