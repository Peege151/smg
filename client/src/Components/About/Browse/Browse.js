import React, { Component } from 'react';

import styles from './styles.js';
import { css } from 'aphrodite';


class Browse extends Component {
    constructor(props) {
      super(props);
      this.state = {
        active: 0
      };
    }


    render() {
        return (
          <div className={css(styles.wrapper)}>
            <h1> Browse </h1>
          </div>
      );
    }
}

export default Browse;
