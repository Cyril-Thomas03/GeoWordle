import React, { useState } from 'react';
import SidebarMap from './SidebarMap';
import SidebarGuesses from './SidebarGuesses';

const BoardLayoutSidebar = ({ correct_answer }) => {
    const [activeButton, setActiveButton] = useState('mapButton');

    const handleButtonClick = (buttonId) => {
        setActiveButton(buttonId);
    };

    return (
        <div className='w-96 shadow-xl m-auto mt-14 mx-2 md:w-80 text-white bg-[#5FA862] rounded-xl flex flex-col'>
            <ul className='flex flex-row text-xl'>
                <li className='flex-1'>
                    <button
                        id='mapButton'
                        className={`w-full h-full px-6 py-2 transition duration-700 ease-in-out ${
                            activeButton === 'mapButton'
                                ? 'active-button rounded-xl'
                                : ''
                        }`}
                        onClick={() => handleButtonClick('mapButton')}
                    >
                        Map
                    </button>
                </li>
                <li className='flex-1'>
                    <button
                        id='guessesButton'
                        className={`w-full h-full px-6 py-2 transition duration-700 ease-in-out ${
                            activeButton === 'guessesButton'
                                ? 'active-button rounded-xl'
                                : ''
                        }`}
                        onClick={() => handleButtonClick('guessesButton')}
                    >
                        Guesses
                    </button>
                </li>
            </ul>
            <div className='flex flex-1'>
                {activeButton === 'mapButton' ? (
                    <SidebarMap correct_answer={correct_answer} />
                ) : (
                    <SidebarGuesses />
                )}
            </div>
        </div>
    );
};

export default BoardLayoutSidebar;
