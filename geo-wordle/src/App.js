import './App.css';
import { useState, useEffect } from 'react';
import BoardLayoutSidebar from './components/BoardLayoutSidebar.jsx';
import BoardLayoutMain from './components/BoardLayoutMain.jsx';
import { LoadScript } from '@react-google-maps/api';
import { fetchRandomLocation } from './api/api'; // Import the backend API functions

function App() {
    const [position, setPosition] = useState({ lat: 0, lng: 0 });
    const [userGuesses, setUserGuesses] = useState([]);

    useEffect(() => {
        const fetchLocation = async () => {
            const location = await fetchRandomLocation();
            setPosition(location);
        };

        fetchLocation();
    }, [setPosition]);

    return (
        <div className='App flex h-screen justify-center'>
            <div className='w-screen mt-6 flex gap-6 flex-col md:flex-row justify-center '>
                <LoadScript
                    googleMapsApiKey={'HIDDEN'}
                >
                    <BoardLayoutMain position={position} />
                    <BoardLayoutSidebar
                        correct_answer={position}
                        userGuesses={userGuesses}
                        setUserGuesses={setUserGuesses}
                    />
                </LoadScript>
            </div>
        </div>
    );
}

export default App;
