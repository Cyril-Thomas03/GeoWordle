import './App.css';
import GameMenu from './components/BoardLayoutSidebar.jsx';
import GameMap from './components/BoardLayoutMain.jsx';

function App() {
    return (
        <div className='App'>
            <div className='m-6 flex'>
                <GameMap />
                <GameMenu />
            </div>
        </div>
    );
}

export default App;
