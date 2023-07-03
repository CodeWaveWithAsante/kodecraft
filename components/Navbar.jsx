"use client";
import React, { useState } from "react";
import { BsCode, BsCodeSquare } from "react-icons/bs";
import { FaCode } from "react-icons/fa";
import { HiMenuAlt3 } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";
import Link from "next/link";
import { CustomButton } from ".";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleCloseNavbar = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <header className='text-gray-700 border-b border-gray-200'>
      <nav className='container mx-auto flex p-5 flex-row justify-between'>
        <Link
          href='/'
          className='flex font-medium items-center text-gray-900 mb-2 md:mb-0'
        >
          <FaCode className='w-10 h-10 text-white p-2 bg-blue-500 rounded-full text-lg' />
          <span className='ml-3 text-xl'>KodeCraft</span>
        </Link>

        <ul className='hidden md:flex gap-6 items-center text-base justify-center'>
          <li>
            <Link
              href={"#home"}
              className='hover:text-blue-600 hover:text-cemibold'
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href={"#about"}
              className='hover:text-blue-600 hover:text-cemibold'
            >
              About Us
            </Link>
          </li>
          <li>
            <Link
              href={"#services"}
              className='hover:text-blue-600 hover:text-cemibold'
            >
              Services
            </Link>
          </li>

          <li>
            <Link
              href={"#team"}
              className='hover:text-blue-600 hover:text-cemibold'
            >
              Team
            </Link>
          </li>
          <li>
            <Link
              href={"#contact"}
              className='hover:text-blue-600 hover:text-cemibold'
            >
              Contact us
            </Link>
          </li>
        </ul>

        <div className='hidden md:block'>
          <CustomButton
            title='Register'
            containerStyles={`text-white py-1.5 px-5 focus:outline-none bg-blue-600 hover:bg-blue-700 rounded-full text-base`}
          />
        </div>

        <button
          className='block md:hidden text-slate-900'
          onClick={() => setIsOpen((prev) => !prev)}
        >
          {isOpen ? <AiOutlineClose size={26} /> : <HiMenuAlt3 size={26} />}
        </button>
      </nav>

      {/* MOBILE MENU */}
      <div
        className={`${
          isOpen ? "flex" : "hidden"
        } container mx-auto md:hidden flex-col pl-8 gap-3 pb-5`}
      >
        <Link href='#home' onClick={handleCloseNavbar}>
          Home
        </Link>
        <Link href='#about' onClick={handleCloseNavbar}>
          About Us
        </Link>
        <Link href='#services' onClick={handleCloseNavbar}>
          Services
        </Link>
        <Link href='#team' onClick={handleCloseNavbar}>
          Team
        </Link>
        <Link href='#contact' onClick={handleCloseNavbar}>
          Contact Us
        </Link>
      </div>
    </header>
  );
};

export default Navbar;
