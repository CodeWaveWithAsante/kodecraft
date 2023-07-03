"use client";

import { CustomButton } from "@/components";
import { HiMenuAlt3 } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";
import { useState } from "react";
import { BsCode, BsCodeSquare } from "react-icons/bs";
import { FaCode } from "react-icons/fa";

const Navbar = () => {
  const [openNav, setOpenNav] = useState(false);

  const handleClose = () => {
    setOpenNav((prev) => !prev);
  };

  return (
    <header className='text-gray-700 border-b border-gray-200'>
      <nav className='container mx-auto flex p-5 flex-row justify-between'>
        <a
          className='flex title-font font-medium items-center text-gray-900 mb-2 md:mb-0'
          href='/'
          target='_blank'
        >
          <FaCode className='w-10 h-10 text-white p-2 bg-blue-500 rounded-full text-lg' />

          <span className='ml-3 text-xl'>KodeCraft</span>
        </a>

        <ul className='hidden md:flex gap-6 items-center text-base justify-center'>
          <li>
            <a href='#home' className='hover:text-blue-700 hover:text-semibold'>
              Home
            </a>
          </li>
          <li>
            <a
              href='#about'
              className='hover:text-blue-700 hover:text-semibold'
            >
              About Us
            </a>
          </li>
          <li>
            <a
              href='#services'
              className='hover:text-blue-700 hover:text-semibold'
            >
              Services
            </a>
          </li>
          <li>
            <a href='#team' className='hover:text-blue-700 hover:text-semibold'>
              Team
            </a>
          </li>
          <li>
            <a
              href='#contact'
              className='hover:text-blue-700 hover:text-semibold'
            >
              Contact
            </a>
          </li>
        </ul>

        <div className='hidden md:block'>
          <CustomButton
            title='Register'
            containerStyles={`text-white py-1.5 px-5 focus:outline-none bg-blue-600 hover:bg-blue-700 rounded-full text-base`}
          />
        </div>

        <button
          className='block md:hidden text-slate-800'
          onClick={() => setOpenNav((prev) => !prev)}
        >
          {openNav ? <AiOutlineClose size={26} /> : <HiMenuAlt3 size={26} />}
        </button>
      </nav>

      <div
        className={`${
          openNav ? "flex" : "hidden"
        } container mx-auto md:hidden flex-col pl-8 gap-3 pb-5 transition-all ease-in-out duration-300`}
      >
        <a
          href='#'
          onClick={handleClose}
          className='hover:text-blue-700 hover:text-semibold'
        >
          Home
        </a>

        <a
          href='#about'
          onClick={handleClose}
          className='hover:text-blue-700 hover:text-semibold'
        >
          About Us
        </a>

        <a
          href='#services'
          onClick={handleClose}
          className='hover:text-blue-700 hover:text-semibold'
        >
          Service
        </a>

        <a
          href='#team'
          onClick={handleClose}
          className='hover:text-blue-700 hover:text-semibold'
        >
          Team
        </a>

        <a
          href='#contact'
          onClick={handleClose}
          className='hover:text-blue-700 hover:text-semibold'
        >
          Contact
        </a>
      </div>
    </header>
  );
};

export default Navbar;
