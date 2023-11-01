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
                                    <div className='flex flex-col lg:flex-row items-center gap-3 '>
                                        <button className="bg-[#148BFB] text-white hover:bg-[#148bfbd2] shadow-2xl   rounded-3xl p-2 px-4 transition duration-700 ease-in-out font-bold "><a href="/SALAHEDDINE_ELFATIMI.pdf" download="cv">Download CV</a></button>
                                        <button onClick={() => {scrollToSection('contact')} } className="bg-[#ffff] text-black shadow-2xl   rounded-3xl p-2 px-4 transition duration-700 ease-in-out font-bold ">Hire Me</button>
                                        
                                    </div>
                                    
                               
                            </div>
                            <div>
                                <Image className="   rounded-full" src="/profile3.png" width={200} height={200} alt="profile" />

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