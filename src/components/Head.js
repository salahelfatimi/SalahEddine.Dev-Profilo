"use client"
import Image from 'next/image'
import { FrontEnd,BackEnd,Designe } from '@/json/language'
import { useState } from 'react'

async function   Head(){
    return (
        <>
            <div>
                <div className="bg-[#F9F9F9] py-24">
                                       
                    <div className="container space-y-8">
                        <div className=" flex flex-col-reverse gap-8 justify-center lg:flex-row lg:justify-between items-center">
                            <div className="  space-y-4 text-center lg:text-start  ">
                                    <div className=" flex items-center justify-center lg:justify-start ">
                                        <span className="text-[#2d2e32]  font-extrabold  text-5xl">Full Stack Developer</span>
                                    </div>
                                    <div>
                                        <span className="text-[#89797F]">   Hello, I&apos;m Salaheddine Elfatimi, an enthusiastic Full Stack Developer based in Marrakech, Morocco. 📍</span>
                                    </div>
                                    <div>
                                        <button className="bg-[#148BFB] hover:bg-[#148bfbd2] shadow-2xl   rounded-3xl p-2 px-4 transition duration-700 ease-in-out font-bold ">Download CV</button>
                                    </div>
                            </div>
                            <div>
                                <Image className=" shadow-2xl  rounded-full" src="/profil.png" width={300} height={300} alt="Picture of the author" />

                            </div>
                        </div>
                        <div className="space-y-12">
                            <div className="text-center font-mono">
                                <span className=" font-extrabold text-3xl text-black border-b-4 border-black">Tech Stack</span>
                            </div>
                            <div className="  grid grid-cols-1 lg:grid-cols-2  gap-8 ">                         
                                <div className=" space-y-6  text-center">
                                    <span className="text-black font-bold  text-2xl">Front-End </span>
                                    <div className=" grid grid-cols-1 lg:grid-cols-1 gap-4">
                                    {
                                        FrontEnd.map((res,index)=>(
                                            <div key={index} className='flex items-center gap-4'>
                                                <Image  className=""   src={res.languageImage} width={50} height={50} alt={res.languageName} />
                                                <div className={`rounded-md w-[100%]   p-4 ` }>
                                                <div className="w-full bg-gray-200 rounded-full h-2.5 ">
                                                    <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: `${res.languageProgress}% `, transition: 'width 0.5s ease' }}></div>
                                                </div>                                                    
                                                </div>  
                                            </div>   
                                        ))                                       
                                    }                                   
                                    </div>
                                </div>
                                <div className="space-y-6 text-center">
                                    <span className="text-black font-bold  text-2xl">Back-End </span>
                                    <div className=" grid grid-cols-1 lg:grid-cols-1 gap-4">
                                    {
                                        BackEnd.map((res,index)=>(
                                            <div key={index} className='flex items-center gap-4'>
                                                <Image  className=" "   src={res.languageImage} width={50} height={50} alt={res.languageName} />
                                                <div className={`rounded-md w-[100%]   p-4 ` }>
                                                <div className="w-full bg-gray-200 rounded-full h-2.5 ">
                                                    <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: `${res.languageProgress}% `, transition: 'width 0.5s ease' }}></div>
                                                </div>
                                                    
                                                </div>  
                                            </div>   
                                        ))    
                                    }                                                                 
                                    </div>
                                    <div className="space-y-6 text-center">
                                    <span className="text-black font-bold  text-2xl">Designe</span>
                                    <div className=" grid grid-cols-1 lg:grid-cols-1 gap-4">
                                    {
                                        Designe.map((res,index)=>(
                                            <div key={index} className='flex items-center gap-4'>
                                                <Image  className=" "   src={res.languageImage} width={50} height={50} alt={res.languageName} />
                                                <div className={`rounded-md w-[100%]   p-4 ` }>
                                                <div className="w-full bg-gray-200 rounded-full h-2.5 ">
                                                    <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: `${res.languageProgress}% `, transition: 'width 0.5s ease' }}></div>
                                                </div>
                                                    
                                                </div>  
                                            </div>   
                                        ))                                  
                                    }                                                                     
                                    </div>
                                </div>
                                </div>
                                
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Head