"use client";

import React, { useState } from "react";

const Card = ({ title, text, icon }) => {
  const [showFullDescription, setShowFullDescription] = useState(false);

  const toggleDescription = () => {
    setShowFullDescription((prev) => !prev);
  };

  const cardClassName = `w-full h-64 bg-[#001a36] border border-gray-400 rounded-lg shadow-md p-4 py-6 hover:scale-y-125 hover:pb-8 transition  ease-in-out duration-300 hover:my-2 hover:h-auto`;

  return (
    <div
      className={cardClassName}
      onMouseEnter={toggleDescription}
      onMouseLeave={toggleDescription}
    >
      <div
        className={`flex items-center justify-center ${
          showFullDescription ? "scale-x-125" : ""
        }`}
      >
        {icon}
      </div>
      <h2 className='text-xl font-semibold mt-4 text-white'>{title}</h2>
      <div className='mt-4 text-gray-300 text-[14px]'>
        <p>{showFullDescription ? text : text?.slice(0, 100)}</p>
      </div>
    </div>
  );
};

export default Card;
