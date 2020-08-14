import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import adSvg from 'fasvgs/solid/ad.svg';

function App() {
  return (
    <div className="App">
      <img src={adSvg} style={{ width: 24, height: 24 }} />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.jsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
