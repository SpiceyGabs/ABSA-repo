import { Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar.jsx';
import BackToTop from './components/BacktoTop';  //fixed
import Home from './pages/Home';
import MoneySnapshot from './pages/MoneySnapshot';
import StrategyTracks from './pages/StrategyTracks';
import SimulationLab from './pages/SimLab';
import Learn from './pages/Learn';

function App() {
  return (
     <div className="appLayout">
       <Sidebar />
       <main className="mainContent">
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

  return (

     <p>Hello world, this is crazy</p>
   );
}

export default App;


// Internal linking for next and back to top goes here for all the pages (globally)