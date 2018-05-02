import React, { Component } from 'react';

import styles from './styles.js';
import { css } from 'aphrodite';
import image from './../../assets/banner.jpg';
import ImageTop from '../ImageTop/ImageTop';

class Contact extends Component {
    constructor(props) {
      super(props);
      this.state = { };
    }

    setActive = (idx) => {
      this.setState({active: idx})
    }

    render() {
        return (
          <div className={css(styles.outer)}>
            <ImageTop image={image} />
            <h3 className={css(styles.header)}> Here Is How to Reach Us. </h3>
            <div className={css(styles.content)}>
              <h5> Licensing </h5>
              <div>
                Patrick Sullivan
                { this.state.active !== 1
                ?
                <span
                  onClick={this.setActive.bind(null, 1)}
                  className={css(styles.showEmail)}> Show Email
                </span>
                : ' patrick@shiftedmusicgroup.com' }
              </div>
            </div>
            <div className={css(styles.content)}>
              <h5> Inquiries </h5>
              <div> Andrew Travis
                { this.state.active !== 2
                ?
                <span
                  onClick={this.setActive.bind(null, 2)}
                  className={css(styles.showEmail)}> Show Email
                </span>
                : ' andrew@shiftedmusicgroup.com' }
              </div>
            </div>
          </div>
      );
    }
}

export default Contact;
