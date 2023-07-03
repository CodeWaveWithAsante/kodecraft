"use client";
import React, { useState } from "react";

const Card = ({ title, text, icon }) => {
  const [showFull, setShowFull] = useState(false);

  const toggleDescription = () => {
    setShowFull((prev) => !prev);
  };

  const cardClasses = `w-full h-64 bg-[#001a36] border bordergray-400 rounded-lg shadow-md p-4 py-6 hover:scale-y-125 hover:pb-8 ease-in-out duration-300 hover:my-2 hover:h-auto`;

  return (
    <div
      className={cardClasses}
      onMouseEnter={toggleDescription}
      onMouseLeave={toggleDescription}
    >
      <div
        className={`flex items-center justify-center ${
          showFull ? "scale-x-125 ease-in-out duration-300 " : ""
        } `}
      >
        {icon}
      </div>
      <h2 className='text-xl font-semibold mt-4 text-white '>{title}</h2>

      <div className='mt-4 text-gray-300 text-[14px] '>
        <p>{showFull ? text : text.slice(0, 100)}</p>
      </div>
    </div>
  );
};

export default Card;
