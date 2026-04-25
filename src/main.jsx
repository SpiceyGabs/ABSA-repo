import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { UserProvider } from './context/UserContext';
import App from './App';
import './index.css';
import './App.css';

createRoot(document.getElementById('root')).render(
  <StrictMode>
     <BrowserRouter>
      <UserProvider>
        <>
        <App />
        <h2>What is going on rn?</h2>
        </>
      </UserProvider>
    </BrowserRouter>
  </StrictMode>,
);


