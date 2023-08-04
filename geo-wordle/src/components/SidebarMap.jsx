import React from 'react';
import { FaCheck } from 'react-icons/fa';

const SidebarMap = () => {
    return (
        <div className='flex flex-col'>
            <p className='text-center mt-2'>Go more left</p>
            {/* TODO: INSERT MINI-MAP HERE */}

            <div className='m-auto p-3'>
                <button>
                    <FaCheck size={25} />
                </button>
            </div>
        </div>
    );
};

export default SidebarMap;
