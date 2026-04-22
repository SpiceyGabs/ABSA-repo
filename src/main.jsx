import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import './pages/Home.jsx'
import './pages/Learn.jsx'
import './pages/MoneySnapshot.jsx'
import './pages/StrategyTracks.jsx'
import './pages/Simlab.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
