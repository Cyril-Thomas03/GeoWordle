import React from 'react';
import { FaLightbulb } from 'react-icons/fa';

const SidebarMap = () => {
    return (
        <div className='flex flex-col p-6'>
            <ul className='list-decimal '>
                <li>Lorem ipsum dolor sit amet.</li>
                <li>Lorem ipsum dolor sit amet.</li>
                <li>Lorem ipsum dolor sit amet.</li>
            </ul>

            <div className='m-auto p-3 self-end justify-self-end'>
                <button>
                    <FaLightbulb size={25} />
                </button>
            </div>
        </div>
    );
};

export default SidebarMap;
