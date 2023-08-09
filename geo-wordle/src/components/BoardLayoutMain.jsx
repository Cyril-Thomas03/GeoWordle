import React from 'react';
import { FaUser } from 'react-icons/fa';
import { IconContext } from 'react-icons';
import { StreetViewPanorama, GoogleMap } from '@react-google-maps/api';

const getDate = () => {
    return new Date().toLocaleDateString();
};

const BoardLayoutMain = () => {
    // TODO: GET LOCATION FROM API OR JS CODE
    const position = { lat: 37.7749, lng: -122.4194 }; // Example position (San Francisco)

    return (
        <div className='md:w-4/6 m-8 md:my-6 md:mx-0'>
            <div className='text-3xl flex gap-3'>
                <IconContext.Provider value={{ color: '#006D38' }}>
                    <FaUser />
                </IconContext.Provider>
                <p>UserName (500)</p>
            </div>

            <div className='main-map w-full '>
                <GoogleMap
                    mapContainerStyle={{ width: '100%', height: '100%' }}
                    center={position}
                    zoom={14}
                >
                    <StreetViewPanorama position={position} visible />
                </GoogleMap>
            </div>

            <p>Location for {getDate()}</p>
        </div>
    );
};

export default BoardLayoutMain;
