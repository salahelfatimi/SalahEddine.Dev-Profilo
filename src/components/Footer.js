"use client"
import Image from 'next/image'
export default function Footer(){
    return(
        <>
            <div className="bg-[#2D2E32] py-20 ">
                <div className="container flex flex-col gap-4 lg:flex-row   justify-between items-center">
                    
                        <span className="font-bold text-white text-xl">Copyright &copy; {new Date().getFullYear()} . All rights are reserved</span>

                    
                    <div className='flex gap-2'>
                        <a href='https://github.com/salahelfatimi' target="_blank"><Image className=" bg-white rounded-md p-1" src="/github.png" width={30} height={30} alt="profile" /></a>
                        <a href='https://www.linkedin.com/in/salaheddine-elfatimi-b160ab252' target="_blank"><Image className="bg-white rounded-md p-1 " src="/linkedin.png" width={30} height={30} alt="profile" /></a>
                    </div>
                </div>
            </div> 
        </>
    )
}