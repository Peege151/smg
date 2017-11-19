import React, { Component } from 'react';

import styles from './styles.js';
import { css } from 'aphrodite';


class Contact extends Component {
    constructor(props) {
      super(props);
      this.state = {
        active: 0
      };
    }

    setActive = (idx) => {
      console.log('Hit', idx)
      this.setState({active: idx})
    }

    render() {
      console.log('')
        return (
          <div className={css(styles.wrapper)}>
            <div className={css(styles.navColorAdjust)}></div>
            <h3> Here Is How to Reach Us. </h3>
            <div> Licensing Requests
              <div> Patrick Sullivan
                { this.state.active !== 1
                ?
                <span
                  onClick={this.setActive.bind(null, 1)}
                  className={css(styles.showEmail)}> Show Email
                </span>
                : ' patrick@shiftedmusicgroup.com' }
              </div>
            </div>
            <div> Inquiries
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
