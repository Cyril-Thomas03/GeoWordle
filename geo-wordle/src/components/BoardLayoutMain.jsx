import React from 'react';
import { FaUser } from 'react-icons/fa';
import { IconContext } from 'react-icons';
import {
    StreetViewPanorama,
    GoogleMap,
} from '@react-google-maps/api';

const getDate = () => {
    return new Date().toLocaleDateString();
};

const BoardLayoutMain = () => {
    // TODO: GET LOCATION FROM API OR JS CODE
    const position = { lat: 37.7749, lng: -122.4194 }; // Example position (San Francisco)

    return (
        <div>
            <div className='text-3xl flex gap-3'>
                <IconContext.Provider value={{ color: '#006D38' }}>
                    <FaUser />
                </IconContext.Provider>
                <p>UserName (500)</p>
            </div>
            <GoogleMap
                mapContainerStyle={{ width: '100%', height: '400px' }}
                center={position}
                zoom={14}
            >
                <StreetViewPanorama position={position} visible />
            </GoogleMap>
            <p>Location for {getDate()}</p>
        </div>
    );
};

export default BoardLayoutMain;
