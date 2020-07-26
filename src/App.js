import React from 'react';
import moneybag from './money.svg';
import { Counter } from './features/counter/Counter';
import './App.css';
import { GameList } from './features/game/GameList';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={moneybag} className="App-logo" alt="logo" />
        <p style={{fontWeight: 'bold'}}>
          Earn money owning noobs
        </p>
        <GameList />
      </header>
    </div>
  );
}

export default App;
