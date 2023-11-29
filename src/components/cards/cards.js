import React, { useState, useEffect } from 'react';

export const Cards = () => {
  const [codingLanguage, setCodingLanguage] = useState('');
  const [codingStatus, setCodingStatus] = useState('');
  const [isMobileOrTablet, setIsMobileOrTablet] = useState(window.innerWidth < 1024);

  useEffect(() => {
    const handleResize = () => {
      setIsMobileOrTablet(window.innerWidth < 1024);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const handleButtonClick = (newLanguage, newStatus) => {
    setCodingLanguage(newLanguage);
    setCodingStatus(newStatus);
  };

  const gapSize = isMobileOrTablet ? '4' : '12';

  return (
    <div className={`flex ${isMobileOrTablet ? 'flex-col pb-56' : 'flex-row'} justify-center items-center gap-32 md:gap-${gapSize} pr-1 animate-jump-in `}>
      <div className={`w-full md:w-[38rem] h-[26rem] bg-vs-code bg-cover bg-no-repeat p-16 px-4 md:py-16 md:px-18 flex flex-col gap-4 `}>
        <h1 className="text-lg md:text-2xl">const evaldasSkills = [</h1>
        <h1 className="text-lg md:text-2xl">"codingLanguage : "{codingLanguage}",</h1>
        <h1 className="text-lg md:text-2xl">"codingLevel" : "{codingStatus}"</h1>
        <h1 className="text-lg md:text-2xl">};</h1>
      </div>

      <div className="">
        <div className={`w-72 flex flex-row flex-wrap gap-${gapSize} justify-center`}>
          <h1 className="text-white text-2xl text-center">Coding Knowledge Selector : </h1>
          <button
            className="w-16 h-16 bg-c bg-cover hover:scale-125 hover:border-white bg-slate-700 border-2 border-slate-500 hover:animate-pulse"
            onClick={() => handleButtonClick('C++', 'Advanced Beginner')}
          ></button>

          <button
            className="w-16 h-16 bg-c-sharp bg-cover hover:scale-125 hover:border-white bg-slate-700 border-2 border-slate-500 hover:animate-pulse"
            onClick={() => handleButtonClick('C#', 'Proficient')}
          ></button>

          <button
            className="w-16 h-16 bg-python bg-cover hover:scale-125 hover:border-white bg-slate-700 border-2 border-slate-500 hover:animate-pulse"
            onClick={() => handleButtonClick('Python', 'Advanced Beginner')}
          ></button>

          <button
            className="w-16 h-16 bg-css-3 bg-cover hover:scale-125 hover:border-white bg-slate-700 border-2 border-slate-500 hover:animate-pulse"
            onClick={() => handleButtonClick('CSS', 'Proficient')}
          ></button>

          <button
            className="w-16 h-16 bg-html-5 bg-cover hover:scale-125 hover:border-white bg-slate-700 border-2 border-slate-500 hover:animate-pulse"
            onClick={() => handleButtonClick('HTML', 'Proficient')}
          ></button>

          <button
            className="w-16 h-16 bg-js bg-cover hover:scale-125 hover:border-white bg-slate-700 border-2 border-slate-500 hover:animate-pulse"
            onClick={() => handleButtonClick('Java Script', 'Competent')}
          ></button>
          
          <button
            className="w-16 h-16 bg-react bg-cover hover:scale-125 hover:border-white bg-slate-700 border-2 border-slate-500 hover:animate-pulse"
            onClick={() => handleButtonClick('React', 'Competent')}
          ></button>

          <button
            className="w-16 h-16 bg-mongodb bg-cover hover:scale-125 hover:border-white bg-slate-700 border-2 border-slate-500 hover:animate-pulse"
            onClick={() => handleButtonClick('mongodb', 'Novice')}
          ></button>

          <button
            className="w-16 h-16 bg-sql bg-cover hover:scale-125 hover:border-white bg-slate-700 border-2 border-slate-500 hover:animate-pulse"
            onClick={() => handleButtonClick('sql', 'Novice')}
          ></button>
        </div>
      </div>
    </div>
  );
};
