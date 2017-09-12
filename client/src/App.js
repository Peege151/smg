import React, { Component } from 'react';
import logo from './assets/logo-black.png';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Shifted Music Group </h2>
        </div>
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="App-intro">
           Coming Soon
        </h1>
      </div>
    );
  }
}

export default App;
