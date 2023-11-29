import React, { useState } from 'react';

export const ContactCards = ({ hexcolor, social, socialDescription, socialLink,buttonDescription }) => {
  const [isButtonHovered, setIsButtonHovered] = useState(false);

  const handleButtonMouseEnter = () => {
    setIsButtonHovered(true);
  };

  const handleButtonMouseLeave = () => {
    setIsButtonHovered(false);
  };

  const buttonStyle = {
    backgroundColor: isButtonHovered ? hexcolor : 'transparent',
    borderColor: hexcolor,
  };

  return (
    <div className='font-rubik'>
      <div
        style={{ backgroundColor: hexcolor, borderColor: hexcolor }}
        className="border border-b w-80 md:w-96 h-[28rem] rounded-3xl overflow-hidden shadow-2xl animate-fade-up"
      >
        <div className="border border-b w-[24rem] h-[28rem] rounded-2xl bg-white my-3 p-14 -ml-5 md:ml-0 text-start">
          <h1 className="font-bold text-2xl w-full">{social}</h1>
          <p className="font-semibold opacity-40 py-9">{socialDescription}</p>

          <a href={socialLink} target="_blank">
          <button
            style={buttonStyle}
            className={`text-black font-semibold rounded-3xl p-2 w-full border hover:text-white hover:scale-110 transition duration-150 ease-in-out -ml-2 md:ml-0 `}
            onMouseEnter={handleButtonMouseEnter}
            onMouseLeave={handleButtonMouseLeave}
          >
            {buttonDescription}
          </button>
          </a>
        </div>
      </div>
    </div>
  );
};
