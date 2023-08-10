import './App.css';
import { useState, useEffect } from 'react';
import BoardLayoutSidebar from './components/BoardLayoutSidebar.jsx';
import BoardLayoutMain from './components/BoardLayoutMain.jsx';
import { LoadScript } from '@react-google-maps/api';

function getRandomInRange(from, to, decimals) {
    return (Math.random() * (to - from) + from).toFixed(decimals) * 1; // .toFixed() returns string, so ' * 1' is a trick to convert to number
}

const getLocation = async () => {
    const lat = getRandomInRange(-85, 85, 8);
    const lng = getRandomInRange(-180, 180, 8);

    return new Promise((resolve, reject) => {
        const svService = new window.google.maps.StreetViewService();
        svService.getPanorama(
            { location: { lat, lng }, radius: 50 },
            (data, status) => {
                if (status === 'OK') {
                    resolve({ lat, lng });
                } else {
                    // If Street View is not available, try another location
                    console.warn(
                        'Street View not available at this location. Trying another...'
                    );
                    resolve(getLocation());
                }
            }
        );
    });
};

function App() {
    const [position, setPosition] = useState({ lat: 0, lng: 0 });

    useEffect(() => {
        const fetchLocation = async () => {
            const location = { lat: 37.7749, lng: -122.4194 }; //await getLocation();
            setPosition(location);
        };

        fetchLocation();
    }, [setPosition]);

    return (
        <div className='App flex h-screen justify-center'>
            <div className='w-screen mt-6 flex gap-6 flex-col md:flex-row justify-center '>
                <LoadScript
                    googleMapsApiKey={'AIzaSyBwAlszaTjlaVEZlga0-FMwRPgWFwMLKjc'}
                >
                    <BoardLayoutMain position={position} />
                    <BoardLayoutSidebar correct_answer={position} />
                </LoadScript>
            </div>
        </div>
    );
}

export default App;
