import React from "react"
export default function Nav (){
    return (
        <>
            <div className="bg-[#ffffff] shadow-2xl py-6 ">
                <div className=" flex justify-between items-center container">
                    <div>
                        <span className="text-black font-extrabold">SalahEddine.Dev</span>
                    </div>
                    <div className=" hidden lg:block">
                    <div className="text-[#89797F]  flex gap-8 font-semibold ">
                        <a href="#" className=" hover:text-[#148BFB] transition  duration-700">Home</a>
                        <a href="#" className=" hover:text-[#148BFB] transition  duration-700">About</a>
                        <a href="#" className=" hover:text-[#148BFB] transition  duration-700">Projects</a>
                        <a href="#" className=" hover:text-[#148BFB] transition  duration-700">Contact</a>
                    </div>
                    </div>
                </div>
                
            
            </div> 
        </>
    )
}