"use client"

import { Black_Ops_One} from 'next/font/google'
import Image from 'next/image'
import { useEffect, useState } from 'react'
const BlackOpsOne = Black_Ops_One({
    weight: '400',
    subsets: ['latin'],
})


export default function TechStack(){
    const [data, setData] = useState({
        frontEnd:[],
        backEnd:[],
        designe:[]
    });
      
      useEffect(() => {
        const fetchData = async () => {
            const response = await fetch("/json/language.json")
            const data = await response.json()
            const { FrontEnd, BackEnd, Designe } = data
            setData({
                frontEnd:FrontEnd,
                backEnd:BackEnd,
                designe:Designe
            })
        };
        fetchData();
      }, []);
    return(
        <>
        <div className="space-y-12">
                            <div className="text-center font-mono">
                                <span className={`font-extrabold text-3xl  text-[#148BFB]  border-b-4 dark:text-[#bb86fc]  dark:border-[#bb86fc] border-[#148BFB] ${BlackOpsOne.className}`}>Tech Stack</span>
                            </div>
                            <div className="  flex flex-col gap-4   ">   
                                                  
                                <div className="flex lg:flex-row flex-col items-center  dark:bg-[#2d2e32] bg-white shadow-inner  text-center  p-6 gap-12 rounded-xl">
                                    <span className={`text-black font-bold dark:text-white   text-2xl ${BlackOpsOne.className}`}>Front-End </span>
                                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:flex items-center justify-center   gap-8">
                                    {
                                        data.frontEnd.map((res,index)=>(
                                            <div key={index} className=' relative'>
                                                <Image  className="rounded-md"   src={`/icon/${ res.languageImage }`} width={50} height={50} alt={res.languageName} />
                                                
                                            </div>   
                                        ))                                       
                                    }                                   
                                    </div>
                                </div>

                               
                                    <div className='flex flex-col lg:flex-row items-center  dark:bg-[#2d2e32] bg-white shadow-inner  text-center  p-6 gap-[3.8rem] rounded-xl'>
                                        <span className={`text-black font-bold dark:text-white  text-2xl ${BlackOpsOne.className}`}>Back-End </span>
                                        <div className=" grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:flex items-center  justify-center  gap-8">
                                        {
                                            data.backEnd.map((res,index)=>(
                                                <div key={index} >
                                                    <Image  className="rounded-md "   src={`/icon/${ res.languageImage }`} width={50} height={50} alt={res.languageName} />
                                                   
                                                </div>   
                                            ))    
                                        }                                                                 
                                        </div>
                                    </div>
                                    <div className="flex flex-col lg:flex-row items-center dark:bg-[#2d2e32] bg-white shadow-inner  text-center  p-6 gap-[4.6rem] rounded-xl">
                                        <span className={`text-black font-bold dark:text-white  text-2xl ${BlackOpsOne.className}`}>Designe</span>
                                        <div className=" grid grid-cols-2 lg:flex items-center gap-8 ">
                                        {
                                            data.designe.map((res,index)=>(
                                                <div key={index} className=' ' >
                                                    <Image  className=" rounded-md "   src={`/icon/${ res.languageImage }`} width={50} height={50} alt={res.languageName} />
                                                    
                                            
                                                </div>   
                                            ))                                  
                                        }                                                                     
                                        </div>
                                    </div>
                                
                                
                            </div>
                            
                        </div>
        </>
    )
}