import React, { Component } from 'react';
import Sidebar from './Components/Sidebar/Sidebar.js';
import logo from './assets/logo-black.png';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <img src={logo} className="App-logo" alt="logo" />
        <Sidebar />
      </div>
    );
  }
}

export default App;
