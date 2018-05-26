import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Galaxy from './pages/galaxy.js'
import Planet from './pages/planet.js'
import Star from './pages/stars.js'
import Nebula from './pages/nebula.js'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">SPACE BOARD</h1>
        </header>
        {/* <Galaxy /> */}
        {/* <Planet /> */}
        {/* <Star /> */}
        <Nebula />
      </div>
    );
  }
}

export default App;
