import './App.css';
import GameMenu from './components/BoardLayoutSidebar.jsx';
import GameMap from './components/BoardLayoutMain.jsx';

function App() {
    return (
        <div className='App flex flex-row h-screen'>
            <div className='m-auto flex gap-6'>
                <GameMap />
                <GameMenu />
            </div>
        </div>
    );
}

export default App;
