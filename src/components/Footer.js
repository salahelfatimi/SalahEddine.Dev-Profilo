"use client"
import Image from 'next/image'
export default function Footer(){
    return(
        <>
            <div className="bg-[#2D2E32] py-20 ">
                <div className="px-12 flex flex-col gap-4 lg:flex-row  text-center  justify-between items-center">

                        <span className="font-bold text-white text-xl flex flex-col lg:flex-row items-center justify-center gap-3 font-mono"> &copy;  {new Date().getFullYear()}  Designed & Built <span className="flex gap-3" > with 
                        <svg width="28px" height="28px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">

                            <g id="SVGRepo_bgCarrier" stroke-width="0"/>

                            <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"/>

                            <g id="SVGRepo_iconCarrier"> <path d="M2 9.1371C2 14 6.01943 16.5914 8.96173 18.9109C10 19.7294 11 20.5 12 20.5C13 20.5 14 19.7294 15.0383 18.9109C17.9806 16.5914 22 14 22 9.1371C22 4.27416 16.4998 0.825464 12 5.50063C7.50016 0.825464 2 4.27416 2 9.1371Z" fill="#ff0505"/> </g>

                        </svg>
                        <span> and </span>
                        <svg width="28px" height="28px" viewBox="0 -51 256 256" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                            <defs>
                                <linearGradient x1="-2.77777778%" y1="32%" x2="100%" y2="67.5555556%" id="linearGradient-1">
                                <stop stopColor="#2298BD" offset="0" />
                                <stop stopColor="#0ED7B5" offset="100" />
                                </linearGradient>
                            </defs>
                            <path d="M128,-1.0658141e-14 C93.8666667,-1.0658141e-14 72.5333333,17.0666667 64,51.2 C76.8,34.1333333 91.7333333,27.7333333 108.8,32 C118.537481,34.4343704 125.497363,41.4985481 133.201067,49.3184 C145.750756,62.0567704 160.275437,76.8 192,76.8 C226.133333,76.8 247.466667,59.7333333 256,25.6 C243.2,42.6666667 228.266667,49.0666667 211.2,44.8 C201.462519,42.3656296 194.502637,35.3014519 186.798933,27.4816 C174.249244,14.7432296 159.724563,-1.0658141e-14 128,-1.0658141e-14 Z M64,76.8 C29.8666667,76.8 8.53333333,93.8666667 0,128 C12.8,110.933333 27.7333333,104.533333 44.8,108.8 C54.5374815,111.23437 61.497363,118.298548 69.2010667,126.1184 C81.7507556,138.85677 96.275437,153.6 128,153.6 C162.133333,153.6 183.466667,136.533333 192,102.4 C179.2,119.466667 164.266667,125.866667 147.2,121.6 C137.462519,119.16563 130.502637,112.101452 122.798933,104.2816 C110.249244,91.5432296 95.724563,76.8 64,76.8 Z" fill="url(#linearGradient-1)" />
                        </svg>
                        </span>
                        <span>
                            <span> by </span>
                        
                            <a className='text-[#148bfb]' href='https://github.com/salahelfatimi' target="_blank">salaheddine elfatimi</a>
                        
                        </span>
                        
                        </span>
                        
                    
                    <div className='flex gap-2'>
                        <a href='https://github.com/salahelfatimi' target="_blank"><Image className=" bg-white rounded-md p-1" src="/github.png" width={30} height={30} alt="profile" /></a>
                        <a href='https://www.linkedin.com/in/salaheddine-elfatimi-b160ab252' target="_blank"><Image className="bg-white rounded-md p-1 " src="/linkedin.png" width={30} height={30} alt="profile" /></a>
                    </div>
                </div>
            </div> 
        </>
    )
}