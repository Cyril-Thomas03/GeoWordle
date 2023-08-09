import './App.css';
import GameMenu from './components/BoardLayoutSidebar.jsx';
import GameMap from './components/BoardLayoutMain.jsx';
import { LoadScript } from '@react-google-maps/api';
function App() {
    return (
        <div className='App flex h-screen'>
            <div className='w-screen flex gap-6 flex-col md:flex-row'>
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
