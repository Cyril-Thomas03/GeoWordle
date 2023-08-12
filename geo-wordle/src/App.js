import './App.css';
import { useState, useEffect } from 'react';
import BoardLayoutSidebar from './components/BoardLayoutSidebar.jsx';
import BoardLayoutMain from './components/BoardLayoutMain.jsx';
import { LoadScript } from '@react-google-maps/api';

function getRandomInRange(from, to, decimals) {
    return (Math.random() * (to - from) + from).toFixed(decimals) * 1; // .toFixed() returns string, so ' * 1' is a trick to convert to number
}

const randomCoordinate = { lat: getRandomInRange(-85, 85, 8), lng: getRandomInRange(-180, 180, 8) }

function App() {
    return (
        <div className='App flex h-screen justify-center'>
            <div className='w-screen mt-6 flex gap-6 flex-col md:flex-row justify-center '>
                <LoadScript
                    googleMapsApiKey={'AIzaSyBwAlszaTjlaVEZlga0-FMwRPgWFwMLKjc'}
                >
                    <NearestStreetViewPosition initialPosition={randomCoordinate}/>
                </LoadScript>
            </div>
        </div>
    );
}

function NearestStreetViewPosition({ initialPosition }) {
    const [position, setPosition] = useState(initialPosition);
  
    useEffect(() => {
        const streetViewService = new window.google.maps.StreetViewService();
        streetViewService.getPanorama({ location: initialPosition, radius: 50000000, source: window.google.maps.StreetViewSource.OUTDOOR }, (data, status) => {
            if (status === "OK") {
                setPosition(data.location.latLng);
            } else {
                console.error("Error retrieving Street View panorama:", status);
            }
        });
    }, [initialPosition]);
  
    return (
        <>
        <BoardLayoutMain position={position} />
        <BoardLayoutSidebar correct_answer={position} />
        </> 
    );
}

export default App;
