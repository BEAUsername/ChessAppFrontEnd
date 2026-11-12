import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Home from './pages/Home/Home.tsx';
import Play from './pages/Play/Play.tsx';
import Players from './pages/Players/Players.tsx';
import Join from './pages/Join/Join.tsx';

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
          </Routes>
        </main>
      </>
  );
}

export default App;