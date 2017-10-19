import React, { Component } from 'react';
import Sidebar from './Components/Sidebar/Sidebar.js';
import MainContainer from './Containers/MainContainer/MainContainer.js'

import {
  BrowserRouter as Router,
} from 'react-router-dom'

import './App.css';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      playing: false,
    };
  }

  render() {
    return (
      <Router>
        <div className="App">
          <Sidebar />
          <MainContainer></MainContainer>
        </div>
      </Router>
    );
  }
}

export default App;
