import React, { useState, useEffect } from 'react';

import AchCards from "../../components/achCards/achCards";
import { MiniProfileCard } from '../../components/miniProfileCard/miniProfileCard';

export const Projects = () =>{
    const [isMobileOrTablet, setIsMobileOrTablet] = useState(window.innerWidth < 1024);
    
    // Check mouseOver
    const [mouseOver, setmouseOver] = useState(false); // initiate it at false
    const [mouseOver2, setmouseOver2] = useState(false); // initiate it at false

    useEffect(() => {
        const handleResize = () => {
          setIsMobileOrTablet(window.innerWidth < 1024);
        };
    
        window.addEventListener('resize', handleResize);
    
        return () => {
          window.removeEventListener('resize', handleResize);
        };
    }, []);
    
    return(
        <div>
            <div className="translate-y-28 w-full text-center text-2xl font-bold font-silkscreen">
                <h1>🏆 My Achievements 🏆</h1>
            </div>

            <div className="flex flex-col justify-center items-center translate-y-12 my-36 gap-16 animate-fade">
                <AchCards
                gameName={"Beep! Beep! Boom!"}
                gameDescription={"Embark on the ride of a lifetime in 'Beep! Beep! Boom' – the endless driving game where honking speeds you up, but one crash sends you flying! Navigate the chaos, honk wisely, and see how far you can go in this adrenaline-packed joyride!"}
                gamePlacement={"1st Place ! 🏆"} 
                gameRotation={isMobileOrTablet ? 0 : 12}
                gameLink={"https://final-act.itch.io/beep-beep-boom"}
                gameImageLink={"https://img.itch.zone/aW1hZ2UvMjM3NDQxMC8xNDA2MTE3MC5wbmc=/original/0Yzz3D.png"}
                />
                
                <AchCards
                gameName={"Upside Downside"} 
                gameDescription={"This game is about a where you get the keys are already there in the level so you need to go and collect them "}
                gamePlacement={"2nd Place ! 🏆"} 
                gameRotation={isMobileOrTablet ? 0 : -12}
                gameLink={"https://final-act.itch.io/upside-downside"}
                gameImageLink={"https://img.itch.zone/aW1hZ2UvMTI4Njk5NS83NDg4NDUwLmdpZg==/original/JZeltX.gif"}
                />                
            </div>

            <div className="w-full text-center text-3xl font-bold font-rubik uppercase pt-2 py-2 pb-24 ">
                <h1> All my games / projects can be found here </h1>
            </div>

            <div className='w-full flex justify-center items-center flex-col gap-24 sm:flex-row z-40 pb-[15rem] md:pb-4 '>
                
                <div className='animate-fade-right' 
                onMouseEnter={() => setmouseOver(true)}
                onMouseLeave={() => setmouseOver(false)}
                >
                <MiniProfileCard
                pfpLink={"https://img.itch.zone/aW1nLzE0MTQzNTQ1LnBuZw==/100x100%23/dzylH6.png"}
                username={"Final Act"}
                pageName={"Itch.io"}
                backgroundImageLink={"https://cdn2.steamgriddb.com/thumb/8a675ddedd719b13c12f2954886ab6b2.jpg"}
                profileLink={"https://final-act.itch.io/"}
                />
                </div>

                <div className='animate-fade-left'
                onMouseEnter={() => setmouseOver2(true)}
                onMouseLeave={() => setmouseOver2(false)}
                >
                <MiniProfileCard
                pfpLink={"https://avatars.githubusercontent.com/u/146879702?s=400&u=b378f1d127a5f776bc73ea9f7323b408f1f6d37b&v=4"}
                username={"FinalActt"}
                pageName={"Github"}
                backgroundImageLink={"https://seeklogo.com/images/G/github-logo-2E3852456C-seeklogo.com.png"}
                profileLink={"https://github.com/FinalActt"}
                />
                </div>

                <div className={`absolute w-full h-[76rem] md:h-[30rem] md:h-96 -z-10 
                ${mouseOver2 ? 'bg-black' : mouseOver ? 'bg-[#fa5c5b]' : 'bg-transparent'} 
                transition-all duration-300 ease-in-out`}
                ></div>

            </div>

        </div>
    );
};