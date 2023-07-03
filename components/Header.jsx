"use client";

import { CustomButton } from ".";
import { BsArrowUpRight } from "react-icons/bs";
import Image from "next/image";
import { stats } from "./data";
import CountUp from "react-countup";

const Header = () => {
  return (
    <>
      <div className='container mx-auto flex py-8 2xl:pt-20 md:flex-row flex-col items-center'>
        <div className='lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col mb-16 md:mb-0'>
          <h1 className='text-3xl md:txet-4xl mb-4 font-bold text-slate-600 leading-[3rem] 2xl:leading-[4rem]'>
            KodeCraft Solutions
            <br />
           <span className='text-blue-700 text-5xl'>
              Building Your Digital Future
            </span>
          </h1>
          <p className='mb-8 leading-relaxed 2xl:mb-14 2xl:leading-[2rem]'>
            At KodeCraft Solutions, we are passionate about transforming ideas
            into innovative software solutions. With our team of expert
            developers, we specialize in crafting cutting-edge applications
            tailored to meet your unique business needs..
          </p>

          <div className='flex'>
            <CustomButton
              title='Get Started'
              containerStyles={`bg-[#3b81f5] text-white px-6 py-3 font-semibold text-lg rounded-md hover:bg-blue-800`}
              iconRight={<BsArrowUpRight size={22} />}
            />
          </div>
        </div>

        <div className='relative lg:max-w-xl md:w-1/2 w-full h-[400px] md:h-[500px] items-center justify-center flex'>
          <Image src='/hero.jpg' width={500} height={500} alt='KodeCraft' />

          <div className='absolute bg-white p-2 shadow-2xl rounded-lg left-0 top-6 flex items-center gap-2 cursor-pointer hover:scale-110 ease-in-out duration-300'>
            <div className='w-[42px] h-[42px] rounded-full'>
              <Image
                src='/tim.jpg'
                width={38}
                height={38}
                alt='Edward'
                className='rounded-full w-full h-full object-cover'
              />
            </div>

            <div>
              <p className='font-semibold'>Edward D. Morris</p>
              <span className='text-xs font-medium'>
                Senior Software Engineer
              </span>
            </div>
          </div>

          <div className='absolute bg-white p-2 shadow-2xl rounded-lg right-0 bottom-6 flex items-center gap-2 cursor-pointer hover:scale-110 ease-in-out duration-300'>
            <div className='w-[42px] h-[42px] rounded-full'>
              <Image
                src='/ellen.jpg'
                width={38}
                height={38}
                alt='Ellen'
                className='rounded-full w-full h-full object-cover'
              />
            </div>

            <div>
              <p className='font-semibold'>Judith M. Natale</p>
              <span className='text-xs font-medium'>Product Manager</span>
            </div>
          </div>
        </div>
      </div>

      <div className='w-full flex flex-col md:flex-row gap-16 items-center justify-between py-10 md:py-20'>
        {stats.map(({ id, value, title, start, suffix }) => (
          <CountUp
            start={start}
            end={value}
            delay={0}
            separator=''
            suffix={suffix}
            enableScrollSpy={true}
            key={id}
          >
            {({ countUpRef }) => (
              <div className='flex flex-col items-center justify-center border border-slate-300 w-[250px] h-[250px] rounded-lg'>
                <span
                  ref={countUpRef}
                  className='text-6xl text-orange-600 font-bold mb-3'
                />

                <span className='text-xl text-gray-600 font-semibold'>
                  {title}
                </span>
              </div>
            )}
          </CountUp>
        ))}
      </div>
    </>
  );
};

export default Header;
