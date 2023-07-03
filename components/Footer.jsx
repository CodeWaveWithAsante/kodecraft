import Link from "next/link";
import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";
import { CustomButton, TextInput } from ".";
import { FiInstagram } from "react-icons/fi";
import { footerLinks } from "./data";

const Footer = () => {
  return (
    <footer className='text-gray-700 body-font'>
      <div className='container px-5 py-24 mx-auto'>
        <div className='w-full flex flex-wrap gap-10 justify-between -mb-10 -mx-4'>
          {footerLinks.map(({ id, title, links }) => (
            <div className='w-auto px-4'>
              <h2 className='font-semibold text-gray-900 tracking-widest text-sm mb-3'>
                {title}
              </h2>
              <div className='list-none mb-10 flex flex-col gap-3'>
                {links.map((link, index) => (
                  <Link
                    href='#'
                    key={index}
                    className='text-gray-900 hover:text-gray-700'
                  >
                    {link}
                  </Link>
                ))}
              </div>
            </div>
          ))}
          <div className='w-auto px-4'>
            <h2 className='font-semibold text-gray-900 tracking-widest text-sm mb-3'>
              Get in Touch
            </h2>
            <div className='mb-10 flex flex-col gap-3 text-gray-900'>
              <p>+91 7987 464 867</p>
              <p>support@kodecraft.com</p>
            </div>
          </div>
        </div>
      </div>

      <div className=' border-t border-gray-200 py-4'>
        <p className='container px-5 mx-auto text-gray-500 mt-2'>
          Subscribe to our Newsletter
        </p>

        <div className='container mx-auto px-5 pt-6 pb-8 flex flex-wrap  items-center justify-between'>
          <div className='w-full md:w-2/4 lg:w-1/3 flex justify-center md:justify-start '>
            <TextInput
              styles='w-full flex-grow md:w-40 bg-gray-100 sm:mr-4 mr-2'
              placeholder='Email address'
              type='text'
            />

            <CustomButton
              title='Subscribe'
              containerStyles={`block bg-[#3b81f5] text-white px-6 py-2.5 text-md rounded hover:bg-blue-800 focus:outline-none flex-col items-center`}
            />
          </div>

          <span className='inline-flex lg:ml-auto lg:mt-0 mt-6 w-full justify-center md:justify-start md:w-auto'>
            <a className='text-gray-500 text-xl hover:text-blue-600 hover:scale-125 ease-in-out duration-300'>
              <FaFacebookF />
            </a>
            <a className='ml-3 text-gray-500 text-xl hover:text-blue-500 hover:scale-125 ease-in-out duration-300'>
              <FaTwitter />
            </a>
            <a className='ml-3 text-gray-500 text-xl hover:text-pink-600 hover:scale-125 ease-in-out duration-300'>
              <FiInstagram />
            </a>

            <a className='ml-3 text-gray-500 text-xl hover:text-blue-600 hover:scale-125 ease-in-out duration-300'>
              <FaLinkedinIn />
            </a>
          </span>
        </div>
      </div>

      <div className='bg-[#001a36]'>
        <div className='container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row'>
          <p className='text-gray-300 text-sm text-center sm:text-left'>
            &copy; 2023 KodeCraft Solutions —
            <Link
              href='https://youtube.com/@CodeWaveWithAsante'
              className='text-[#1199e7] ml-1'
              target='_blank'
              rel='noopener noreferrer'
            >
              @CodeWave
            </Link>
          </p>

          <span className='sm:ml-auto sm:mt-0 mt-2 sm:w-auto w-full sm:text-left text-center text-gray-300 text-sm'>
            Designed by CodeWave
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
