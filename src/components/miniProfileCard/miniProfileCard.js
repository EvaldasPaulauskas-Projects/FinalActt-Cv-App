import React from "react";

export const MiniProfileCard = ({pfpLink,username,pageName,backgroundImageLink,profileLink}) => {
    return(
        <div className="">
            <div className="w-72 h-80 rounded-3xl bg-white overflow-hidden border border-black shadow-2xl flex flex-col justify-center items-center gap-4 hover:scale-105 pb-4">

                <div 
                style={{
                    backgroundImage: `url('${backgroundImageLink}')`,
                    backgroundSize : '50px 50px',
                }}

                className=" bg-blue-500 w-full h-40 relative -translate-y-28">

                    <div className=" h-80 flex flex-col justify-center items-center translate-y-14 gap-4 text-center">
                        <div 
                        style={{
                            backgroundImage: `url('${pfpLink}')`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                        }}

                        className=" bg-black w-24 h-24 rounded-full"></div>
                        <h1 className="w-full font-bold">{username}</h1>
                        <p className="w-full opacity-50">{pageName}</p>
                        <a href={profileLink} target="_blank">
                            <button className="border border-1 border-black rounded-xl p-2 hover:scale-105 hover:font-semibold">Visit Profile</button>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}