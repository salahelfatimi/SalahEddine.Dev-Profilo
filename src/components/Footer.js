"use client"
export default function Footer(){
    return(
        <>
            <div className="bg-[#2D2E32] py-20 text-center lg:text-start">
                <div className="container">
                    <span className="font-bold text-white text-xl">Copyright &copy; {new Date().getFullYear()} . All rights are reserved</span>
                </div>
            </div> 
        </>
    )
}