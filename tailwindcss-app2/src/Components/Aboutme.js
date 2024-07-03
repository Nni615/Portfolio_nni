import React from 'react';
import { useEffect } from 'react';
export default function Aboutme() {
  useEffect(() =>{
    const handlescroll =() =>{
        const title = document.querySelector('.animated-title');
        const para = document.querySelector('.animated-paragraph');
        const titlePosition =title.getBoundingClientRect().top; //returns the size of an element & its position relative to viewport. 
        const paraPosition = para.getBoundingClientRect().top;
        const scrollPosition = window.innerHeight;
        if(titlePosition < scrollPosition){
          title.classList.add('zoom-in');
        }else{
          title.classList.remove('zoom-in')
        }
        if(paraPosition < scrollPosition){
          para.classList.add('zoom-out');
        }else{
          para.classList.remove('zoom-out');
        }
    };
    handlescroll();

    window.addEventListener('scroll', handlescroll);
    return() =>window.removeEventListener('scroll' ,handlescroll);
  }, []);
  return (
    <div className='container mx-auto px-4 lg:px-8 about mt-12 lg:mt-28 gap-8'>
        <h2 className='text-6xl text-center mt-8 lg:mt-20  text-gray-700 animate-pulse animated-title'>About <br/> ME</h2>
        <p className='text-lg lg:text-center text-center text-black mt-2 lg:mt-8  animated-paragraph'>I’m obsessed with making things and even more obsessed with making things better. I’ve been in the business of creating since .After graduating from the University of Atmiya University, I’ve been actively involved in the web design community for the last 2 year. I’ve designed  static websites, clone website(Amazon).
        My specialty is website strategy, design and development, making pixel magic using semantic HTML & CSS & other frameworks.My interests, however, extend beyond the web and I love helping people with branding, print design and marketing strategy.</p>
      
    </div>
  )
}
