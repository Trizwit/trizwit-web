import React, { useState } from "react";
import Image from "next/image";

const Aboutcont = () =>{
   return <section className="text-gray-600 body-font">
    <div className="container mx-auto flex px-5 py-20 items-center justify-center flex-col">
    <div className="text-center lg:w-2/3 w-full">
      
      
  
       <p className="mb-6 leading-relaxed text-2xl">The <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r  from-blue-500 to-purple-600 text-2xl">Trizwit</span> team started off its journey in the year 2021, with the idea of helping out those in the blockchain and web3 space realise their dreams with the best in class technology available. We are committed to build robust and scalable products without compromising on the quality.</p>
       <div className="flex justify-center">
       </div>
     </div>
   </div>
   <div className="container mx-auto flex px-5 py-20 items-center justify-center flex-col">
    <div className="text-center lg:w-2/3 w-full">
      
      
     <h2 className="text-5xl font-bold text-center pb-8 text-indigo-500">VISION</h2>
       <p className="mb-6 leading-relaxed text-2xl">To become a leading Web3 consultancy company that empowers individuals, businesses, and organizations to harness the full potential of decentralized technologies and build a more open, secure, and equitable internet.</p>
       <div className="flex justify-center">
       </div>
     </div>
   </div>


   <div className="container mx-auto flex px-5 py-15 items-center justify-center flex-col">
    <div className="text-center lg:w-2/3 w-full">
     <h2 className="text-5xl font-bold text-center pb-2 text-indigo-500">MISSION</h2>
       {/* <div className="flex justify-center">
       <ol  className="leading-relaxed text-2xl  text-center mb-2 list-disc">
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
       </div> */}
     </div>
   </div>
   <div className="bg-white py-6 sm:py-8 lg:py-12">
  <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
    
    {/* <div class="mb-10 md:mb-16">
      <h2 class="mb-4 text-center text-2xl font-bold text-gray-800 md:mb-6 lg:text-3xl">Our competitive advantage</h2>

      <p class="mx-auto max-w-screen-md text-center text-gray-500 md:text-lg">This is a section of some simple filler text, also known as placeholder text. It shares some characteristics of a real written text but is random or otherwise generated.</p>
    </div> */}


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
</div>







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

export default Aboutcont;