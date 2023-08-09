import React from 'react';
import { IconContext } from 'react-icons';
import { FaLightbulb } from 'react-icons/fa';

const SidebarGuesses = () => {
    return (
        <div className='flex flex-col flex-1'>
            <ul className='flex-auto list-decimal text-xl p-8 h-96'>
                <li>Lorem ipsum dolor sit amet.</li>
                <li>Lorem ipsum dolor sit amet.</li>
                <li>Lorem ipsum dolor sit amet.</li>
            </ul>

            <div className='m-auto my-5 p-3 self-end justify-self-end'>
                <div className='flex-end m-auto p-3 button-icon'>
                    <button className='p-2 rounded-lg flex items-center bg-red-600 hover:bg-red-700 active:bg-red-700 focus:outline-none focus:ring focus:ring-red-800 ease-in duration-100'>
                        <IconContext.Provider value={{ className: 'mr-2' }}>
                            <FaLightbulb size={20} />
                        </IconContext.Provider>
                        Get Hint
                    </button>
                </div>
            </div>
        </div>
    );
};

export default SidebarGuesses;
