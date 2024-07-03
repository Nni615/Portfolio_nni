import React from 'react';
import { FaRegEye } from "react-icons/fa";

export default function Projects() {
  return (
    <div className='container-fluid mt-8 '>
      <h2 className='text-center text-6xl font-serif'>Projects</h2>
      <div className="max-w-screen-lg mx-auto grid grid-cols-3 gap-6 place-content-between mt-20 cards">
        {/* Project Card 1 */}
        <div className='w-52 max-w-sm rounded overflow-hidden shadow-lg zoom animate-bounce'>
          <img className="w-full" src='https://github.com/Nni615/nni-coffeestand/blob/main/Images/bg.png?raw=true' alt="coffee-stand"/>
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">Coffee-Concept-Stand</div>
            <a href='https://github.com/Nni615/nni-coffeestand.git' className='block text-center mt-4 overlay'><FaRegEye className='icon'/></a>
          </div>
        </div>

        {/* Project Card 2 */}
        <div className='w-52 max-w-sm rounded overflow-hidden shadow-lg zoom1 animate-bounce'>
          <img className="w-full" src='https://i.ytimg.com/vi/pgB9x917ngE/maxresdefault.jpg' alt="coffee-stand"/>
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">Calculator</div>
            <a href='https://github.com/Nni615/ReactJS/tree/main/Calculator(Bootsrap%20and%20javascript)' className='block text-center mt-4 overlay1'><FaRegEye className='icon1'/></a>
          </div>
        </div>

        {/* Project Card 3 */}
        <div className='w-52 max-w-sm rounded overflow-hidden shadow-lg zoom2 animate-bounce'>
          <img className="w-full" src='https://github.com/Nni615/boutique.github.com.io/blob/main/images/pic-1.jpg?raw=true' alt="coffee-stand"/>
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">Boutique of India</div>
            <a href='https://github.com/Nni615/boutique.github.com.io' className='block text-center mt-4 overlay2'><FaRegEye className='icon2'/></a>
          </div>
        </div>
      </div>
    </div>
  );
}
