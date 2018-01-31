import React, { Component } from 'react';
import MainContainer from './Containers/MainContainer/MainContainer.js'

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
        <div className="App">
          <MainContainer></MainContainer>
        </div>
    );
  }
}

export default App;
