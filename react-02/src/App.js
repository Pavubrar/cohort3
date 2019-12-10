import React from 'react';
import logo, { ReactComponent as ReactLogo } from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="Topnav">
        <a class="active" href="#home">Home</a>
        <a href="#news">News</a>
        <a href="#contact">Contact</a>
        <a href="#about">About</a>
      </div>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <ReactLogo className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
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
