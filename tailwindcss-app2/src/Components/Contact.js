import React from 'react'
import { FaPhoneVolume } from "react-icons/fa6";
import { IoMdMailUnread } from "react-icons/io";
import { FaLinkedin } from "react-icons/fa";
export default function Contact() {
  return (
    <div className='container-fluid mt-8text-4xl contact'>
      <div className='grid grid-cols-3 gap-4 justify-items-center  bg-neutral-700 text-white p-4'>
        {/* no */}
        <div className='flex items-center justify-center'><FaPhoneVolume className='mr-2'/><span>7783466001</span></div>
        {/* mailid */}
        <div className='flex items-center justify-center'><IoMdMailUnread className='mr-2'/>nnilathiya@gmail.com</div>
        {/* linkedin id */}
        <div className='flex items-center justify-center'><FaLinkedin className='mr-2'/>www.linkedin.com/in/nnilathiya</div>
      </div>
    </div>
  )
}
