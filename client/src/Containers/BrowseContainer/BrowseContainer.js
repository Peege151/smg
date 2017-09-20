import React, { Component } from 'react';
import styles from './styles.js';
import { css } from 'aphrodite';

class BrowseContainer extends Component {
    constructor(props) {
      super(props);
      this.state = {
        active: 0
      };
    }

    render() {
        return (
          <div className={ css(styles.wrapper) }>
              Browse Container
          </div>
      );
    }
}

export default BrowseContainer;
