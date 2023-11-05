"use client"
import Image from 'next/image'
import TechStack from './Tech-Stack'

 function  Head(){

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
            <div id="home">
                <div className="bg-[#F9F9F9] dark:bg-[#121212] py-24">
                                       
                    <div className="container space-y-8">
                        <div className=" flex flex-col-reverse gap-8 justify-center lg:flex-row lg:justify-between items-center">
                            <div className="  space-y-4 text-center lg:text-start  ">
                                    <div className=" flex items-center justify-center lg:justify-start ">
                                        <span className="text-[#2d2e32] dark:text-white font-bold text-2xl lg:text-5xl ">Full Stack Developer  </span>
                                    </div>
                                    <div>
                                        <span className=" text-[#86888c] dark:text-[##7a7a7a]  font-mono">   Hello, I&apos;m Salaheddine Elfatimi, an enthusiastic  Full Stack Developer based in Marrakech, Morocco. 📍</span>
                                    </div>
                                    <div className='flex flex-col lg:flex-row items-center gap-3 font-mono '>
                                        <button className="bg-[#148BFB] dark:bg-[#bb86fc] dark:hover:text-[#fff] dark:text-black dark:border-[#bb86fc] dark:border-2 dark:hover:bg-[#121212]  text-white hover:bg-[#148bfbd2] shadow-2xl  rounded p-2 px-4 transition duration-700  font-bold "><a href="/SALAHEDDINE_ELFATIMI.pdf" target="_blank">RESUME</a></button>
                                        <button onClick={() => {scrollToSection('contact')} } className=" dark:hover:text-white dark:text-black  dark:border-[#fff] dark:border-2  dark:hover:bg-[#121212]  bg-[#ffff] text-black shadow-2xl   rounded p-2 px-4 transition duration-700 ease-in-out font-bold ">SAY HELLO</button>
                                        
                                    </div>
                                    
                               
                            </div>
                            <div>
                                <Image className=" dark:hidden block" src="/profileWhite.png" width={300} height={300} alt="profile" />
                                <Image className="dark:block hidden" src="/profileDark.png" width={300} height={300} alt="profile" />

                            </div>
                        </div>
                        <TechStack/> 
                    </div>
                </div>
            </div>
            
        </>
    )
}
export default Head