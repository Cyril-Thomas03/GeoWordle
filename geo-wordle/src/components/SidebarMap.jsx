import React from 'react';
import { FaCheck } from 'react-icons/fa';
import { GoogleMap } from '@react-google-maps/api';

const SidebarMap = () => {
    const center = {
        lat: 15,
        lng: 17,
    };

    return (
        <div className='flex flex-col'>
            <p className='text-center mt-2'>Go more left</p>

            
                <GoogleMap
                    mapContainerStyle={{
                        width: '300px',
                        height: '300px',
                    }}
                    center={center}
                    zoom={1}
                >
                    {/* TODO: ADD MARKERS*/}
                    <></>
                </GoogleMap>

            <div className='m-auto p-3'>
                <button>
                    <FaCheck size={25} />
                </button>
            </div>
        </div>
    );
};

export default SidebarMap;
