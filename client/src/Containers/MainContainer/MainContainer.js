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
        paused: true
      };
    }
    toggleAudio = (song) => {
      console.log('Main Container Toggle');
      console.log('Play Click...')
      let track = document.getElementById('audio-track');
      if (!this.state.playing && !this.state.initiatedPlayer){
        console.log('Initial Play', song)
        this.setState({ song: song, paused: false, playing: song._id, initiatedPlayer: true },  )
      } else if(!this.state.playing && this.state.initiatedPlayer){
        console.log('Not Playing, lets play', song)
        track.play();
        this.setState({ song: song, paused: false, playing: song._id, initiatedPlayer: true },  )
      } else if (this.state.playing === song._id){
        track.pause();
        this.setState( {playing: false, paused: true } )
        console.log('We were playing, click was hit to pause');
      } else if(this.state.playing !== song._id){
        // new song hit from container
        console.log("New Song Hit From Container...")
        track.pause();
        this.setState( {song: song, playing: song._id, paused: false } )
      } else {
        track.play();
        this.setState( { paused: false } )
        // this.props.toggleAudio(this.props.song);

      }    }
    render() {
        console.log('Router Props of MC', this.props)
        return (
          <div className={ css(styles.mainContainerWrapper) }>
            <Route exact path='/' render={(routeProps)=><SearchContainer {...routeProps}{...this.state} toggleAudio={this.toggleAudio}/>}/>
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
