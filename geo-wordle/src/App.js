import './App.css';
import GameMenu from './components/BoardLayoutSidebar.jsx';
import GameMap from './components/BoardLayoutMain.jsx';

function App() {
    return (
        <div className='App m-6 flex flex-row'>
            <div className='m-auto flex gap-6'>
                <GameMap />
                <GameMenu />
            </div>
        </div>
    );
}

export default App;
