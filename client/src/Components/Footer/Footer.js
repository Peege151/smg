import React, { Component } from 'react';
import {
  Link
} from 'react-router-dom'
import styles from './styles.js';
import { css } from 'aphrodite';


class Footer extends Component {
    constructor(props) {
      super(props);
      this.state = {
        active: 0
      };
    }


    render() {
      return (
        <div className={css(styles.wrapper)}>
          <div className={css(styles.linksContainer)}>
            <h3 className={css(styles.title)}> Do Stuff </h3>
            <div> <Link className={css(styles.link)}to='/about'> About Shifted </Link> </div>
            <div> <a className={css(styles.link)} target="_blank" rel="noopener noreferrer" href='https://shiftedrecording.com'> Our Studio </a></div>
            <div> <Link className={css(styles.link)}to='/contact'> Contact </Link> </div>
            <div className={css(styles.link)}> &nbsp; </div>
          </div>
          <div className={css(styles.linksContainer)}>
            <h3 className={css(styles.title)}> Find Us </h3>
            <div> <a className={css(styles.link)} target='_blank' rel="noopener noreferrer" href='http://open.spotify.com/user/jk27ctw1nkj6drdwvkk8ez7e5'> Spotify </a> </div>
            <div> <a className={css(styles.link)} target='_blank' rel="noopener noreferrer" href='https://soundcloud.com/shiftedrecording'> SoundCloud </a> </div>
            <div> <a className={css(styles.link)} target='_blank' rel="noopener noreferrer" href='https://www.instagram.com/shiftedrecording/'> Instagram </a> </div>
            <div> <a className={css(styles.link)} target='_blank' rel="noopener noreferrer" href='https://www.facebook.com/shiftedrecording/'> Facebook </a> </div>
          </div>
        </div>
      );
    }
}
export default Footer;
