import { project } from "@/json/Project";
import Image from "next/image"
export default function Project(){
    return(
        <>
            <div id="project" className="bg-[#f9f9f9] py-12">
                <div className="container grid grid-flow-row grid-cols-1 gap-6  ">
                { 
                    project.map((ele,index)=>(
                        <div key={index} className=" flex p-4 flex-col lg:flex-row lg:items-center  py-8 gap-6 bg-white shadow-2xl rounded-xl">
                            <div className="lg:w-1/2">
                                <Image className="object-cover w-full h-auto lg:h-auto" src={ele.image} width={400} height={400} alt={ele.title} />
                            </div>
                            <div className="lg:w-1/2 flex flex-col lg:text-left text-center  gap-4">
                                <span className="text-black text-xl font-bold mb-1 flex lg:flex-row gap-2 flex-col uppercase">{ele.title}  <span className="text-[#8B8B8B] mb-2">({ele.date})</span></span>
                                
                                <span className="text-[#8B8B8B] mb-4">{ele.description}</span>
                                <span className="text-black grid grid-cols-1 lg:grid-cols-2  gap-2 items-center ">
                                {ele.lungageBuild.map((lang, index) => (
                                    <span key={index} className="mr-2 bg-[#148bfbff] text-white px-3 py-1 rounded-md text-center">{lang}</span>
                                ))}
                                </span>
                                <span className=" flex  items-center justify-around">
                                    <a className="flex text-black items-center gap-2 font-semibold" href={ele.github} target="_blank"> <Image className="" src="/github.png" width={25} height={25} alt="github.png" /> GitHub</a>
                                    <a  className="text-black flex items-center gap-2 font-semibold" href={ele.vercal} target="_blank"><Image className="" src="/domain.png" width={25} height={25} alt="domain.png" />  Live Demo</a>
                                </span>
                            </div>
                        </div>
                       

                    ))
                }
                 </div>
            </div>
        </>
    )
}