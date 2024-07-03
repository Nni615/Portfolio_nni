import React from 'react';
export default function Header() {
  
  return (
    <nav className="lg:px-16 px-6 bg-white shadow-md flex flex-wrap items-center lg:py-0 py-2">
    <div className="flex-1 flex justify-between items-center">
      <a href="#" className="flex text-lg font-semibold">
        <div className="mt-3 text-gray-600 text-5xl">Portfolio</div>
      </a>
    </div>
    <label for="menu-toggle" className="cursor-pointer lg:hidden block">
      <svg className="fill-current text-gray-900" width="20" height="20" viewBox="0 0 20 20">
        <title>menu</title>
        <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
      </svg>
    </label>
    <input className="hidden" type="checkbox" id="menu-toggle" />
    <div className="hidden lg:flex lg:items-center lg:w-auto w-full" id="menu">
      <nav>
        <ul className="text-xl text-center items-center gap-x-5 pt-4 md:gap-x-4 lg:text-lg lg:flex  lg:pt-0">
          <li className="py-2 lg:py-0 ">
            <a className="text-gray-600 hover:pb-2 hover:border-b-4 hover:border-yellow-400" href="#">
              Home
            </a>
          </li>
          <li className="py-2 lg:py-0 ">
            <a className="text-gray-600 hover:pb-2 hover:border-b-4 hover:border-yellow-400" href="#">
              About
            </a>
          </li>
          <li className="py-2 lg:py-0 ">
            <a className="text-gray-600 hover:pb-2 hover:border-b-4 hover:border-yellow-400" href="#">
              Skills
            </a>
          </li>
          <li className="py-2 lg:py-0 ">
            <a className="text-gray-600 hover:pb-2 hover:border-b-4 hover:border-yellow-400" href="#">
              Projects
            </a>
          </li>
          <li className="py-2 lg:py-0 ">
            <a className="text-gray-600 hover:pb-2 hover:border-b-4 hover:border-yellow-400" href="#">
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </div>
  </nav>
  )

}
