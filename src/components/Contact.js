"use client"
import { Paytone_One } from 'next/font/google'
const PaytoneOne = Paytone_One({
    weight: '400',
    subsets: ['latin'],
  })
import React from 'react';
import emailjs from 'emailjs-com';

export default function Contact(){
    function sendEmail(e) {
        e.preventDefault();    //This is important, i'm not sure why, but the email won't send without it
    
        emailjs.sendForm('service_fd3grgs', 'template_13xa2hi', e.target, 'hNcZha-7RcR69-lAp')
          .then((result) => {
              window.location.reload()  //This is if you still want the page to reload (since e.preventDefault() cancelled that behavior) 
          }, (error) => {
              console.log(error.text);
          });
      }
    
      return (
        <>
            <div id='contact' className=' container py-12  bg-[#ffffff]'>
                <form className="contact-form" onSubmit={sendEmail}>
                    <input type="hidden" name="contact_number" />
                    <div>
                    <div className="space-y-3">
                        <div className="pb-4  flex-col flex gap-1 items-center">
                            <span className={`text-[#148BFB] font-bold  text-3xl ${PaytoneOne.className}`}>CONTACT WITH ME</span>
                            <span className={` font-bold text-xl text-black `} >Don&apos;t be shy! Hit me up! 👇</span>

                        </div>
                        <div className="flex justify-between gap-4">
                            <input required  type="text" name="from_name" id="Name" className="bg-[#ffffff] text-black h-8 w-1/2 border p-4 font-mono text-xs" placeholder="Name"/>
                            <input required type="email" name="from_email" id="Email" className="bg-[#ffffff] text-black w-1/2 h-8 border p-4 font-mono text-xs"  placeholder="Email"/>
                        </div>
                        <input required type="text" name="subject" id="subject" className="bg-[#ffffff] text-black w-full h-8 border p-4 font-mono text-xs"  placeholder="subject"/>

                        <textarea required className="form-control text-black bg-[#ffffff] border py-2 px-4 w-full font-mono text-xs" name="message" id="message"  rows="6" placeholder="Message"></textarea>
                        <button type="submit"  value="Send" className=" border px-12 py-1 rounded border-black text-black font-light">SEND</button>
                    </div>
                        
        
                    </div>
                    
                </form>
            </div>
            
        </>
      
      );
}