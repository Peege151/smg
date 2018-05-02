import React, { Component } from 'react';
import styles from './styles.js';
import { css } from 'aphrodite';

class ImageTop extends Component {
    constructor(props) {
      super(props);
      this.state = { };
    }

    render() {
        return (
          <div className={ css(styles.wrapper) }>
            <div className={css(styles.overlay)}></div>
            <img className={css(styles.image)} src={this.props.image} alt=""/>
          </div>
      );
    }
}

export default ImageTop;
