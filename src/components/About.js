"use client"
import Image from 'next/image'
import { Black_Ops_One} from 'next/font/google'

const BlackOpsOne = Black_Ops_One({
    weight: '400',
    subsets: ['latin'],
})
export default function About(){
    return (
        <>
            <div id="about"  className='bg-[#ffffff] dark:bg-[#121212] py-12'>
                <div className=" container grid grid-cols-1 lg:grid-cols-2 gap-8 justify-center items-center">
                <div className="flex justify-center">
                    <div className=' relative'>
                        <Image  className=" rounded-md dark:hidden block "   src="/image/aboutWhite.png" width={400} height={200} alt="About" />
                        <Image  className=" rounded-md dark:block hidden "   src="/image/aboutDark.png" width={400} height={200} alt="About" />

                        <div className=' hidden lg:block  absolute -bottom-8 -right-8  '>
                            
                            <Image  className=" dark:hidden block circle-animation shadow-2xl rounded-full  bottom-0 left-0"   src="/image/CerclaImage.png" width={150} height={150} alt="About" />
                            <Image  className=" dark:block hidden circle-animation shadow-2xl rounded-full  bottom-0 left-0"   src="/image/CerclaImageDark.png" width={150} height={150} alt="About" />

                            <Image className='absolute inset-[50px]' src="icon/dev.svg" width={50} height={50} alt="dev" />
                            

                        </div>
                    </div>

                    </div>
                    <div className=' text-black flex flex-col gap-4 font-mono'>
                        <div className='flex flex-col gap-4 text-center lg:text-start'>
                            <span className={`text-[#148BFB] dark:text-[#bb86fc] font-bold text-3xl font-mono capitalize ${BlackOpsOne.className}`}>About Me</span>
                            <span className={` font-bold text-lg text-center lg:text-justify dark:text-[#fff]`} >Hello, I&apos;m Salaheddine Elfatimi, a Junior Full Stack Developer based in the enchanting city of Marrakech, Morocco 🏡.</span>
                        </div>
                        
                        <span className={` text-[#606368] text-sm font-semibold  text-center lg:text-justify `}>My journey in web development has led me to explore both the frontend and backend domains On the frontend, I wield technologies like HTML , CSS , React , Vite , Next.js and JavaScript to craft engaging and user-friendly interfaces. I&apos;m proficient in modern frontend libraries and frameworks such as React, and I have experience with styling tools like Tailwind and Bootstrap to make designs come to life.

                            In the backend realm, I&apos;m well-versed in technologies such as PHP , SQL , Laravel , and MongoDB. I enjoy the challenge of building robust server-side applications, and I appreciate the importance of secure and efficient data management.

                            Beyond coding, I bring my creative touch to design, utilizing tools like Figma and Canva to add a visual flair to my projects.

                            With my background and hands-on experience, including my role as a Stagiaire en Développement digital, I&apos;m ready to take on development challenges and work collaboratively on exciting projects. Let&apos;s embark on a journey to create something exceptional together! 🚀</span>
                    </div>
                    
                </div>
            </div>
        </>
    )
}