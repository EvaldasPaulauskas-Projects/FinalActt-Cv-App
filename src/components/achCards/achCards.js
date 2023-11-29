const AchCards = ({ gameName, gameDescription, gamePlacement, gameRotation , gameLink,gameImageLink}) => {    
    const cardStyle = {
        transform: `rotate(${gameRotation}deg)`,
    };

    return (
        <div style={cardStyle} className="font-silkscreen">
            {/* This div is only available for desktops */}
            <div 
              style={{
                backgroundImage: `url('${gameImageLink}')`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat : 'no-repeat',
              }}

             className="hidden md:block lg:block bg-red-200 w-72 h-72 mr-14 -translate-x-20 translate-y-10 absolute z-10 rounded-3xl"></div>

            <div className="bg-white border border-black shadow-2xl md:w-[42rem] w-full rounded-3xl text-[#27234c] relative overflow-hidden flex justify-center items-center py-8">
                <ul className="w-full md:w-96 ml-0 md:ml-48 flex flex-col text-start gap-8 p-2">
                    {/* This list item is only available for tablets to mobiles */}
                    <li className="block md:hidden lg:hidden py-2">
                        <div 
                        style={{
                            backgroundImage: `url('${gameImageLink}')`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                            backgroundRepeat : 'no-repeat',
                        }}
                        className="bg-red-200 w-full h-72 rounded-xl border border-b-8 border-black">
                        </div>
                    </li>

                    <li className="text-center md:text-left"> 
                        <h1 className="font-bold">{gameName}</h1>
                    </li>
                    <li className="text-center md:text-left"> 
                        <p className="opacity-80 text-sm">{gameDescription}</p>
                    </li>
                    <li className="text-center md:text-left"> 
                        <h1 className="font-bold text-xl text-center text-blue-400">Placement In Jam: {gamePlacement}</h1>
                    </li>
                    <li className="text-center md:text-left"> 
                    <a href={gameLink} target="_blank"> 
                        <button className="border border-b-2 border-black rounded-xl p-2 hover:scale-110 transition-all duration-400 ease-in-out hover:bg-black hover:text-white">
                            Play The Full Game Here
                        </button>
                    </a>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default AchCards;
