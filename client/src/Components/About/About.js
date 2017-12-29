import React, { Component } from 'react';

import styles from './styles.js';
import { css } from 'aphrodite';


class About extends Component {
    constructor(props) {
      super(props);
      this.state = {
        active: 0
      };
    }


    render() {
        return (
          <div className={css(styles.outerWrapper)}>
            <div className={css(styles.wrapper)}>
              <h3 className={css(styles.header)}> Who We Are </h3>
            </div>
            <div className={css(styles.paragraphWrapper)}>
              <p className={css(styles.paragraph)}>
                Shifted Music Group was the first venture away from the traditional recording <a href='https://shiftedrecording.com'>
                studio</a> business model for the Shifted Family.
                When founders Mike and Pat moved to their second space in 2016, they planned for
                an outfit to get music made for clients in the studio out into the real world.
              </p>
              <p className={css(styles.paragraph)}>
                Since then, the SMG team has grown, and will continue to grow in the coming years.
              </p>
            </div>
          </div>
      );
    }
}

export default About;
