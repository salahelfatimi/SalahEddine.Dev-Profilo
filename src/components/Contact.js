  "use client"
  import { Paytone_One } from 'next/font/google'
  import React, { useState } from 'react';
  import emailjs from 'emailjs-com';
  const PaytoneOne = Paytone_One({
    weight: '400',
    subsets: ['latin'],
  })
  export default function Contact() {
    const Swal = require('sweetalert2')
    const [formData, setFormData] = useState({
      from_name: '',
      from_email: '',
      subject: '',
      message: '',
    });
  
    function sendEmail(e) {
      e.preventDefault();
      
      emailjs.sendForm('service_fd3grgs', 'template_j78az8h', e.target, 'hNcZha-7RcR69-lAp')
        .then((result) => {
        
          setFormData({
            from_name: '',
            from_email: '',
            subject: '',
            message: '',
          });
          Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'The message has been sent successfully',
            showConfirmButton: false,
            timer: 6000
          })
        }, (error) => {
          console.log(error.text);
          Swal.fire({
            position: 'center',
            icon: 'error',
            title: 'Something went wrong . Please try again later.!',
            showConfirmButton: false,
            timer: 6000,
         
          })
        });
    }
    
    const handleInputChange = (e) => {
      const { name, value } = e.target;
      setFormData({
        ...formData,
        [name]: value,
      });
    };
  
    return (
      <>
      <div className=' bg-[#ffffff] dark:bg-[#121212]'>
        <div id='contact' className='   py-12 container'>
            
          <form className="contact-form" onSubmit={sendEmail}>
            <input type="hidden" name="contact_number" />
            <div>
              <div className="space-y-3">
                <div className="pb-4 flex-col flex gap-2 items-center">
                  <span className={`text-[#148BFB] dark:text-[#bb86fc] font-bold font-mono text-4xl `}>Get In Touch</span>
                  <span className={` font-mono font-semibold  dark:text-white text-black flex flex-col items-center text-center`}>Interested in working together? We should queue up a chat.<span> I&apos;ll buy the coffee.👇</span></span>
                </div>
                <div className="flex justify-between gap-4">
                  <input
                    required
                    type="text"
                    name="from_name"
                    id="Name"
                    className="bg-[#ffffff] text-black border-[#148afa]  dark:text-white h-8 w-1/2 border-2 p-4 font-mono text-xs  dark:bg-[#3c4042] dark:border-[#bb86fc]  "
                    placeholder="Name"
                    value={formData.from_name}
                    onChange={handleInputChange}
                  />
                  <input
                    required
                    type="email"
                    name="from_email"
                    id="Email"
                    className="bg-[#ffffff] text-black border-[#148afa]  dark:text-white w-1/2 h-8  p-4 font-mono text-xs  dark:bg-[#3c4042] dark:border-[#bb86fc] border-2 "
                    placeholder="Email"
                    value={formData.from_email}
                    onChange={handleInputChange}
                  />
                </div>
                <input
                  required
                  type="text"
                  name="subject"
                  id="subject"
                  className="bg-[#ffffff] text-black border-[#148afa]  dark:text-white w-full h-8  p-4 font-mono text-xs  dark:bg-[#3c4042] dark:border-[#bb86fc] border-2 "
                  placeholder="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                />
                <textarea
                  required
                  className="form-control text-black border-[#148afa]  dark:text-white dark:bg-[#3c4042] dark:border-[#bb86fc] border-2  bg-[#ffffff]  py-2 px-4 w-full font-mono text-xs"
                  name="message"
                  id="message"
                  rows="6"
                  placeholder="Message"
                  value={formData.message}
                  onChange={handleInputChange}
                />
                <button type="submit" value="Send" className=" bg-[#148BFB] hover:bg-[#f9f9f9] hover:text-black border-2 hover:border-[#148BFB] dark:bg-[#bb86fc] dark:hover:text-[#fff] dark:text-black dark:border-[#bb86fc] dark:border-2 dark:hover:bg-[#121212]  text-white hover:bg-[#148bfbd2]  border-[#ffffff]  rounded py-1 px-8 transition duration-700  font-bold ">send</button>
              </div>
            </div>
          </form>
          
         
        </div>
        </div>
      </>
    );
  }