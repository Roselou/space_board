import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Galaxy from './pages/galaxy.js'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">SPACE BOARD</h1>
        </header>
        <Galaxy />
      </div>
    );
  }
}

export default App;
