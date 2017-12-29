import React, { Component } from 'react';
import SearchContainer from '../SearchContainer/SearchContainer.js';
import BrowseContainer from '../BrowseContainer/BrowseContainer.js';
import Login from '../../Components/Login/Login.js';
import Contact from '../../Components/Contact/Contact.js'
import NewPassword from '../../Components/NewPassword/NewPassword.js';
import PlayerContainer from '../PlayerContainer/PlayerContainer.js';
import Footer from '../../Components/Footer/Footer.js';
import About from '../../Components/About/About.js';
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

      this.setState({ playing: song._id, initiatedPlayer: true, song: song || this.state.song });
    }
    render() {

        return (
          <div className={ css(styles.mainContainerWrapper) }>
            <Route exact path='/' render={()=><SearchContainer {...this.state} toggleAudio={this.toggleAudio}/>}/>
            <Route path='/browse' component={ BrowseContainer } />
            <Route path='/login' component={ Login } />
            <Route path='/contact' component={ Contact } />
            <Route path='/reset' component={ NewPassword } />
            <Route path='/about' component={ About } />
            <div className={css(styles.footer)}>
              <Footer />
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
