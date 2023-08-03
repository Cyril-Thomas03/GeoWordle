import React, { useState } from 'react';
import SidebarMap from './SidebarMap';
import SidebarGuesses from './SidebarGuesses';

const BoardLayoutSidebar = () => {
    const [activeButton, setActiveButton] = useState('mapButton');

    const handleButtonClick = (buttonId) => {
        setActiveButton(buttonId);
    };

    return (
        <div className='text-white bg-[#5FA862] w-64 rounded flex flex-col'>
            <ul className='flex flex-row text-xl'>
                <li className='flex-1'>
                    <button
                        id='mapButton'
                        className={`w-full h-full p-2 transition duration-300 ease-in-out ${
                            activeButton === 'mapButton' ? 'active-button' : ''
                        }`}
                        onClick={() => handleButtonClick('mapButton')}
                    >
                        Map
                    </button>
                </li>
                <li className='flex-1'>
                    <button
                        id='guessesButton'
                        className={`w-full h-full p-2 transition duration-300 ease-in-out ${
                            activeButton === 'guessesButton'
                                ? 'active-button'
                                : ''
                        }`}
                        onClick={() => handleButtonClick('guessesButton')}
                    >
                        Guesses
                    </button>
                </li>
            </ul>

            {activeButton === 'mapButton' ? <SidebarMap /> : <SidebarGuesses />}
        </div>
    );
};

export default BoardLayoutSidebar;
