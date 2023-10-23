"use client"
import { Paytone_One } from 'next/font/google'
  import Image from "next/image"
  import React, { useState } from 'react';
  import emailjs from 'emailjs-com';
  const PaytoneOne = Paytone_One({
    weight: '400',
    subsets: ['latin'],
  })
  export default function Contact() {
    const [formData, setFormData] = useState({
      from_name: '',
      from_email: '',
      subject: '',
      message: '',
    });
  
    function sendEmail(e) {
      e.preventDefault();
      
      emailjs.sendForm('service_fd3grgs', 'template_13xa2hi', e.target, 'hNcZha-7RcR69-lAp')
        .then((result) => {
        
          setFormData({
            from_name: '',
            from_email: '',
            subject: '',
            message: '',
          });
          showAlert('Message sent successfully!');
        }, (error) => {
          console.log(error.text);
        //   showAlert('An error occurred while sending the message. Please try again later.');
        });
    }
    function showAlert(message) {
        const alertDiv = document.createElement('div');
        alertDiv.className = 'fixed inset-0 flex items-center justify-center bg-opacity-95';
        alertDiv.innerHTML = `
          <div class="bg-[#16db65] p-4 lg:w-[30%] lg:h-[40%] rounded-lg gap-4 flex flex-col items-center justify-center">
            <img src="/check.png" width="100" height="100" alt="Nav" />
            <span class="text-xl font-bold">${message}</span>
            <span class="text-md font-semibold">Thank you for getting in touch.</span>
          </div>
        `;
        document.body.appendChild(alertDiv);
        setTimeout(() => {
          document.body.removeChild(alertDiv);
        }, 5000); 
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
      <div className=' bg-[#ffffff]'>
        <div id='contact' className='   py-12 container'>
            
          <form className="contact-form" onSubmit={sendEmail}>
            <input type="hidden" name="contact_number" />
            <div>
              <div className="space-y-3">
                <div className="pb-4 flex-col flex gap-1 items-center">
                  <span className={`text-[#148BFB] font-bold text-3xl ${PaytoneOne.className}`}>CONTACT WITH ME</span>
                  <span className={`font-bold text-xl text-black`}>Don't be shy! Hit me up! 👇</span>
                </div>
                <div className="flex justify-between gap-4">
                  <input
                    required
                    type="text"
                    name="from_name"
                    id="Name"
                    className="bg-[#ffffff] text-black h-8 w-1/2 border p-4 font-mono text-xs"
                    placeholder="Name"
                    value={formData.from_name}
                    onChange={handleInputChange}
                  />
                  <input
                    required
                    type="email"
                    name="from_email"
                    id="Email"
                    className="bg-[#ffffff] text-black w-1/2 h-8 border p-4 font-mono text-xs"
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
                  className="bg-[#ffffff] text-black w-full h-8 border p-4 font-mono text-xs"
                  placeholder="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                />
                <textarea
                  required
                  className="form-control text-black bg-[#ffffff] border py-2 px-4 w-full font-mono text-xs"
                  name="message"
                  id="message"
                  rows="6"
                  placeholder="Message"
                  value={formData.message}
                  onChange={handleInputChange}
                />
                <button type="submit" value="Send" className="border px-12 py-1 rounded border-black text-black font-light">SEND</button>
              </div>
            </div>
          </form>
          
         
        </div>
        </div>
      </>
    );
  }