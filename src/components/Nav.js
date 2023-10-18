"use client"
import Image from "next/image"
import React, {  useState } from "react"
export default function Nav (){
    const[open,setOpen]=useState(false)
    function scrollToSection(sectionId) {
        const section = document.getElementById(sectionId);
      
        if (section) {
          window.scrollTo({
            top: section.offsetTop,
            behavior: 'smooth'
          });
        }
      }
    
      
      
      
      
    return (
        <>
            <div className="bg-[#ffffff] z-30  fixed top-0 right-0 left-0 shadow-2xl py-4 ">
                <div className=" flex justify-between items-center container">
                    <div>
                        <span className={` text-black font-extrabold `}>SalahEddine.Dev</span>
                    </div>
                    <div className=" hidden lg:block">
                    <div className="text-[#89797F]  flex gap-8 font-semibold ">
                        <button onClick={() => scrollToSection('home')}  className=" hover:text-[#148BFB] transition  duration-700">Home</button>
                        <button onClick={() => scrollToSection('about')}  className=" hover:text-[#148BFB] transition  duration-700">About</button>
                        <button onClick={() => scrollToSection('project')}  className=" hover:text-[#148BFB] transition  duration-700">Projects</button>
                        <button href="#" className=" hover:text-[#148BFB] transition  duration-700">Contact</button>
                    </div>
                    </div>
                    <div className="block lg:hidden">
                        <button className={``} onClick={()=>{setOpen(!open)}}>
                            <Image className="" src="/menu.png" width={40} height={40} alt="Nav" />
                        </button>
                       

                    </div>
                    
                </div>
                <div className={`fixed  inset-0 flex items-center justify-center bg-white bg-opacity-95 ${open==true?"block":"hidden"}`}>
             
                    <button onClick={()=>{setOpen(!open)}} className="absolute top-4 right-4 text-gray-500 hover:text-gray-700">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                    <div className="text-[#89797F] flex flex-col items-center gap-12 text-3xl font-bold">
                        
                        <button onClick={() =>{scrollToSection('home'), setOpen(!open) } }  className=" hover:text-[#148BFB] transition  duration-700">Home</button>
                        <button onClick={() => {scrollToSection('about'), setOpen(!open) } }  className=" hover:text-[#148BFB] transition  duration-700">About</button>
                        <button onClick={() => scrollToSection('project')}  className=" hover:text-[#148BFB] transition  duration-700">Projects</button>
                        <button href="#" className=" hover:text-[#148BFB] transition  duration-700">Contact</button>
                    </div>
                </div>

                
            
            </div>  
        </>
    )
}