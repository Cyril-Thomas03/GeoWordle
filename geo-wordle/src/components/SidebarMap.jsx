import React from 'react';
import { FaCheck } from 'react-icons/fa';
import { IconContext } from 'react-icons';
import { GoogleMap } from '@react-google-maps/api';

const SidebarMap = () => {
    const center = {
        lat: 15,
        lng: 17,
    };

    return (
        <div className='flex flex-col flex-1 '>
            <p className='text-center mt-8 text-lg'>Go more left</p>

            <div className='p-3 h-96'>
                <GoogleMap
                    mapContainerStyle={{
                        width: '100%',
                        height: '100%',
                    }}
                    center={center}
                    zoom={1}
                >
                    {/* TODO: ADD MARKERS*/}
                </GoogleMap>
            </div>

            <div className='flex-end m-auto p-3 button-icon'>
                <button className='p-2 rounded-lg flex items-center bg-red-600 hover:bg-red-700 active:bg-red-700 focus:outline-none focus:ring focus:ring-red-800 ease-in duration-100'>
                    <IconContext.Provider value={{ className: 'mr-2' }}>
                        <FaCheck size={20} />
                    </IconContext.Provider>
                    Check Answer
                </button>
            </div>
        </div>
    );
};

export default SidebarMap;
