import React from 'react';
import { fetchMarkerInformation } from '../api/api';

const SidebarGuesses = ({ userGuesses }) => {
    console.log(userGuesses);

    return (
        <div className='flex flex-col flex-1'>
            <div
                className='scrollable-column-container'
                style={{
                    overflowY: 'auto',
                    maxHeight: '67vh',
                    height: '67vh',
                }}
            >
                <ul className='scrollable-column-content list-decimal text-lg p-8'>
                    {userGuesses.map((guess, index) => (
                        <li key={index} style={{ paddingLeft: '20px' }}>
                            Lat: {guess.lat}
                            <br />
                            Lng: {guess.lng}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default SidebarGuesses;
