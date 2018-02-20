import React, { Component } from 'react';

import styles from './styles.js';
import { css } from 'aphrodite';
import image from './../../assets/banner2.jpg';


class About extends Component {
    constructor(props) {
      super(props);
      this.state = {
        active: 0
      };
    }


    render() {
      console.log('Props', this.props);
        return (
          <div className={css(styles.outerWrapper)}>
            <div className={css(styles.wrapper)}>
              <div className={css(styles.overlay)}></div>
              <img className={css(styles.image)} src={image} />
            </div>
            <div className={css(styles.paragraphWrapper)}>
              <h3 className={css(styles.header)}> Who We Are </h3>
              <p className={css(styles.paragraph)}>
                Shifted Music Group was the first venture away from the traditional <a href='https://shiftedrecording.com'>
                recording studio</a> business model for Shifted.
                When founders Mike Irish and Patrick Sullivan moved to their second space in 2016,
                they wanted to help clients take their projects further.

                From this notion, Shifted Music Group was created -
                an outfit to assist in the licensing of independent music.
              </p>
              <p className={css(styles.paragraph)}>
                In our first six months, we built a custom wesite, organized all of our music,
                met a bunch of amazing music supervisors, and got several placements.  We even hired Chedda,
                the legend.
              </p>
              <p className={css(styles.paragraph)}>
                Feel free to browse through the catalog, and listen to the work we have created.
                We would love to place our music with your project. &nbsp;
                <a href='http://shiftedmusicgroup.com/contact'> Get in touch </a> with us!  If you
                are a song writer and are interested in either exlusive or non-exclusive representation,
                give us a call.
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
