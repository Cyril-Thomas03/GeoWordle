import React from 'react';
import { FaUser } from 'react-icons/fa';
import { IconContext } from 'react-icons';

const BoardLayoutMain = () => {
    return (
        <div className='w-72'>
            <div className='text-3xl flex gap-3'>
                <IconContext.Provider value={{ color: '#006D38' }}>
                    <FaUser />
                </IconContext.Provider>
                <p>UserName (500) </p>
            </div>

            {/* TODO: MAP HERE */}

            <p>Location for [DAY]</p>
        </div>
    );
};

export default BoardLayoutMain;
