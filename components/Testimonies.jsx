"use client";
import React, { useEffect } from "react";
import { reviews } from "./data";
import Image from "next/image";
import { AiFillStar } from "react-icons/ai";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";

const Testimonies = () => {
  const option = {
    rewind: true,
    rewindSpeed: 1000,
    autoplay: true,
    autoplayTimeout: 10000,
    autoplayHoverPause: true,
    arrows: true,

    perPage: 3,
    width: "100%",
    breakpoints: {
      640: { perPage: 1, arrows: false },
    },
  };

  return (
    <div className='container px-5 py-20 mx-auto'>
      <div className=''>
        <h1 className='text-3xl nd:text-2xl font-semibold mb-4'>
          What do they say about us
        </h1>
        <p className='text-gray-500 leading-relaxed text-base'>
          Lots of comments about us, here's what theysaid.
        </p>
      </div>

      <div className='flex w-full py-10'>
        <Splide options={option} aria-label='React Splide Example'>
          {reviews.map(({ id, name, image, rating, review }) => (
            <SplideSlide key={id + name} className='p-4 w-full h-74 md:h-64'>
              <div className='w-full h-full'>
                <div className='bg-white p-4 h-full shadow-xl rounded-xl'>
                  <div className='flex gap-3 items-center'>
                    <Image
                      src={image}
                      alt={name}
                      width={48}
                      height={48}
                      className='rounded-full w-14 h-14 object-cover'
                    />
                    <div>
                      <div className='flex text-[#fe5000] text-lg'>
                        {Array(Math.ceil(rating))
                          .fill()
                          .map((val, idx) => (
                            <AiFillStar key={idx} />
                          ))}
                      </div>
                      <p>{rating?.toFixed(1)}</p>
                    </div>
                  </div>

                  <div className='w-full  flex flex-grow flex-col gap-2 py-2'>
                    <p className='text-xl font-semibold '>{name}</p>
                    <span className=''>" {review.slice(0, 155)}</span>
                  </div>
                </div>
              </div>
            </SplideSlide>
          ))}
        </Splide>
      </div>
    </div>
  );
};

export default Testimonies;
