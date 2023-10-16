"use client"
import Image from 'next/image'
import { Black_Ops_One, Paytone_One, Varela_Round } from 'next/font/google'
const PaytoneOne = Paytone_One({
    weight: '400',
    subsets: ['latin'],
  })
  const VarelaRound=Varela_Round({
    weight: '400',
    subsets: ['latin'],
  })
export default function About(){
    return (
        <>
            <div className='bg-[#ffffff] py-12'>
                <div className=" container grid grid-cols-1 lg:grid-cols-2 gap-8 justify-center items-center">
                <div className="flex justify-center">
                    <div className=' relative'>
                        <Image  className=" rounded-md shadow-2xl  "   src="/AboutImage.jpg" width={400} height={200} alt="About" />
                        <div className=' hidden lg:block  absolute -bottom-8 -right-8  '>
                            <Image  className=" circle-animation shadow-2xl rounded-full  bottom-0 left-0"   src="/CerclaImage.png" width={150} height={150} alt="About" />
                            <div className=' absolute top-[3.1rem] right-[3.2rem]'>
                            <Image src="/web-development.png" width={50} height={50} alt="emojiDesktop.png" />
                            </div>

                        </div>
                    </div>

                    </div>
                    <div className=' text-black flex flex-col gap-4'>
                        <div className='flex flex-col gap-4 text-center lg:text-start'>
                            <span className={`text-[#148BFB] font-extrabold text-2xl ${PaytoneOne.className}`}>ABOUT ME</span>
                            <span className={` font-bold `} >Hello, I&apos;m Salaheddine Elfatimi, a Junior Full Stack Developer residing in Marrakech, Morocco. 📍</span>
                        </div>
                        
                        <span className={` text-[#89797F] text-center lg:text-start ${VarelaRound.className}`}>I have a solid foundation in Frontend technologies, including HTML, CSS, React, Vite, JavaScript, Redux, Tailwind, Bootstrap, and Next.js, allowing me to craft engaging and responsive user interfaces. On the backend, I have experience with Php, Sql, Laravel, and MongoDB, enabling me to develop functional and efficient applications. Proficient in design using Figma and Canva, I ensure that the user experience is both aesthetically pleasing and intuitive. Additionally, I am well-versed in utilizing essential software development tools like Git and GitHub to enhance collaboration and version control in projects.</span>
                    </div>
                    
                </div>
            </div>
        </>
    )
}