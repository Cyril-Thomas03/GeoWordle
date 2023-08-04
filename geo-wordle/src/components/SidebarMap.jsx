import React from 'react';
import { FaCheck } from 'react-icons/fa';
import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';

const SidebarMap = () => {
    const center = {
        lat: 0,
        lng: 0,
    };

    const { isLoaded } = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: 'AIzaSyBwAlszaTjlaVEZlga0-FMwRPgWFwMLKjc',
    });

    const [map, setMap] = React.useState(null);

    const onLoad = React.useCallback(function callback(map) {
        // TODO: This is just an example of getting and using the map instance!!! don't just blindly copy!
        const bounds = new window.google.maps.LatLngBounds();
        map.fitBounds(bounds);

        setMap(map);
    }, []);

    const onUnmount = React.useCallback(function callback(map) {
        setMap(null);
    }, []);

    return (
        <div className='flex flex-col'>
            <p className='text-center mt-2'>Go more left</p>

            {isLoaded ? (
                <GoogleMap
                    mapContainerStyle={{
                        width: '300px',
                        height: '300px',
                    }}
                    center={center}
                    zoom={1}
                    onLoad={onLoad}
                    onUnmount={onUnmount}
                >
                    {/* TODO: ADD MARKERS*/}
                    <></>
                </GoogleMap>
            ) : (
                <></>
            )}

            <div className='m-auto p-3'>
                <button>
                    <FaCheck size={25} />
                </button>
            </div>
        </div>
    );
};

export default SidebarMap;
