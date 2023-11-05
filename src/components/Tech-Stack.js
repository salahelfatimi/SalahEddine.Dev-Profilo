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
                                <span className={`font-extrabold text-3xl text-black border-b-4 dark:text-white dark:border-white border-black ${BlackOpsOne.className}`}>Tech Stack</span>
                            </div>
                            <div className="  flex flex-col gap-4   ">   
                                                  
                                <div className="flex lg:flex-row flex-col items-center dark:bg-[#bb86fc] bg-white shadow-inner  text-center  p-6 gap-12 rounded-xl">
                                    <span className={`text-black font-bold dark:text-white  text-2xl ${BlackOpsOne.className}`}>Front-End </span>
                                    <div className="grid grid-cols-4 lg:flex items-center justify-center   gap-8">
                                    {
                                        FrontEnd.map((res,index)=>(
                                            <div key={index} className=' relative'>
                                                <Image  className="rounded-md"   src={res.languageImage} width={60} height={60} alt={res.languageName} />
                                                {/* <div className={`rounded-md w-[100%]    p-4 ` }>
                                                <div className="w-full bg-gray-200 rounded-full h-2.5 ">
                                                    <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: `${res.languageProgress}% `, transition: 'width 0.5s ease' }}></div>
                                                </div>                                                    
                                                </div>   */}
                                            </div>   
                                        ))                                       
                                    }                                   
                                    </div>
                                </div>

                               
                                    <div className='flex flex-col lg:flex-row items-center dark:bg-[#bb86fc] bg-white shadow-inner  text-center  p-6 gap-[3.8rem] rounded-xl'>
                                        <span className={`text-black font-bold dark:text-white  text-2xl ${BlackOpsOne.className}`}>Back-End </span>
                                        <div className=" grid grid-cols-4 lg:flex items-center justify-center  gap-8">
                                        {
                                            BackEnd.map((res,index)=>(
                                                <div key={index} >
                                                    <Image  className="rounded-md "   src={res.languageImage} width={60} height={60} alt={res.languageName} />
                                                    {/* <div className={`rounded-md w-[100%]   p-4 ` }>
                                                    <div className="w-full bg-gray-200 rounded-full h-2.5 ">
                                                        <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: `${res.languageProgress}% `, transition: 'width 0.5s ease' }}></div>
                                                    </div>
                                                        
                                                    </div>   */}
                                                </div>   
                                            ))    
                                        }                                                                 
                                        </div>
                                    </div>
                                    <div className="flex flex-col lg:flex-row items-center dark:bg-[#bb86fc] bg-white shadow-inner  text-center  p-6 gap-[4.6rem] rounded-xl">
                                        <span className={`text-black font-bold dark:text-white  text-2xl ${BlackOpsOne.className}`}>Designe</span>
                                        <div className=" grid grid-cols-4 lg:flex items-center gap-8 ">
                                        {
                                            Designe.map((res,index)=>(
                                                <div key={index} className=' ' >
                                                    <Image  className=" rounded-md "   src={res.languageImage} width={60} height={60} alt={res.languageName} />
                                                    
                                                    {/* <div className='rounded-md w-[100%]   p-4 absolute '>
                                                        <div className="w-full bg-gray-200 rounded-full h-2.5 ">
                                                            <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: `${res.languageProgress}% `, transition: 'width 0.5s ease' }}></div>
                                                        </div>
                                                        
                                                    </div>   */}
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