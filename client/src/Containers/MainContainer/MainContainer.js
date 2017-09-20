import React, { Component } from 'react';
import SearchContainer from '../SearchContainer/SearchContainer.js';
import BrowseContainer from '../BrowseContainer/BrowseContainer.js';
import styles from './styles.js';
import { css } from 'aphrodite';

import {
  Route
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
          <div className={ css(styles.wrapper) }>
            <Route exact path='/' component={ SearchContainer } />
            <Route path='/browse' component={ BrowseContainer } />
          </div>
      );
    }
}

export default MainContainer;
