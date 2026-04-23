import { createContext, useState, useContext } from 'react';

const UserContext = createContext();

export function UserProvider({ children }) {
  const [salary, setSalary] = useState(null);        // monthly net salary in ZAR
  const [selectedTrack, setSelectedTrack] = useState(null);

  const value = {
    salary,
    setSalary,
    selectedTrack,
    setSelectedTrack,
  };

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
}

export function useUser() {
  const context = useContext(UserContext);
  if (!context) throw new Error('useUser must be used within UserProvider');
  return context;
}
PromptModal.jsx
jsx
// src/components/PromptModal.jsx
import { useState } from 'react';
import { useUser } from '../context/UserContext';

export default function PromptModal({ onComplete }) {
  const { setSalary, setSelectedTrack } = useUser();
  const [tempSalary, setTempSalary] = useState('');
  const [tempTrack, setTempTrack] = useState('steady-pacer');

  const handleSubmit = (e) => {
    e.preventDefault();
    const salaryNum = parseFloat(tempSalary);
    if (isNaN(salaryNum) || salaryNum <= 0) {
      alert('Please enter a valid monthly salary (e.g., 48747)');
      return;
    }
    setSalary(salaryNum);
    setSelectedTrack(tempTrack);
    onComplete(); // close modal
  };

  return (
    <div style={{
      position: 'fixed', top: 0, left: 0, right: 0, bottom: 0,
      backgroundColor: 'rgba(0,0,0,0.5)', display: 'flex', alignItems: 'center', justifyContent: 'center',
      zIndex: 1000
    }}>
      <div style={{ background: 'white', padding: '2rem', borderRadius: '24px', maxWidth: '500px', width: '90%' }}>
        <h2>Welcome to your Wealth Studio</h2>
        <p>To personalise your Money Snapshot, please tell us:</p>
        <form onSubmit={handleSubmit}>
          <label style={{ display: 'block', marginBottom: '1rem' }}>
            Monthly net salary (after tax, in ZAR):
        <input
            type="number"
            value={tempSalary}
              onChange={(e) => setTempSalary(e.target.value)}
              placeholder="e.g., 48747"
              required
              style={{ width: '100%', padding: '0.5rem', marginTop: '0.25rem' }}
            />
          </label>
          <label style={{ display: 'block', marginBottom: '1.5rem' }}>
            Choose your strategy track:
            <select
              value={tempTrack}
              onChange={(e) => setTempTrack(e.target.value)}
              style={{ width: '100%', padding: '0.5rem', marginTop: '0.25rem' }}
            >
              <option value="steady-pacer">Steady Pacer (balanced)</option>
              <option value="bystander">Bystander (low risk)</option>
              <option value="sprinter">Sprinter (high growth)</option>
              <option value="endurance">401K Endurance (retirement focus)</option>
            </select>
          </label>
          <button type="submit" style={{ background: '#BA8837', color: 'white', border: 'none', padding: '0.75rem 1.5rem', borderRadius: '30px', cursor: 'pointer' }}>
            Start my journey →
          </button>
        </form>
      </div>
    </div>
  );
}


// Updated MoneySnapshot.jsx (with conditional rendering)



//MoneySnapshot.jsx


import { useState } from 'react';
import { useUser } from '../context/UserContext';
import PromptModal from '../components/PromptModal';
import NextButton from '../components/NextButton';

export default function MoneySnapshot() {
  const { salary, selectedTrack } = useUser();
  const [modalOpen, setModalOpen] = useState(!salary); // open if no salary yet

  if (modalOpen) {
    return <PromptModal onComplete={() => setModalOpen(false)} />;
  }

  //Placeholder for now: If salary exists, show the circular graph 
  
  const monthlySavingsGoal = salary * 0.15; // example: save 15% of net salary
  const currentSavings = 25000; // mock – later connect to user input

  return (
    <div className="page">
      <h1>Money Snapshot for you</h1>
      <div style={{ display: 'flex', gap: '2rem', alignItems: 'center', flexWrap: 'wrap' }}>
        {/* Circular graph placeholder */}
        <div style={{
          width: '150px', 
          height: '150px', 
          borderRadius: '50%',
          background: `conic-gradient(#BA8837 0deg ${(currentSavings / (monthlySavingsGoal * 12)) * 360}deg, #ddd ${(currentSavings / (monthlySavingsGoal * 12)) * 360}deg)`,
          display: 'flex', 
          alignItems: 'center', 
          justifyContent: 'center',
          fontWeight: 'bold', 
          fontSize: '1.2rem',
          
        }}>
          {Math.round((currentSavings / (monthlySavingsGoal * 12)) * 100)}%
        </div>
        <div>
          
          <p><strong>Monthly net salary:</strong> R{salary.toLocaleString()}</p>
        <p><strong>Selected track:</strong> {selectedTrack}</p>
        <p><strong>Suggested monthly saving:</strong> R{monthlySavingsGoal.toLocaleString()}</p>
        <p><strong>Current savings:</strong> R{currentSavings.toLocaleString()}</p>
        </div>
      </div>
      <NextButton to="/tracks" label="Explore your Strategy Track →" />
    </div>
  );
}
