import React, { Component } from 'react';
import styles from './styles.js';
import { css } from 'aphrodite/no-important';

class VibeDescriptor extends Component {
    constructor(props) {
      super(props);
      this.state = {

      }
    }

    click(){
      this.setState({});
    }

    render() {

      return (
        <div className={css(styles.vibe)}>
          <span className={css(styles.absoluteText)}> Is </span>
          <div className={css(styles.inner)}> + </div>
        </div>
      );
    }
}

export default VibeDescriptor;
