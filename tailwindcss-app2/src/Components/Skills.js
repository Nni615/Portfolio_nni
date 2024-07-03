import React from 'react';
import { FaRegFileCode } from "react-icons/fa";
import { DiCss3 } from "react-icons/di";
import { IoLogoJavascript } from "react-icons/io5";
import { FaHtml5 } from "react-icons/fa";
import { RiReactjsLine } from "react-icons/ri";
import { DiResponsive } from "react-icons/di";
import { FaFigma } from "react-icons/fa6";
import { PiArrowFatLineRightFill } from "react-icons/pi";
export default function Skills() {
  return (
    <div className='container-fluid skills bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white '>
    <h1 className='text-center text-6xl mt-40 p-5'>Skills</h1>
    <hr className="w-56 h-1 mx-auto my-4 bg-white border-0 rounded md:my-10 dark:bg-gray-700 animate-line"/>
    <p className="text-balance text-center mt-8 text-xl">I have a broad range of applicable skills that will enable me to be a valuable member of a team.
        These include specific technical skills .I have developed over the last year along 
        with strong soft skills developed over the course of my career.</p>
    <div className='container mx-auto tech   justify-center mt-10 border-container'>
        <div className='animated-border'>
        <FaRegFileCode className='size-36 mt-10 mx-auto'/>
        <p className='text-center mt-6 text-4xl'>Technical Skills</p>
        <div className=' grid grid-cols-4 gap-4 place-content-center mt-8 list'>
            {/* css3 */}
            <div className='flex flex-col items-center'>
            <DiCss3 className='size-32 mt-10'/>
            <p className='mt-1'>CSS3</p>
            </div>

            {/* javascript */}
            <div className='flex flex-col items-center'>
            <IoLogoJavascript className='size-32 mt-10'/>
            <p className='mt-1'>Javascript</p>
            </div>

            {/* html5 */}
            <div className='flex flex-col items-center'>
            <FaHtml5 className='size-32 mt-10'/>
            <p className='mt-1'>HTML5</p>
            </div>

            {/* react */}
            <div className='flex flex-col items-center'>
            <RiReactjsLine className='size-32 mt-10'/>
            <p className='mt-1'>ReactJS</p>
            </div>
        </div>
        <div className='grid grid-cols-2 gap-y-0 list2'>
            <div className=' flex flex-col items-center'>
                <DiResponsive className='size-60 '/>
                <p className='text-4xl text-center'>Responsive <br/> design</p>
            </div>

            <div className=' flex flex-col items-center'>
                <FaFigma className='size-36 mt-24'/>
                <p className='text-4xl mt-1'>Figma</p>
            </div>

        </div>
        </div>
        <div>
            <p className='mt-20 text-center text-3xl'>I have also familiar with these technologies</p>
            <div className='grid grid-cols-3 gap-1 text-center mt-10 lg:text-xl list3'>
            <div className='relative'>
                <PiArrowFatLineRightFill className='text-4xl inline-block bg-black px-2 py-1 ml-2 rounded-lg' />
                <b className='ml-4 text-xl'>Bootstrap 5</b>
            </div>

            <div className='relative'>
                <PiArrowFatLineRightFill className='text-4xl inline-block bg-black px-2 py-1 ml-2 rounded-lg' />
                <b className='ml-4 text-xl'>jQuery</b>
            </div>

            <div className='relative'>
                <PiArrowFatLineRightFill className='text-4xl inline-block bg-black px-2 py-1 ml-2 rounded-lg' />
                <b className='ml-4 text-xl'>TailwindCSS</b>
            </div>
</div>


        </div>
    </div>
    </div>
  )
}
