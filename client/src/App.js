import React, { Component } from 'react';
import Sidebar from './Components/Sidebar/Sidebar.js';
import Searchbar from './Components/Sidebar/Sidebar.js';
import MainContainer from './Containers/MainContainer/MainContainer.js'

import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom'

import './App.css';

class App extends Component {



  render() {
    return (
      <Router>
        <div className="App">
          <Sidebar />
          <MainContainer>

          </MainContainer>
        </div>
      </Router>
    );
  }
}

export default App;
