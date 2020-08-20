import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { useSelector, useDispatch } from 'react-redux';
import { ActionCreators } from 'redux-undo';

function App() {
  const counter = useSelector((state) => state.counter.present);
  const dispatch = useDispatch();

  return (
    <div className="App">
      <div>{counter}</div>
      <button
        onClick={() => {
          dispatch({ type: 'INCREMENT' });
        }}
      >
        +1
      </button>
      <button
        onClick={() => {
          dispatch({ type: 'DECREMENT' });
        }}
      >
        -1
      </button>
      <button onClick={() => dispatch(ActionCreators.undo())}>undo</button>
      <button onClick={() => dispatch(ActionCreators.redo())}>redo</button>

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
