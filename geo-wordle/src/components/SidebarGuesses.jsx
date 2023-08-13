import React from 'react';
import { fetchMarkerInformation } from '../api/api';

const SidebarGuesses = ({ userGuesses }) => {
    console.log(userGuesses);

    return (
        <div className='flex flex-col flex-1'>
            <ul className='flex-auto list-decimal text-lg p-8 h-96'>
                {userGuesses.map((guess, index) => (
                    <li key={index}>
                        Lat: {guess.lat}, Long: {guess.lng},
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default SidebarGuesses;
