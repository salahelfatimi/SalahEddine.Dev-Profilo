"use client"

import React, {  useEffect, useState } from "react"
import { useTheme } from "next-themes";

export default function Nav (){
    const[open,setOpen]=useState(false)
    const { theme, setTheme } = useTheme();
    const [mounted, setMointed] = useState(false);
    useEffect(() => {
        setMointed(true);
      }, []);
      if (!mounted) {
        return null;
      }
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
            <div className="bg-[#ffffff] dark:bg-[#2d2e32] rounded-b-2xl  z-30  fixed top-0 right-0 left-0 shadow-2xl py-5 ">
                <div className=" hidden lg:block">
                <div className=" flex justify-between items-center px-8">
                    <div>
                        <span className={` text-black dark:text-[#fff]  font-extrabold `}>SalahEddine.Dev</span>
                    </div>
                    
                    <div className="text-[#89797F] dark:text-white  flex gap-8 font-semibold ">
                        <button onClick={() => scrollToSection('home')}  className=" hover:text-[#148BFB] transition hover:dark:text-[#bb86fc]  duration-700">Home</button>
                        <button onClick={() => scrollToSection('about')}  className=" hover:text-[#148BFB] transition  hover:dark:text-[#bb86fc] duration-700">About</button>
                        <button onClick={() => {scrollToSection('project')} }  className=" hover:text-[#148BFB] transition hover:dark:text-[#bb86fc] duration-700">Portfolio</button>
                        <button onClick={() => {scrollToSection('contact')} }  className=" hover:text-[#148BFB] transition hover:dark:text-[#bb86fc] duration-700">Contact</button>
                        <button onClick={()=> setTheme(theme === "dark" ? "light" : "dark")} className=" ">
                        <svg className={`${theme === "dark"?"hidden":"block"}`} width="28px" height="28px" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                                <g id="Layer_2" data-name="Layer 2">
                                <g id="Icons">
                                <g>
                                    <rect width="48" height="48" fill="none"/>
                                    <g>
                                    <path d="M14,24A10,10,0,0,0,24,34V14A10,10,0,0,0,14,24Z"/>
                                    <path d="M24,2A22,22,0,1,0,46,24,21.9,21.9,0,0,0,24,2ZM6,24A18.1,18.1,0,0,1,24,6v8a10,10,0,0,1,0,20v8A18.1,18.1,0,0,1,6,24Z"/>
                                    </g>
                                </g>
                                </g>
                            </g>
                        </svg>
                        <svg className={` ${theme === "dark"?"block":"hidden"}`}  width="28px" height="28px" viewBox="0 0 24 24" fill="#ffff" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12 16C14.2091 16 16 14.2091 16 12C16 9.79086 14.2091 8 12 8V16Z" fill="#ffff"/>
                            <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2ZM12 4V8C9.79086 8 8 9.79086 8 12C8 14.2091 9.79086 16 12 16V20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4Z" fill="#ffff"/>
                        </svg>
                        </button>
                    </div>
                    </div>
                </div>
                    <div className="block lg:hidden">
                        <div className="flex items-center justify-between px-4">
                            <span className={` text-black dark:text-[#fff] font-extrabold `}>SalahEddine.Dev</span>
                            <button  onClick={()=>{setOpen(!open)}}>
                                <svg className="dark:hidden block" fill="" width="28px" height="28px" viewBox="0 -2 28 28" xmlns="http://www.w3.org/2000/svg"><path d="m2.61 0h22.431c1.441 0 2.61 1.168 2.61 2.61s-1.168 2.61-2.61 2.61h-22.431c-1.441 0-2.61-1.168-2.61-2.61s1.168-2.61 2.61-2.61z"/><path d="m2.61 9.39h22.431c1.441 0 2.61 1.168 2.61 2.61s-1.168 2.61-2.61 2.61h-22.431c-1.441 0-2.61-1.168-2.61-2.61s1.168-2.61 2.61-2.61z"/><path d="m2.61 18.781h22.431c1.441 0 2.61 1.168 2.61 2.61s-1.168 2.61-2.61 2.61h-22.431c-1.441 0-2.61-1.168-2.61-2.61s1.168-2.61 2.61-2.61z"/></svg>
                                <svg className="dark:block hidden" fill="#bb86fc" width="28px" height="28px" viewBox="0 -2 28 28" xmlns="http://www.w3.org/2000/svg"><path d="m2.61 0h22.431c1.441 0 2.61 1.168 2.61 2.61s-1.168 2.61-2.61 2.61h-22.431c-1.441 0-2.61-1.168-2.61-2.61s1.168-2.61 2.61-2.61z"/><path d="m2.61 9.39h22.431c1.441 0 2.61 1.168 2.61 2.61s-1.168 2.61-2.61 2.61h-22.431c-1.441 0-2.61-1.168-2.61-2.61s1.168-2.61 2.61-2.61z"/><path d="m2.61 18.781h22.431c1.441 0 2.61 1.168 2.61 2.61s-1.168 2.61-2.61 2.61h-22.431c-1.441 0-2.61-1.168-2.61-2.61s1.168-2.61 2.61-2.61z"/></svg>

                            </button>
                       
                        </div>
                    
                    
                
                <div className={`fixed   inset-0 flex items-center justify-center bg-white dark:bg-[#2d2e32] duration-700 transition  ${open==true?"translate-x-0":"translate-x-full"}`}>
             
                    <button onClick={()=>{setOpen(!open)}} className="absolute top-4 right-4 dark:text-[#bb86fc] text-gray-500 hover:text-gray-700">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                    
                    <div className=" text-black dark:text-[#fff] flex flex-col items-center gap-12 text-3xl font-bold">
                        
                        <button onClick={() =>{scrollToSection('home'), setOpen(!open) } }  className=" hover:text-[#148BFB] transition hover:dark:text-[#bb86fc] duration-700">Home</button>
                        <button onClick={() => {scrollToSection('about'), setOpen(!open) } }  className=" hover:text-[#148BFB] transition hover:dark:text-[#bb86fc] duration-700">About</button>
                        <button onClick={() => {scrollToSection('project'), setOpen(!open) } }  className=" hover:text-[#148BFB] transition hover:dark:text-[#bb86fc] duration-700">Portfolio</button>
                        <button onClick={() => {scrollToSection('contact'), setOpen(!open) } } className=" hover:text-[#148BFB] transition hover:dark:text-[#bb86fc] duration-700">Contact</button>
                        <button onClick={()=>{  setTheme(theme === "dark" ? "light" : "dark"), setOpen(!open)  }} className=" ">
                            <svg className={` ${theme === "dark"?"hidden":"block"}`} width="50px" height="50px" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                                    <g id="Layer_2" data-name="Layer 2">
                                    <g id="Icons">
                                    <g>
                                        <rect width="48" height="48" fill="none"/>
                                        <g>
                                        <path d="M14,24A10,10,0,0,0,24,34V14A10,10,0,0,0,14,24Z"/>
                                        <path d="M24,2A22,22,0,1,0,46,24,21.9,21.9,0,0,0,24,2ZM6,24A18.1,18.1,0,0,1,24,6v8a10,10,0,0,1,0,20v8A18.1,18.1,0,0,1,6,24Z"/>
                                        </g>
                                    </g>
                                    </g>
                                </g>
                            </svg>
                            <svg className={` ${theme === "dark"?"block":"hidden"}`}  width="50px" height="50px" viewBox="0 0 24 24" fill="#ffff" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12 16C14.2091 16 16 14.2091 16 12C16 9.79086 14.2091 8 12 8V16Z" fill="#ffff"/>
                            <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2ZM12 4V8C9.79086 8 8 9.79086 8 12C8 14.2091 9.79086 16 12 16V20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4Z" fill="#ffff"/>
                        </svg>
                        </button>
                    </div>
                </div>

                
                </div>
            </div>  
        </>
    )
}