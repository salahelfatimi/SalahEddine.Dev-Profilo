"use client"
import { FrontEnd,BackEnd,Designe } from '@/json/language'
import { Black_Ops_One, Paytone_One } from 'next/font/google'
import Image from 'next/image'
const BlackOpsOne = Black_Ops_One({
    weight: '400',
    subsets: ['latin'],
})


export default function TechStack(){
    return(
        <>
        <div className="space-y-12">
                            <div className="text-center font-mono">
                                <span className={`font-extrabold text-3xl text-black border-b-4 border-black ${BlackOpsOne.className}`}>Tech Stack</span>
                            </div>
                            <div className="  grid grid-cols-1 lg:grid-cols-2  gap-8 ">                         
                                <div className=" space-y-6  text-center">
                                    <span className={`text-black font-bold  text-2xl ${BlackOpsOne.className}`}>Front-End </span>
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
                                    <span className={`text-black font-bold  text-2xl ${BlackOpsOne.className}`}>Back-End </span>
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
                                    <span className={`text-black font-bold  text-2xl ${BlackOpsOne.className}`}>Designe</span>
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
        </>
    )
}