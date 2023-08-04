import React from 'react';
import { FaUser } from 'react-icons/fa';
import { IconContext } from 'react-icons';
import {
    GoogleMap,
    StreetViewPanorama,
    LoadScript,
} from '@react-google-maps/api';

const getDate = () => {
    return new Date().toLocaleDateString();
};

const BoardLayoutMain = () => {
    // TODO: GET LOCATION FROM API OR JS CODE
    const center = {
        lat: 20,
        lng: 10.270052,
    };

    const containerStyle = {
        width: '100%',
        height: '400px',
    };

    const pov = {
        heading: 0,
        pitch: 0,
    };

    const lib = ['places'];

    return (
        <div>
            <div className='text-3xl flex gap-3'>
                <IconContext.Provider value={{ color: '#006D38' }}>
                    <FaUser />
                </IconContext.Provider>
                <p>UserName (500)</p>
            </div>

            <LoadScript
                googleMapsApiKey='AIzaSyBwAlszaTjlaVEZlga0-FMwRPgWFwMLKjc'
                libraries={lib}
            >
                <GoogleMap
                    mapContainerStyle={containerStyle}
                    center={center}
                    zoom={10}
                >
                    <StreetViewPanorama
                        id='street-view'
                        mapContainerStyle={containerStyle}
                        position={center}
                        visible={true}
                    />
                </GoogleMap>
            </LoadScript>

            <p>Location for {getDate()}</p>
        </div>
    );
};

export default BoardLayoutMain;
