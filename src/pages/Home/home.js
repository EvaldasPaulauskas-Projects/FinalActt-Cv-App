import React from "react";
import { Cards } from "../../components/cards/cards";
import { Link } from "react-router-dom";

export const Home = () => {
  const handleLinkClick = (path) => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
    window.location.href = path; // Manually navigate to the specified route
  };

  return (
    <div>
      <div className="w-full h-[38rem] bg-homeGif bg-center bg-cover  bg-no-repeat flex flex-col justify-center items-center gap-12 bg-black text-white text-center animate-fade-up
">
        <h1 className="text-6xl lg:text-5xl md:text-4xl sm:text-4xl xs:text-4xl font-rubik">
          HI I'm Evaldas !
        </h1>
        <h2 className="text-2xl lg:text-xl md:text-lg sm:text-lg xs:text-lg font-silkscreen">
          Full Stack Developer / A Unity 2D/3D Game Developer Hobbyist
        </h2>

        <Link to="/projects" onClick={() => handleLinkClick("/projects")}>
        <button className="font-silkscreen transition-all duration-400 ease-in-out bg-transparent border-2 hover:bg-red-500 hover:border-0 hover:scale-125 text-white font-bold py-2 px-4 rounded-full">
          See my projects here !
        </button>
        </Link>
      </div>

      <div className="w-full h-24 border-4 flex justify-center items-center font-rubik uppercase text-3xl">
        <h1>▼ About Me ▼</h1>
      </div>

      <div className="w-full py-20 homeBackground flex items-center justify-center font-silkscreen text-green-400 ">
        <Cards />
      </div>
    </div>
  );
};
