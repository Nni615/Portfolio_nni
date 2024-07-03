import React, { useState } from 'react'
import image from '../Images/coding.gif';
import { IoLocationOutline } from "react-icons/io5";
import { IoCallOutline } from "react-icons/io5";
import { CiMail } from "react-icons/ci";
export default function Content() {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return (

    <div className="container-fluid bg-black text-white grid grid-cols-2 gap-4">
      {/* Column 1 */}
      <div className='mt-20 mx-20 sm:max-w-md md:max-w-lg'>
        <h1 className="text-4xl sm:text-6xl font-bold animate-pulse">Hello, <br/>I'm Nandini <br/> Lathiya</h1>
        <h3 className='mt-4 text-sm sm:text-4xl motion-safe:animate-pulse'>FrontEnd Developer</h3>
        <button
          type='button'
          className='text-white mt-8 bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700'
          onClick={openModal}
        >
          Contact
        </button>
        {isOpen && (
          <>
            <div className='fixed top-0 left-0 w-full h-full bg-black opacity-50 z-50'></div>
            <div className='fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white p-10 z-50 grid grid-cols-3 modal'>
            <div className='text-black text-4xl'>
              <IoLocationOutline className='mx-auto'/>
              <div className='text-sm text-center'>Address:-<br/>
                "Sukruti", <br/>b/h Ranchodnagar Surat.</div>
              <IoCallOutline className='mx-auto mt-5'/>
             <div className='text-sm text-center'> Phone:-<br/>
              +9083 4563728990<br/>
              +7890 5467382934</div>
              <CiMail className='mx-auto mt-5'/>
             <div className='text-sm text-center'>Mailid:-<br/>
              xyz123@gmail.com <br/>
              abc456@gmail.com</div>
            </div>
            <div className='vertical-line'></div>
             <div className='frm'>
               <h1 className='text-2xl mb-4 text-black'>Send Me a Message</h1>
              <p className='text-black'>
                <form>
                  <label className='block'>
                    <span className='block text-sm font-medium text-slate-700'>Username</span>
                    <input type='text'  className='mt-3 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
      disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
      invalid:border-pink-500 invalid:text-pink-600
      focus:invalid:border-pink-500 focus:invalid:ring-pink-500'></input>
                    <span className='mt-3 block text-sm font-medium text-slate-700'>Email</span>
                    <input type='text' className='mt-3 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
      disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
      invalid:border-pink-500 invalid:text-pink-600
      focus:invalid:border-pink-500 focus:invalid:ring-pink-500'></input>
                  </label>
                </form>
              </p>
              <button className='bg-green-500 hover:bg-green-500 text-white py-2 px-4 rounded mt-5 w-full' onClick={closeModal}>Submit</button>
              <button className='bg-red-500 hover:bg-red-500 text-white py-2 px-4 rounded mt-5 w-full' onClick={closeModal}>Close</button>
           </div> </div>
          </>
        )}
        </div>
      
      {/* Column 2 */}
      <div className='flex justify-center sm:justify-center items-center sm:mt-2'>
        <img src={image} alt="Image" className="w-auto h-auto rounded-lg max-w-full object-cover sm:max-w-md md:max-w-lg" />
      </div>
    </div>   

   

  )
}
