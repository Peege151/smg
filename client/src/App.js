import React, { Component } from 'react';
import Sidebar from './Components/Sidebar/Sidebar.js';
import MainContainer from './Containers/MainContainer/MainContainer.js'
import logo from './assets/logo-black.png';

import {
  BrowserRouter as Router,
} from 'react-router-dom'

import './App.css';

class App extends Component {



  render() {
    return (
      <Router>
        <div className="App">
          <img src={logo} className='app-logo' alt="logo" />
          <Sidebar />
          <MainContainer>

          </MainContainer>
        </div>
      </Router>
    );
  }
}

export default App;
