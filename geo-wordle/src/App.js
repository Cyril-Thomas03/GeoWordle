import './App.css';
import GameMenu from './components/BoardLayoutSidebar.jsx';
import GameMap from './components/BoardLayoutMain.jsx';
import { LoadScript } from '@react-google-maps/api';
function App() {
    return (
        <div className='App flex flex-row h-screen'>
            <div className='m-auto flex gap-6'>
                <LoadScript
                    googleMapsApiKey={'AIzaSyBwAlszaTjlaVEZlga0-FMwRPgWFwMLKjc'}
                >
                    <GameMap />
                    <GameMenu />
                </LoadScript>
            </div>
        </div>
    );
}

export default App;
