import { Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Home from './pages/Home';
import MoneySnapshot from './pages/MoneySnapshot';
import StrategyTracks from './pages/StrategyTracks';
import SimLab from './pages/SimLab';
import Learn from './pages/Learn';
import BackToTop from './components/BacktoTop';  //fixed

function Test() {
  return (
    <h1>Test 1</h1>
  );
}

function App() {
  return (
    
     <div className="appLayout">
      <h1>ABSA NextGen Wealth Studio</h1>
       <Sidebar />
       <main className="mainContent">
        <Routes>
           <Route path="/" element={<Home />} />
           <Route path="/snapshot" element={<MoneySnapshot />} />
           <Route path="/tracks" element={<StrategyTracks />} />
           <Route path="/simulations" element={<SimLab />} />
           <Route path="/learn" element={<Learn />} />
         </Routes>
        <BackToTop />

      </main>
     </div>
   
  );
}

export default App;

// Internal linking for next and back to top goes here for all the pages (globally)