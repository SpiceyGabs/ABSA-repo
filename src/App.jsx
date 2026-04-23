import { Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import BackToTop from './components/backtoTop.jsx';
import Home from './pages/Home';
import MoneySnapshot from './pages/MoneySnapshot';
import StrategyTracks from './pages/StrategyTracks';
import SimulationLab from './pages/SimulationLab';
import Learn from './pages/Learn';

function App() {
  return (
    <div className="app-layout">
      <Sidebar />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/snapshot" element={<MoneySnapshot />} />
          <Route path="/strategyTracks" element={<StrategyTracks />} />
          <Route path="/simulationLab" element={<SimulationLab />} />
          <Route path="/learn" element={<Learn />} />
        </Routes>
        <BackToTop />
      </main>
    </div>
  );
}

export default App;


// Internal linking for next and back to top goes here for all the pages (globally)