import React from 'react';
import { FaLightbulb } from 'react-icons/fa';

const SidebarMap = () => {
    return (
        <div className='flex flex-col'>
            <ul>
                <li>Lorem ipsum dolor sit amet.</li>
                <li>Lorem ipsum dolor sit amet.</li>
                <li>Lorem ipsum dolor sit amet.</li>
            </ul>

            <div className='m-auto p-3'>
                <button>
                    <FaLightbulb size={25} />
                </button>
            </div>
        </div>
    );
};

export default SidebarMap;
