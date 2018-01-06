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
                Shifted Music Group was the first venture away from the traditional <a href='https://shiftedrecording.com'>
                recording studio</a> business model for Shifted.
                When founders Mike Irish and Patrick Sullivan moved to their second space in 2016,
                they wanted to help clients take their projects further.

                From this notion, Shifted Music Group was created -
                an outfit to assist in the licensing of independent music.
              </p>
              <p className={css(styles.paragraph)}>
                Feel free to browse through the catalog, and listen to the work we have created.
                We would love to place our music with your project. &nbsp;
                 <a href='https://shiftedmusicgroup.com/contact'>Get in touch </a> with us!
              </p>
              <p className={css(styles.paragraph)}>
              </p>
            </div>
          </div>
      );
    }
}

//319306984

export default About;
