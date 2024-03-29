import React, { useState, memo } from 'react';
import { FaCheck } from 'react-icons/fa';
import { IconContext } from 'react-icons';
import { GoogleMap, Marker, Polyline } from '@react-google-maps/api';

const MemoizedMarker = memo(Marker);
const initialCenter = { lat: 15, lng: 17 };

const SidebarMap = ({ correct_answer, userGuesses, setUserGuesses }) => {
    const [markers, setMarkers] = useState([]);
    const [userMessage, setUserMessage] = useState('');
    const [mapClickable, setMapClickable] = useState(true);

    const mapOptions = {
        draggableCursor: 'crosshair',
        gestureHandling: 'greedy',
        streetViewControl: false,
        fullscreenControl: false,
        disableDefaultUI: true,
        clickableIcons: false,
    };
    const polyLineOptions = {
        geodesic: true,
        strokeColor: "#FFFFF",
        strokeOpacity: 0,
        icons: [
            {
                icon: {
                    path: "M 0,0 0,0",
                    strokeOpacity: 1,
                    scale: 3,
                },
                offset: "0",
                repeat: "5px",
            },
        ],
    };

    const onMapClick = (e) => {
        setMarkers([
            {
                lat: e.latLng.lat(),
                lng: e.latLng.lng(),
            },
        ]);
    };

    // https://stackoverflow.com/questions/27928/calculate-distance-between-two-latitude-longitude-points-haversine-formula
    function getDistanceFromLatLonInKm(lat1, lon1, lat2, lon2) {
        var R = 6371; // Radius of the earth in km
        var dLat = (lat2 - lat1) * (Math.PI / 180);
        var dLon = (lon2 - lon1) * (Math.PI / 180);
        var a =
            Math.sin(dLat / 2) * Math.sin(dLat / 2) +
            Math.cos(lat1 * (Math.PI / 180)) *
                Math.cos(lat2 * (Math.PI / 180)) *
                Math.sin(dLon / 2) *
                Math.sin(dLon / 2);
        var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
        var d = R * c; // Distance in km
        return d;
    }

    function getHint(guess, answer) {
        
        const latDiff = answer.lat - guess.lat;
        const lngDiff = answer.lng - guess.lng;
        
        let horizontalDirection = "";
        let verticalDirection = "";
        
        if (latDiff > 0) {
            verticalDirection = "north";
        } else if (latDiff < 0) {
            verticalDirection = "south";
        }
        
        if (lngDiff > 0) {
            horizontalDirection = "east";
        } else if (lngDiff < 0) {
            horizontalDirection = "west";
        }
        
        if (horizontalDirection && verticalDirection) {
            return `You need to go ${verticalDirection}-${horizontalDirection}`;
        } else if (horizontalDirection) {
            return `You need to go ${horizontalDirection}`;
        } else if (verticalDirection) {
            return `You need to go ${verticalDirection}`;
        } 
    }

    const checkAnswer = () => {
        if (markers.length === 0) {
            setUserMessage('Please place a marker on the map.');
            return;
        }

        setUserMessage(''); // clear user message

        let user_answer = markers[0];
        setUserGuesses((prevGuesses) => [...prevGuesses, user_answer]);

        let dist_in_km = getDistanceFromLatLonInKm(
            user_answer.lat,
            user_answer.lng,
            correct_answer.lat,
            correct_answer.lng
        );
        console.log(dist_in_km);

        console.log('user ans: ' + user_answer.lat + ' ' + user_answer.lng);

        console.log(
            'correct ans: ' + correct_answer.lat + ' ' + correct_answer.lng
        );
        
        if (dist_in_km < 200){
            setUserMessage("correct");
            setMarkers([...markers, correct_answer]);
            setMapClickable(false); // Disable map clicking
        } else{
            setUserMessage(getHint(user_answer ,correct_answer));
        }
        
    };

    return (
        <div className='flex flex-col flex-1 '>
            <p className='text-center mt-8 text-lg'>{userMessage}</p>

            <div className='p-3 h-96'>
                <GoogleMap
                    mapContainerStyle={{ width: '100%', height: '100%' }}
                    center={initialCenter}
                    zoom={1}
                    options={mapOptions}
                    onClick={mapClickable ? onMapClick : null}
                >
                    {markers.map((marker, index) => (
                        <MemoizedMarker
                            key={index}
                            position={{ lat: marker.lat, lng: marker.lng }}
                        />
                    ))}
                    <Polyline
                        path={[markers[0], markers[1]]}
                        options={polyLineOptions}
                    />
                </GoogleMap>
            </div>

            <div className='flex-end m-auto p-3 button-icon'>
                <button
                    className='p-2 rounded-lg flex items-center bg-blue-600 hover:bg-blue-700 active:bg-blue-700 focus:outline-none focus:ring focus:ring-blue-800 ease-in duration-100'
                    type='button'
                    onClick={checkAnswer}
                >
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
