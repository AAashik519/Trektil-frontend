import React from 'react'
import Wrapper from '../Wrapper/Wrapper'
import Logo from '../../assets/trektill.png'
const Navbar = () => {
  return (
    <div className='bg-bgSecondary-400 '>
        <Wrapper>
        <nav className="flex items-center justify-between flex-wrap   py-4      ">
        <div className="flex justify-between lg:w-auto w-full   pl-6 pr-2 ">
          <div className="flex items-center flex-shrink-0 text-gray-800 mr-16">
            <a href="/">
              <img src={Logo} alt="" className="w-[70px] h-8" />
            </a>
          </div>
        </div>
    
        <div className="menu w-full flex-grow lg:flex lg:items-center lg:w-auto lg:px-3 px-8 mt-2 hidden md:visible">
          <div className="text-md     lg:flex-grow">
            <a
              href="#responsive-header"
              className=" text-xl text-[#0077EC] font-medium mt-4 px-4 py-2 rounded   mr-2"
            >
            Home
            </a>
            <a
              href="#responsive-header"
              className=" text-xl text-[#504F4E] font-medium  mt-4 px-4 py-2 rounded  mr-2"
            >
             About
            </a>
            <a
              href="#responsive-header"
              className=" text-xl text-[#504F4E] font-medium   mt-4 px-4 py-2 rounded  mr-2"
            >
            Help
            </a>
          </div>
          {/* This is an example component */}

          <div className="flex ">
            <a
              href="#"
              className="text-xl text-[#504F4E] font-medium px-4 py-2     ml-2  mt-4  lg:mt-0"
            >
              Sign Up
            </a>
            <a
              href="#"
              className=" text-xl text-white font-medium  bg-[#0077EC] text-md px-6 py-2 flex items-center  rounded-[100px]  "
            >
              Login
            </a>
          </div>
        </div>
      </nav>
        </Wrapper>
    </div>
  )
}

export default Navbar