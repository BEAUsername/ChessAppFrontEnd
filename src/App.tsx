import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Home from './pages/Home/Home.tsx';
import Play from './pages/Play/Play.tsx';
import Players from './pages/Players/Players.tsx';
import Join from './pages/Join/Join.tsx';
import Login from './pages/Login/Login.tsx';
import Profile from './pages/Profile/Profile.tsx';
import Settings from './pages/Settings/Settings.tsx';

function App() {
    return (
        <>
            <Navbar />
            <main className="nav-content">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/play" element={<Play />} />
                    <Route path="/players" element={<Players />} />
                    <Route path="/join" element={<Join />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/user/:username" element={<Profile />} />
                    <Route path="/settings" element={<Settings />} />
                </Routes>
            </main>
        </>
    );
}

export default App;