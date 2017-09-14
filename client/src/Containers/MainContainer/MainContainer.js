import React, { Component } from 'react';
import logo from './../../assets/logo-black.png';
import Browse from '../../Components/Browse/Browse.js';
import styles from './styles.js';
import { css } from 'aphrodite';
import Routes from '../../routes.js';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom'

class MainContainer extends Component {
    constructor(props) {
      super(props);
      this.state = {
        active: 0
      };
    }

    render() {
        return (
          <div className={css(styles.wrapper)}>
            <Route path='/browse' component={Browse} />
          </div>
      );
    }
}

export default MainContainer;
