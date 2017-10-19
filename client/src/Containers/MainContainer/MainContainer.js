import React, { Component } from 'react';
import SearchContainer from '../SearchContainer/SearchContainer.js';
import BrowseContainer from '../BrowseContainer/BrowseContainer.js';
import Login from '../../Components/Login/Login.js';
import NewPassword from '../../Components/NewPassword/NewPassword.js';
import PlayerContainer from '../PlayerContainer/PlayerContainer.js';
import styles from './styles.js';
import { css } from 'aphrodite';

import {
  Route
} from 'react-router-dom'

class MainContainer extends Component {
    constructor(props) {
      super(props);
      this.state = {
        playing: false,
        initiatedPlayer: false,
        song: undefined,
      };
    }
    toggleAudio = (song) => {
      console.log('Got em');

      this.setState({ playing: !this.state.playing, initiatedPlayer: true, song: song || this.state.song });
    }
    render() {

        return (
          <div className={ css(styles.mainContainerWrapper) }>
            <Route exact path='/' render={()=><SearchContainer {...this.state} toggleAudio={this.toggleAudio}/>}/>
            <Route path='/browse' component={ BrowseContainer } />
            <Route path='/login' component={ Login } />
            <Route path='/reset' component={ NewPassword } />
            <div className={css(styles.songNote)}>
              <p>If you have any questions, feel free to contact us at any time.  We rep 100% of all tracks here  </p>
            </div>
            <div className={css(styles.footer)}>
              <p> This is the footer </p>
            </div>
            {
              this.state.initiatedPlayer
              ?
                <PlayerContainer {...this.state} toggleAudio={ this.toggleAudio } />
              :
              null
            }
          </div>
      );
    }
}

export default MainContainer;
