import React, { useState } from 'react';
import dice1 from './images/dice1.png';
import dice2 from './images/dice2.png';
import dice3 from './images/dice3.png';
import dice4 from './images/dice4.png';
import dice5 from './images/dice5.png';
import dice6 from './images/dice6.png';

const App = () => {
  const diceImages = [dice1, dice2, dice3, dice4, dice5, dice6];
  const [diceIndices, setDiceIndices] = useState([null, null]);
  const [message, setMessage] = useState('');

  const rollDice = () => {
    const randomDiceIndices = [Math.floor(Math.random() * 6), Math.floor(Math.random() * 6)];
    setDiceIndices(randomDiceIndices);
    setMessage(randomDiceIndices[0] === randomDiceIndices[1] ? 'Kazandınız!' : 'Tekrar deneyin!');
  };

  const renderDice = (index) => (
    <div style={{
      padding: '10px',
      backgroundColor: '#3C3C3C',
      borderRadius: '10px',
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)'
    }}>
      <img src={diceImages[index]} alt={`Zar: ${index + 1}`} style={{ width: '100px', height: '100px', borderRadius: '5px' }} />
    </div>
  );

  return (
    <div style={{
      textAlign: 'center',
      backgroundColor: '#1C1C1C',
      height: '100vh',
      color: 'white',
      fontFamily: 'Arial, sans-serif',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center'
    }}>
      <h1 style={{ fontSize: '3em', marginBottom: '20px' }}>Zar Atma Oyunu</h1>
      <button 
        onClick={rollDice}
        style={{
          padding: '15px 30px',
          fontSize: '18px',
          cursor: 'pointer',
          backgroundColor: '#444',
          border: 'none',
          color: 'white',
          borderRadius: '5px',
          transition: 'background-color 0.3s',
          boxShadow: '0 5px 15px rgba(0, 0, 0, 0.3)',
          marginBottom: '30px'
        }}
        onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#555'}
        onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#444'}
      >
        Zar At!
      </button>
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        marginTop: '20px',
        padding: '20px',
        border: '2px solid #fff',
        borderRadius: '15px',
        backgroundColor: '#2C2C2C',
        boxShadow: '0 10px 20px rgba(0, 0, 0, 0.5)',
        gap: '30px'
      }}>
        {diceIndices[0] !== null && renderDice(diceIndices[0])}
        {diceIndices[1] !== null && renderDice(diceIndices[1])}
      </div>
      <h2 style={{ fontSize: '2em', marginTop: '20px' }}>{message}</h2>
    </div>
  );
};

export default App;
