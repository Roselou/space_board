import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {Link} from 'react-router-dom'
import Galaxy from './pages/galaxy.js'
import Planet from './pages/planet.js'
import Star from './pages/stars.js'
import Nebula from './pages/nebula.js'
import BlackHole from './pages/blackHole.js'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">SPACE_BOARD</h1>
        </header>
        <h1> <Link to='/blackholes' />Black Holes </h1> 
        {/* <Galaxy /> */}
        {/* <Planet /> */}
        {/* <Star /> */}
        {/* <Nebula /> */}
        {/* <BlackHole /> */}
      </div>
    );
  }
}

export default App;
